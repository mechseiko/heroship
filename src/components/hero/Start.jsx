import SectionHeader from '../SectionHeader';
import Container from '../Container';
import Cta from './Cta';
import mobile from '../../assets/mobile.png';

function Start(props) {
  return (
    <div>
      <section className='bg-muted'>
        <Container>
          <section className='flex md:flex-row flex-col-reverse items-center gap-6'>
            <div className='py-10 md:w-1/2 w-full'>
              <SectionHeader
                title={"Get started in under 5 minutes."}
                subtitle={"Join developers all over the world. Start building with heroship today."}
                theme="muted"
              />
              
              <ul className="list-disc pl-5 mt-4 space-y-2 text-md">
                <li>Create your free account</li>
                <li>Edit your hero sction</li>
                <li>Export and publish</li>
              </ul>

              <div className="mt-6">
                <Cta flex="row" />
              </div>
            </div>

            <div className='md:w-1/2 w-full flex justify-center'>
              <img
                src={mobile}
                alt="Mobile app preview"
                className='w-[250px] md:w-[300px] lg:w-[350px] object-contain'
              />
            </div>
          </section>
        </Container>
      </section>
    </div>
  );
}

export default Start;
