import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

const containerStyle = {
    width: '1000px',
    height: '1000px'
};

const center = {
    lat: 37.5400456, lng: 126.9921017
};

const Meteorological = () => {
    const { isLoaded } = useJsApiLoader({
        id: process.env.REACT_APP_GOOGLE_API_ID,
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string
    })
    
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    // 의료수거함 위치현황
    const collection_api = process.env.REACT_APP_COLLECTION_API;
    const [arr, setArr] = useState([]);

    useEffect(() => {
        collection();
    }, [])
    const collection = async () => {
        // const url = `http://apis.data.go.kr/3450000/wasteFluoLampSepBinService/getWasteFluoLampSepBin?ServiceKey=${collection_api}&currentPage=1&perPage=10&resultCode=00&totalRows=61&resultMsg=NORMAL SERVICE&SN=1&ADSTRD_NM=고성동&DETAIL_ADRES=대구광역시 북구 고성로31길 21(고성동3가)&TELNO=053-665-3301`;



        var url = 'http://apis.data.go.kr/3450000/wasteFluoLampSepBinService/getWasteFluoLampSepBin'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent(collection_api as string); /*Service Key*/
        queryParams += '&' + encodeURIComponent('currentPage') + '=' + encodeURIComponent('1'); /**/
        queryParams += '&' + encodeURIComponent('perPage') + '=' + encodeURIComponent('10'); /**/
        queryParams += '&' + encodeURIComponent('SN') + '=' + encodeURIComponent('1'); /**/
        queryParams += '&' + encodeURIComponent('ADSTRD_NM') + '=' + encodeURIComponent('고성동'); /**/

        console.log(url + queryParams)
        const res = await fetch(url + queryParams, { method: "GET"});
        const data = await res.json();
        console.log("data", data);
        setArr(data);
    }
    console.log(arr)

    
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <MarkerF position={center} />
            <></>
        </GoogleMap>
    ) : <></>
}

export default Meteorological;