# F2.b image brief — ChatGPT generation guide

The site ships **3 photographs stretched across 75 call sites**. Every slot now
resolves through `src/assets/rv-images.ts`, so replacing the set is a one-file
edit: drop files into `public/images/rv-images/`, point the slots at them, done.

Generate these in ChatGPT. Work top-down — the first 8 shots carry most of the
site, and you can stop there and still transform how it looks.

---

## 1. Read this first — how to keep 20 images looking like one shoot

ChatGPT has **no seed and no negative prompt**. Consistency comes from two
things, and skipping either gives you 20 different vehicles:

1. **Paste the VEHICLE block verbatim into every prompt.** Never paraphrase it.
2. **Generate the hero first. Once you like it, attach it to every later prompt**
   and open with: *"Match the vehicle in the attached photo exactly — same body,
   same proportions, same faceted aluminium body and black glass. Change only
   the setting."*

Two more habits that matter:

- **Ask for a photograph, not a render.** ChatGPT drifts toward glossy CGI. The
  PHOTOGRAPHY block below fights that. If a result still looks like a render,
  reply: *"Too CGI. Make it a real photograph — natural light falloff, real
  atmosphere, slight sensor grain, imperfect surfaces."*
- **Iterate in the same chat.** Don't restart. Say *"same shot, move the camera
  lower"* or *"same shot, overcast instead of golden hour."*

---

## 2. The three blocks to paste

### VEHICLE (verbatim, every single prompt)

> A large all-electric **towed** travel trailer, roughly 9 metres long — a
> trailer, NOT a motorhome, van or truck. It has **no cab, no windshield, no
> driver's seat, no engine and no front wheels** — the front end is a smooth
> faceted nose with a tow hitch at the bottom. Wheels sit tucked under the body
> near the rear.
>
> The body is **angular and faceted** — flat chamfered planes meeting at crisp
> edges, geometric and wedge-like, but with generous corner radii rather than
> knife-sharp corners. Panels are **brushed silver aluminium** with a soft satin
> sheen that picks up the sky. The upper band, the front cap and the rear cap are
> **black smoked glass**, flush with the aluminium and nearly seamless. A long
> **panoramic glass wall** runs down one side. The roof carries a **flush black
> solar array** and a low-profile climate unit. The word **VOLTR** appears once,
> small, in thin widely-spaced capitals on the dark front cap. Vertical L-shaped
> LED tail lights at the rear corners, a slim rear ladder, low ground clearance,
> stabiliser jacks at the corners. No chrome, no decals, no other lettering.

### TRAVEL MODE vs DEPLOYED — the expansion is VERTICAL

This is the single most important thing to get right, and the easiest to get
wrong. The trailer **does not slide out sideways**. Its roof lifts.

**TRAVEL MODE** (use for towing and driving shots):

> In travel mode the trailer is low and road-hugging — a sleek closed wedge,
> roof down, barely taller than the tow vehicle, presenting a minimal
> aerodynamic profile.

**DEPLOYED** (use for every parked/camp shot):

> Parked and deployed: the entire **roof section has lifted vertically**,
> raising the top of the trailer and revealing a continuous band of glass
> running all the way around beneath the raised roof, so the upper half becomes
> a panoramic glazed clerestory. Stabiliser legs are down at the corners. A
> fabric awning cantilevers out over a timber deck with outdoor lounge seating
> and a compact outdoor galley module. Warm interior light glows out through the
> glass band.

### TOW VEHICLE (only for shots that include the truck)

> A matching all-electric crew-cab pickup in the same design family: brushed
> silver body with a black roof and black wheels, angular front end, vertical
> L-shaped LED headlights, **VOLTR** in thin spaced capitals across the grille.
> Short bed, hitched to the trailer.

### INTERIOR (for the two interior shots)

> Inside, warm cream and soft white surfaces with black window frames and black
> fixtures. Windows wrap around the space with white roller blinds, recessed
> downlights in a panelled ceiling, white composite countertops, pale cabinetry
> with slim recessed pulls. Lived-in and modern rather than luxurious — real
> objects on the counter, a plant, fruit, a coffee setup. Natural daylight only.

