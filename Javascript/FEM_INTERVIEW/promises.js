/**
 * Implement the getHighestPriorityData function that takes a prioritized list of URLs and
 * resolver functions and returns the highest priority resolved data within the defined timeout
 */

const getAddressByLatLong = (lat, long) => getHighestPriorityData([
    {
        url: `htts://zillowapi.com/property-data?lat${lat}&long=${long}`,
        resolver: (data) => data.property?.address,
    },
    {
        url: `htts://maps.google.com/api/coordinates/${lat}/${long}/`,
        resolver: (data) => data.location?.properties?.[0]?.address,
    },
    {
        url: `htts://nwmls.com/api/parcel?lat${lat}&long=${long}`,
        resolver: (data) => data.lot.details.address,
    },
], 5000);



const getHighestPriorityData = async (dataList, timeOut) => {    
    const dataOrErrorList = dataList.map(async (obj, i) => {
        try {
            setTimeout(() => {
                
                throw new Error('timeout');
            }, timeOut);
        
            const response = await fetch(obj.url);
            const json = await response.json();
            const resolvedData = obj.resolver(json);
            return resolvedData;
        } catch (e) {
            return {
                error: e.message
            };
        }
    });
    for(let i=0;i<dataOrErrorList.length;i++) {
        if(!dataOrErrorList[i].error) {
            return dataOrErrorList[i];
        }
    }
    
}

(async () => {
    const address = await getAddressByLatLong(47.6205, -122.3493); // Space Needle, 400 Broad St, Seattle, WA 98109


console.log(address);
})()
















