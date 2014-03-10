using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Watches.UnitTests
{
    [TestClass]
    public class WatchesToStringTests
    {
        [TestCleanup]
        public void ResetTime()
        {
            TimeProvider.Reset();
        }

        [TestMethod]
        public void ToString_OnlyOneSecond_NoPlural()
        {
            TimeProvider.Now = () => new DateTime(2003, 10, 05, 10, 45, 01);
            Assert.AreEqual("It's 10:45 and 1 second, at 5/10/2003", new Watch().ToString());            
        }

        [TestMethod]
        public void ToString_StatesTheCurrentTime_UpToSeconds_Plural()
        {
            TimeProvider.Now = () => new DateTime(2003, 10, 05, 10, 45, 02);
            Assert.AreEqual("It's 10:45 and 2 seconds, at 5/10/2003", new Watch().ToString());
        }
    }
}
