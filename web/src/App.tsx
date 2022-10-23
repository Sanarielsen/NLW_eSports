import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { DiscordLogo, GameController } from 'phosphor-react'
import { useState, useEffect } from 'react'
import logoImg from './assets/logo-nlw-esports.svg'
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css'
import { Input } from './components/Form/Input'

function App() {

  interface Game {

    id: string
    title: string
    bannerURL: string
    _count: {
      ads: number
    }
  }

  //useState = First is a value of representation and we se the second when we need to change the value of first variable.
  //useState() is a variable too, because of it, we need to attribute a type of data we need to insert here.
  const [games, setGames] = useState<Game[]>([])

  //UseEffect = First is a what function i need to execute and second is where i wish to use this method
  useEffect(() => 
    {
      fetch("http://localhost:3333/games")
      .then(response => response.json())
      .then(data => {
        
        setGames(data)
      })
    }, [])  

  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">

        <img src={logoImg} />

        <h1 className='text-6xl text-white font-black mt-20'> Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'> duo </span> está aqui </h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>

          {games.map(game => {

            return (
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerURL}
                title={game.title} 
                adsCount={game._count.ads}
              />
            )
          })}
        </div>
          <Dialog.Root>
            <CreateAdBanner />

            <Dialog.Portal>

              <Dialog.Overlay className='bg-black/60 inset-0 fixed'>

                <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">

                  <Dialog.Title className='text-3xl font-black'> Públique um anúncio </Dialog.Title>                  
                    <form className="mt-8 flex flex-col gap-4">

                      <div className="flex flex-col gap-2">

                        <label htmlFor="game" className='font-semibold' > Qual o game? </label>
                        <Input id="game" placeholder='Selecione o game que deseja jogar' />
                      </div>
                      <div className="flex flex-col gap-2">

                        <label htmlFor="name"> Seu nome (ou Nickname) </label>
                        <Input 
                          type="text" 
                          id="name" 
                          placeholder='Como te chamam dentro do game?' />
                      </div>
                      <div className="grid grid-cols-2 gap-6">

                        <div className='flex flex-col gap-2'>

                          <label htmlFor="yearsPlaying"> Joga há quanto anos? </label>
                          <Input type="text" id="yearsPlaying" placeholder='Tudo vem ser ZERO' />
                        </div>
                        <div className='flex flex-col gap-2'>

                          <label htmlFor="discord"> Qual o seu discord? </label>
                          <Input type="text" id="discord" placeholder='Usuario#0000' />
                        </div>
                      </div>
                      
                      <div className='flex gap-6'>
                        
                        <div className='flex flex-col gap-2'>

                          <label htmlFor="weekdays"> Quando costuma a jogar? </label>
                              
                            <div className='grid grid-cols-4 gap-2'>
                              <button 
                                title="domingo"
                                className="w-8 h-8 rounded bg-zinc-900"
                              >
                                D
                              </button>
                              <button 
                                title="segunda"
                                className="w-8 h-8 rounded bg-zinc-900"
                              >
                                S
                              </button>
                              <button 
                                title="terça"
                                className="w-8 h-8 rounded bg-zinc-900"
                              >
                                T
                              </button>
                              <button 
                                title="quarta"
                                className="w-8 h-8 rounded bg-zinc-900"
                              >
                                Q
                              </button>
                              <button 
                                title="quinta"
                                className="w-8 h-8 rounded bg-zinc-900"
                              >
                                Q
                              </button>
                              <button 
                                title="sexta"
                                className="w-8 h-8 rounded bg-zinc-900"
                              >
                                S
                              </button>
                              <button 
                                title="sabado"
                                className="w-8 h-8 rounded bg-zinc-900"
                              >
                                S
                              </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                          <label htmlFor="hourStart"> Qual o horário do dia? </label>
                          <div className='grid grid-cols-2 gap-2'>

                            <Input type="time" id="hourStart" placeholder='De' />
                            <Input type="time" id="hourEnd" placeholder='Ate' />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-2 gap-2 text-sm">
                        <Input type='Checkbox' />
                          Costumo me conectar ao chat de voz
                      </div>

                      <footer className='mt-4 flex justify-end gap-4'>

                        <Dialog.Close
                          type="button"
                          className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                            Cancelar 
                        </Dialog.Close>
                        <button 
                          type="submit"
                          className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                          >
                          <GameController size={24} />
                          Encontrar Duo
                        </button> 
                      </footer>
                    </form>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
      </div>
    </>
  )
}

export default App
