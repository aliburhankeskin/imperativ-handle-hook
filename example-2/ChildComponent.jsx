const ChildComponent = forwardRef((props, ref) => {
  
  const video = useRef(null);
  
  // "ParentComponent" den erişilebilen alan  
  useImperativeHandle(ref, () => ({
          
    async play() {

      if (video) {

        await video.current.playAsync(); 
        
      }
      
    },
      
    async pause() {

      if (video) {

        video.current.stopAsync();
        
      }
      
    }
  }),);
  
  return (<Video ref={video} />);

});

export default ChildComponent;
