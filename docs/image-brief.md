# F2.b image brief

The site currently ships **3 photographs stretched across 75 call sites**. Every
slot now resolves through `src/assets/rv-images.ts`, so replacing the set means
editing that one file — drop new files into `public/images/rv-images/` and point
the slots at them.

## Why these are generated, not stock

Two constraints have to hold at once: the vehicle must read as a modern,
AI/robotic expandable RV, and we must own or be licensed for the pixels.

Photographic stock cannot do both. Openverse (commercial-license filter) returns
exactly one result for "futuristic camper trailer" — a retro glamping trailer.
"Concept car" returns Volkswagen and Toyota press photos. The reason is simple:
vehicles like this barely exist as physical objects, so they exist as renders
owned by the companies designing them. Lifting a manufacturer's renders means
publishing someone else's patented product as our own.

Generating our own renders satisfies both constraints.

## House style

Apply to every prompt so the set reads as one shoot:

- Matte graphite and warm off-white body, thin amber accent line, no chrome
- Aerodynamic monolithic shell, flush glazing, hidden seams
- Natural light — golden hour or overcast; never studio flash or neon rim light
- Photographic realism: full-frame, 35mm or 50mm, shallow-to-medium depth
- Muted natural palette. **No purple gradients, no glow effects, no lens flare**
- 3:2 landscape unless noted. Minimum 2400px on the long edge

## Shot list

Slot names match `rvImages.*` keys in `src/assets/rv-images.ts`.

| Slot | Shot | Prompt seed |
|---|---|---|
| `exteriorHero` | Full profile, golden hour | Aerodynamic electric travel trailer parked on a high desert plateau at golden hour, matte graphite shell, amber accent line, three-quarter front view, photographic, 50mm |
| `exteriorTowing` | Under tow, highway | Same trailer towed by a modern electric pickup on an open mountain highway, motion in the background, overcast light, side-on tracking shot |
| `exteriorCampsite` | Parked at camp | Trailer set up at a forest clearing campsite at dusk, warm interior light spilling from flush windows, tripod-steady wide shot |
| `exteriorExpanded` | Expansion deployed | Same trailer with side wall expanded outward to double interior width, showing the transformed silhouette, clean daylight, three-quarter rear |
| `exteriorAero` | Platform detail | Low-angle detail of the aerodynamic underbody and wheel arch, matte finish, shallow depth of field |
| `interiorLounge` | Main living space | Interior lounge of a premium electric travel trailer, pale oak and off-white, full-height panoramic glazing, daylight, wide 24mm |
| `interiorGalley` | Kitchen / work surface | Compact galley with a continuous stone counter, integrated induction top, warm daylight from the left |
| `interiorSleeping` | Sleeping quarters | Sleeping area with a low platform bed and a skylight over it, linen bedding, soft morning light |
| `systemSolar` | Roof array | Overhead drone view of the roof solar array in full sun, geometric panel pattern, trailer parked in open terrain |
| `systemBattery` | Battery pack | Clean technical detail of an underfloor high-voltage battery module, matte housing, neutral light |
| `systemDrivetrain` | Hitch / assist | Close detail of the smart hitch coupling between truck and trailer, mechanical precision, shallow depth |
| `systemPower` | Off-grid power | Exterior power outlets in use at a campsite, cable running to equipment, evening light |
| `systemCharging` | DC fast charge | Trailer connected to a DC fast charger at a modern charging plaza, blue hour |
| `systemCamera` | Camera view | Rear camera perspective while reversing into a campsite, slightly wide and low |
| `systemConnectivity` | Satellite link | Roof-mounted satellite antenna against a clear night sky over a remote camp |
| `systemCampSetup` | Deploying | Trailer levelling itself on powered stabilisers at arrival, late afternoon |
| `editorialFacility` | Factory | Interior of a clean modern assembly facility, trailer shells on the line, industrial daylight |
| `editorialTeam` | Team | Candid group of engineers and designers beside a finished trailer outside the facility, natural light |
| `editorialOwnerStory` | Owner on the road | A couple outside their trailer at a scenic overlook, unposed, morning light |

## Wiring new images

1. Export at the sizes above, name files after the slot (`exterior-hero.jpg`)
2. Drop them in `public/images/rv-images/`
3. In `src/assets/rv-images.ts`, replace the `PLACEHOLDER` constant references
   with the real paths per slot and delete `PLACEHOLDER` once nothing uses it
4. `bun run build` — no other file needs to change

Prefer `.jpg` at quality 80 or `.webp` for photographs. The current three PNGs
total 9.7MB, which is heavy for the web; JPEG/WebP will cut that substantially.
