import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../../service/api';
import { ChevronLeftCircle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import Layout from '../Layout/Layout';
import img from "../../../assets/bgg.jpg";
import FileUploader from '../../../components/FileUploader';


const AddProduct = () => {
  const navigate = useNavigate()
  const [fileUrl, setFileUrl] = useState('');
  const [formdata, setFormdata] = useState({
    productName: '',
    productPrice: 0,
    productQuantity: 0,
    productDesc:'',
    productImage: ''
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ProductData = {
        ...formdata,
        productImage: fileUrl,
      };
      console.log(ProductData)
      const res = await addProduct(ProductData);
      console.log(res)
      if (res.status == 201) {
        toast.success(`${formdata.productName} Added Successfully !`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/admin/products/view')
        }, 1000)
      }
    }
    catch (error) {
      // console.log(error);
      toast.error(`Can't add Services  !`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const routeBack = () => {
    navigate(-1)
  }
  return (
    <>
      <Layout />
      <div>
        <img className='add_bgg' src={img}></img>
      </div>
      <div className='mainx1'>

        <form className='data-content shadow ' onSubmit={handleSubmit}>
          <h3 className='data-title '>Add Services</h3>
          <input type="text" name="productName" id="productName" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} required />
          <input type="number" name="productPrice" id="productPrice" placeholder='Amount' className='data-input bg-secondary black' onChange={handleChange} required />
          <input type="number" name="productQuantity" id="productQuantity" placeholder='Hours' className='data-input bg-secondary black' onChange={handleChange} required />
          <textarea id="productDesc" placeholder='Description' className='data-input bg-secondary black' cols="5" rows="3" onChange={handleChange} required />
          {/* <div className='clr_care'>
            <FileUploader  setImageUrl={setFileUrl} />
          </div>  */}
          <button type="submit" className='data-btn '>Add</button>
        </form>


        <button onClick={routeBack} className='route-btn-1 '><ChevronLeftCircle  /></button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
export default AddProduct;