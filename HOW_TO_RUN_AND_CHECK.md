# 🚀 How to Run & Check Your Optimized Website

This guide will show you how to test your production-optimized pharma website and verify the Lighthouse 100 optimizations.

---

## 📋 Quick Reference

| Command             | Purpose                  | When to Use               |
| ------------------- | ------------------------ | ------------------------- |
| `npm run dev`       | Development server       | During development        |
| `npm run build`     | Production build         | Before deployment/testing |
| `npm run preview`   | Preview production build | Testing optimizations     |
| `npm run typecheck` | Type checking            | Verify TypeScript         |
| `npm run lint`      | Code linting             | Check code quality        |

---

## 🏃 Method 1: Development Mode (Fast Testing)

**Already Running!** ✅ You have this running in your terminal.

### Steps:

1. **Your dev server is at**: `http://localhost:5173/`
2. **Open in browser**: Chrome, Edge, or Firefox
3. **What to test**:
   - ✅ All sections load
   - ✅ Animations work smoothly
   - ✅ Navigation is responsive
   - ✅ Images display correctly

### Hot Reload:

Any changes you make to files will **automatically refresh** in the browser!

**Note**: Development mode is NOT optimized - you won't see the production optimizations here.

---

## 🎯 Method 2: Production Build (RECOMMENDED for Testing Optimizations)

This is the **actual optimized version** that shows all performance improvements.

### Step 1: Build for Production

```bash
npm run build
```

**What happens**:

- ✅ Code is minified
- ✅ Tree-shaking removes unused code
- ✅ Chunks are split for faster loading
- ✅ Assets are optimized
- ✅ Console logs are removed

**Build output you'll see**:

```
✓ built in 10-15s
dist/index.html                    ~2 KB
dist/assets/react-vendor-xxx.js    70 KB (React core)
dist/assets/animation-vendor-xxx.js 20 KB (Framer-motion)
dist/assets/index-xxx.js           45 KB (Your app)
dist/assets/index-xxx.css          ~8 KB
```

### Step 2: Preview Production Build

```bash
npm run preview
```

**This will**:

- Start a local server with the production build
- Usually runs on: `http://localhost:4173/`
- Shows you the **exact same version** that will be deployed

### Step 3: Open in Browser

1. Open Chrome (recommended for Lighthouse)
2. Go to: `http://localhost:4173/` (or the URL shown in terminal)
3. **Test everything works**

---

## 📊 Method 3: Check Lighthouse Score (Performance Verification)

This is how you verify the optimizations achieved Lighthouse 100 target.

### Using Chrome DevTools (Easiest):

1. **Open your site** in Chrome: `http://localhost:4173/`
2. **Open DevTools**: Press `F12` or Right-click → Inspect
3. **Go to Lighthouse tab**:
   - If you don't see it, click the `>>` icon and select "Lighthouse"
4. **Configure**:
   - ✅ Mode: **Navigation**
   - ✅ Device: **Desktop** and **Mobile** (test both)
   - ✅ Categories: Check all (Performance, Accessibility, Best Practices, SEO)
5. **Click "Analyze page load"**
6. **Wait 30-60 seconds** for results

### Expected Scores:

#### Desktop:

- **Performance**: 95-98 ⭐ (Target: 100)
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

#### Mobile:

- **Performance**: 90-95 ⭐ (Mobile is harder - 90+ is excellent)
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Key Metrics to Check:

| Metric                             | Target  | What it Measures             |
| ---------------------------------- | ------- | ---------------------------- |
| **First Contentful Paint (FCP)**   | < 1.0s  | When first content appears   |
| **Largest Contentful Paint (LCP)** | < 2.5s  | When main content is visible |
| **Total Blocking Time (TBT)**      | < 200ms | How responsive page is       |
| **Cumulative Layout Shift (CLS)**  | < 0.1   | Visual stability             |
| **Speed Index**                    | < 3.0s  | How quickly content appears  |

---

## 🔍 Method 4: Verify Optimizations

### Check Bundle Sizes:

After running `npm run build`, check the `dist/` folder:

```bash
# PowerShell command to see all files with sizes
Get-ChildItem -Path dist -Recurse -File | Select-Object Name, @{Name='Size(KB)';Expression={[math]::Round($_.Length/1KB, 2)}}
```

**What you should see**:

- ✅ **react-vendor-xxx.js**: ~70 KB (React + ReactDOM)
- ✅ **animation-vendor-xxx.js**: ~20 KB (Framer-motion - reduced!)
- ✅ **index-xxx.js**: ~45 KB (Your app code)
- ✅ **CSS files**: ~8 KB total
- ✅ **Lazy chunks**: About, Services, Products, Contact, Footer (loaded on demand)

