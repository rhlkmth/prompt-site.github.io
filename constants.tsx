
export interface PromptGroup {
  id: string;
  title: string;
  prompts: string[];
}

export const CINEMATIC_PROMPTS: PromptGroup[] = [
  {
    id: 'general-arri',
    title: 'Cinematic Keywords for video image prompts',
    prompts: [
      `shot on ARRI Alexa 65, anamorphic lenses, cinematic lighting, \nshallow depth of field, film grain, high dynamic range, \nepic composition, widescreen framing`,
      `shot on ARRI Alexa Mini LF, Panavision anamorphic, \nsoft natural light, cinematic color grading, rule of thirds, \nsubject isolation, dramatic contrast`,
      `shot on ARRI Alexa, Cooke anamorphic, low-key lighting, \nmoody atmosphere, foreground-midground-background layering, \ncinematic framing, subtle film grain`,
      `shot on ARRI Alexa LF, anamorphic bokeh, golden hour lighting, \ncinematic depth, leading lines, balanced negative space, \nfilmic color palette`,
      `shot on ARRI Alexa 35, anamorphic widescreen, volumetric lighting, \ndramatic shadows, strong silhouettes, cinematic blocking, \nhigh-end film look`,
      `shot on ARRI Alexa, vintage anamorphic glass, imperfect lens flares, \ncinematic softness, painterly composition, controlled color contrast, \nauteur film style`,
      `shot on ARRI Alexa Mini, anamorphic aspect ratio, practical lighting, \nnatural skin tones, cinematic realism, documentary-film composition, \nsubtle grain`,
      `shot on ARRI Alexa LF, ultra-cinematic anamorphic, deep blacks, \nrich highlights, symmetrical framing, epic scale, \npremium theatrical look`
    ]
  },
  {
    id: 'christopher-nolan',
    title: 'Christopher Nolan style',
    prompts: [
      `shot on IMAX film, large format cinema camera, deep focus, \npractical lighting, high contrast realism, minimal color grading, \nepic scale composition, 2.39:1 aspect ratio, grounded cinematic realism`
    ]
  },
  {
    id: 'wes-anderson',
    title: 'Wes Anderson style',
    prompts: [
      `symmetrical composition, center framed subject, locked off camera, \npastel color palette, flat lighting, storybook cinematic style, \nprecise blocking, theatrical production design, 1.85:1 aspect ratio`
    ]
  },
  {
    id: 'denis-villeneuve',
    title: 'Denis Villeneuve - Dune style',
    prompts: [
      `shot on ARRI Alexa LF, minimalist sci fi cinematography, monumental scale, \natmospheric haze, muted color palette, slow cinema framing, \nnegative space composition, 2.39:1 aspect ratio`
    ]
  },
  {
    id: 'ridley-scott',
    title: 'Ridley Scott style',
    prompts: [
      `epic historical cinematography, strong backlighting, volumetric light, \nlayered production design, smoke and atmosphere, dramatic widescreen framing, \ncinematic spectacle, 2.39:1 aspect ratio`
    ]
  },
  {
    id: 'david-fincher',
    title: 'David Fincher style',
    prompts: [
      `low key lighting, controlled color palette, cool desaturated tones, \nprecise framing, psychological tension, digital cinema sharpness, \nmoody interiors, cinematic realism`
    ]
  },
  {
    id: 'roger-deakins',
    title: 'Roger Deakins style',
    prompts: [
      `shot on ARRI Alexa, naturalistic lighting, motivated light sources, \nsoft shadow detail, elegant composition, subtle film grain, \ncinematic clarity, restrained color grading`
    ]
  },
  {
    id: 'quentin-tarantino',
    title: 'Quentin Tarantino style',
    prompts: [
      `wide static shots, long takes, strong foreground presence, \nsaturated film colors, 35mm film look, dialogue driven composition, \nretro cinema aesthetic, bold framing`
    ]
  },
  {
    id: 'terrence-malick',
    title: 'Terrence Malick style',
    prompts: [
      `natural light only, golden hour cinematography, handheld camera feel, \npoetic composition, organic motion, shallow depth of field, \nspiritual cinematic tone, lyrical realism`
    ]
  },
  {
    id: 'wong-kar-wai',
    title: 'Wong Kar-wai style',
    prompts: [
      `neon night lighting, rain soaked streets, shallow depth of field, \nmotion blur, saturated reds and greens, intimate framing, \nromantic urban melancholy, cinematic mood`
    ]
  },
  {
    id: 'satyajit-ray',
    title: 'Satyajit Ray style',
    prompts: [
      `realist cinema, simple natural lighting, human centered framing, \nminimal camera movement, authentic locations, restrained composition, \ntimeless cinematic storytelling`
    ]
  }
];