**Attach your reference photos to every prompt.** You have several now — the
campsite three-quarter, the rear-on forest road, the lakeside aerial with the
truck, the long-lens desert towing shot, the roof-raised desert shot, and the
galley interior. Those beat any paragraph of description.
Lead every prompt with: *"Match the vehicles in the attached photos exactly:
same brushed silver body, same black glass, same proportions, same VOLTR
wordmark. Change only the setting and camera."*

**Why the block is so blunt about "trailer":** a test render from a softer prompt
produced a drivable box van with a windshield, wing mirrors and invented badge
lettering — and no expansion at all. Image models default to "camper van" unless
you rule it out. If a result comes back with a cab, reply: *"This is a motorhome.
I need a towed trailer — remove the cab, windshield and front wheels."*

### PHOTOGRAPHY (verbatim, every single prompt)

> Shot as a still frame from a documentary videographer's footage. Real
> photograph, full-frame camera, natural available light only. Cinematic but
> unstyled — no studio lighting, no artificial glow, no lens flare, no colour
> grading tricks. Muted natural palette. Slight sensor grain. Wide landscape
> format, 3:2.

### AVOID (phrase as instructions, since there is no negative prompt)

> Keep it grounded and real. No purple or teal gradients, no glowing edges, no
> neon, no floating UI graphics, no text, no logos, no watermarks, no oversaturated
> sunset colours. Do not make it look like a video game or a product render.

---

## 3. Priority 1 — the 8 shots that carry the site

Generate these first. Save with the exact filename given.

### 1. `exterior-hero.jpg` — slot `exteriorHero`
Used on: every product hero, the order configurator, technology scale section.
> [VEHICLE] [PHOTOGRAPHY] The trailer is parked on a high desert plateau at
> golden hour, mountains far in the background. Three-quarter front view from a
> slightly low camera position, 50mm. Long warm shadows across the ground.
> Nobody in frame. [AVOID]

### 2. `interior-lounge.jpg` — slot `interiorLounge`
Used on: order configurator interior view, home, f2b, nav menu.
> [VEHICLE] [INTERIOR] [PHOTOGRAPHY] The main living space looking toward the
> lounge end, wraparound windows on both sides framing desert light, built-in
> bench seating in grey upholstery. Shot wide at 24mm from the far corner,
> daylight only. [AVOID]

### 3. `exterior-expanded.jpg` — slot `exteriorExpanded`
Used on: the full-bleed "Make it yours" section on three pages. **This is the
shot that has to sell the expandable idea.**
> [VEHICLE] [DEPLOYED] [PHOTOGRAPHY] The trailer parked and fully
> deployed on a granite bench above an alpine lake, the expansion and extended
> awning clearly readable in the silhouette. Elevated three-quarter view from
> slightly above, 35mm, late golden hour. [AVOID]

### 4. `exterior-campsite.jpg` — slot `exteriorCampsite`
Used on: feature cards, nav menu tall card, fieldnotes.
> [VEHICLE] [DEPLOYED] [PHOTOGRAPHY] The trailer set up at a remote forest
> clearing at dusk, warm interior light spilling through the glass onto the deck.
> No people in frame. Wide shot, 35mm, tripod-steady, blue hour sky still holding
> some light. [AVOID]

### 5. `exterior-towing.jpg` — slot `exteriorTowing`
Used on: newsletter section.
> [VEHICLE] [TRAVEL MODE] [TOW VEHICLE] [PHOTOGRAPHY] The trailer under tow
> behind the pickup on a dirt road crossing high desert country. Shot from far
> away with a long lens across the valley, so the rig sits small in a big
> landscape of scrub, juniper and red rock benches. Hard midday sun. [AVOID]

