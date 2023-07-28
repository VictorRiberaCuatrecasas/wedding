import styles from "./InvitationPage.module.scss";
import { useRouter } from 'next/router';
import jsonData from '../data/data.json';


// Define the type for the router.query


const InvitationPage: React.FC = () => {
    const router = useRouter();
    const url = router.query.id;

    console.log(router.query.id)

    if (!url || !jsonData.validUrls.includes(url)) {
      // If the URL is not in the JSON file or not provided, show a custom error message or redirect to a 404 page
      return <div>Invalid URL</div>;
    }

    return (
      <div>
        <h1>{url}</h1>
        {/* Your dynamic page content here */}
      </div>
    );
  };

  export default InvitationPage;