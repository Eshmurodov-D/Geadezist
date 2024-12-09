<!-- Login ni man oganma etteya qilb beramn -->

const navigate = useNavigate()

  useEffect(()=>{

    cheksfunc()
    
  },[])
  function cheksfunc(){
  let token = localStorage.getItem('token')
  if(!token) navigate('/login')
  }

tepadagi narsa uchrvormela 