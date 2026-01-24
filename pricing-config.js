// ============================================================
// CONFIGURATION DES PRIX - ManettesGÉANTES
// ============================================================
// Structure: UNE activité principale + extras optionnels
// ============================================================

const PRICING_CONFIG = {

    // ============================================================
    // ACTIVITÉS PRINCIPALES
    // Choisir UNE activité principale par événement
    // ============================================================
    activites: {
        'team-mario': {
            nom: 'Team Mario Bros',
            description: 'Animation coopérative encadrée - 2 joueurs par manette Nintendo géante',
            type: 'horaire',              // Toujours animé à l'heure
            modes: ['anime'],             // Un seul mode disponible
            inclutAnimation: true,        // Animation toujours incluse
            prixBase: 500,                // Prix pour 3 heures minimum
            prixParHeure: 50,             // Chaque heure supplémentaire
            heuresMinimum: 3
        },
        'arcade-geante': {
            nom: 'Arcade Géante',
            description: 'Stations autonomes - Gameboys, Atari, SNES, Genesis géants (8 jeux)',
            type: 'mixte',                // Peut être animé OU location
            modes: ['anime', 'location'], // Deux modes disponibles
            inclutAnimation: false,       // Dépend du mode choisi
            // Mode animé (horaire)
            prixBase: 500,                // Prix pour 3 heures minimum
            prixParHeure: 50,             // Chaque heure supplémentaire
            heuresMinimum: 3,
            // Mode location (journalier)
            prixParJour: {
                1: 500,                   // 1 jour
                2: 650,                   // 2 jours
                3: 750,                   // 3 jours
                4: 850,                   // 4 jours
                5: 950                    // 5 jours et plus
            }
        },
        'mini-arcade': {
            nom: 'Mini-Arcade',
            description: 'Consoles rétro en libre-service - NES, SNES, Genesis, PS1, GameCube, Wii',
            type: 'journalier',           // Toujours en location journalière
            modes: ['location'],          // Un seul mode disponible
            inclutAnimation: false,       // Jamais d'animation
            prixParJour: {
                1: 300,                   // 1 jour
                2: 450,                   // 2 jours
                3: 550,                   // 3 jours
                4: 650,                   // 4 jours
                5: 750                    // 5 jours et plus
            }
        }
    },

    // ============================================================
    // EXTRAS (activités supplémentaires à prix réduit)
    // Disponibles selon l'activité principale choisie
    // ============================================================
    extras: {
        'arcade-geante': {
            prix: 150,                    // +150$ quand ajouté en extra
            disponibleAvec: ['team-mario'] // Disponible si Team Mario est principal
        },
        'mini-arcade': {
            prix: 100,                    // +100$ quand ajouté en extra
            disponibleAvec: ['team-mario', 'arcade-geante'] // Disponible avec Team Mario ou Arcade Géante
        }
    },

    // ============================================================
    // OPTIONS (incluses avec Team Mario, en supplément sinon)
    // ============================================================
    options: {
        'animation': {
            nom: 'Animation costumée',
            description: 'Animateur diplômé en Techniques de Loisir',
            prixParHeure: 50,             // 50$/heure si pas inclus
            inclusAvec: ['team-mario']    // Inclus avec Team Mario
        },
        'decorations': {
            nom: 'Décorations',
            description: 'Décorations Mario Bros + Mario gonflable géant 10\'',
            prix: 0,                      // Gratuit
            inclusAvec: ['team-mario']
        },
        'eclairage': {
            nom: 'Éclairage LED',
            description: 'Éclairage LED coloré ambiance arcade',
            prix: 0,                      // Gratuit
            inclusAvec: ['team-mario']
        },
        'trophee': {
            nom: 'Trophée + Autocollants',
            description: 'Trophée meilleur score + autocollants souvenirs',
            prix: 0,                      // Gratuit
            inclusAvec: ['team-mario']
        }
    },

    // ============================================================
    // DÉPLACEMENT
    // Tarif différent selon le mode (animé vs location)
    // ============================================================
    deplacement: {
        prixParKmAnime: 0.66,         // Prix/km pour événement animé
        prixParKmLocation: 0.66,      // Prix/km pour location
        kmGratuits: 0,                // Kilomètres gratuits (0 = aucun)
        pointDepart: {
            nom: 'Thetford Mines',
            lat: 46.0910,
            lon: -71.3054
        }
    },

    // ============================================================
    // TEMPS DE TRAVAIL (en heures)
    // ============================================================
    tempsTravail: {
        // Événements animés
        montageAnime: 3,           // Heures de montage avant l'animation
        demontageAnime: 2,         // Heures de démontage après l'animation
        // Locations (livraison/ramassage)
        montageLocation: 2,        // Heures de montage lors de la livraison
        demontageLocation: 2       // Heures de démontage lors du ramassage
    },

    // ============================================================
    // PROLONGATION - Pour événements animés seulement
    // ============================================================
    prolongation: {
        prixParHeure: 50           // Prix par heure de prolongation
    },

    // ============================================================
    // HÉBERGEMENT - Pour événements animés seulement
    // Requis si:
    // - Départ maison < 8h30
    // - Retour maison > 22h
    // - Journée totale > 10h (trajet + travail)
    // ============================================================
    hebergement: {
        fraisParNuit: 230,         // Frais par nuit d'hébergement
        heureDepartMinimum: 8.5,   // Pas de départ avant 8h30 (8.5 = 8h30)
        heureRetourMaximum: 22,    // Doit être rentré avant 22h
        heuresMaxParJour: 10,      // Maximum 10h de travail + route par jour
        vitesseMoyenne: 70         // km/h pour calculer le temps de trajet
    },

    // ============================================================
    // RABAIS (optionnel - mettez 0 pour désactiver)
    // ============================================================
    rabais: {
        // Rabais pour longue durée (événements animés)
        longueDuree: {
            6: 0,                  // % rabais pour 6h+
            8: 0                   // % rabais pour journée complète (8h+)
        }
    },

    // ============================================================
    // CLÉ API GOOGLE MAPS
    // ============================================================
    // Pour obtenir une clé:
    // 1. Allez sur https://console.cloud.google.com/
    // 2. Créez un projet
    // 3. Activez "Distance Matrix API"
    // 4. Créez une clé API avec restriction HTTP referrer: manettesgeantes.ca/*
    // ============================================================
    googleMapsApiKey: ''           // TODO: Votre clé API Google Maps

};

