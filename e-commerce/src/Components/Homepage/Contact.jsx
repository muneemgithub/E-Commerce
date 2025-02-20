import React from 'react';
import { TextField, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-16">
        <span className="text-gray-900">Home</span>
        <span>/</span>
        <span className="text-gray-500">Contact</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          {/* Call To Us */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B8860B] bg-opacity-20 flex items-center justify-center">
                <PhoneIcon className="text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-medium">Call To Us</h3>
            </div>
            <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-900">Phone: +92010568222</p>
          </div>

          {/* Write To Us */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B8860B] bg-opacity-20 flex items-center justify-center">
                <EmailIcon className="text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-medium">Write To US</h3>
            </div>
            <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-gray-900">Emails: customer@Vendors.com</p>
            <p className="text-gray-900">Emails: support@Vendors.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                fullWidth
                placeholder="Your Name *"
                variant="outlined"
                sx={{
                  width: '365px',
                  '& .MuiOutlinedInput-root': {
                    height: '46px',
                    borderRadius: '10px',
                    padding: '13.5px 16px',
                    backgroundColor: '#F8F8F8',
                    '& fieldset': {
                      borderColor: '#E5E7EB',
                    },
                    '&:hover fieldset': {
                      borderColor: '#B8860B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#B8860B',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder="Your Email *"
                variant="outlined"
                sx={{
                  width: '365px',
                  '& .MuiOutlinedInput-root': {
                    height: '46px',
                    borderRadius: '10px',
                    padding: '13.5px 16px',
                    backgroundColor: '#F8F8F8',
                    '& fieldset': {
                      borderColor: '#E5E7EB',
                    },
                    '&:hover fieldset': {
                      borderColor: '#B8860B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#B8860B',
                    },
                  },
                }}
              />
            </div>
            <TextField
              fullWidth
              placeholder="Your Phone *"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '46px',
                  borderRadius: '10px',
                  padding: '13.5px 16px',
                  backgroundColor: '#F8F8F8',
                  '& fieldset': {
                    borderColor: '#E5E7EB',
                  },
                  '&:hover fieldset': {
                    borderColor: '#B8860B',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#B8860B',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Your Message"
              multiline
              rows={4}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  padding: '13.5px 16px',
                  backgroundColor: '#F8F8F8',
                  '& fieldset': {
                    borderColor: '#E5E7EB',
                  },
                  '&:hover fieldset': {
                    borderColor: '#B8860B',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#B8860B',
                  },
                },
              }}
            />
            <div className="text-right">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#14274E',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '12px 32px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#1a365d',
                  },
                }}
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
