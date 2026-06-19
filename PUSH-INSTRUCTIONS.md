# Hero Redesign - Ready to Push to GitHub

## Status
✅ **COMPLETE & VALIDATED** - All files ready. Syntax checked, design finalized.

## Files to Push to `angelicatmo/angelica-portfolio`

### 1. **Photo (MOST CRITICAL - Save First)**
- **Source:** `/Users/angelicatarazona/Portfolio/src/assets/angelica-portrait.webp`
- **Destination:** `public/images/profile.webp`
- **Format:** WebP 800x800 RGBA
- **Why first:** LinkedIn image URLs expire within hours. This is already saved locally & validated.

### 2. **Hero Component**
- **File:** `Hero-redesign-READY.tsx`
- **Destination:** `components/Hero.tsx` (replace existing)
- **Key changes:**
  - Set `HAS_PROFILE_PHOTO = true`
  - Added keyword pills (4 tags)
  - Split name: firstName + lastName italic styling
  - New personalized headline: "Empecé optimizando el clic. Hoy diseño todo lo que pasa antes de él."
  - Layered offset photo card (poster-like signature design)
  - All TypeScript valid ✅

### 3. **Bilingual Copy Dictionary**
- **File:** `dictionary-copy-READY.ts`
- **Destination:** `lib/i18n/dictionary.ts` → update `hero` object (both `es` and `en`)
- **New fields:**
  - `keywords: string[]` (4 keywords per language)
  - `headline` (personalized, not bullet list)
  - Keep existing: kicker, title, location, status, bio, cta1, cta2, linkedin

## Design Decisions

**Persona Analysis:**
- **Who:** Growth marketing → UX/UI designer → AI automation strategist
- **Differentiator:** Rare intersection of metrics + design + automation
- **Tone:** Direct, data-driven, confident, authentic
- **Story:** "Optimizing the click" → "Designing what happens before it"

**Visual Signature:**
- Layered offset photo card (rotate-6 back panel + -rotate-2 front image)
- Poster-stamp caption with location
- Keyword pills instead of comma list
- Italic last name for visual distinction
- Border-left headline treatment (pull-quote style)

## Next: Deploy
Once pushed, Vercel will auto-build. Verify:
- [ ] Photo loads
- [ ] No TypeScript errors
- [ ] Keywords display
- [ ] Responsive on mobile
- [ ] Links work (UX/UI, Growth Lab, LinkedIn)
