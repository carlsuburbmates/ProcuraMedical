import { test, expect } from '@playwright/test';

// MOCK DATA for verification
const SAMPLE_PRODUCT_SLUG = 'shower-commode';
const MOBILITY_SYSTEM_SLUG = 'mobility';

test.describe('SSOT Compliance Audit', () => {

    // --- 1. GLOBAL GOVERNANCE CHECK ---
    test('1.0 Global Governance: Forbidden Terms & patterns', async ({ page }) => {
        await page.goto('/');

        // Check for forbidden text anywhere in body logic (approximate)
        const bodyText = await page.locator('body').innerText();
        expect(bodyText).not.toContain('Add to cart');
        expect(bodyText).not.toContain('Shopping Cart');
        expect(bodyText).not.toContain('Checkout now');
        expect(bodyText).not.toContain('Sale');
        expect(bodyText).not.toContain('Discount');

        // Check that we don't have a cart icon
        await expect(page.locator('lucide-shopping-cart')).not.toBeVisible();
    });

    // --- 2. ROUTE MAP VERIFICATION ---
    const routes = [
        '/',
        '/systems',
        '/systems/hygiene',
        '/systems/mobility',
        '/systems/rehab',
        `/p/${SAMPLE_PRODUCT_SLUG}`,
        `/buy/${SAMPLE_PRODUCT_SLUG}`,
        '/how-it-works',
        '/faq',
        '/about',
        '/contact',
        '/guidance',
        '/search',
        '/shipping',
        '/returns',
        '/privacy',
        '/terms'
    ];

    for (const route of routes) {
        test(`2.0 Route Map: ${route} loads successfully`, async ({ page }) => {
            const response = await page.goto(route);
            expect(response?.status()).toBe(200);
        });
    }

    // --- 3. HEADER & NAVIGATION ---
    test('3.0 Header: Labels and Structure', async ({ page }) => {
        await page.goto('/');

        // Check main nav links
        await expect(page.locator('nav').getByText('Systems')).toBeVisible();
        await expect(page.locator('nav').getByText('Guidance')).toBeVisible();
        await expect(page.locator('nav').getByText('How it works')).toBeVisible();
        await expect(page.locator('nav').getByText('Support')).toBeVisible();

        // Search icon presence (button with search icon)
        // Targeting the button inside the header that contains the lucide-search svg
        await expect(page.locator('header button .lucide-search')).toBeVisible();
    });

    // --- 4. HOMEPAGE VERIFICATION ---
    test('4.0 Homepage: Hero Copy & CTAs', async ({ page }) => {
        await page.goto('/');

        const hero = page.locator('section').first();

        // Hero - scoping to the first section to avoid strict mode errors with other similar links/text
        await expect(hero.getByRole('heading', { level: 1 })).toHaveText('Advanced Care Infrastructure');
        await expect(hero.getByText('Procura Medical')).toBeVisible(); // Eyebrow or Logo

        // CTAs
        await expect(hero.getByRole('link', { name: 'Explore systems' }).or(hero.getByRole('button', { name: 'Explore systems' }))).toBeVisible();
        await expect(hero.getByRole('link', { name: 'How it works' }).or(hero.getByRole('button', { name: 'How it works' }))).toBeVisible();
    });

    test('4.1 Homepage: Procurement Process (4 Steps)', async ({ page }) => {
        await page.goto('/');

        // Expect 4 circular steps or numbered items
        // Locating by the titles verified in remediation
        await expect(page.getByText('Select Product')).toBeVisible();
        await expect(page.getByText('Confirm Fit')).toBeVisible();
        await expect(page.getByText('Choose Funding')).toBeVisible();
        await expect(page.getByText('Track Status')).toBeVisible();
    });

    test('4.2 Homepage: Featured Products CTAs', async ({ page }) => {
        await page.goto('/');

        // Finding the featured section by heading
        const featuredSection = page.locator('section').filter({ hasText: 'Featured products' });

        // Check for "View details" text - ensure we wait for it
        await expect(featuredSection.getByText('View details').first()).toBeVisible();
    });

    // --- 5. SYSTEM PAGE VERIFICATION ---
    test('5.0 System Page: Mobility Product Count', async ({ page }) => {
        await page.goto('/systems/mobility');

        // Wait for grid
        await expect(page.locator('h1').filter({ hasText: 'Mobility' })).toBeVisible();

        // Count products. Assuming they are articles or links within a grid.
        // Based on code: CuratedProductGrid renders links.
        // We expect 3 items now (Walker, Wheelchair, Transfer Board).
        // Use a specific selector for the product card links
        // The previous run failed on strict mode for heading, checking count logic here.
        const productCards = page.locator('main a[href^="/p/"]');
        await expect(productCards).toHaveCount(3);
    });

    // --- 9. GUIDANCE HUB ---
    test('9.0 Guidance Hub: Decision Framework Pillars work', async ({ page }) => {
        await page.goto('/guidance');

        // Click the card for "Daily Workflow"
        await page.getByText('Daily Workflow').click();

        // Should navigate to slug
        await expect(page).toHaveURL(/.*\/guidance\/daily-workflow/);

        // Should verify content loads (not 404)
        await expect(page.getByRole('heading', { level: 1 })).toHaveText('Daily Workflow');

        // Verify key constraint sections are present (SSOT v1.1)
        await expect(page.getByText('Who this applies to')).toBeVisible();
        await expect(page.getByText('Confirm before proceeding')).toBeVisible();
        await expect(page.getByText('Specs that matter')).toBeVisible();
    });

    // --- 7. PURCHASE FLOW ---
    test('7.0 Purchase Flow: Plan Managed & NDIA Blocking', async ({ page }) => {
        // Start at a product page
        await page.goto(`/p/${SAMPLE_PRODUCT_SLUG}`);

        // Click Purchase
        await page.getByRole('link', { name: 'Proceed to Purchase' }).click();

        // Step 1: Delivery
        await expect(page.getByRole('heading', { name: 'Delivery Details' })).toBeVisible();
        await page.fill('input[name="fullName"]', 'Audit User');
        await page.fill('input[name="email"]', 'audit@test.com');
        await page.fill('input[name="phone"]', '0400000000');
        await page.fill('input[name="address"]', '123 Audit Ln');
        await page.fill('input[name="city"]', 'Audit City');
        await page.locator('select[name="state"]').selectOption('VIC');
        await page.fill('input[name="postcode"]', '3000');
        await page.getByRole('button', { name: 'Continue' }).click();

        // Step 2: Funding
        await expect(page.getByRole('heading', { name: 'How will this order be funded?' })).toBeVisible();

        // VERIFY STOP-THE-LINE: NDIA Managed must be disabled/blocked
        // The "NDIA Managed" option is rendered as a div with "Not supported" text (visual check)
        const ndiaBlock = page.getByText('NDIA Managed (Agency)');
        await expect(ndiaBlock).toBeVisible();
        await expect(page.getByText('Not supported on this platform')).toBeVisible();

        // It is not a button, so we can't really "click" it in the same semantic way as others.
        // We verify the valid option is clickable.

        // Click Plan Managed
        // The button contains "Plan Managed NDIS" text
        await page.getByRole('button', { name: 'Plan Managed NDIS' }).click();

        // Step 3: Plan Details
        await expect(page.getByRole('heading', { name: 'Invoice Details' })).toBeVisible();
        await page.fill('input[name="participantName"]', 'Participant A');
        await page.fill('input[name="ndisNumber"]', '430123456');
        await page.fill('input[name="planManagerName"]', 'My Plan Manager');
        await page.fill('input[name="planManagerEmail"]', 'pm@audit.com');

        // Submit
        await page.getByRole('button', { name: 'Generate Invoice & Order' }).click();

        // Step 4: Success / Order Status
        await expect(page).toHaveURL(/.*\/order\/.*/);
        // For Plan Managed, status is "Order Pending Payment"
        await expect(page.getByRole('heading', { name: 'Order Pending Payment' })).toBeVisible();
        await expect(page.getByText('Order received. Invoice #INV-2024-001 has been emailed to My Plan Manager.')).toBeVisible();
    });


});


