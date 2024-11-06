import { Button } from '@/components/common/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/common/Card'
import { Input } from '@/components/common/Input'
import { Badge } from '@/components/common/Badge'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo ao NewSaaS</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Componentes de Exemplo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              label="Nome" 
              placeholder="Digite seu nome" 
            />
            
            <div className="flex gap-2">
              <Button>Botão Primário</Button>
              <Button variant="secondary">Secundário</Button>
            </div>

            <div className="flex gap-2">
              <Badge>Novo</Badge>
              <Badge variant="secondary">Em Progresso</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 