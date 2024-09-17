'use client';

import { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid, Typography, Paper, Card, CardMedia, CardContent, Divider } from '@mui/material';
import { fetchMovies } from './api';

const Home = () => {
  const [user1Movies, setUser1Movies] = useState<any[]>([]);
  const [user2Movies, setUser2Movies] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [commonMovies, setCommonMovies] = useState<any[]>([]);
  const [user1Query, setUser1Query] = useState<string>('');
  const [user2Query, setUser2Query] = useState<string>('');

  useEffect(() => {
    const fetchUser1Movies = async () => {
      if (user1Query.trim()) {
        const results = await fetchMovies(user1Query);
        setSearchResults(results);
      }
    };

    fetchUser1Movies();
  }, [user1Query]);

  useEffect(() => {
    const fetchUser2Movies = async () => {
      if (user2Query.trim()) {
        const results = await fetchMovies(user2Query);
        setSearchResults(results);
      }
    };

    fetchUser2Movies();
  }, [user2Query]);

  const handleAddMovie = (user: number, movie: any) => {
    if (user === 1) {
      setUser1Movies(prev => [...prev, movie]);
      setUser1Query(''); // Search input sıfırlanır
      setSearchResults([]); // Sonuçlar sıfırlanır
    } else {
      setUser2Movies(prev => [...prev, movie]);
      setUser2Query(''); // Search input sıfırlanır
      setSearchResults([]); // Sonuçlar sıfırlanır
    }
  };

  const handleFindCommonMovies = () => {
    const commonMovies = user1Movies.filter(movie1 =>
      user2Movies.some(movie2 => movie1.id === movie2.id)
    );
    setCommonMovies(commonMovies);
  };

  return (
    <Container>
      <div className="flex flex-col min-h-screen p-8">
        <nav className="w-full flex justify-between items-center bg-transparent p-4 shadow-lg">
          <div className="text-white text-2xl font-bold">
            Brand
          </div>
          <ul className="hidden sm:flex gap-8 text-white">
            <li><a href="/" className="hover:text-gray-300">Anasayfa</a></li>
            <li><a href="#" className="hover:text-gray-300">Hakkımızda</a></li>
            <li><a href="/" className="hover:text-gray-300">Servislerimiz</a></li>
            <li><a href="#" className="hover:text-gray-300">İletişim</a></li>
          </ul>
          <button className="sm:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        <div className='rounded-lg w-full max-w-2xl my-5'>
          <aside className="hidden lg:block w-3/4 sticky top-8">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Reklam Alanı</h3>
              <div className="bg-gray-300 h-40 flex items-center justify-center">
                <span className="text-gray-600">Reklam İçeriği</span>
              </div>
            </div>
          </aside>
        </div>

        <Paper elevation={3} style={{ padding: 20, backgroundColor: '#1e1e1e', color: '#ffffff' }}>
          <Typography variant="h4" gutterBottom align="center">Film Listesi</Typography>

          <Divider style={{ margin: '20px 0' }} />

          <Typography variant="h6" gutterBottom>Kullanıcı 1 Filmleri</Typography>
          <TextField
            label="Bir film ara"
            variant="outlined"
            fullWidth
            onChange={(e) => setUser1Query(e.target.value)}
            value={user1Query}
            style={{ marginBottom: 10 }}
          />

          <Grid container spacing={3} style={{ marginTop: 10 }}>
            {searchResults.map((movie) => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="body1">{movie.title}</Typography>
                    <Button variant="outlined" onClick={() => handleAddMovie(1, movie)}>
                      Kullanıcı 1'e Ekle
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider style={{ margin: '20px 0' }} />

          <Typography variant="h6" gutterBottom>Kullanıcı 2 Filmleri</Typography>
          <TextField
            label="Bir film ara"
            variant="outlined"
            fullWidth
            onChange={(e) => setUser2Query(e.target.value)}
            value={user2Query}
            style={{ marginBottom: 10 }}
          />

          <Grid container spacing={3} style={{ marginTop: 10 }}>
            {searchResults.map((movie) => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="body1">{movie.title}</Typography>
                    <Button variant="outlined" onClick={() => handleAddMovie(2, movie)}>
                      Kullanıcı 2'ye Ekle
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider style={{ margin: '20px 0' }} />

          <Button variant="contained" color="secondary" onClick={handleFindCommonMovies} style={{ marginTop: 20 }}>
            Ortak Filmleri Bul
          </Button>

          <Typography variant="h5" gutterBottom style={{ marginTop: 20 }}>Ortak Filmler</Typography>
          <Grid container spacing={3}>
            {commonMovies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="body1">{movie.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>
    </Container>
  );
};

export default Home;
