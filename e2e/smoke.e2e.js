const { 
  elementById, 
  elementByLabel, 
  elementByText,
  elementBy,
  elementWithAncestor
} = require('./helpers/helpers')

describe('E2E Smoke Tests', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Visibility - matching by text', () => {

    it('Counters button should be visible', async () => {
      await expect(elementBy('text', 'Counters')).toBeVisible();
    });
  
    it('Member List button should be visible', async () => {
      await expect(elementByText('Member List')).toBeVisible();
    });
  
    it('Cities button should be visible', async () => {
      await expect(elementByText('Cities').atIndex(0)).toBeVisible();
    });
  
    it('Animation button should be visible', async () => {
      await expect(elementByText('Animation')).toBeVisible();
    });
  
    it('Extras button should be visible', async () => {
      await expect(elementByText('Extras')).toBeVisible();
    });
  })

  describe('Visibility - matching by label', () => {

    beforeEach(async () => {
      await device.reloadReactNative();
    });
    
    it('Water counter button should be visible', async () => {
      await elementByText('Counters').tap()
      const el = elementByLabel('waterCounterButtonLabel')
      await expect(el).toBeVisible()
    })

    it('Electricity counter button should be visible', async () => {
      await elementByText('Counters').tap()
      const el = elementByLabel('electricityCounterButtonLabel')
      await expect(el).toBeVisible()
    })

    it('Gas counter button should be visible', async () => {
      await elementByText('Counters').tap()
      const el = elementByLabel('gasCounterButtonLabel')
      await expect(el).toBeVisible()
    })

    it('Broadband counter button should be visible', async () => {
      await elementByText('Counters').tap()
      const el = elementByLabel('broadbandCounterButtonLabel')
      await expect(el).toBeVisible()
    })

  })

  describe('Visibility - matching by ID', () => {

    beforeEach(async () => {
      await device.reloadReactNative();
    });
    
    it('London city image should be visible', async () => {
      await elementByText('Cities').atIndex(0).tap()
      const el = elementById('LondonImage')
      await expect(el).toBeVisible()
    })

    it('Boston city image should be visible', async () => {
      await elementByText('Cities').atIndex(0).tap()
      const el = elementById('BostonImage')
      await elementById('usaCanadaView').swipe('left', 'fast', 0.35, 0.5, 0.5)
      await expect(el).toBeVisible()
    })

    it('Tokyo city image should be visible', async () => {
      await elementByText('Cities').atIndex(0).tap()
      const el = elementById('TokyoImage')
      await elementById('scrollView').scrollTo('bottom')
      await expect(el).toBeVisible()
    })

  })

  describe('Counters view', () => {

    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('Counters view can be navigated to', async () => {
      await elementByText('Counters').tap()
      await expect(elementByText('WATER COUNTER')).toBeVisible()
    })
  
    it('Tapping Water Counter increments count by one', async () => {
      await elementByText('Counters').tap()
      await elementByText('WATER COUNTER').tap()
      await expect(elementByText('1')).toBeVisible()
    })
  
    it('Tapping Electricity Counter increments count by one', async () => {
      await elementByText('Counters').tap()
      await elementByText('ELECTRICITY COUNTER').tap()
      await expect(elementByText('1')).toBeVisible()
    })
  
    it('Tapping Gas Counter increments count by one', async () => {
      await elementByText('Counters').tap()
      await elementByText('GAS COUNTER').tap()
      await expect(elementByText('1')).toBeVisible()
    })
  
    it('Tapping Broadband Counter increments count by one', async () => {
      await elementByText('Counters').tap()
      await elementByText('BROADBAND COUNTER').tap()
      await expect(elementByText('1')).toBeVisible()
    })

  })

  describe('Counters view - matching element by ancestors', () => {

    beforeAll(async () => {
      await device.reloadReactNative();
    });
  
    it('Counters view can be navigated to', async () => {
      await elementByText('Counters').tap()
      await expect(elementByText('WATER COUNTER')).toBeVisible()
    })
  
    it('Tapping Water Counter increments count by one', async () => {
      await elementById('waterCounter').multiTap(3)
      const el = elementWithAncestor({ elType: 'text', elContent:'3', ancestorType: 'id', ancestorContent: 'waterCounter'})
      await expect(el).toBeVisible()
    })
  
    it('Tapping Electricity Counter increments count by one', async () => {
      await elementById('electricityCounter').multiTap(4)
      const el = elementWithAncestor({ elType: 'text', elContent:'4', ancestorType: 'id', ancestorContent: 'electricityCounter' })
      await expect(el).toBeVisible()
    })
  
    it('Tapping Gas Counter increments count by one', async () => {
      await elementById('gasCounter').multiTap(2)
      const el = elementWithAncestor({ elType: 'text', elContent:'2', ancestorType: 'id', ancestorContent: 'gasCounter' })
      await expect(el).toBeVisible()
    })
  
    it('Tapping Broadband Counter increments count by one', async () => {
      await elementById('broadbandCounter').multiTap(5)
      const el = elementWithAncestor({ elType: 'text', elContent:'5', ancestorType: 'id', ancestorContent: 'broadbandCounter' })
      await expect(el).toBeVisible()
    })

    it('Tapping Home button returns user to Home view', async () => {
      await elementByText('Home').tap()
      await expect(elementByText('Counters')).toBeVisible()
    })
  })
});