// --- 8. HUMAN-LEVEL UX & INTERACTIONS ---
test('8.0 UX: Systems Dropdown (Desktop Hover)', async ({ page }) => {
    await page.goto('/');

    // Hover over 'Systems' to trigger dropdown
    const systemsTrigger = page.locator('nav').getByText('Systems');
    await systemsTrigger.hover();

    // Check availability of submenu items INSIDE the header nav
    // We scope to 'header nav' to avoid finding links in the footer or body
    const nav = page.locator('header nav');
    await expect(nav.getByRole('link', { name: 'Hygiene' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Mobility' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Rehab' })).toBeVisible();
});

test('8.1 UX: Mobile Navigation (Responsive)', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Verify Desktop nav is hidden
    await expect(page.locator('nav').getByText('Systems')).not.toBeVisible();

    // Open Mobile Menu
    await page.getByRole('button').filter({ has: page.locator('.lucide-menu') }).click();

    // Verify Mobile Menu Links appear
    // Scope to the mobile menu overlay (z-40)
    const mobileMenu = page.locator('.fixed.z-40');
    await expect(mobileMenu.getByRole('link', { name: 'Hygiene' })).toBeVisible();
    await expect(mobileMenu.getByRole('link', { name: 'Support' })).toBeVisible();

    // Close Menu
    await page.getByRole('button').filter({ has: page.locator('.lucide-x') }).click();
    await expect(mobileMenu).not.toBeVisible();
});

test('8.2 UX: Form Validation (Human Error Handling)', async ({ page }) => {
    // Go directly to buy flow (skipping PDP "Proceed" click which is just a link)
    await page.goto(`/buy/${SAMPLE_PRODUCT_SLUG}`);

    // Attempt to submit empty form
    // Button text is "Continue to Funding"
    await page.getByRole('button', { name: 'Continue to Funding' }).click();

    // Expect Validation Errors
    await expect(page.getByText('Full Name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Address is required')).toBeVisible();
});

test('8.3 UX: Decision Framework Images & Links', async ({ page }) => {
    await page.goto('/');

    // Verify Decision Framework Heading
    await expect(page.getByRole('heading', { name: 'Decision Framework' })).toBeVisible();

    // Verify Pillars (Titles from SSOT)
    await expect(page.getByText('Fit & Clearance')).toBeVisible();
    await expect(page.getByText('Safety & Load')).toBeVisible();
    await expect(page.getByText('Daily Workflow')).toBeVisible();
    await expect(page.getByText('Future Proofing')).toBeVisible();

    // Click first pillar to verify link
    await page.getByRole('link', { name: 'Fit & Clearance' }).click();
    await expect(page).toHaveURL(/.*\/guidance\/fit-clearance/);
    await expect(page.getByRole('heading', { name: 'Fit & Clearance' })).toBeVisible();
});
