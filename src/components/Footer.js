import styles from "../styles/components/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Ajouter des icônes ou du texte pour Accueil, Mon espace, etc. */}
            <nav>
                <button>Accueil</button>
                <button>Mon espace</button>
                <button>Bibliothèque</button>
                <button>Adhérents</button>
            </nav>
        </footer>
    );
}