// ============================================================
// TABLE DE DISTANCES DE SECOURS (si l'API échoue)
// Distances approximatives depuis Thetford Mines par code postal (3 premiers caractères)
// ============================================================
const FSA_DISTANCES = {
    // Thetford Mines et environs
    'G6G': 0,    // Thetford Mines
    'G6H': 10,   // Black Lake
    'G6J': 15,   // Disraeli
    'G6K': 20,   // Plessisville
    'G6L': 25,   // Victoriaville
    'G6P': 30,   // Princeville
    'G6S': 35,   // Warwick
    'G6T': 40,   // Asbestos

    // Québec et environs
    'G1A': 110, 'G1B': 112, 'G1C': 115, 'G1E': 108,
    'G1G': 105, 'G1H': 102, 'G1J': 110, 'G1K': 108,
    'G1L': 106, 'G1M': 104, 'G1N': 100, 'G1P': 98,
    'G1R': 110, 'G1S': 105, 'G1V': 95, 'G1W': 92,
    'G1X': 90, 'G1Y': 88,
    'G2A': 95, 'G2B': 98, 'G2C': 100, 'G2E': 102,
    'G2G': 105, 'G2J': 108, 'G2K': 110, 'G2L': 112,
    'G2M': 115, 'G2N': 118,

    // Lévis
    'G6V': 85, 'G6W': 88, 'G6X': 90, 'G6Y': 92, 'G6Z': 95,
    'G7A': 98,

    // Beauce
    'G5R': 60,  // Saint-Georges
    'G5V': 55,  // Sainte-Marie
    'G5X': 50,  // Vallée-Jonction
    'G5Y': 45,  // Scott
    'G5Z': 65,  // Saint-Georges

    // Trois-Rivières
    'G8T': 145, 'G8V': 148, 'G8W': 150, 'G8Y': 152, 'G8Z': 155,
    'G9A': 158, 'G9B': 160, 'G9C': 162,

    // Sherbrooke
    'J1E': 120, 'J1G': 122, 'J1H': 125, 'J1J': 128, 'J1K': 130,
    'J1L': 132, 'J1M': 135, 'J1N': 138,

    // Drummondville
    'J2A': 100, 'J2B': 102, 'J2C': 105,

    // Montréal et région
    'H1A': 260, 'H1B': 258, 'H1C': 255, 'H1E': 252, 'H1G': 250,
    'H1H': 248, 'H1J': 246, 'H1K': 244, 'H1L': 242, 'H1M': 240,
    'H1N': 238, 'H1P': 236, 'H1R': 234, 'H1S': 232, 'H1T': 230,
    'H1V': 228, 'H1W': 226, 'H1X': 224, 'H1Y': 222, 'H1Z': 220,
    'H2A': 250, 'H2B': 248, 'H2C': 246, 'H2E': 244, 'H2G': 242,
    'H2H': 240, 'H2J': 238, 'H2K': 236, 'H2L': 234, 'H2M': 232,
    'H2N': 230, 'H2P': 228, 'H2R': 226, 'H2S': 224, 'H2T': 222,
    'H2V': 220, 'H2W': 218, 'H2X': 216, 'H2Y': 214, 'H2Z': 212,
    'H3A': 245, 'H3B': 243, 'H3C': 241, 'H3E': 239, 'H3G': 237,
    'H3H': 235, 'H3J': 233, 'H3K': 231, 'H3L': 229, 'H3M': 227,
    'H3N': 225, 'H3P': 223, 'H3R': 221, 'H3S': 219, 'H3T': 217,
    'H3V': 215, 'H3W': 213, 'H3X': 211, 'H3Y': 209, 'H3Z': 207,
    'H4A': 248, 'H4B': 246, 'H4C': 244, 'H4E': 242, 'H4G': 240,
    'H4H': 238, 'H4J': 236, 'H4K': 234, 'H4L': 232, 'H4M': 230,
    'H4N': 228, 'H4P': 226, 'H4R': 224, 'H4S': 222, 'H4T': 220,
    'H4V': 218, 'H4W': 216, 'H4X': 214, 'H4Y': 212, 'H4Z': 210,

    // Laval
    'H7A': 265, 'H7B': 263, 'H7C': 261, 'H7E': 259, 'H7G': 257,
    'H7H': 255, 'H7J': 253, 'H7K': 251, 'H7L': 249, 'H7M': 247,
    'H7N': 245, 'H7P': 243, 'H7R': 241, 'H7S': 239, 'H7T': 237,
    'H7V': 235, 'H7W': 233, 'H7X': 231, 'H7Y': 229,

    // Rive-Sud Montréal
    'J4B': 240, 'J4G': 238, 'J4H': 236, 'J4J': 234, 'J4K': 232,
    'J4L': 230, 'J4M': 228, 'J4N': 226, 'J4P': 224, 'J4R': 222,
    'J4S': 220, 'J4T': 218, 'J4V': 216, 'J4W': 214, 'J4X': 212,
    'J4Y': 210, 'J4Z': 208,

    // Rive-Nord Montréal
    'J5A': 280, 'J5B': 278, 'J5C': 276, 'J5J': 274, 'J5K': 272,
    'J5L': 270, 'J5M': 268, 'J5R': 266, 'J5T': 264, 'J5V': 262,
    'J5W': 260, 'J5X': 258, 'J5Y': 256, 'J5Z': 254,
    'J6A': 282, 'J6E': 280, 'J6J': 278, 'J6K': 276, 'J6N': 274,
    'J6R': 272, 'J6S': 270, 'J6T': 268, 'J6V': 266, 'J6W': 264,
    'J6X': 262, 'J6Y': 260, 'J6Z': 258,
    'J7A': 285, 'J7B': 283, 'J7C': 281, 'J7E': 279, 'J7G': 277,
    'J7H': 275, 'J7J': 273, 'J7K': 271, 'J7L': 269, 'J7M': 267,
    'J7N': 265, 'J7P': 263, 'J7R': 261, 'J7T': 259, 'J7V': 257,
    'J7W': 255, 'J7X': 253, 'J7Y': 251, 'J7Z': 249,

    // Gatineau/Ottawa
    'J8L': 400, 'J8M': 402, 'J8N': 405, 'J8P': 408, 'J8R': 410,
    'J8T': 412, 'J8V': 415, 'J8X': 418, 'J8Y': 420, 'J8Z': 422,
    'J9A': 425, 'J9B': 428, 'J9H': 430, 'J9J': 432
};

// Distances par défaut par province (si code postal non trouvé)
const PROVINCE_DEFAULTS = {
    'G': 100,   // Québec (région de Québec par défaut)
    'H': 250,   // Montréal
    'J': 200,   // Montérégie/Laurentides
    'K': 450,   // Est Ontario
    'L': 550,   // Toronto région
    'M': 580,   // Toronto
    'N': 650,   // Sud-Ouest Ontario
    'P': 700,   // Nord Ontario
};