### 6. `exterior-aero.jpg` — slot `exteriorAero`
Used on: technology hero, f2b design card.
> [VEHICLE] [PHOTOGRAPHY] Tight three-quarter detail of the trailer's lower
> body and wheel arch, emphasising the aerodynamic underbody and matte finish.
> Low camera near ground level, 85mm, shallow depth of field, soft overcast
> light. [AVOID]

### 7. `system-solar.jpg` — slot `systemSolar`
Used on: solar feature cards, energy flow, nav menu.
> [VEHICLE] [PHOTOGRAPHY] Elevated drone view looking down on the trailer's roof
> in full sun, showing the complete solar array as a clean geometric pattern of
> panels. Parked in open high-country terrain, hard midday light, strong shadow
> of the trailer on the ground. [AVOID]

### 8. `interior-galley.jpg` — slot `interiorGalley`
Used on: f2b specs, editorial cards.
> [VEHICLE] [INTERIOR] [PHOTOGRAPHY] The compact galley in use: a person in a
> beanie and knit sweater making pour-over coffee at the counter, induction hob
> and sink beside them, low afternoon sun raking through the side windows.
> Candid and unposed, 35mm, eye level. [AVOID]

---

## 4. Priority 2 — the remaining 11

Same three blocks, same rules.

| Filename / slot | Shot |
|---|---|
| `interior-sleeping.jpg` `interiorSleeping` | Sleeping area, low platform bed, linen bedding, skylight directly above, soft early morning light, 28mm |
| `system-battery.jpg` `systemBattery` | Clean technical detail of the underfloor high-voltage battery module, matte housing, neutral even light, 50mm |
| `system-drivetrain.jpg` `systemDrivetrain` | Close detail of the smart hitch coupling between truck and trailer, mechanical precision, shallow depth, overcast light |
| `system-power.jpg` `systemPower` | Exterior power outlets in use at a campsite, cable running to equipment on the ground, warm evening light |
| `system-charging.jpg` `systemCharging` | Trailer connected to a DC fast charger at a modern charging plaza, blue hour, wet tarmac reflections |
| `system-camera.jpg` `systemCamera` | Rear-camera perspective reversing into a forest campsite, slightly wide and low, late afternoon |
| `system-connectivity.jpg` `systemConnectivity` | Roof-mounted satellite antenna against a clear star-filled night sky over a remote camp, long exposure |
| `system-camp-setup.jpg` `systemCampSetup` | The trailer levelling itself on powered stabilisers on arrival, one side slightly raised, late afternoon light |
| `editorial-facility.jpg` `editorialFacility` | Interior of a clean modern assembly facility, trailer shells on the line, tall windows, industrial daylight |
| `editorial-team.jpg` `editorialTeam` | Candid group of engineers and designers beside a finished trailer outside the facility, natural light, unposed |
| `editorial-owner-story.jpg` `editorialOwnerStory` | A couple standing outside their trailer at a scenic overlook, seen from behind, unposed, morning light |

---

## 5. Portrait variants — do not skip these

Four containers on the site are **tall portrait crops**. A landscape image there
gets cut to a narrow vertical strip and looks broken.

Regenerate these three as vertical, adding to the prompt:
*"Vertical portrait format, 9:16, composed for a tall narrow crop."*

- `exterior-campsite-portrait.jpg` — nav menu tall card, fieldnotes carousel
- `interior-lounge-portrait.jpg` — fieldnotes carousel
- `system-solar-portrait.jpg` — fieldnotes carousel

---

## 6. Export settings

- **JPEG, quality 80.** The three current PNGs total 9.7MB, which is heavy and
  slows every page. JPEG or WebP will cut that by roughly 5-10x.
- **Landscape shots:** 2400px on the long edge is plenty. Hero can go 3000px.
- **Portrait variants:** 1600px wide minimum.
- Name files exactly as listed above.

---

## 7. Handing them back

Drop the files in `public/images/rv-images/` and tell me they're there. I'll
point each slot in `src/assets/rv-images.ts` at its file, add the portrait
variants where the tall crops are used, rebuild, and check every page for broken
or badly-cropped images.

You do not need to touch any component — that is the whole point of the manifest.
