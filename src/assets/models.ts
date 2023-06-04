export type propsType = {
  username: string;
};

export interface IStrengths {
  id: string;
  code: number;
  name: string;
  proficiency: string;
  weight: number;
  recommendations: number;
  media: any[];
  supra: boolean;
  created: string;
  hits: number;
}

export type IPersonData = {
  name: string;
  pictureThumbnail: string;
}

export interface BioData {
  person: {
    professionalHeadline: string;
    picturethumbnail: string;
    completion: number;
    showPhone: boolean;
    created: string;
    verified: boolean;
    flags: {
      benefits: boolean;
      canary: boolean;
      enlauSource: boolean;
      fake: boolean;
      featureDiscovery: boolean;
      getSignaledBenefitsViewed: boolean;
      firstSignalSent: boolean;
      promoteYourselfBenefitsViewed: boolean;
      promoteYourselfCompleted: boolean;
      importingLinkedin: boolean;
      onBoarded: boolean;
      remoter: boolean;
      signalsFeatureDiscovery: boolean;
      signedInToOpportunities: boolean;
      importingLinkedinRecommendations: boolean;
      contactsImported: boolean;
      appContactsImported: boolean;
      genomeCompletionAcknowledged: boolean;
      importedMyEmails: boolean;
      importedMyAddressBooks: boolean;
      importedMyCalendar: boolean;
      importedMyTwitter: boolean;
      twitterConfirmationPrompt: boolean;
      newUserRecommendations: boolean;
      topContactsImported: boolean;
      careerTest: boolean;
      weightTest: boolean;
      personalityTest: boolean;
    };
    weight: number;
    locale: string;
    subjectId: number;
    picture: string;
    name: string;
    links: {
      [key: string]: string;
    };
    location: {
      name: string;
      shortName: string;
      country: string;
      countryCode: string;
      timezone: string;
      latitude: number;
      longitude: number;
      timezoneOffSet: number;
    };
    theme: string;
    id: string;
    claimant: boolean;
    summaryOfBio: string;
    weightGraph: {
      [key: string]: number;
    };
    publicId: string;
    hasEmail: boolean;
    hasBio: boolean;
    hasLocation: boolean;
    verifiedAccounts: [
      {
        id: string;
        name: string;
        domain: string;
        verified: boolean;
        verificationString: string;
      }
    ];
    weightGraphLastModified: number;
    stats: {
      following: number;
      followers: number;
      professionalInterests: number;
      recommendations: number;
      appreciations: number;
      views: number;
      contacts: number;
      connections: number;
      outDegree: number;
    };
    completionGraph: {
      [key: string]: number;
    };
    claimantVerification: string;
  };
  stats: {
    education: number;
    jobs: number;
    projects: number;
    publications: number;
    strengths: number;
    professionalCultureGenome: number;
    completion: number;
    media: number;
    awards: number;
    tests: number;
    opportunities: number;
  };
  flags: {
    benefits: boolean;
    canary: boolean;
    enlauSource: boolean;
    fake: boolean;
    featureDiscovery: boolean;
    getSignaledBenefitsViewed: boolean;
    firstSignalSent: boolean;
    promoteYourselfBenefitsViewed: boolean;
    promoteYourselfCompleted: boolean;
    importingLinkedin: boolean;
    onBoarded: boolean;
    remoter: boolean;
    signalsFeatureDiscovery: boolean;
    signedInToOpportunities: boolean;
    importingLinkedinRecommendations: boolean;
    contactsImported: boolean;
    appContactsImported: boolean;
    genomeCompletionAcknowledged: boolean;
    importedMyEmails: boolean;
    importedMyAddressBooks: boolean;
    importedMyCalendar: boolean;
    importedMyTwitter: boolean;
    twitterConfirmationPrompt: boolean;
    newUserRecommendations: boolean;
    topContactsImported: boolean;
    careerTest: boolean;
    weightTest: boolean;
    personalityTest: boolean;
  };
  completion: number;
  strengths: {
    id: string;
    code: string;
    name: string;
    weight: number;
    proficiency: string;
    experience: number;
    media: [
      {
        group: string;
        mediaType: string;
        mediaUrl: string;
      }
    ];
    recommendations: number;
    verifications: number;
    recommendationsByMembers: number;
  }[];
  education: {
    id: string;
    category: string;
    name: string;
    organizations: [
      {
        id: string;
        name: string;
      }
    ];
    responsibilities: string;
    fromMonth: string;
    fromYear: number;
    toMonth: string;
    toYear: number;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    media: [
      {
        group: string;
        mediaType: string;
        mediaUrl: string;
      }
    ];
  }[];
  jobs: {
    id: string;
    category: string;
    name: string;
    organizations: [
      {
        id: string;
        name: string;
      }
    ];
    responsibilities: string;
    fromMonth: string;
    fromYear: number;
    toMonth: string;
    toYear: number;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    media: [
      {
        group: string;
        mediaType: string;
        mediaUrl: string;
      }
    ];
  }[];
  projects: {
    id: string;
    category: string;
    name: string;
    organizations: [
      {
        id: string;
        name: string;
      }
    ];
    responsibilities: string;
    fromMonth: string;
    fromYear: number;
    toMonth: string;
    toYear: number;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    media: [
      {
        group: string;
        mediaType: string;
        mediaUrl: string;
      }
    ];
  }[];
  publications: {
    id: string;
    category: string;
    name: string;
    organizations: [
      {
        id: string;
        name: string;
      }
    ];
    responsibilities: string;
    fromMonth: string;
    fromYear: number;
    toMonth: string;
    toYear: number;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    media: [
      {
        group: string;
        mediaType: string;
        mediaUrl: string;
      }
    ];
  }[];
  interests: {
    keywords: string[];
    organizations: [
      {
        id: string;
        name: string;
      }
    ];
  }[];
  languages: {
    code: string;
    language: string;
    fluency: string;
  }[];
  strengthsGraph: {
    [key: string]: number;
  };
  experiencesGraph: {
    [key: string]: number;
  };
}