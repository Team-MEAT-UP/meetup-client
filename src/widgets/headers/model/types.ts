export interface HeaderProps {
  profileImg?: string;
}

export interface PlainHeaderProps {
  title: string;
  onBack?: () => void;
  url?: string;
}

export interface BackHeaderProps {
  url?: string;
  onClick?: () => void;
}

export interface CloseHeaderProps {
  url: string;
}
