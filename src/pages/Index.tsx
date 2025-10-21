import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Гантели 10 кг',
      category: 'sports',
      price: '3 500 ₽',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Кроссовки Nike',
      category: 'sports',
      price: '8 900 ₽',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Коврик для йоги',
      category: 'sports',
      price: '1 800 ₽',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Набор кастрюль',
      category: 'kitchen',
      price: '5 400 ₽',
      image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Блендер Philips',
      category: 'kitchen',
      price: '4 200 ₽',
      image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'Набор ножей',
      category: 'kitchen',
      price: '2 900 ₽',
      image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop',
    },
  ];

  const renderHome = () => (
    <div className="space-y-16">
      <section className="relative py-20 px-4 gradient-orange-teal overflow-hidden">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Всё для спорта и кухни
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Качественные товары для активной жизни и домашнего уюта
          </p>
          <Button size="lg" variant="secondary" className="hover-scale text-lg">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Начать покупки
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Icon name="Dumbbell" size={32} className="text-primary" />
          <h2 className="text-3xl font-bold">Спортивные товары</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((p) => p.category === 'sports')
            .map((product) => (
              <Card key={product.id} className="hover-scale overflow-hidden group">
                <CardHeader className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Icon name="UtensilsCrossed" size={32} className="text-secondary" />
          <h2 className="text-3xl font-bold">Кухонные товары</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((p) => p.category === 'kitchen')
            .map((product) => (
              <Card key={product.id} className="hover-scale overflow-hidden group">
                <CardHeader className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-secondary">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );

  const renderDelivery = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Icon name="Truck" size={40} className="text-primary" />
        Условия доставки
      </h1>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" size={24} className="text-secondary" />
              Доставка по городу
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>• Бесплатная доставка при заказе от 5 000 ₽</p>
            <p>• Стоимость доставки до 5 000 ₽ — 300 ₽</p>
            <p>• Доставка в течение 1-2 рабочих дней</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Package" size={24} className="text-secondary" />
              Доставка в регионы
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>• Доставка транспортными компаниями</p>
            <p>• Стоимость рассчитывается индивидуально</p>
            <p>• Срок доставки 3-7 рабочих дней</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Store" size={24} className="text-secondary" />
              Самовывоз
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>• Бесплатно из пункта выдачи</p>
            <p>• Готовность заказа через 2-4 часа</p>
            <p>• Адрес: г. Москва, ул. Примерная, д. 1</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={24} className="text-primary mt-1" />
              <div>
                <p className="font-semibold mb-2">Важная информация</p>
                <p className="text-sm text-muted-foreground">
                  При получении заказа обязательно проверьте комплектность и целостность товара.
                  В случае обнаружения повреждений, составьте акт с курьером.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Icon name="MessageCircle" size={40} className="text-primary" />
        Контакты
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Phone" size={24} className="text-primary" />
              Телефон
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">+7 (495) 123-45-67</p>
            <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Mail" size={24} className="text-secondary" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-secondary">info@sportshop.ru</p>
            <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
          </CardContent>
        </Card>

        <Card className="hover-scale md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" size={24} className="text-accent" />
              Адрес магазина
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-2">г. Москва, ул. Примерная, д. 1, стр. 2</p>
            <p className="text-muted-foreground">Метро: Спортивная (5 минут пешком)</p>
            <p className="text-muted-foreground">Режим работы: Пн-Вс 10:00 - 22:00</p>
          </CardContent>
        </Card>

        <Card className="gradient-orange-teal text-white md:col-span-2 hover-scale">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Мы в социальных сетях</h3>
            <div className="flex gap-4">
              <Button variant="secondary" size="icon" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-orange-teal rounded-lg flex items-center justify-center">
                <Icon name="Store" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Нияра
              </span>
            </div>
            
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'home'
                    ? 'bg-primary text-white'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name="Home" size={18} />
                Главная
              </button>
              <button
                onClick={() => setActiveSection('delivery')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'delivery'
                    ? 'bg-primary text-white'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name="Truck" size={18} />
                Условия доставки
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'contacts'
                    ? 'bg-primary text-white'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name="MessageCircle" size={18} />
                Контакты
              </button>
            </div>

            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main>
        {activeSection === 'home' && renderHome()}
        {activeSection === 'delivery' && renderDelivery()}
        {activeSection === 'contacts' && renderContacts()}
      </main>

      <footer className="bg-muted mt-16 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Нияра. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;