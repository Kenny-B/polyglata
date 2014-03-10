#region

using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

#endregion

namespace Watches.UnitTests
{
    [TestClass]
    public class WatchesTests
    {
        [TestCleanup]
        public void ResetTimeProvider()
        {
            TimeProvider.Reset();
        }

        [TestMethod]
        public void Add_DoesNotMutate()
        {
            var nowWatch = new DateTime(2001, 10, 10, 11, 05, 02);
            TimeProvider.Now = () => nowWatch;
            var watch = new Watch();
            var nowFiveMinutesLater = new DateTime(2001, 10, 10, 11, 10, 59);
            TimeProvider.Now = () => nowFiveMinutesLater;
            var fiveMinutesLater = new Watch();

            var newWatch = watch + fiveMinutesLater;
            Assert.AreNotSame(newWatch, watch);
            Assert.AreNotSame(newWatch, fiveMinutesLater);
            Assert.AreEqual(nowWatch, watch.WhatTimeIsIt());
            Assert.AreEqual(nowFiveMinutesLater, fiveMinutesLater.WhatTimeIsIt());
        }

        [TestMethod]
        public void Add_PlusNull_DoesNotAlterDate()
        {
            var now = new DateTime(2001, 10, 10, 11, 05, 02);
            TimeProvider.Now = () => now;
            var watch = new Watch();

            Assert.AreEqual(now, (watch + null).WhatTimeIsIt());
            Assert.AreEqual(now, (null + watch).WhatTimeIsIt());
        }

        [TestMethod]
        public void Add_TotalMoreThanSixtySeconds_AsExtraMinute()
        {
            TimeProvider.Now = () => new DateTime(2001, 10, 10, 11, 05, 02);
            var watch = new Watch();
            TimeProvider.Now = () => new DateTime(2001, 10, 10, 11, 10, 59);
            var fiveMinutesLater = new Watch();

            var combined = watch + fiveMinutesLater;
            Assert.AreEqual(16, combined.WhatTimeIsIt().Minute);
            Assert.AreEqual(01, combined.WhatTimeIsIt().Second);            
        }

        [TestMethod]
        public void Add_TotalMoreThanSixtyMinutes_AsExtraHour()
        {
            TimeProvider.Now = () => new DateTime(2001, 10, 10, 1, 05, 00);
            var watch = new Watch();
            TimeProvider.Now = () => new DateTime(2001, 10, 10, 1, 56, 00);
            var fiveMinutesLater = new Watch();

            var combined = watch + fiveMinutesLater;
            Assert.AreEqual(3, combined.WhatTimeIsIt().Hour);
            Assert.AreEqual(01, combined.WhatTimeIsIt().Minute);
        }

        [TestMethod]
        public void Add_CombinesHourAndMinutesAndSeconds_IntoANewWatch()
        {
            TimeProvider.Now = () => new DateTime(2001, 10, 10, 11, 05, 00);
            var watch = new Watch();
            TimeProvider.Now = () => new DateTime(2001, 10, 10, 11, 10, 02);
            var fiveMinutesLater = new Watch();

            var combined = watch + fiveMinutesLater;
            Assert.AreEqual(22, combined.WhatTimeIsIt().Hour);
            Assert.AreEqual(15, combined.WhatTimeIsIt().Minute);
            Assert.AreEqual(02, combined.WhatTimeIsIt().Second);
        }

        [TestMethod]
        public void WhatTimeIsItNow_CanManipulateTimeWithoutProvidingIt()
        {
            TimeProvider.Now = () => new DateTime(2001, 10, 10);
            Assert.AreEqual(new DateTime(2001, 10, 10), new Watch().WhatTimeIsIt());
        }
    }
}