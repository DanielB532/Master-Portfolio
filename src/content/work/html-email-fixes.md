---
title: Fixing broken HTML emails with AI
order: 2
client: Hyve Group · Groceryshop 2026
period: Sep 2026
tags: [HTML troubleshooting, Email QA]
skillsShown: [HTML email QA, AI-assisted debugging, Responsive email, Attention to detail]
summary: Two sponsor emails for Groceryshop 2026 had HTML that broke the layout. I used AI to find and fix the code myself, then caught a copy error before send.
headlineStat: { value: "3", label: fixes }
facts:
  - { label: Emails, value: "Sponsor emails for Groceryshop 2026, including DemandTec and Instacart" }
  - { label: Problem, value: "Custom HTML that broke the layout on mobile and spilled off the page on desktop" }
  - { label: My role, value: "QA, debugging the code with AI, fixing it and re-testing" }
phasesTitle: The fixes
phasesCaption: Found in QA, fixed before send
phases:
  - job: Mobile layout
    label: DemandTec email
    points:
      - The custom HTML block didn't render properly on phones.
      - I put the code through AI to find what was breaking the layout, then applied the fix.
      - Re-tested in preview until it displayed properly on mobile.
  - job: Overflow
    label: DemandTec email
    points:
      - The HTML pushed past the right-hand edge of the email template, as the before shot shows.
      - I used AI to find the code causing it, fixed it and checked the layout again.
      - The finished email sits cleanly inside the template, as the after shot shows.
  - job: Copy error
    label: Instacart email
    points:
      - Proofreading caught "newar Border Grill" in the event details.
      - Corrected it to "near Border Grill" before it went out.
      - A small fix, but a typo in a sponsor's email reflects on the event as well as the sponsor.
galleryTitle: Before and after
galleryCaption: Two emails, three fixes
galleryCols: 2
gallery:
  - { image: /work/html-fixes/before-overflow.png, caption: "Before: the custom HTML block spilling past the email's right-hand edge", alt: "Email editor preview where a DemandTec HTML block extends beyond the right edge of the email template" }
  - { image: /work/html-fixes/after-demandtec-thumb.jpg, full: /work/html-fixes/after-demandtec.jpg, caption: "After: the fixed DemandTec email, sitting inside the template", alt: "The corrected DemandTec Groceryshop 2026 email rendering properly within the template" }
  - { image: /work/html-fixes/before-typo.png, caption: "Before: \"newar Border Grill\"", alt: "Instacart email paragraph containing the typo 'newar Border Grill'" }
  - { image: /work/html-fixes/after-typo.png, caption: "After: \"near Border Grill\"", alt: "Instacart email paragraph corrected to 'near Border Grill'" }
next:
  - Turn the fixes into a short checklist of the HTML patterns that break most often, so they're caught at the first build rather than in QA.
  - Add a mobile and desktop preview check to the briefing and QA assistant, so broken custom HTML is flagged automatically.
---

## The challenge

Sponsors at Groceryshop 2026 supplied their own custom HTML for the emails we sent on their behalf. Two of them broke: one didn't render properly on phones, and one spilled off the right-hand side of the page. Both had to be fixed before send, without waiting on a developer.

## What I did

I took the code into AI, used it to work out what was breaking each layout, applied the fixes myself and re-tested until both emails displayed properly. While checking the second email, I also caught and corrected a spelling mistake in the event details.

It's a good example of how I use AI day to day: not to replace the checking, but to fix problems quickly that would otherwise sit in a queue.
