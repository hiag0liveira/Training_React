import Title from "../Title"
import ProfileSection from "./ProfileSection"
import LinkButton from "../LinkButton"
import styles from "./styles.module.css"


export default function Profile(props) {

    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Você agora está seguindo!")
        setFollowText("Following")
    }

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>Name: </span>
                {props.name}
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
                <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}