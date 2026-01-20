import { test, expect } from '@playwright/test';

test.describe('Procura Medical E2E', () => {
  
  test('Home Page loads and displays key sections', async ({ page }) => {
    await page.goto('/');
    
    // Check Title
    await expect(page).toHaveTitle(/Procura Medical/);
    
    // Check Hero
    // Scope to the first heading which should be the Hero h1
    await expect(page.locator('h1').filter({ hasText: 'Procura Medical' })).toBeVisible();
    await expect(page.locator('section').first().getByText('Advanced Care Infrastructure')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Start Procurement' })).toBeVisible();
    
    // Check Systems Overview
    // This uses h2
    await expect(page.locator('h2').filter({ hasText: 'Procura Medical' })).toBeVisible();
    
    // Check Wellness Guidance / Decision Framework
    await expect(page.getByRole('heading', { name: 'Decision Framework' })).toBeVisible();
    
    // Check Featured Products
    await expect(page.getByRole('heading', { name: 'Featured Systems' })).toBeVisible();
    
    // Check Procurement Process
    await expect(page.getByRole('heading', { name: 'Procurement Simplified.' })).toBeVisible();
  });

  test('Systems Navigation works', async ({ page }) => {
    await page.goto('/systems');
    
    await expect(page.getByRole('heading', { name: 'Systems, not shelves.' })).toBeVisible();
    
    // Check for cards
    // Use specific headings inside the main content to avoid matching nav links
    await expect(page.locator('main').getByRole('link', { name: 'Mobility', exact: false })).toBeVisible();
    await expect(page.locator('main').getByRole('link', { name: 'Hygiene Essentials', exact: false })).toBeVisible();
    await expect(page.locator('main').getByRole('link', { name: 'Rehab Tech', exact: false })).toBeVisible();
    
    // Click into Hygiene
    await page.locator('main').getByRole('link', { name: 'Hygiene Essentials', exact: false }).first().click();

    await expect(page).toHaveURL(/.*\/systems\/hygiene/);
    await expect(page.getByRole('heading', { name: 'Hygiene Essentials' })).toBeVisible();
  });

  test('Product Detail Page displays critical info', async ({ page }) => {
    // Navigate to a specific product
    await page.goto('/p/tilt-in-space-shower-commode');
    
    // Header Info
    await expect(page.getByRole('heading', { name: 'Tilt-in-Space Shower Commode' })).toBeVisible();
    // Check for Fit Guardrails (Suitability Check)
    await expect(page.getByText('Suitability Check')).toBeVisible();
    await expect(page.getByText('User weight exceeds 150kg SWL')).toBeVisible();
    
    // Check Purchase Module
    await expect(page.getByText('Proceed to Purchase')).toBeVisible();
    await expect(page.getByText('GST Free')).toBeVisible();
  });

  test('Buy Flow (Plan Managed) works', async ({ page }) => {
    await page.goto('/p/tilt-in-space-shower-commode');
    await page.getByRole('link', { name: 'Proceed to Purchase' }).click();
    
    // Step 1: Delivery
    await expect(page.getByRole('heading', { name: 'Delivery Details' })).toBeVisible();
    await page.fill('input[name="fullName"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="phone"]', '0400000000');
    await page.fill('input[name="address"]', '123 Test St');
    await page.fill('input[name="state"]', 'NSW');
    await page.fill('input[name="postcode"]', '2000');
    await page.getByRole('button', { name: 'Continue' }).click();
    
    // Step 2: Funding (Hard Gate)
    await expect(page.getByRole('heading', { name: 'How are you paying?' })).toBeVisible();
    await page.getByRole('button', { name: 'Plan Managed (NDIS)' }).click();
    
    // Step 3: Plan Details
    await expect(page.getByRole('heading', { name: 'Plan Details' })).toBeVisible();
    await page.fill('input[name="participantName"]', 'Participant Name');
    await page.fill('input[name="ndisNumber"]', '430123456');
    await page.fill('input[name="planManagerEmail"]', 'pm@example.com');
    
    // Submit
    await page.getByRole('button', { name: 'Generate Tax Invoice' }).click();
    
    // Success / Order Page
    await expect(page).toHaveURL(/.*\/order\/.*/, { timeout: 10000 });
    await expect(page.getByText('Order Confirmed')).toBeVisible();
    await expect(page.getByText('Next Steps: Plan Managed Payment')).toBeVisible();
  });

  test('Guidance Hub and Article loads', async ({ page }) => {
    await page.goto('/guidance');
    await expect(page.getByRole('heading', { name: 'Guidance for informed choices.' })).toBeVisible();
    
    // Click a guide
    await page.getByRole('link', { name: 'Read Guide' }).first().click();
    await expect(page.getByText('Who this is for:')).toBeVisible();
    await expect(page.getByText('Decision Factors')).toBeVisible();
  });

  test('Policies load correctly', async ({ page }) => {
    await page.goto('/shipping');
    await expect(page.getByRole('heading', { name: 'Shipping Policy' })).toBeVisible();
    
    await page.goto('/returns');
    await expect(page.getByRole('heading', { name: 'Returns, Faults, and Warranties' })).toBeVisible();
  });

});