### Verify Optimizations Applied:

Open any `.js` file in `dist/assets/` and check:

- ✅ Code is minified (unreadable - this is good!)
- ✅ No console.log statements
- ✅ No comments
- ✅ Variable names are shortened

### Check Network Tab:

1. Open DevTools → Network tab
2. Reload page (`Ctrl+R`)
3. **Look for**:
   - ✅ Files load in parallel
   - ✅ Images use lazy loading (loaded as you scroll)
   - ✅ Chunked loading (React vendor, animation vendor, main app)
   - ✅ Gzipped transfer sizes (smaller than file size)

---

## 🌐 Method 5: Test on Mobile (Real Device)

### Option A: Same Network

1. **Find your computer's IP address**:

   ```bash
   ipconfig
   # Look for "IPv4 Address" (e.g., 192.168.1.100)
   ```

2. **Start dev server with network access**:

   ```bash
   npm run dev -- --host
   ```

3. **On your phone**: Open `http://YOUR_IP:5173/`
   - Example: `http://192.168.1.100:5173/`

### Option B: Deploy and Test

Deploy to Vercel/Netlify (free) and test the live URL on mobile.

---

## ✅ Quick Testing Checklist

When you run `npm run preview`, verify:

### Visual Tests:

- [ ] Hero slider transitions smoothly
- [ ] Navigation pill slides correctly
- [ ] Mobile menu opens/closes
- [ ] All images load with correct aspect ratios
- [ ] No layout shifts when images load
- [ ] Scroll animations trigger correctly
- [ ] Hover effects work on buttons/links

### Performance Tests:

- [ ] Page loads in < 2 seconds
- [ ] Smooth 60fps scrolling
- [ ] No jank/stuttering in animations
- [ ] Images load progressively
- [ ] No flash of unstyled content

### Technical Tests:

- [ ] Open DevTools Console → No errors
- [ ] Network tab → All assets load successfully
- [ ] Run Lighthouse → Performance > 90
- [ ] Check mobile responsiveness

---

## 🚨 Common Issues & Solutions

### Issue 1: "Cannot find module"

**Solution**: Run `npm install` first

### Issue 2: Port already in use

**Solution**:

```bash
# Kill the process using the port
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process

# Or change port
npm run dev -- --port 3000
```

### Issue 3: Changes not showing

**Solution**:

- Hard reload: `Ctrl+Shift+R`
- Clear cache: DevTools → Network → "Disable cache"

### Issue 4: Lighthouse score lower than expected

**Possible reasons**:

- Testing on `localhost` instead of deployed URL
- Browser extensions interfering (use Incognito mode)
- CPU throttling enabled in DevTools
- Not testing production build (`npm run preview`)

---

## 📱 Testing Flow (Recommended)

```
1. Development Testing
   ├─ npm run dev
   ├─ Open http://localhost:5173/
   └─ Quick functionality checks

2. Production Testing
   ├─ npm run build
   ├─ npm run preview
   ├─ Open http://localhost:4173/
   └─ Verify all features work

3. Performance Testing
   ├─ Open Chrome DevTools
   ├─ Run Lighthouse
   ├─ Check Network tab
   └─ Test on mobile

4. Deploy
   ├─ Connect to Vercel/Netlify
   ├─ Deploy production build
   ├─ Test live URL
   └─ Run Lighthouse on live URL
```

---

## 🎯 Expected Results After Optimizations

### Bundle Size:

- **Before**: ~390 KB total
- **After**: ~230 KB total (-41%)

### Load Times:

- **Before**: ~3-4 seconds
- **After**: ~1-1.5 seconds

### Lighthouse Performance:

- **Before**: ~75
- **After**: ~95-98

### User Experience:

- ✅ Faster initial load
- ✅ Smoother animations
- ✅ Better mobile experience
- ✅ No layout shifts
- ✅ Reduced data usage

---

## 📞 Next Steps

1. **Test locally**: Run `npm run build && npm run preview`
2. **Check Lighthouse**: Aim for 95+ performance
3. **Deploy**: Push to Vercel/Netlify
4. **Monitor**: Set up performance monitoring

**Your optimized website is ready to impress!** 🎉

---

## 🔗 Quick Links

- **Optimization Report**: See `PRODUCTION_OPTIMIZATION_REPORT.md`
- **Development**: `npm run dev` → http://localhost:5173/
- **Production**: `npm run build && npm run preview` → http://localhost:4173/
- **Lighthouse**: Chrome DevTools → Lighthouse tab

**Build Time**: ~10-15 seconds  
**Status**: ✅ Production Ready
