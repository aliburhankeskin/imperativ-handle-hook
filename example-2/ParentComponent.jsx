import React from 'react';
import ChildComponent from './ChildComponent';

export function ParentComponent() {

  const videoRefList = useRef([]);

  // Listedeki elemanların görüntülenebilirliği değiştiğinde tetiklenir
  const onViewableItemsChanged = ({ changed }) => {

    // Durumu değişen eleman listesi
    changed.forEach((item) => {

      // Rereferans listesinden durumu değişen item
      const cell = videoRefList.current[item.key];  

      if (cell) {

        // Eğer şuan ekranda kullanıcı bu elemanı görüyor ise
        if (item.isViewable) {

          // ChildComponent deki "play" fonksiyonu tetiklenir
          cell.play();
        
        } else {

          // Ekrandan ayrılan eleman için 
          cell.pause();
        
        }
      
      }
    
    });
  
  };

  // "useCallback" hook'unu Kullanım amacı performans kazandırmaktır.
  const renderItem = useCallback(({ item }) => (
    
    <ChildComponent
      item={item} 
      ref={(ref) => {

        // Her bir eleman oluşturulduğu zaman, 
        // referansını "videoRefList" referansını atıyoruz
        videoRefList.current[item.id] = ref; 

      }}
      
    />
  ), []);

  return (
    <FlatList  
      data={sampleList}
      renderItem={renderItem}
      onViewableItemsChanged={onViewableItemsChanged}
    />
  );

}
