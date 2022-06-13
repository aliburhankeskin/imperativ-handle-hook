const ChildComponent = React.forwardRef((props, ref) => {
  
    const [isRed, setIsRed] = React.useState(true);
    
    // "ParentComponent" den erişilebilen alan  
    React.useImperativeHandle(ref, () => ({
            
      async change() {
  
        setIsRed((prev) => !prev);
        
      },
  
    }),);
    
    return (
      <div 
        style={{ 
          width: 200,
          height: 200, 
          background: isRed ? 'red' : 'blue' 
        }}
      />
    );
  
  });

  export default ChildComponent;