/// <reference types="@types/googlemaps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(place: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: place.location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: place.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
