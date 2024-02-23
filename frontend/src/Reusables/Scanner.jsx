import React, { useRef, useEffect } from 'react';
import Quagga from 'quagga';
import axios from 'axios';

const Scanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startScanner = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        Quagga.init({
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: videoRef.current
          },
          decoder: {
            readers: ["ean_reader"] // Specify the barcode format to read
          }
        }, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          Quagga.start();
        });

        Quagga.onDetected(async (data) => {
          const barcode = data.codeResult.code;
          console.log('Barcode detected:', barcode);
          
            Quagga.stop();
            try {
              const options = {
                params: {
                  barcode: barcode.toString()
                },
                headers: {
                  'x-rapidapi-key': '2a76a931a6mshd21db785f75d4cdp1c9aa8jsn6fd5fe582487',
                  'x-rapidapi-host': 'barcode-lookup.p.rapidapi.com'
                }
              };
  
              const response = await axios.get('https://barcode-lookup.p.rapidapi.com/v3/products', options);
              console.log('Response:', response.data); // Log the entire response
  
              // Access product details and handle accordingly
              if (response.data.products && response.data.products.length > 0) {
                console.log('Product details:', response.data.products[0]);
              } else {
                console.log('No product details found');
              }
            } catch (error) {
              console.error('Error fetching product details:', error);
            }
          
         
        });
      } catch (err) {
        console.error(err);
      }
    };

    startScanner();

    // return () => {
    //   Quagga.stop();
    // };
  }, []);

  return (
    <div>
      <video ref={videoRef} />
    </div>
  );
};

export default Scanner;