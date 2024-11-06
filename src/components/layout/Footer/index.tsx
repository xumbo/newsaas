export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} NewSaaS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 