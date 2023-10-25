import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";

  export default function Clander() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#0098ff"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal
	  calLink="kavindu-harshana-xq8wpc/secret"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{layout: 'month_view'}}
	  className="p-3"
	/>;
  };
  
