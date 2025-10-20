const services = [
  {
    title: 'Digital Strategy',
    description: 'We help you develop a comprehensive digital strategy to reach your target audience and achieve your business goals.',
    icon: '💡',
  },
  {
    title: 'Web Development',
    description: 'Custom web applications and websites built with the latest technologies and best practices.',
    icon: '💻',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    icon: '📱',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your digital transformation.',
    icon: '☁️',
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide comprehensive solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-4xl">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
