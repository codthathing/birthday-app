const ImageInput = ({ imageInput, setImageInput, inputRef }) => {
  return (
    <div className="inputDiv">
      <input type="file" name="picture" accept="image/*" ref={inputRef} onChange={({ target: { files } }) => {
        if (files && files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImageInput({ ...imageInput, picture: e.target.result });
          };
          reader.readAsDataURL(files[0]);
        }
      }} />
    </div>
  );
};

export default ImageInput;