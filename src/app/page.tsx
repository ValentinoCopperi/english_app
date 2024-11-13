
import Link from 'next/link'
import { GraduationCap, ArrowRight, GraduationCapIcon, Smartphone } from 'lucide-react';
import Image from 'next/image';


export default async function Home() {

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'beginner':
        return '🌱';
      case 'intermediate':
        return '🌟';
      case 'advanced':
        return '🏆';
      default:
        return null;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-emerald-500 hover:bg-emerald-600';
      case 'intermediate':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'advanced':
        return 'bg-purple-500 hover:bg-purple-600';
      default:
        return 'bg-gray-100';
    }
  };

  const getLevelDescription = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Start your English journey here for free';
      case 'intermediate':
        return 'Take your English to the next level';
      case 'advanced':
        return 'Master advanced English concepts';
      default:
        return '';
    }
  };

  return (
    <main className="min-h-screen  ">

      <div className="relative h-[400px] mb-16 ">
        <div className="absolute inset-0 ">
          <Image
            src="/banner2.jpg"
            width={1920}
            height={1080}
            alt="Students studying"
            className="w-full h-full object-cover object-left rounded-t-3xl"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <GraduationCap className="w-16 h-16 text-white mb-4" />
          <h1 className="text-5xl font-bold text-white mb-4">
            ¡Mejora tu inglés aquí!
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Aprende a tu propio ritmo con ejercicios interactivos diseñados para cada nivel
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['beginner', 'intermediate', 'advanced'].map((level) => (
            <Link
              key={level}
              href={`/categories/${level}`}
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${getLevelColor(level)}`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{getLevelIcon(level)}</span>
                  <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                </div>

                <h2 className="text-2xl font-bold capitalize mb-2">
                  {level}
                </h2>

                <p className="text-gray-100 font-medium">
                  {getLevelDescription(level)}
                </p>

                <div className="mt-6 flex items-center text-sm text-gray-800 font-semibold">
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>4 tipos de ejercicios</span>
                  </div>
                </div>
              </div>

              <div className="absolute -right-12 -top-12 w-24 h-24 transform rotate-45 bg-white/10" />
            </Link>
          ))}
        </div>
      </div>

      <div className='h-2 bg-black w-full' />

      <div className='grid grid-cols-3 px-4 my-16'>
        <div className='col-span-3 text-center md:text-left md:col-span-2 w-[90%] mx-auto'>

          <div>
            <div className='font-bold text-4xl space-x-2 flex items-center'>
              <GraduationCapIcon size={50} className='hidden md:block' />
              <h1>Cambridge English A2,B2, and C1 </h1>
            </div>

            <div className='py-6'>
              <p className='font-normal text-2xl'>
                Descubre tu potencial en inglés con nuestra aplicación interactiva de ejercicios, diseñada para estudiantes de todos los niveles y con diferentes intereses. Sumérgete en lecciones personalizadas y practica con una variedad de temas, desde vocabulario cotidiano hasta gramática avanzada. Guarda tu progreso y observa tu avance con cada ejercicio completado, acercándote cada vez más a dominar el inglés. Con ejercicios dinámicos y escenarios de la vida real, aprender inglés nunca ha sido tan efectivo y divertido. ¡Únete hoy y comienza tu camino hacia la fluidez!
              </p>
            </div>
          </div>

          <div>
            <div className='font-bold text-4xl space-x-2 pt-9 flex items-center'>
              <Smartphone size={50} className='hidden md:block' />
              <h1>Multi-Platform Access</h1>
            </div>

            <div className='py-6'>
              <p className='font-normal text-2xl'>
                Nuestra aplicación está diseñada para ser completamente multiplataforma, lo que significa que puedes acceder a tus ejercicios y lecciones en cualquier dispositivo: desde tu teléfono, tablet, hasta tu computadora. Esta flexibilidad te permite aprender inglés donde y cuando quieras, adaptándose a tu estilo de vida y asegurando que tu progreso esté siempre al alcance. No importa dónde estés, puedes continuar practicando y mejorando tu inglés sin interrupciones. ¡La fluidez está a solo un clic de distancia!
              </p>

              <div className='flex justify-center md:justify-start space-x-6 py-9'>

                <Image
                  src="/playstore.png"
                  width={200}
                  height={200}
                  alt="Celphone"
                  quality={100}
                />

                <Image
                  src="/apple.png"
                  width={200}
                  height={200}
                  alt="Celphone"
                  quality={100}
                />



              </div>

            </div>
          </div>
        </div>

        <div className='hidden md:block md:col-span-1'>
          <Image
            src="/celphone.jpeg"
            width={400}
            height={700}
            alt="Celphone"
            className=""
            quality={100}
          />
        </div>
      </div>

    </main >
  )
}