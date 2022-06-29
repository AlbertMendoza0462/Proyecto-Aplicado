
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from "../../../Hooks/useQuery.jsx";
import { ImSearch } from "react-icons/im";
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

const Searchi = styled('div')(({ theme }) => ({

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


export default function Search({ products }) {

    const navigate = useNavigate();
    
    const query = useQuery();
    const location = useLocation()
    const search = query.get("search");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Searchi>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>

                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    type="text" 
                    value={search ? search : ""} 
                    onChange={(e) => {
                        const valor = e.target.value;
                        if(location.pathname != "/store"){
                          navigate("/store?search=" + valor)
                        }else{
                          navigate("?search=" + valor);
                        }
                    }}
                />
            </Searchi>
        </form>

        </>
    )
}
