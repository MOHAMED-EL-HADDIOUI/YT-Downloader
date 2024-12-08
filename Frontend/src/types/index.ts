export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type DownloadFormat = 'video' | 'audio';