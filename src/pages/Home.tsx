import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  MapPin, 
  DollarSign, 
  Bed, 
  Bath, 
  Home as LucideHome, 
  Search, 
  Filter,
  ArrowRight,
  Heart 
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ReviewsSection from '../components/Reviews';

const Home: React.FC = () => {
  const { theme } = useTheme();

  const featuredProperties = [
    { 
      code: '001', 
      city: 'FL', 
      beds: 1, 
      baths: 1, 
      rent: '$1,200', 
      img: 'https://i.postimg.cc/k5F8x4FF/My-Apartment-In-The-States.png'
    },
    { 
      code: '002', 
      city: 'NY', 
      beds: 2, 
      baths: 2, 
      rent: '$2,200', 
      img: 'https://ssl.cdn-redfin.com/photo/rent/16792665-0c25-4d96-a3fc-5e5f894209c2/islphoto/genIsl.0_5.webp'
    },
    { 
      code: '003', 
      city: 'MD', 
      beds: 3, 
      baths: 2, 
      rent: '$4,800', 
      img: 'https://photos.zillowstatic.com/fp/51184818793b5b05dcfbd270ff0d59a2-p_e.jpg'
    },
    { 
      code: '004', 
      city: 'NY', 
      beds: 2, 
      baths: 2, 
      rent: '$2,300', 
      img: 'https://i.postimg.cc/gcSwFyyx/apartment1.png'
    },
    { 
      code: '005', 
      city: 'MA', 
      beds: 2, 
      baths: 2, 
      rent: '$1,800', 
      img: 'https://i.postimg.cc/25kmSMr8/apartment2.png'
    },
    { 
      code: '006', 
      city: 'MO', 
      beds: 2, 
      baths: 3, 
      rent: '$1,450', 
      img: 'https://i.postimg.cc/hjJGK61Q/apartment3.png'
    },
    { 
      code: '007', 
      city: 'MN', 
      beds: 2, 
      baths: 3, 
      rent: '$1,500', 
      img: 'https://g5-assets-cld-res.cloudinary.com/image/upload/x_3,y_0,h_1055,w_1582,c_crop/q_auto,f_auto,c_fill,g_center,h_800,w_1200/v1605804778/g5/g5-c-ik8lejjz-capreit-client/g5-cl-1i0qmj6i7b-loring-park-apartments/uploads/1300-Yale-Pl-Portfolio--010_w28k3z_paqqa0.jpg'
    },
  ];

  return (
    <>
      {/* NYC Hero */}
      <section className={`
        relative h-screen flex items-center justify-center overflow-hidden
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900' 
          : 'bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500'
        }
        text-white
      `}>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/30">
            <LucideHome className="w-5 h-5 mr-2" />
            <span className="font-semibold">10+ Luxury Apartments Available</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-black mb-6 leading-tight ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 via-blue-300 to-sky-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent'
          }`}>
            Luxury Rentals
            <span className="block text-4xl md:text-5xl font-light">America's Finest</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Modern apartments in Manhattan, Brooklyn, Williamsburg & more. 
            Move-in ready with fast approvals. From $1,200/month.
          </p>
          
          {/* Hero Search */}
          <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-4 w-5 h-5 text-white/80" />
                <input 
                  type="text" 
                  placeholder="Manhattan, Brooklyn, Williamsburg..." 
                  className="w-full pl-12 pr-4 py-4 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 focus:border-white/60 focus:outline-none text-lg placeholder-white/80"
                />
              </div>
              <Link to="/apply" className={`group relative ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500' 
                  : 'bg-white text-amber-600 hover:bg-amber-50'
              } px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 flex items-center space-x-3 border-2 border-white/30`}>
                <Search className="w-5 h-5 group-hover:scale-110 transition" />
                <span>Find Your Home</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties with Real Images */}
      <section className={`
        py-24
        ${theme === 'dark' 
          ? 'bg-gradient-to-b from-slate-900/70 to-indigo-900/50' 
          : 'bg-gradient-to-b from-orange-50 via-amber-50 to-rose-50'
        }
      `}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-white via-sky-300 to-cyan-300 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-slate-900 via-amber-900 to-orange-900 bg-clip-text text-transparent'
            }`}>
              Featured Properties
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            } max-w-2xl mx-auto`}>
              Handpicked luxury apartments ready for immediate occupancy in NYC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) => (
              <Link 
                key={property.code}
                to={`/apply?code=${property.code}`}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 backdrop-blur-xl border border-slate-700/50' 
                    : 'bg-white/80 border border-amber-200/50'
                }`}
              >
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600">
                  <img 
                    src={property.img} 
                    alt={`${property.city} Apartment`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* New Listing Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg transform rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    NEW LISTING
                  </div>
                  
                  {/* Heart Icon */}
                  <button className="absolute top-4 left-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <Heart className="w-5 h-5 text-rose-500 fill-current" />
                  </button>
                </div>

                {/* Property Details */}
                <div className={`p-8 ${
                  theme === 'dark' ? 'bg-slate-800/80' : 'bg-white/60'
                }`}>
                  <h3 className={`text-2xl md:text-3xl font-black mb-4 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent'
                      : 'text-slate-900'
                  }`}>
                    {property.city}
                  </h3>
                  
                  <div className={`flex items-center justify-center space-x-8 mb-6 text-sm uppercase tracking-wide ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-amber-500" />
                      <span>{property.beds} BR</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="w-4 h-4 text-orange-500" />
                      <span>{property.baths} BA</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-3xl font-black ${
                      theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                    }`}>
                      {property.rent}/mo
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      theme === 'dark' 
                        ? 'bg-slate-700/50 text-slate-300' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {property.code}
                    </span>
                  </div>

                  <button className={`w-full group/btn bg-gradient-to-r ${
                    theme === 'dark' 
                      ? 'from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500' 
                      : 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white'
                  } text-white py-4 px-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 border-2 border-transparent hover:border-white/30`}>
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NYC Neighborhoods */}
      <section className={`
        py-24
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-slate-900 to-indigo-900/30 backdrop-blur-sm' 
          : 'bg-gradient-to-r from-orange-50 to-amber-50/50 backdrop-blur-sm'
        }
      `}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 items-center">
            <div className="md:col-span-2">
              <h3 className={`text-4xl font-black mb-8 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-slate-900 to-amber-900 bg-clip-text text-transparent'
              }`}>
                NYC's Premier Neighborhoods
              </h3>
              <ul className="space-y-4 text-xl">
                <li className={`flex items-center space-x-4 p-4 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:bg-sky-500/10 hover:border-sky-400' 
                    : 'bg-white/70 border-amber-200/50 shadow-sm hover:shadow-lg hover:bg-amber-50'
                } transition-all duration-300`}>
                  <span className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
                  <span>Manhattan - Luxury Skyline Living</span>
                </li>
                <li className={`flex items-center space-x-4 p-4 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:bg-emerald-500/10 hover:border-emerald-400' 
                    : 'bg-white/70 border-amber-200/50 shadow-sm hover:shadow-lg hover:bg-amber-50'
                } transition-all duration-300`}>
                  <span className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full" />
                  <span>Brooklyn - Modern Waterfront</span>
                </li>
                <li className={`flex items-center space-x-4 p-4 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:bg-purple-500/10 hover:border-purple-400' 
                    : 'bg-white/70 border-amber-200/50 shadow-sm hover:shadow-lg hover:bg-amber-50'
                } transition-all duration-300`}>
                  <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full" />
                  <span>Williamsburg - Trendy Lofts</span>
                </li>
              </ul>
            </div>
            <div className={`relative h-80 rounded-3xl overflow-hidden shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-slate-800 to-indigo-900 border border-slate-700/50' 
                : 'bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">🗽</div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />



      {/* Final CTA */}
      <section className={`
        py-24 relative overflow-hidden
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900' 
          : 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600'
        }
        text-white
      `}>
        <div className="absolute inset-0 bg-[radial-gradient(600px_50%_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-xl rounded-3xl px-8 py-4 mb-12 border border-white/40 max-w-2xl mx-auto">
            <Filter className="w-6 h-6 mr-3 opacity-90" />
            <span className="text-xl font-bold">Ready to secure your NYC dream home?</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-black mb-8 leading-tight ${
            theme === 'dark' 
              ? 'from-white via-cyan-200 to-blue-200' 
              : 'from-white via-amber-100 to-orange-100'
          }`}>
            Start Your Journey
            <span className="block text-4xl font-light bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          
          <Link to="/apply" className={`inline-flex items-center ${
            theme === 'dark' 
              ? 'bg-white text-slate-900 border-2 border-white/30 hover:bg-white/90' 
              : 'bg-white text-rose-600 shadow-2xl hover:shadow-3xl hover:bg-amber-50'
          } px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl`}>
            <span>Apply Now</span>
            <ChevronRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-all" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
