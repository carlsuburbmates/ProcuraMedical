import { Ruler, ShieldAlert, Clock, RefreshCw, LucideIcon } from "lucide-react";

export interface Guide {
    id: string;
    title: string;
    summary: string;
    image: string;
    sections: {
        what_to_confirm: string[];
        common_mistakes: string[];
    };
}

export const GUIDES_DB: Record<string, Guide> = {
    "fit-and-clearance": {
        id: "fit-and-clearance",
        title: "Fit & Clearance",
        summary: "Measurements that prevent the wrong order.",
        image: "/images/guidance/fit-clearance.jpg",
        sections: {
            what_to_confirm: [
                "Doorway width at the narrowest point (don’t assume standard doors).",
                "Turning space where the device must rotate (bathroom entries are the common failure point).",
                "Overall width of the equipment in-use, not just “frame width”.",
                "Seat/arm/support dimensions that affect transfers (match to the user environment, not preferences).",
                "Height ranges (seat height, handle height, forearm support height) and whether tools are required.",
                "Clearance for brakes/footrests/castors during turns (tilt/position changes can widen the effective footprint)."
            ],
            common_mistakes: [
                "Measuring the space once and ignoring thresholds/door hardware.",
                "Using brochure dimensions instead of “in-use” clearance.",
                "Forgetting turn radius (the item fits through the door but can’t maneuver inside).",
                "Assuming adjustability solves fit (some adjustments reduce stability or increase footprint)."
            ]
        }
    },
    "safety-and-load": {
        id: "safety-and-load",
        title: "Safety & Load",
        summary: "Load ratings, stability, braking, surfaces.",
        image: "/images/guidance/safety-load.jpg",
        sections: {
            what_to_confirm: [
                "Safe Working Load (SWL) exceeds the real user load with margin (include bags, accessories, and dynamic loading).",
                "Stability factors: wheelbase/anti-tip features, and whether stability changes when tilted/reclined.",
                "Brake effectiveness: parking brakes hold on slight slopes; user can operate brakes reliably.",
                "Surface compatibility: wet-area flooring, thresholds, outdoor paving (if relevant).",
                "Fasteners/locks: folding locks, height pins, tilt locks fully engage and are easy to verify.",
                "Fatigue points: high-stress joints/frames (ask supplier about fatigue testing / duty rating)."
            ],
            common_mistakes: [
                "Treating SWL as a “nice to have”.",
                "Ignoring braking performance (especially on ramps/thresholds).",
                "Buying for indoor use then using outdoors (or vice versa).",
                "Assuming “it feels stable” without testing the exact environment."
            ]
        }
    },
    "daily-use": {
        id: "daily-use",
        title: "Daily Use",
        summary: "Cleaning, access, routine handling, setup.",
        image: "/images/guidance/daily-use.jpg",
        sections: {
            what_to_confirm: [
                "Cleaning method is realistic for daily routine (chemicals allowed, wipe-down vs disassembly).",
                "Water exposure limits for wet-area use (what can get wet, what must stay dry).",
                "Transfer workflow: where hands/forearms go, where carers stand, and whether brakes are reachable at the right moments.",
                "Adjustments you’ll actually use weekly (height, tilt, supports): tool-free vs tool-required.",
                "Consumables and spares: tyres/castors/brake parts availability and lead time.",
                "Storage: foldability, weight to lift, and whether it fits where it must live."
            ],
            common_mistakes: [
                "Buying something “spec perfect” that is painful to clean or move daily.",
                "Ignoring spare parts availability until something fails.",
                "Underestimating setup friction (tools, pins, repeated re-adjustment).",
                "Assuming a carer workflow that doesn’t match the actual home."
            ]
        }
    },
    "delivery-and-setup": {
        id: "delivery-and-setup",
        title: "Delivery & Setup",
        summary: "Lead time, assembly, space, handoff.",
        image: "/images/guidance/delivery-setup.jpg",
        sections: {
            what_to_confirm: [
                "Lead time range is stated (and whether it’s in stock vs made-to-order).",
                "Delivered assembled vs boxed (and if assembly requires specialist tools).",
                "Packaging dimensions/weight (can it be received at the delivery location?).",
                "Two-person delivery requirement (and whether stairs are excluded).",
                "Handover: who checks fit on arrival, and what to do if it’s not right.",
                "Warranty duration and what counts as DOA vs wear-and-tear."
            ],
            common_mistakes: [
                "Assuming “standard delivery” includes stairs/inside placement.",
                "Accepting vague lead times (causes plan-manager and expectation failures).",
                "Not clarifying returns responsibility before ordering.",
                "Discovering after arrival that assembly is non-trivial."
            ]
        }
    }
};
