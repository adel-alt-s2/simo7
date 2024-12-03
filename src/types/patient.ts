export interface Patient {
  id: string;
  numeroPatient: string;
  nom: string;
  prenom: string;
  telephone: string;
  email?: string;
  ville: string;
  cin: string;
  dateNaissance: string;
  mutuelle?: {
    active: boolean;
    nom: string;
  };
  antecedents: string[];
}