// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33004 = (function (f,fn_handler,meta33005){
this.f = f;
this.fn_handler = fn_handler;
this.meta33005 = meta33005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33004.cljs$lang$type = true;
cljs.core.async.t33004.cljs$lang$ctorStr = "cljs.core.async/t33004";
cljs.core.async.t33004.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33004");
});
cljs.core.async.t33004.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33006){var self__ = this;
var _33006__$1 = this;return self__.meta33005;
});
cljs.core.async.t33004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33006,meta33005__$1){var self__ = this;
var _33006__$1 = this;return (new cljs.core.async.t33004(self__.f,self__.fn_handler,meta33005__$1));
});
cljs.core.async.__GT_t33004 = (function __GT_t33004(f__$1,fn_handler__$1,meta33005){return (new cljs.core.async.t33004(f__$1,fn_handler__$1,meta33005));
});
}
return (new cljs.core.async.t33004(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33008 = buff;if(G__33008)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33008.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33008.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33008);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33008);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_33009 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33009);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33009);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33010 = n;var x_33011 = 0;while(true){
if((x_33011 < n__4248__auto___33010))
{(a[x_33011] = 0);
{
var G__33012 = (x_33011 + 1);
x_33011 = G__33012;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__33013 = (i + 1);
i = G__33013;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33017 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33017 = (function (flag,alt_flag,meta33018){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33018 = meta33018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33017.cljs$lang$type = true;
cljs.core.async.t33017.cljs$lang$ctorStr = "cljs.core.async/t33017";
cljs.core.async.t33017.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33017");
});
cljs.core.async.t33017.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33019){var self__ = this;
var _33019__$1 = this;return self__.meta33018;
});
cljs.core.async.t33017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33019,meta33018__$1){var self__ = this;
var _33019__$1 = this;return (new cljs.core.async.t33017(self__.flag,self__.alt_flag,meta33018__$1));
});
cljs.core.async.__GT_t33017 = (function __GT_t33017(flag__$1,alt_flag__$1,meta33018){return (new cljs.core.async.t33017(flag__$1,alt_flag__$1,meta33018));
});
}
return (new cljs.core.async.t33017(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33023 = (function (cb,flag,alt_handler,meta33024){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33024 = meta33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33023.cljs$lang$type = true;
cljs.core.async.t33023.cljs$lang$ctorStr = "cljs.core.async/t33023";
cljs.core.async.t33023.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33023");
});
cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33025){var self__ = this;
var _33025__$1 = this;return self__.meta33024;
});
cljs.core.async.t33023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33025,meta33024__$1){var self__ = this;
var _33025__$1 = this;return (new cljs.core.async.t33023(self__.cb,self__.flag,self__.alt_handler,meta33024__$1));
});
cljs.core.async.__GT_t33023 = (function __GT_t33023(cb__$1,flag__$1,alt_handler__$1,meta33024){return (new cljs.core.async.t33023(cb__$1,flag__$1,alt_handler__$1,meta33024));
});
}
return (new cljs.core.async.t33023(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33026_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33026_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__33027 = (i + 1);
i = G__33027;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__33028){var map__33030 = p__33028;var map__33030__$1 = ((cljs.core.seq_QMARK_.call(null,map__33030))?cljs.core.apply.call(null,cljs.core.hash_map,map__33030):map__33030);var opts = map__33030__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33028 = null;if (arguments.length > 1) {
  p__33028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33028);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33031){
var ports = cljs.core.first(arglist__33031);
var p__33028 = cljs.core.rest(arglist__33031);
return alts_BANG___delegate(ports,p__33028);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33039 = (function (ch,f,map_LT_,meta33040){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33040 = meta33040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33039.cljs$lang$type = true;
cljs.core.async.t33039.cljs$lang$ctorStr = "cljs.core.async/t33039";
cljs.core.async.t33039.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33039");
});
cljs.core.async.t33039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33042 = (function (fn1,_,meta33040,ch,f,map_LT_,meta33043){
this.fn1 = fn1;
this._ = _;
this.meta33040 = meta33040;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33043 = meta33043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33042.cljs$lang$type = true;
cljs.core.async.t33042.cljs$lang$ctorStr = "cljs.core.async/t33042";
cljs.core.async.t33042.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33042");
});
cljs.core.async.t33042.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33042.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33032_SHARP_){return f1.call(null,(((p1__33032_SHARP_ == null))?null:self__.f.call(null,p1__33032_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33044){var self__ = this;
var _33044__$1 = this;return self__.meta33043;
});
cljs.core.async.t33042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33044,meta33043__$1){var self__ = this;
var _33044__$1 = this;return (new cljs.core.async.t33042(self__.fn1,self__._,self__.meta33040,self__.ch,self__.f,self__.map_LT_,meta33043__$1));
});
cljs.core.async.__GT_t33042 = (function __GT_t33042(fn1__$1,___$2,meta33040__$1,ch__$2,f__$2,map_LT___$2,meta33043){return (new cljs.core.async.t33042(fn1__$1,___$2,meta33040__$1,ch__$2,f__$2,map_LT___$2,meta33043));
});
}
return (new cljs.core.async.t33042(fn1,___$1,self__.meta33040,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t33039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33041){var self__ = this;
var _33041__$1 = this;return self__.meta33040;
});
cljs.core.async.t33039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33041,meta33040__$1){var self__ = this;
var _33041__$1 = this;return (new cljs.core.async.t33039(self__.ch,self__.f,self__.map_LT_,meta33040__$1));
});
cljs.core.async.__GT_t33039 = (function __GT_t33039(ch__$1,f__$1,map_LT___$1,meta33040){return (new cljs.core.async.t33039(ch__$1,f__$1,map_LT___$1,meta33040));
});
}
return (new cljs.core.async.t33039(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33048 = (function (ch,f,map_GT_,meta33049){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33049 = meta33049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33048.cljs$lang$type = true;
cljs.core.async.t33048.cljs$lang$ctorStr = "cljs.core.async/t33048";
cljs.core.async.t33048.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33048");
});
cljs.core.async.t33048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33048.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33050){var self__ = this;
var _33050__$1 = this;return self__.meta33049;
});
cljs.core.async.t33048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33050,meta33049__$1){var self__ = this;
var _33050__$1 = this;return (new cljs.core.async.t33048(self__.ch,self__.f,self__.map_GT_,meta33049__$1));
});
cljs.core.async.__GT_t33048 = (function __GT_t33048(ch__$1,f__$1,map_GT___$1,meta33049){return (new cljs.core.async.t33048(ch__$1,f__$1,map_GT___$1,meta33049));
});
}
return (new cljs.core.async.t33048(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33054 = (function (ch,p,filter_GT_,meta33055){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33055 = meta33055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33054.cljs$lang$type = true;
cljs.core.async.t33054.cljs$lang$ctorStr = "cljs.core.async/t33054";
cljs.core.async.t33054.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33054");
});
cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33056){var self__ = this;
var _33056__$1 = this;return self__.meta33055;
});
cljs.core.async.t33054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33056,meta33055__$1){var self__ = this;
var _33056__$1 = this;return (new cljs.core.async.t33054(self__.ch,self__.p,self__.filter_GT_,meta33055__$1));
});
cljs.core.async.__GT_t33054 = (function __GT_t33054(ch__$1,p__$1,filter_GT___$1,meta33055){return (new cljs.core.async.t33054(ch__$1,p__$1,filter_GT___$1,meta33055));
});
}
return (new cljs.core.async.t33054(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33118){var state_val_33119 = (state_33118[1]);if((state_val_33119 === 1))
{var state_33118__$1 = state_33118;var statearr_33120_33140 = state_33118__$1;(statearr_33120_33140[2] = null);
(statearr_33120_33140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33119 === 2))
{var state_33118__$1 = state_33118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33118__$1,4,ch);
} else
{if((state_val_33119 === 3))
{var inst_33116 = (state_33118[2]);var state_33118__$1 = state_33118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33118__$1,inst_33116);
} else
{if((state_val_33119 === 4))
{var inst_33100 = (state_33118[7]);var inst_33100__$1 = (state_33118[2]);var inst_33101 = (inst_33100__$1 == null);var state_33118__$1 = (function (){var statearr_33121 = state_33118;(statearr_33121[7] = inst_33100__$1);
return statearr_33121;
})();if(cljs.core.truth_(inst_33101))
{var statearr_33122_33141 = state_33118__$1;(statearr_33122_33141[1] = 5);
} else
{var statearr_33123_33142 = state_33118__$1;(statearr_33123_33142[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33119 === 5))
{var inst_33103 = cljs.core.async.close_BANG_.call(null,out);var state_33118__$1 = state_33118;var statearr_33124_33143 = state_33118__$1;(statearr_33124_33143[2] = inst_33103);
(statearr_33124_33143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33119 === 6))
{var inst_33100 = (state_33118[7]);var inst_33105 = p.call(null,inst_33100);var state_33118__$1 = state_33118;if(cljs.core.truth_(inst_33105))
{var statearr_33125_33144 = state_33118__$1;(statearr_33125_33144[1] = 8);
} else
{var statearr_33126_33145 = state_33118__$1;(statearr_33126_33145[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33119 === 7))
{var inst_33114 = (state_33118[2]);var state_33118__$1 = state_33118;var statearr_33127_33146 = state_33118__$1;(statearr_33127_33146[2] = inst_33114);
(statearr_33127_33146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33119 === 8))
{var inst_33100 = (state_33118[7]);var state_33118__$1 = state_33118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33118__$1,11,out,inst_33100);
} else
{if((state_val_33119 === 9))
{var state_33118__$1 = state_33118;var statearr_33128_33147 = state_33118__$1;(statearr_33128_33147[2] = null);
(statearr_33128_33147[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33119 === 10))
{var inst_33111 = (state_33118[2]);var state_33118__$1 = (function (){var statearr_33129 = state_33118;(statearr_33129[8] = inst_33111);
return statearr_33129;
})();var statearr_33130_33148 = state_33118__$1;(statearr_33130_33148[2] = null);
(statearr_33130_33148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33119 === 11))
{var inst_33108 = (state_33118[2]);var state_33118__$1 = state_33118;var statearr_33131_33149 = state_33118__$1;(statearr_33131_33149[2] = inst_33108);
(statearr_33131_33149[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33135 = [null,null,null,null,null,null,null,null,null];(statearr_33135[0] = state_machine__5507__auto__);
(statearr_33135[1] = 1);
return statearr_33135;
});
var state_machine__5507__auto____1 = (function (state_33118){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33118);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33136){if((e33136 instanceof Object))
{var ex__5510__auto__ = e33136;var statearr_33137_33150 = state_33118;(statearr_33137_33150[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33118);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33151 = state_33118;
state_33118 = G__33151;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33118){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33138 = f__5522__auto__.call(null);(statearr_33138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33139);
return statearr_33138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33303){var state_val_33304 = (state_33303[1]);if((state_val_33304 === 1))
{var state_33303__$1 = state_33303;var statearr_33305_33342 = state_33303__$1;(statearr_33305_33342[2] = null);
(statearr_33305_33342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 2))
{var state_33303__$1 = state_33303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33303__$1,4,in$);
} else
{if((state_val_33304 === 3))
{var inst_33301 = (state_33303[2]);var state_33303__$1 = state_33303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33303__$1,inst_33301);
} else
{if((state_val_33304 === 4))
{var inst_33249 = (state_33303[7]);var inst_33249__$1 = (state_33303[2]);var inst_33250 = (inst_33249__$1 == null);var state_33303__$1 = (function (){var statearr_33306 = state_33303;(statearr_33306[7] = inst_33249__$1);
return statearr_33306;
})();if(cljs.core.truth_(inst_33250))
{var statearr_33307_33343 = state_33303__$1;(statearr_33307_33343[1] = 5);
} else
{var statearr_33308_33344 = state_33303__$1;(statearr_33308_33344[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 5))
{var inst_33252 = cljs.core.async.close_BANG_.call(null,out);var state_33303__$1 = state_33303;var statearr_33309_33345 = state_33303__$1;(statearr_33309_33345[2] = inst_33252);
(statearr_33309_33345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 6))
{var inst_33249 = (state_33303[7]);var inst_33254 = f.call(null,inst_33249);var inst_33259 = cljs.core.seq.call(null,inst_33254);var inst_33260 = inst_33259;var inst_33261 = null;var inst_33262 = 0;var inst_33263 = 0;var state_33303__$1 = (function (){var statearr_33310 = state_33303;(statearr_33310[8] = inst_33263);
(statearr_33310[9] = inst_33261);
(statearr_33310[10] = inst_33262);
(statearr_33310[11] = inst_33260);
return statearr_33310;
})();var statearr_33311_33346 = state_33303__$1;(statearr_33311_33346[2] = null);
(statearr_33311_33346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 7))
{var inst_33299 = (state_33303[2]);var state_33303__$1 = state_33303;var statearr_33312_33347 = state_33303__$1;(statearr_33312_33347[2] = inst_33299);
(statearr_33312_33347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 8))
{var inst_33263 = (state_33303[8]);var inst_33262 = (state_33303[10]);var inst_33265 = (inst_33263 < inst_33262);var inst_33266 = inst_33265;var state_33303__$1 = state_33303;if(cljs.core.truth_(inst_33266))
{var statearr_33313_33348 = state_33303__$1;(statearr_33313_33348[1] = 10);
} else
{var statearr_33314_33349 = state_33303__$1;(statearr_33314_33349[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 9))
{var inst_33296 = (state_33303[2]);var state_33303__$1 = (function (){var statearr_33315 = state_33303;(statearr_33315[12] = inst_33296);
return statearr_33315;
})();var statearr_33316_33350 = state_33303__$1;(statearr_33316_33350[2] = null);
(statearr_33316_33350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 10))
{var inst_33263 = (state_33303[8]);var inst_33261 = (state_33303[9]);var inst_33268 = cljs.core._nth.call(null,inst_33261,inst_33263);var state_33303__$1 = state_33303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33303__$1,13,out,inst_33268);
} else
{if((state_val_33304 === 11))
{var inst_33274 = (state_33303[13]);var inst_33260 = (state_33303[11]);var inst_33274__$1 = cljs.core.seq.call(null,inst_33260);var state_33303__$1 = (function (){var statearr_33320 = state_33303;(statearr_33320[13] = inst_33274__$1);
return statearr_33320;
})();if(inst_33274__$1)
{var statearr_33321_33351 = state_33303__$1;(statearr_33321_33351[1] = 14);
} else
{var statearr_33322_33352 = state_33303__$1;(statearr_33322_33352[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 12))
{var inst_33294 = (state_33303[2]);var state_33303__$1 = state_33303;var statearr_33323_33353 = state_33303__$1;(statearr_33323_33353[2] = inst_33294);
(statearr_33323_33353[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 13))
{var inst_33263 = (state_33303[8]);var inst_33261 = (state_33303[9]);var inst_33262 = (state_33303[10]);var inst_33260 = (state_33303[11]);var inst_33270 = (state_33303[2]);var inst_33271 = (inst_33263 + 1);var tmp33317 = inst_33261;var tmp33318 = inst_33262;var tmp33319 = inst_33260;var inst_33260__$1 = tmp33319;var inst_33261__$1 = tmp33317;var inst_33262__$1 = tmp33318;var inst_33263__$1 = inst_33271;var state_33303__$1 = (function (){var statearr_33324 = state_33303;(statearr_33324[14] = inst_33270);
(statearr_33324[8] = inst_33263__$1);
(statearr_33324[9] = inst_33261__$1);
(statearr_33324[10] = inst_33262__$1);
(statearr_33324[11] = inst_33260__$1);
return statearr_33324;
})();var statearr_33325_33354 = state_33303__$1;(statearr_33325_33354[2] = null);
(statearr_33325_33354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 14))
{var inst_33274 = (state_33303[13]);var inst_33276 = cljs.core.chunked_seq_QMARK_.call(null,inst_33274);var state_33303__$1 = state_33303;if(inst_33276)
{var statearr_33326_33355 = state_33303__$1;(statearr_33326_33355[1] = 17);
} else
{var statearr_33327_33356 = state_33303__$1;(statearr_33327_33356[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 15))
{var state_33303__$1 = state_33303;var statearr_33328_33357 = state_33303__$1;(statearr_33328_33357[2] = null);
(statearr_33328_33357[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 16))
{var inst_33292 = (state_33303[2]);var state_33303__$1 = state_33303;var statearr_33329_33358 = state_33303__$1;(statearr_33329_33358[2] = inst_33292);
(statearr_33329_33358[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 17))
{var inst_33274 = (state_33303[13]);var inst_33278 = cljs.core.chunk_first.call(null,inst_33274);var inst_33279 = cljs.core.chunk_rest.call(null,inst_33274);var inst_33280 = cljs.core.count.call(null,inst_33278);var inst_33260 = inst_33279;var inst_33261 = inst_33278;var inst_33262 = inst_33280;var inst_33263 = 0;var state_33303__$1 = (function (){var statearr_33330 = state_33303;(statearr_33330[8] = inst_33263);
(statearr_33330[9] = inst_33261);
(statearr_33330[10] = inst_33262);
(statearr_33330[11] = inst_33260);
return statearr_33330;
})();var statearr_33331_33359 = state_33303__$1;(statearr_33331_33359[2] = null);
(statearr_33331_33359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 18))
{var inst_33274 = (state_33303[13]);var inst_33283 = cljs.core.first.call(null,inst_33274);var state_33303__$1 = state_33303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33303__$1,20,out,inst_33283);
} else
{if((state_val_33304 === 19))
{var inst_33289 = (state_33303[2]);var state_33303__$1 = state_33303;var statearr_33332_33360 = state_33303__$1;(statearr_33332_33360[2] = inst_33289);
(statearr_33332_33360[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33304 === 20))
{var inst_33274 = (state_33303[13]);var inst_33285 = (state_33303[2]);var inst_33286 = cljs.core.next.call(null,inst_33274);var inst_33260 = inst_33286;var inst_33261 = null;var inst_33262 = 0;var inst_33263 = 0;var state_33303__$1 = (function (){var statearr_33333 = state_33303;(statearr_33333[15] = inst_33285);
(statearr_33333[8] = inst_33263);
(statearr_33333[9] = inst_33261);
(statearr_33333[10] = inst_33262);
(statearr_33333[11] = inst_33260);
return statearr_33333;
})();var statearr_33334_33361 = state_33303__$1;(statearr_33334_33361[2] = null);
(statearr_33334_33361[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33338[0] = state_machine__5507__auto__);
(statearr_33338[1] = 1);
return statearr_33338;
});
var state_machine__5507__auto____1 = (function (state_33303){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33339){if((e33339 instanceof Object))
{var ex__5510__auto__ = e33339;var statearr_33340_33362 = state_33303;(statearr_33340_33362[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33363 = state_33303;
state_33303 = G__33363;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33303){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33341 = f__5522__auto__.call(null);(statearr_33341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33444 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33423){var state_val_33424 = (state_33423[1]);if((state_val_33424 === 1))
{var state_33423__$1 = state_33423;var statearr_33425_33445 = state_33423__$1;(statearr_33425_33445[2] = null);
(statearr_33425_33445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33424 === 2))
{var state_33423__$1 = state_33423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,4,from);
} else
{if((state_val_33424 === 3))
{var inst_33421 = (state_33423[2]);var state_33423__$1 = state_33423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33423__$1,inst_33421);
} else
{if((state_val_33424 === 4))
{var inst_33406 = (state_33423[7]);var inst_33406__$1 = (state_33423[2]);var inst_33407 = (inst_33406__$1 == null);var state_33423__$1 = (function (){var statearr_33426 = state_33423;(statearr_33426[7] = inst_33406__$1);
return statearr_33426;
})();if(cljs.core.truth_(inst_33407))
{var statearr_33427_33446 = state_33423__$1;(statearr_33427_33446[1] = 5);
} else
{var statearr_33428_33447 = state_33423__$1;(statearr_33428_33447[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33424 === 5))
{var state_33423__$1 = state_33423;if(cljs.core.truth_(close_QMARK_))
{var statearr_33429_33448 = state_33423__$1;(statearr_33429_33448[1] = 8);
} else
{var statearr_33430_33449 = state_33423__$1;(statearr_33430_33449[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33424 === 6))
{var inst_33406 = (state_33423[7]);var state_33423__$1 = state_33423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33423__$1,11,to,inst_33406);
} else
{if((state_val_33424 === 7))
{var inst_33419 = (state_33423[2]);var state_33423__$1 = state_33423;var statearr_33431_33450 = state_33423__$1;(statearr_33431_33450[2] = inst_33419);
(statearr_33431_33450[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33424 === 8))
{var inst_33410 = cljs.core.async.close_BANG_.call(null,to);var state_33423__$1 = state_33423;var statearr_33432_33451 = state_33423__$1;(statearr_33432_33451[2] = inst_33410);
(statearr_33432_33451[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33424 === 9))
{var state_33423__$1 = state_33423;var statearr_33433_33452 = state_33423__$1;(statearr_33433_33452[2] = null);
(statearr_33433_33452[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33424 === 10))
{var inst_33413 = (state_33423[2]);var state_33423__$1 = state_33423;var statearr_33434_33453 = state_33423__$1;(statearr_33434_33453[2] = inst_33413);
(statearr_33434_33453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33424 === 11))
{var inst_33416 = (state_33423[2]);var state_33423__$1 = (function (){var statearr_33435 = state_33423;(statearr_33435[8] = inst_33416);
return statearr_33435;
})();var statearr_33436_33454 = state_33423__$1;(statearr_33436_33454[2] = null);
(statearr_33436_33454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33440 = [null,null,null,null,null,null,null,null,null];(statearr_33440[0] = state_machine__5507__auto__);
(statearr_33440[1] = 1);
return statearr_33440;
});
var state_machine__5507__auto____1 = (function (state_33423){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33423);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33441){if((e33441 instanceof Object))
{var ex__5510__auto__ = e33441;var statearr_33442_33455 = state_33423;(statearr_33442_33455[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33456 = state_33423;
state_33423 = G__33456;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33423){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33443 = f__5522__auto__.call(null);(statearr_33443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33444);
return statearr_33443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33543 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33521){var state_val_33522 = (state_33521[1]);if((state_val_33522 === 1))
{var state_33521__$1 = state_33521;var statearr_33523_33544 = state_33521__$1;(statearr_33523_33544[2] = null);
(statearr_33523_33544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 2))
{var state_33521__$1 = state_33521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33521__$1,4,ch);
} else
{if((state_val_33522 === 3))
{var inst_33519 = (state_33521[2]);var state_33521__$1 = state_33521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33521__$1,inst_33519);
} else
{if((state_val_33522 === 4))
{var inst_33502 = (state_33521[7]);var inst_33502__$1 = (state_33521[2]);var inst_33503 = (inst_33502__$1 == null);var state_33521__$1 = (function (){var statearr_33524 = state_33521;(statearr_33524[7] = inst_33502__$1);
return statearr_33524;
})();if(cljs.core.truth_(inst_33503))
{var statearr_33525_33545 = state_33521__$1;(statearr_33525_33545[1] = 5);
} else
{var statearr_33526_33546 = state_33521__$1;(statearr_33526_33546[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 5))
{var inst_33505 = cljs.core.async.close_BANG_.call(null,tc);var inst_33506 = cljs.core.async.close_BANG_.call(null,fc);var state_33521__$1 = (function (){var statearr_33527 = state_33521;(statearr_33527[8] = inst_33505);
return statearr_33527;
})();var statearr_33528_33547 = state_33521__$1;(statearr_33528_33547[2] = inst_33506);
(statearr_33528_33547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 6))
{var inst_33502 = (state_33521[7]);var inst_33508 = p.call(null,inst_33502);var state_33521__$1 = state_33521;if(cljs.core.truth_(inst_33508))
{var statearr_33529_33548 = state_33521__$1;(statearr_33529_33548[1] = 9);
} else
{var statearr_33530_33549 = state_33521__$1;(statearr_33530_33549[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 7))
{var inst_33517 = (state_33521[2]);var state_33521__$1 = state_33521;var statearr_33531_33550 = state_33521__$1;(statearr_33531_33550[2] = inst_33517);
(statearr_33531_33550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 8))
{var inst_33514 = (state_33521[2]);var state_33521__$1 = (function (){var statearr_33532 = state_33521;(statearr_33532[9] = inst_33514);
return statearr_33532;
})();var statearr_33533_33551 = state_33521__$1;(statearr_33533_33551[2] = null);
(statearr_33533_33551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 9))
{var state_33521__$1 = state_33521;var statearr_33534_33552 = state_33521__$1;(statearr_33534_33552[2] = tc);
(statearr_33534_33552[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 10))
{var state_33521__$1 = state_33521;var statearr_33535_33553 = state_33521__$1;(statearr_33535_33553[2] = fc);
(statearr_33535_33553[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33522 === 11))
{var inst_33502 = (state_33521[7]);var inst_33512 = (state_33521[2]);var state_33521__$1 = state_33521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33521__$1,8,inst_33512,inst_33502);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33539 = [null,null,null,null,null,null,null,null,null,null];(statearr_33539[0] = state_machine__5507__auto__);
(statearr_33539[1] = 1);
return statearr_33539;
});
var state_machine__5507__auto____1 = (function (state_33521){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33521);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33540){if((e33540 instanceof Object))
{var ex__5510__auto__ = e33540;var statearr_33541_33554 = state_33521;(statearr_33541_33554[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33555 = state_33521;
state_33521 = G__33555;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33521){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33542 = f__5522__auto__.call(null);(statearr_33542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33543);
return statearr_33542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33602){var state_val_33603 = (state_33602[1]);if((state_val_33603 === 7))
{var inst_33598 = (state_33602[2]);var state_33602__$1 = state_33602;var statearr_33604_33620 = state_33602__$1;(statearr_33604_33620[2] = inst_33598);
(statearr_33604_33620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 6))
{var inst_33591 = (state_33602[7]);var inst_33588 = (state_33602[8]);var inst_33595 = f.call(null,inst_33588,inst_33591);var inst_33588__$1 = inst_33595;var state_33602__$1 = (function (){var statearr_33605 = state_33602;(statearr_33605[8] = inst_33588__$1);
return statearr_33605;
})();var statearr_33606_33621 = state_33602__$1;(statearr_33606_33621[2] = null);
(statearr_33606_33621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 5))
{var inst_33588 = (state_33602[8]);var state_33602__$1 = state_33602;var statearr_33607_33622 = state_33602__$1;(statearr_33607_33622[2] = inst_33588);
(statearr_33607_33622[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 4))
{var inst_33591 = (state_33602[7]);var inst_33591__$1 = (state_33602[2]);var inst_33592 = (inst_33591__$1 == null);var state_33602__$1 = (function (){var statearr_33608 = state_33602;(statearr_33608[7] = inst_33591__$1);
return statearr_33608;
})();if(cljs.core.truth_(inst_33592))
{var statearr_33609_33623 = state_33602__$1;(statearr_33609_33623[1] = 5);
} else
{var statearr_33610_33624 = state_33602__$1;(statearr_33610_33624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 3))
{var inst_33600 = (state_33602[2]);var state_33602__$1 = state_33602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33602__$1,inst_33600);
} else
{if((state_val_33603 === 2))
{var state_33602__$1 = state_33602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33602__$1,4,ch);
} else
{if((state_val_33603 === 1))
{var inst_33588 = init;var state_33602__$1 = (function (){var statearr_33611 = state_33602;(statearr_33611[8] = inst_33588);
return statearr_33611;
})();var statearr_33612_33625 = state_33602__$1;(statearr_33612_33625[2] = null);
(statearr_33612_33625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33616 = [null,null,null,null,null,null,null,null,null];(statearr_33616[0] = state_machine__5507__auto__);
(statearr_33616[1] = 1);
return statearr_33616;
});
var state_machine__5507__auto____1 = (function (state_33602){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33617){if((e33617 instanceof Object))
{var ex__5510__auto__ = e33617;var statearr_33618_33626 = state_33602;(statearr_33618_33626[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33627 = state_33602;
state_33602 = G__33627;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33619 = f__5522__auto__.call(null);(statearr_33619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33689){var state_val_33690 = (state_33689[1]);if((state_val_33690 === 1))
{var inst_33669 = cljs.core.seq.call(null,coll);var inst_33670 = inst_33669;var state_33689__$1 = (function (){var statearr_33691 = state_33689;(statearr_33691[7] = inst_33670);
return statearr_33691;
})();var statearr_33692_33710 = state_33689__$1;(statearr_33692_33710[2] = null);
(statearr_33692_33710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33690 === 2))
{var inst_33670 = (state_33689[7]);var state_33689__$1 = state_33689;if(cljs.core.truth_(inst_33670))
{var statearr_33693_33711 = state_33689__$1;(statearr_33693_33711[1] = 4);
} else
{var statearr_33694_33712 = state_33689__$1;(statearr_33694_33712[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33690 === 3))
{var inst_33687 = (state_33689[2]);var state_33689__$1 = state_33689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33689__$1,inst_33687);
} else
{if((state_val_33690 === 4))
{var inst_33670 = (state_33689[7]);var inst_33673 = cljs.core.first.call(null,inst_33670);var state_33689__$1 = state_33689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33689__$1,7,ch,inst_33673);
} else
{if((state_val_33690 === 5))
{var state_33689__$1 = state_33689;if(cljs.core.truth_(close_QMARK_))
{var statearr_33695_33713 = state_33689__$1;(statearr_33695_33713[1] = 8);
} else
{var statearr_33696_33714 = state_33689__$1;(statearr_33696_33714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33690 === 6))
{var inst_33685 = (state_33689[2]);var state_33689__$1 = state_33689;var statearr_33697_33715 = state_33689__$1;(statearr_33697_33715[2] = inst_33685);
(statearr_33697_33715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33690 === 7))
{var inst_33670 = (state_33689[7]);var inst_33675 = (state_33689[2]);var inst_33676 = cljs.core.next.call(null,inst_33670);var inst_33670__$1 = inst_33676;var state_33689__$1 = (function (){var statearr_33698 = state_33689;(statearr_33698[7] = inst_33670__$1);
(statearr_33698[8] = inst_33675);
return statearr_33698;
})();var statearr_33699_33716 = state_33689__$1;(statearr_33699_33716[2] = null);
(statearr_33699_33716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33690 === 8))
{var inst_33680 = cljs.core.async.close_BANG_.call(null,ch);var state_33689__$1 = state_33689;var statearr_33700_33717 = state_33689__$1;(statearr_33700_33717[2] = inst_33680);
(statearr_33700_33717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33690 === 9))
{var state_33689__$1 = state_33689;var statearr_33701_33718 = state_33689__$1;(statearr_33701_33718[2] = null);
(statearr_33701_33718[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33690 === 10))
{var inst_33683 = (state_33689[2]);var state_33689__$1 = state_33689;var statearr_33702_33719 = state_33689__$1;(statearr_33702_33719[2] = inst_33683);
(statearr_33702_33719[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33706 = [null,null,null,null,null,null,null,null,null];(statearr_33706[0] = state_machine__5507__auto__);
(statearr_33706[1] = 1);
return statearr_33706;
});
var state_machine__5507__auto____1 = (function (state_33689){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33689);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33707){if((e33707 instanceof Object))
{var ex__5510__auto__ = e33707;var statearr_33708_33720 = state_33689;(statearr_33708_33720[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33689);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33721 = state_33689;
state_33689 = G__33721;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33689){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33709 = f__5522__auto__.call(null);(statearr_33709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj33723 = {};return obj33723;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj33725 = {};return obj33725;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33949 = (function (cs,ch,mult,meta33950){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33950 = meta33950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33949.cljs$lang$type = true;
cljs.core.async.t33949.cljs$lang$ctorStr = "cljs.core.async/t33949";
cljs.core.async.t33949.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33949");
});})(cs))
;
cljs.core.async.t33949.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33949.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33949.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33949.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33949.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33951){var self__ = this;
var _33951__$1 = this;return self__.meta33950;
});})(cs))
;
cljs.core.async.t33949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33951,meta33950__$1){var self__ = this;
var _33951__$1 = this;return (new cljs.core.async.t33949(self__.cs,self__.ch,self__.mult,meta33950__$1));
});})(cs))
;
cljs.core.async.__GT_t33949 = ((function (cs){
return (function __GT_t33949(cs__$1,ch__$1,mult__$1,meta33950){return (new cljs.core.async.t33949(cs__$1,ch__$1,mult__$1,meta33950));
});})(cs))
;
}
return (new cljs.core.async.t33949(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34172 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34086){var state_val_34087 = (state_34086[1]);if((state_val_34087 === 32))
{var inst_33954 = (state_34086[7]);var inst_34030 = (state_34086[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34086,31,Object,null,30);var inst_34037 = cljs.core.async.put_BANG_.call(null,inst_34030,inst_33954,done);var state_34086__$1 = state_34086;var statearr_34088_34173 = state_34086__$1;(statearr_34088_34173[2] = inst_34037);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 1))
{var state_34086__$1 = state_34086;var statearr_34089_34174 = state_34086__$1;(statearr_34089_34174[2] = null);
(statearr_34089_34174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 33))
{var inst_34043 = (state_34086[9]);var inst_34045 = cljs.core.chunked_seq_QMARK_.call(null,inst_34043);var state_34086__$1 = state_34086;if(inst_34045)
{var statearr_34090_34175 = state_34086__$1;(statearr_34090_34175[1] = 36);
} else
{var statearr_34091_34176 = state_34086__$1;(statearr_34091_34176[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 2))
{var state_34086__$1 = state_34086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34086__$1,4,ch);
} else
{if((state_val_34087 === 34))
{var state_34086__$1 = state_34086;var statearr_34092_34177 = state_34086__$1;(statearr_34092_34177[2] = null);
(statearr_34092_34177[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 3))
{var inst_34084 = (state_34086[2]);var state_34086__$1 = state_34086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34086__$1,inst_34084);
} else
{if((state_val_34087 === 35))
{var inst_34068 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34093_34178 = state_34086__$1;(statearr_34093_34178[2] = inst_34068);
(statearr_34093_34178[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 4))
{var inst_33954 = (state_34086[7]);var inst_33954__$1 = (state_34086[2]);var inst_33955 = (inst_33954__$1 == null);var state_34086__$1 = (function (){var statearr_34094 = state_34086;(statearr_34094[7] = inst_33954__$1);
return statearr_34094;
})();if(cljs.core.truth_(inst_33955))
{var statearr_34095_34179 = state_34086__$1;(statearr_34095_34179[1] = 5);
} else
{var statearr_34096_34180 = state_34086__$1;(statearr_34096_34180[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 36))
{var inst_34043 = (state_34086[9]);var inst_34047 = cljs.core.chunk_first.call(null,inst_34043);var inst_34048 = cljs.core.chunk_rest.call(null,inst_34043);var inst_34049 = cljs.core.count.call(null,inst_34047);var inst_34022 = inst_34048;var inst_34023 = inst_34047;var inst_34024 = inst_34049;var inst_34025 = 0;var state_34086__$1 = (function (){var statearr_34097 = state_34086;(statearr_34097[10] = inst_34022);
(statearr_34097[11] = inst_34023);
(statearr_34097[12] = inst_34025);
(statearr_34097[13] = inst_34024);
return statearr_34097;
})();var statearr_34098_34181 = state_34086__$1;(statearr_34098_34181[2] = null);
(statearr_34098_34181[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 5))
{var inst_33961 = cljs.core.deref.call(null,cs);var inst_33962 = cljs.core.seq.call(null,inst_33961);var inst_33963 = inst_33962;var inst_33964 = null;var inst_33965 = 0;var inst_33966 = 0;var state_34086__$1 = (function (){var statearr_34099 = state_34086;(statearr_34099[14] = inst_33966);
(statearr_34099[15] = inst_33963);
(statearr_34099[16] = inst_33964);
(statearr_34099[17] = inst_33965);
return statearr_34099;
})();var statearr_34100_34182 = state_34086__$1;(statearr_34100_34182[2] = null);
(statearr_34100_34182[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 37))
{var inst_34043 = (state_34086[9]);var inst_34052 = cljs.core.first.call(null,inst_34043);var state_34086__$1 = (function (){var statearr_34101 = state_34086;(statearr_34101[18] = inst_34052);
return statearr_34101;
})();var statearr_34102_34183 = state_34086__$1;(statearr_34102_34183[2] = null);
(statearr_34102_34183[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 6))
{var inst_34014 = (state_34086[19]);var inst_34013 = cljs.core.deref.call(null,cs);var inst_34014__$1 = cljs.core.keys.call(null,inst_34013);var inst_34015 = cljs.core.count.call(null,inst_34014__$1);var inst_34016 = cljs.core.reset_BANG_.call(null,dctr,inst_34015);var inst_34021 = cljs.core.seq.call(null,inst_34014__$1);var inst_34022 = inst_34021;var inst_34023 = null;var inst_34024 = 0;var inst_34025 = 0;var state_34086__$1 = (function (){var statearr_34103 = state_34086;(statearr_34103[20] = inst_34016);
(statearr_34103[19] = inst_34014__$1);
(statearr_34103[10] = inst_34022);
(statearr_34103[11] = inst_34023);
(statearr_34103[12] = inst_34025);
(statearr_34103[13] = inst_34024);
return statearr_34103;
})();var statearr_34104_34184 = state_34086__$1;(statearr_34104_34184[2] = null);
(statearr_34104_34184[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 38))
{var inst_34065 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34105_34185 = state_34086__$1;(statearr_34105_34185[2] = inst_34065);
(statearr_34105_34185[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 7))
{var inst_34082 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34106_34186 = state_34086__$1;(statearr_34106_34186[2] = inst_34082);
(statearr_34106_34186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 39))
{var inst_34043 = (state_34086[9]);var inst_34061 = (state_34086[2]);var inst_34062 = cljs.core.next.call(null,inst_34043);var inst_34022 = inst_34062;var inst_34023 = null;var inst_34024 = 0;var inst_34025 = 0;var state_34086__$1 = (function (){var statearr_34107 = state_34086;(statearr_34107[10] = inst_34022);
(statearr_34107[11] = inst_34023);
(statearr_34107[21] = inst_34061);
(statearr_34107[12] = inst_34025);
(statearr_34107[13] = inst_34024);
return statearr_34107;
})();var statearr_34108_34187 = state_34086__$1;(statearr_34108_34187[2] = null);
(statearr_34108_34187[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 8))
{var inst_33966 = (state_34086[14]);var inst_33965 = (state_34086[17]);var inst_33968 = (inst_33966 < inst_33965);var inst_33969 = inst_33968;var state_34086__$1 = state_34086;if(cljs.core.truth_(inst_33969))
{var statearr_34109_34188 = state_34086__$1;(statearr_34109_34188[1] = 10);
} else
{var statearr_34110_34189 = state_34086__$1;(statearr_34110_34189[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 40))
{var inst_34052 = (state_34086[18]);var inst_34053 = (state_34086[2]);var inst_34054 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34055 = cljs.core.async.untap_STAR_.call(null,m,inst_34052);var state_34086__$1 = (function (){var statearr_34111 = state_34086;(statearr_34111[22] = inst_34053);
(statearr_34111[23] = inst_34054);
return statearr_34111;
})();var statearr_34112_34190 = state_34086__$1;(statearr_34112_34190[2] = inst_34055);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 9))
{var inst_34011 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34113_34191 = state_34086__$1;(statearr_34113_34191[2] = inst_34011);
(statearr_34113_34191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 41))
{var inst_33954 = (state_34086[7]);var inst_34052 = (state_34086[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34086,40,Object,null,39);var inst_34059 = cljs.core.async.put_BANG_.call(null,inst_34052,inst_33954,done);var state_34086__$1 = state_34086;var statearr_34114_34192 = state_34086__$1;(statearr_34114_34192[2] = inst_34059);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 10))
{var inst_33966 = (state_34086[14]);var inst_33964 = (state_34086[16]);var inst_33972 = cljs.core._nth.call(null,inst_33964,inst_33966);var inst_33973 = cljs.core.nth.call(null,inst_33972,0,null);var inst_33974 = cljs.core.nth.call(null,inst_33972,1,null);var state_34086__$1 = (function (){var statearr_34115 = state_34086;(statearr_34115[24] = inst_33973);
return statearr_34115;
})();if(cljs.core.truth_(inst_33974))
{var statearr_34116_34193 = state_34086__$1;(statearr_34116_34193[1] = 13);
} else
{var statearr_34117_34194 = state_34086__$1;(statearr_34117_34194[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 42))
{var state_34086__$1 = state_34086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34086__$1,45,dchan);
} else
{if((state_val_34087 === 11))
{var inst_33983 = (state_34086[25]);var inst_33963 = (state_34086[15]);var inst_33983__$1 = cljs.core.seq.call(null,inst_33963);var state_34086__$1 = (function (){var statearr_34118 = state_34086;(statearr_34118[25] = inst_33983__$1);
return statearr_34118;
})();if(inst_33983__$1)
{var statearr_34119_34195 = state_34086__$1;(statearr_34119_34195[1] = 16);
} else
{var statearr_34120_34196 = state_34086__$1;(statearr_34120_34196[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 43))
{var state_34086__$1 = state_34086;var statearr_34121_34197 = state_34086__$1;(statearr_34121_34197[2] = null);
(statearr_34121_34197[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 12))
{var inst_34009 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34122_34198 = state_34086__$1;(statearr_34122_34198[2] = inst_34009);
(statearr_34122_34198[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 44))
{var inst_34079 = (state_34086[2]);var state_34086__$1 = (function (){var statearr_34123 = state_34086;(statearr_34123[26] = inst_34079);
return statearr_34123;
})();var statearr_34124_34199 = state_34086__$1;(statearr_34124_34199[2] = null);
(statearr_34124_34199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 13))
{var inst_33973 = (state_34086[24]);var inst_33976 = cljs.core.async.close_BANG_.call(null,inst_33973);var state_34086__$1 = state_34086;var statearr_34125_34200 = state_34086__$1;(statearr_34125_34200[2] = inst_33976);
(statearr_34125_34200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 45))
{var inst_34076 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34129_34201 = state_34086__$1;(statearr_34129_34201[2] = inst_34076);
(statearr_34129_34201[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 14))
{var state_34086__$1 = state_34086;var statearr_34130_34202 = state_34086__$1;(statearr_34130_34202[2] = null);
(statearr_34130_34202[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 15))
{var inst_33966 = (state_34086[14]);var inst_33963 = (state_34086[15]);var inst_33964 = (state_34086[16]);var inst_33965 = (state_34086[17]);var inst_33979 = (state_34086[2]);var inst_33980 = (inst_33966 + 1);var tmp34126 = inst_33963;var tmp34127 = inst_33964;var tmp34128 = inst_33965;var inst_33963__$1 = tmp34126;var inst_33964__$1 = tmp34127;var inst_33965__$1 = tmp34128;var inst_33966__$1 = inst_33980;var state_34086__$1 = (function (){var statearr_34131 = state_34086;(statearr_34131[14] = inst_33966__$1);
(statearr_34131[27] = inst_33979);
(statearr_34131[15] = inst_33963__$1);
(statearr_34131[16] = inst_33964__$1);
(statearr_34131[17] = inst_33965__$1);
return statearr_34131;
})();var statearr_34132_34203 = state_34086__$1;(statearr_34132_34203[2] = null);
(statearr_34132_34203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 16))
{var inst_33983 = (state_34086[25]);var inst_33985 = cljs.core.chunked_seq_QMARK_.call(null,inst_33983);var state_34086__$1 = state_34086;if(inst_33985)
{var statearr_34133_34204 = state_34086__$1;(statearr_34133_34204[1] = 19);
} else
{var statearr_34134_34205 = state_34086__$1;(statearr_34134_34205[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 17))
{var state_34086__$1 = state_34086;var statearr_34135_34206 = state_34086__$1;(statearr_34135_34206[2] = null);
(statearr_34135_34206[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 18))
{var inst_34007 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34136_34207 = state_34086__$1;(statearr_34136_34207[2] = inst_34007);
(statearr_34136_34207[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 19))
{var inst_33983 = (state_34086[25]);var inst_33987 = cljs.core.chunk_first.call(null,inst_33983);var inst_33988 = cljs.core.chunk_rest.call(null,inst_33983);var inst_33989 = cljs.core.count.call(null,inst_33987);var inst_33963 = inst_33988;var inst_33964 = inst_33987;var inst_33965 = inst_33989;var inst_33966 = 0;var state_34086__$1 = (function (){var statearr_34137 = state_34086;(statearr_34137[14] = inst_33966);
(statearr_34137[15] = inst_33963);
(statearr_34137[16] = inst_33964);
(statearr_34137[17] = inst_33965);
return statearr_34137;
})();var statearr_34138_34208 = state_34086__$1;(statearr_34138_34208[2] = null);
(statearr_34138_34208[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 20))
{var inst_33983 = (state_34086[25]);var inst_33993 = cljs.core.first.call(null,inst_33983);var inst_33994 = cljs.core.nth.call(null,inst_33993,0,null);var inst_33995 = cljs.core.nth.call(null,inst_33993,1,null);var state_34086__$1 = (function (){var statearr_34139 = state_34086;(statearr_34139[28] = inst_33994);
return statearr_34139;
})();if(cljs.core.truth_(inst_33995))
{var statearr_34140_34209 = state_34086__$1;(statearr_34140_34209[1] = 22);
} else
{var statearr_34141_34210 = state_34086__$1;(statearr_34141_34210[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 21))
{var inst_34004 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34142_34211 = state_34086__$1;(statearr_34142_34211[2] = inst_34004);
(statearr_34142_34211[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 22))
{var inst_33994 = (state_34086[28]);var inst_33997 = cljs.core.async.close_BANG_.call(null,inst_33994);var state_34086__$1 = state_34086;var statearr_34143_34212 = state_34086__$1;(statearr_34143_34212[2] = inst_33997);
(statearr_34143_34212[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 23))
{var state_34086__$1 = state_34086;var statearr_34144_34213 = state_34086__$1;(statearr_34144_34213[2] = null);
(statearr_34144_34213[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 24))
{var inst_33983 = (state_34086[25]);var inst_34000 = (state_34086[2]);var inst_34001 = cljs.core.next.call(null,inst_33983);var inst_33963 = inst_34001;var inst_33964 = null;var inst_33965 = 0;var inst_33966 = 0;var state_34086__$1 = (function (){var statearr_34145 = state_34086;(statearr_34145[29] = inst_34000);
(statearr_34145[14] = inst_33966);
(statearr_34145[15] = inst_33963);
(statearr_34145[16] = inst_33964);
(statearr_34145[17] = inst_33965);
return statearr_34145;
})();var statearr_34146_34214 = state_34086__$1;(statearr_34146_34214[2] = null);
(statearr_34146_34214[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 25))
{var inst_34025 = (state_34086[12]);var inst_34024 = (state_34086[13]);var inst_34027 = (inst_34025 < inst_34024);var inst_34028 = inst_34027;var state_34086__$1 = state_34086;if(cljs.core.truth_(inst_34028))
{var statearr_34147_34215 = state_34086__$1;(statearr_34147_34215[1] = 27);
} else
{var statearr_34148_34216 = state_34086__$1;(statearr_34148_34216[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 26))
{var inst_34014 = (state_34086[19]);var inst_34072 = (state_34086[2]);var inst_34073 = cljs.core.seq.call(null,inst_34014);var state_34086__$1 = (function (){var statearr_34149 = state_34086;(statearr_34149[30] = inst_34072);
return statearr_34149;
})();if(inst_34073)
{var statearr_34150_34217 = state_34086__$1;(statearr_34150_34217[1] = 42);
} else
{var statearr_34151_34218 = state_34086__$1;(statearr_34151_34218[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 27))
{var inst_34023 = (state_34086[11]);var inst_34025 = (state_34086[12]);var inst_34030 = cljs.core._nth.call(null,inst_34023,inst_34025);var state_34086__$1 = (function (){var statearr_34152 = state_34086;(statearr_34152[8] = inst_34030);
return statearr_34152;
})();var statearr_34153_34219 = state_34086__$1;(statearr_34153_34219[2] = null);
(statearr_34153_34219[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 28))
{var inst_34043 = (state_34086[9]);var inst_34022 = (state_34086[10]);var inst_34043__$1 = cljs.core.seq.call(null,inst_34022);var state_34086__$1 = (function (){var statearr_34157 = state_34086;(statearr_34157[9] = inst_34043__$1);
return statearr_34157;
})();if(inst_34043__$1)
{var statearr_34158_34220 = state_34086__$1;(statearr_34158_34220[1] = 33);
} else
{var statearr_34159_34221 = state_34086__$1;(statearr_34159_34221[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 29))
{var inst_34070 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34160_34222 = state_34086__$1;(statearr_34160_34222[2] = inst_34070);
(statearr_34160_34222[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 30))
{var inst_34022 = (state_34086[10]);var inst_34023 = (state_34086[11]);var inst_34025 = (state_34086[12]);var inst_34024 = (state_34086[13]);var inst_34039 = (state_34086[2]);var inst_34040 = (inst_34025 + 1);var tmp34154 = inst_34022;var tmp34155 = inst_34023;var tmp34156 = inst_34024;var inst_34022__$1 = tmp34154;var inst_34023__$1 = tmp34155;var inst_34024__$1 = tmp34156;var inst_34025__$1 = inst_34040;var state_34086__$1 = (function (){var statearr_34161 = state_34086;(statearr_34161[31] = inst_34039);
(statearr_34161[10] = inst_34022__$1);
(statearr_34161[11] = inst_34023__$1);
(statearr_34161[12] = inst_34025__$1);
(statearr_34161[13] = inst_34024__$1);
return statearr_34161;
})();var statearr_34162_34223 = state_34086__$1;(statearr_34162_34223[2] = null);
(statearr_34162_34223[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 31))
{var inst_34030 = (state_34086[8]);var inst_34031 = (state_34086[2]);var inst_34032 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34033 = cljs.core.async.untap_STAR_.call(null,m,inst_34030);var state_34086__$1 = (function (){var statearr_34163 = state_34086;(statearr_34163[32] = inst_34031);
(statearr_34163[33] = inst_34032);
return statearr_34163;
})();var statearr_34164_34224 = state_34086__$1;(statearr_34164_34224[2] = inst_34033);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34168[0] = state_machine__5507__auto__);
(statearr_34168[1] = 1);
return statearr_34168;
});
var state_machine__5507__auto____1 = (function (state_34086){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34086);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34169){if((e34169 instanceof Object))
{var ex__5510__auto__ = e34169;var statearr_34170_34225 = state_34086;(statearr_34170_34225[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34226 = state_34086;
state_34086 = G__34226;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34086){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34171 = f__5522__auto__.call(null);(statearr_34171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34172);
return statearr_34171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj34228 = {};return obj34228;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t34338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34338 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34339){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta34339 = meta34339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34338.cljs$lang$type = true;
cljs.core.async.t34338.cljs$lang$ctorStr = "cljs.core.async/t34338";
cljs.core.async.t34338.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34338");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34338.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34340){var self__ = this;
var _34340__$1 = this;return self__.meta34339;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34340,meta34339__$1){var self__ = this;
var _34340__$1 = this;return (new cljs.core.async.t34338(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34339__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34338 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34338(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34339){return (new cljs.core.async.t34338(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34339));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34338(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34405){var state_val_34406 = (state_34405[1]);if((state_val_34406 === 1))
{var inst_34344 = (state_34405[7]);var inst_34344__$1 = calc_state.call(null);var inst_34345 = cljs.core.seq_QMARK_.call(null,inst_34344__$1);var state_34405__$1 = (function (){var statearr_34407 = state_34405;(statearr_34407[7] = inst_34344__$1);
return statearr_34407;
})();if(inst_34345)
{var statearr_34408_34448 = state_34405__$1;(statearr_34408_34448[1] = 2);
} else
{var statearr_34409_34449 = state_34405__$1;(statearr_34409_34449[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 2))
{var inst_34344 = (state_34405[7]);var inst_34347 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34344);var state_34405__$1 = state_34405;var statearr_34410_34450 = state_34405__$1;(statearr_34410_34450[2] = inst_34347);
(statearr_34410_34450[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 3))
{var inst_34344 = (state_34405[7]);var state_34405__$1 = state_34405;var statearr_34411_34451 = state_34405__$1;(statearr_34411_34451[2] = inst_34344);
(statearr_34411_34451[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 4))
{var inst_34344 = (state_34405[7]);var inst_34350 = (state_34405[2]);var inst_34351 = cljs.core.get.call(null,inst_34350,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34352 = cljs.core.get.call(null,inst_34350,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34353 = cljs.core.get.call(null,inst_34350,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34354 = inst_34344;var state_34405__$1 = (function (){var statearr_34412 = state_34405;(statearr_34412[8] = inst_34354);
(statearr_34412[9] = inst_34352);
(statearr_34412[10] = inst_34353);
(statearr_34412[11] = inst_34351);
return statearr_34412;
})();var statearr_34413_34452 = state_34405__$1;(statearr_34413_34452[2] = null);
(statearr_34413_34452[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 5))
{var inst_34354 = (state_34405[8]);var inst_34357 = cljs.core.seq_QMARK_.call(null,inst_34354);var state_34405__$1 = state_34405;if(inst_34357)
{var statearr_34414_34453 = state_34405__$1;(statearr_34414_34453[1] = 7);
} else
{var statearr_34415_34454 = state_34405__$1;(statearr_34415_34454[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 6))
{var inst_34403 = (state_34405[2]);var state_34405__$1 = state_34405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34405__$1,inst_34403);
} else
{if((state_val_34406 === 7))
{var inst_34354 = (state_34405[8]);var inst_34359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34354);var state_34405__$1 = state_34405;var statearr_34416_34455 = state_34405__$1;(statearr_34416_34455[2] = inst_34359);
(statearr_34416_34455[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 8))
{var inst_34354 = (state_34405[8]);var state_34405__$1 = state_34405;var statearr_34417_34456 = state_34405__$1;(statearr_34417_34456[2] = inst_34354);
(statearr_34417_34456[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 9))
{var inst_34362 = (state_34405[12]);var inst_34362__$1 = (state_34405[2]);var inst_34363 = cljs.core.get.call(null,inst_34362__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34364 = cljs.core.get.call(null,inst_34362__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34365 = cljs.core.get.call(null,inst_34362__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34405__$1 = (function (){var statearr_34418 = state_34405;(statearr_34418[13] = inst_34364);
(statearr_34418[12] = inst_34362__$1);
(statearr_34418[14] = inst_34365);
return statearr_34418;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34405__$1,10,inst_34363);
} else
{if((state_val_34406 === 10))
{var inst_34369 = (state_34405[15]);var inst_34370 = (state_34405[16]);var inst_34368 = (state_34405[2]);var inst_34369__$1 = cljs.core.nth.call(null,inst_34368,0,null);var inst_34370__$1 = cljs.core.nth.call(null,inst_34368,1,null);var inst_34371 = (inst_34369__$1 == null);var inst_34372 = cljs.core._EQ_.call(null,inst_34370__$1,change);var inst_34373 = (inst_34371) || (inst_34372);var state_34405__$1 = (function (){var statearr_34419 = state_34405;(statearr_34419[15] = inst_34369__$1);
(statearr_34419[16] = inst_34370__$1);
return statearr_34419;
})();if(cljs.core.truth_(inst_34373))
{var statearr_34420_34457 = state_34405__$1;(statearr_34420_34457[1] = 11);
} else
{var statearr_34421_34458 = state_34405__$1;(statearr_34421_34458[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 11))
{var inst_34369 = (state_34405[15]);var inst_34375 = (inst_34369 == null);var state_34405__$1 = state_34405;if(cljs.core.truth_(inst_34375))
{var statearr_34422_34459 = state_34405__$1;(statearr_34422_34459[1] = 14);
} else
{var statearr_34423_34460 = state_34405__$1;(statearr_34423_34460[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 12))
{var inst_34365 = (state_34405[14]);var inst_34370 = (state_34405[16]);var inst_34384 = (state_34405[17]);var inst_34384__$1 = inst_34365.call(null,inst_34370);var state_34405__$1 = (function (){var statearr_34424 = state_34405;(statearr_34424[17] = inst_34384__$1);
return statearr_34424;
})();if(cljs.core.truth_(inst_34384__$1))
{var statearr_34425_34461 = state_34405__$1;(statearr_34425_34461[1] = 17);
} else
{var statearr_34426_34462 = state_34405__$1;(statearr_34426_34462[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 13))
{var inst_34401 = (state_34405[2]);var state_34405__$1 = state_34405;var statearr_34427_34463 = state_34405__$1;(statearr_34427_34463[2] = inst_34401);
(statearr_34427_34463[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 14))
{var inst_34370 = (state_34405[16]);var inst_34377 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34370);var state_34405__$1 = state_34405;var statearr_34428_34464 = state_34405__$1;(statearr_34428_34464[2] = inst_34377);
(statearr_34428_34464[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 15))
{var state_34405__$1 = state_34405;var statearr_34429_34465 = state_34405__$1;(statearr_34429_34465[2] = null);
(statearr_34429_34465[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 16))
{var inst_34380 = (state_34405[2]);var inst_34381 = calc_state.call(null);var inst_34354 = inst_34381;var state_34405__$1 = (function (){var statearr_34430 = state_34405;(statearr_34430[18] = inst_34380);
(statearr_34430[8] = inst_34354);
return statearr_34430;
})();var statearr_34431_34466 = state_34405__$1;(statearr_34431_34466[2] = null);
(statearr_34431_34466[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 17))
{var inst_34384 = (state_34405[17]);var state_34405__$1 = state_34405;var statearr_34432_34467 = state_34405__$1;(statearr_34432_34467[2] = inst_34384);
(statearr_34432_34467[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 18))
{var inst_34364 = (state_34405[13]);var inst_34365 = (state_34405[14]);var inst_34370 = (state_34405[16]);var inst_34387 = cljs.core.empty_QMARK_.call(null,inst_34365);var inst_34388 = inst_34364.call(null,inst_34370);var inst_34389 = cljs.core.not.call(null,inst_34388);var inst_34390 = (inst_34387) && (inst_34389);var state_34405__$1 = state_34405;var statearr_34433_34468 = state_34405__$1;(statearr_34433_34468[2] = inst_34390);
(statearr_34433_34468[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 19))
{var inst_34392 = (state_34405[2]);var state_34405__$1 = state_34405;if(cljs.core.truth_(inst_34392))
{var statearr_34434_34469 = state_34405__$1;(statearr_34434_34469[1] = 20);
} else
{var statearr_34435_34470 = state_34405__$1;(statearr_34435_34470[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 20))
{var inst_34369 = (state_34405[15]);var state_34405__$1 = state_34405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34405__$1,23,out,inst_34369);
} else
{if((state_val_34406 === 21))
{var state_34405__$1 = state_34405;var statearr_34436_34471 = state_34405__$1;(statearr_34436_34471[2] = null);
(statearr_34436_34471[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 22))
{var inst_34362 = (state_34405[12]);var inst_34398 = (state_34405[2]);var inst_34354 = inst_34362;var state_34405__$1 = (function (){var statearr_34437 = state_34405;(statearr_34437[8] = inst_34354);
(statearr_34437[19] = inst_34398);
return statearr_34437;
})();var statearr_34438_34472 = state_34405__$1;(statearr_34438_34472[2] = null);
(statearr_34438_34472[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34406 === 23))
{var inst_34395 = (state_34405[2]);var state_34405__$1 = state_34405;var statearr_34439_34473 = state_34405__$1;(statearr_34439_34473[2] = inst_34395);
(statearr_34439_34473[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34443[0] = state_machine__5507__auto__);
(statearr_34443[1] = 1);
return statearr_34443;
});
var state_machine__5507__auto____1 = (function (state_34405){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34405);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34444){if((e34444 instanceof Object))
{var ex__5510__auto__ = e34444;var statearr_34445_34474 = state_34405;(statearr_34445_34474[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34405);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34475 = state_34405;
state_34405 = G__34475;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34405){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34446 = f__5522__auto__.call(null);(statearr_34446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34447);
return statearr_34446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj34477 = {};return obj34477;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__34478_SHARP_){if(cljs.core.truth_(p1__34478_SHARP_.call(null,topic)))
{return p1__34478_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34478_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34603 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34604){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34604 = meta34604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34603.cljs$lang$type = true;
cljs.core.async.t34603.cljs$lang$ctorStr = "cljs.core.async/t34603";
cljs.core.async.t34603.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34603");
});})(mults,ensure_mult))
;
cljs.core.async.t34603.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34603.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34603.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34603.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34605){var self__ = this;
var _34605__$1 = this;return self__.meta34604;
});})(mults,ensure_mult))
;
cljs.core.async.t34603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34605,meta34604__$1){var self__ = this;
var _34605__$1 = this;return (new cljs.core.async.t34603(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34604__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34603 = ((function (mults,ensure_mult){
return (function __GT_t34603(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34604){return (new cljs.core.async.t34603(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34604));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34603(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34679){var state_val_34680 = (state_34679[1]);if((state_val_34680 === 1))
{var state_34679__$1 = state_34679;var statearr_34681_34728 = state_34679__$1;(statearr_34681_34728[2] = null);
(statearr_34681_34728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 2))
{var state_34679__$1 = state_34679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34679__$1,4,ch);
} else
{if((state_val_34680 === 3))
{var inst_34677 = (state_34679[2]);var state_34679__$1 = state_34679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34679__$1,inst_34677);
} else
{if((state_val_34680 === 4))
{var inst_34608 = (state_34679[7]);var inst_34608__$1 = (state_34679[2]);var inst_34609 = (inst_34608__$1 == null);var state_34679__$1 = (function (){var statearr_34682 = state_34679;(statearr_34682[7] = inst_34608__$1);
return statearr_34682;
})();if(cljs.core.truth_(inst_34609))
{var statearr_34683_34729 = state_34679__$1;(statearr_34683_34729[1] = 5);
} else
{var statearr_34684_34730 = state_34679__$1;(statearr_34684_34730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 5))
{var inst_34615 = cljs.core.deref.call(null,mults);var inst_34616 = cljs.core.vals.call(null,inst_34615);var inst_34617 = cljs.core.seq.call(null,inst_34616);var inst_34618 = inst_34617;var inst_34619 = null;var inst_34620 = 0;var inst_34621 = 0;var state_34679__$1 = (function (){var statearr_34685 = state_34679;(statearr_34685[8] = inst_34618);
(statearr_34685[9] = inst_34619);
(statearr_34685[10] = inst_34621);
(statearr_34685[11] = inst_34620);
return statearr_34685;
})();var statearr_34686_34731 = state_34679__$1;(statearr_34686_34731[2] = null);
(statearr_34686_34731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 6))
{var inst_34656 = (state_34679[12]);var inst_34608 = (state_34679[7]);var inst_34658 = (state_34679[13]);var inst_34656__$1 = topic_fn.call(null,inst_34608);var inst_34657 = cljs.core.deref.call(null,mults);var inst_34658__$1 = cljs.core.get.call(null,inst_34657,inst_34656__$1);var state_34679__$1 = (function (){var statearr_34687 = state_34679;(statearr_34687[12] = inst_34656__$1);
(statearr_34687[13] = inst_34658__$1);
return statearr_34687;
})();if(cljs.core.truth_(inst_34658__$1))
{var statearr_34688_34732 = state_34679__$1;(statearr_34688_34732[1] = 19);
} else
{var statearr_34689_34733 = state_34679__$1;(statearr_34689_34733[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 7))
{var inst_34675 = (state_34679[2]);var state_34679__$1 = state_34679;var statearr_34690_34734 = state_34679__$1;(statearr_34690_34734[2] = inst_34675);
(statearr_34690_34734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 8))
{var inst_34621 = (state_34679[10]);var inst_34620 = (state_34679[11]);var inst_34623 = (inst_34621 < inst_34620);var inst_34624 = inst_34623;var state_34679__$1 = state_34679;if(cljs.core.truth_(inst_34624))
{var statearr_34694_34735 = state_34679__$1;(statearr_34694_34735[1] = 10);
} else
{var statearr_34695_34736 = state_34679__$1;(statearr_34695_34736[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 9))
{var inst_34654 = (state_34679[2]);var state_34679__$1 = state_34679;var statearr_34696_34737 = state_34679__$1;(statearr_34696_34737[2] = inst_34654);
(statearr_34696_34737[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 10))
{var inst_34618 = (state_34679[8]);var inst_34619 = (state_34679[9]);var inst_34621 = (state_34679[10]);var inst_34620 = (state_34679[11]);var inst_34626 = cljs.core._nth.call(null,inst_34619,inst_34621);var inst_34627 = cljs.core.async.muxch_STAR_.call(null,inst_34626);var inst_34628 = cljs.core.async.close_BANG_.call(null,inst_34627);var inst_34629 = (inst_34621 + 1);var tmp34691 = inst_34618;var tmp34692 = inst_34619;var tmp34693 = inst_34620;var inst_34618__$1 = tmp34691;var inst_34619__$1 = tmp34692;var inst_34620__$1 = tmp34693;var inst_34621__$1 = inst_34629;var state_34679__$1 = (function (){var statearr_34697 = state_34679;(statearr_34697[8] = inst_34618__$1);
(statearr_34697[9] = inst_34619__$1);
(statearr_34697[14] = inst_34628);
(statearr_34697[10] = inst_34621__$1);
(statearr_34697[11] = inst_34620__$1);
return statearr_34697;
})();var statearr_34698_34738 = state_34679__$1;(statearr_34698_34738[2] = null);
(statearr_34698_34738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 11))
{var inst_34618 = (state_34679[8]);var inst_34632 = (state_34679[15]);var inst_34632__$1 = cljs.core.seq.call(null,inst_34618);var state_34679__$1 = (function (){var statearr_34699 = state_34679;(statearr_34699[15] = inst_34632__$1);
return statearr_34699;
})();if(inst_34632__$1)
{var statearr_34700_34739 = state_34679__$1;(statearr_34700_34739[1] = 13);
} else
{var statearr_34701_34740 = state_34679__$1;(statearr_34701_34740[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 12))
{var inst_34652 = (state_34679[2]);var state_34679__$1 = state_34679;var statearr_34702_34741 = state_34679__$1;(statearr_34702_34741[2] = inst_34652);
(statearr_34702_34741[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 13))
{var inst_34632 = (state_34679[15]);var inst_34634 = cljs.core.chunked_seq_QMARK_.call(null,inst_34632);var state_34679__$1 = state_34679;if(inst_34634)
{var statearr_34703_34742 = state_34679__$1;(statearr_34703_34742[1] = 16);
} else
{var statearr_34704_34743 = state_34679__$1;(statearr_34704_34743[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 14))
{var state_34679__$1 = state_34679;var statearr_34705_34744 = state_34679__$1;(statearr_34705_34744[2] = null);
(statearr_34705_34744[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 15))
{var inst_34650 = (state_34679[2]);var state_34679__$1 = state_34679;var statearr_34706_34745 = state_34679__$1;(statearr_34706_34745[2] = inst_34650);
(statearr_34706_34745[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 16))
{var inst_34632 = (state_34679[15]);var inst_34636 = cljs.core.chunk_first.call(null,inst_34632);var inst_34637 = cljs.core.chunk_rest.call(null,inst_34632);var inst_34638 = cljs.core.count.call(null,inst_34636);var inst_34618 = inst_34637;var inst_34619 = inst_34636;var inst_34620 = inst_34638;var inst_34621 = 0;var state_34679__$1 = (function (){var statearr_34707 = state_34679;(statearr_34707[8] = inst_34618);
(statearr_34707[9] = inst_34619);
(statearr_34707[10] = inst_34621);
(statearr_34707[11] = inst_34620);
return statearr_34707;
})();var statearr_34708_34746 = state_34679__$1;(statearr_34708_34746[2] = null);
(statearr_34708_34746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 17))
{var inst_34632 = (state_34679[15]);var inst_34641 = cljs.core.first.call(null,inst_34632);var inst_34642 = cljs.core.async.muxch_STAR_.call(null,inst_34641);var inst_34643 = cljs.core.async.close_BANG_.call(null,inst_34642);var inst_34644 = cljs.core.next.call(null,inst_34632);var inst_34618 = inst_34644;var inst_34619 = null;var inst_34620 = 0;var inst_34621 = 0;var state_34679__$1 = (function (){var statearr_34709 = state_34679;(statearr_34709[8] = inst_34618);
(statearr_34709[9] = inst_34619);
(statearr_34709[16] = inst_34643);
(statearr_34709[10] = inst_34621);
(statearr_34709[11] = inst_34620);
return statearr_34709;
})();var statearr_34710_34747 = state_34679__$1;(statearr_34710_34747[2] = null);
(statearr_34710_34747[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 18))
{var inst_34647 = (state_34679[2]);var state_34679__$1 = state_34679;var statearr_34711_34748 = state_34679__$1;(statearr_34711_34748[2] = inst_34647);
(statearr_34711_34748[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 19))
{var state_34679__$1 = state_34679;var statearr_34712_34749 = state_34679__$1;(statearr_34712_34749[2] = null);
(statearr_34712_34749[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 20))
{var state_34679__$1 = state_34679;var statearr_34713_34750 = state_34679__$1;(statearr_34713_34750[2] = null);
(statearr_34713_34750[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 21))
{var inst_34672 = (state_34679[2]);var state_34679__$1 = (function (){var statearr_34714 = state_34679;(statearr_34714[17] = inst_34672);
return statearr_34714;
})();var statearr_34715_34751 = state_34679__$1;(statearr_34715_34751[2] = null);
(statearr_34715_34751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 22))
{var inst_34669 = (state_34679[2]);var state_34679__$1 = state_34679;var statearr_34716_34752 = state_34679__$1;(statearr_34716_34752[2] = inst_34669);
(statearr_34716_34752[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 23))
{var inst_34656 = (state_34679[12]);var inst_34660 = (state_34679[2]);var inst_34661 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34656);var state_34679__$1 = (function (){var statearr_34717 = state_34679;(statearr_34717[18] = inst_34660);
return statearr_34717;
})();var statearr_34718_34753 = state_34679__$1;(statearr_34718_34753[2] = inst_34661);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34679__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34680 === 24))
{var inst_34608 = (state_34679[7]);var inst_34658 = (state_34679[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34679,23,Object,null,22);var inst_34665 = cljs.core.async.muxch_STAR_.call(null,inst_34658);var state_34679__$1 = state_34679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34679__$1,25,inst_34665,inst_34608);
} else
{if((state_val_34680 === 25))
{var inst_34667 = (state_34679[2]);var state_34679__$1 = state_34679;var statearr_34719_34754 = state_34679__$1;(statearr_34719_34754[2] = inst_34667);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34679__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34723[0] = state_machine__5507__auto__);
(statearr_34723[1] = 1);
return statearr_34723;
});
var state_machine__5507__auto____1 = (function (state_34679){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34724){if((e34724 instanceof Object))
{var ex__5510__auto__ = e34724;var statearr_34725_34755 = state_34679;(statearr_34725_34755[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34756 = state_34679;
state_34679 = G__34756;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34679){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34726 = f__5522__auto__.call(null);(statearr_34726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34727);
return statearr_34726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___34893 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34863){var state_val_34864 = (state_34863[1]);if((state_val_34864 === 1))
{var state_34863__$1 = state_34863;var statearr_34865_34894 = state_34863__$1;(statearr_34865_34894[2] = null);
(statearr_34865_34894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 2))
{var inst_34826 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34827 = 0;var state_34863__$1 = (function (){var statearr_34866 = state_34863;(statearr_34866[7] = inst_34827);
(statearr_34866[8] = inst_34826);
return statearr_34866;
})();var statearr_34867_34895 = state_34863__$1;(statearr_34867_34895[2] = null);
(statearr_34867_34895[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 3))
{var inst_34861 = (state_34863[2]);var state_34863__$1 = state_34863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34863__$1,inst_34861);
} else
{if((state_val_34864 === 4))
{var inst_34827 = (state_34863[7]);var inst_34829 = (inst_34827 < cnt);var state_34863__$1 = state_34863;if(cljs.core.truth_(inst_34829))
{var statearr_34868_34896 = state_34863__$1;(statearr_34868_34896[1] = 6);
} else
{var statearr_34869_34897 = state_34863__$1;(statearr_34869_34897[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 5))
{var inst_34847 = (state_34863[2]);var state_34863__$1 = (function (){var statearr_34870 = state_34863;(statearr_34870[9] = inst_34847);
return statearr_34870;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34863__$1,12,dchan);
} else
{if((state_val_34864 === 6))
{var state_34863__$1 = state_34863;var statearr_34871_34898 = state_34863__$1;(statearr_34871_34898[2] = null);
(statearr_34871_34898[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 7))
{var state_34863__$1 = state_34863;var statearr_34872_34899 = state_34863__$1;(statearr_34872_34899[2] = null);
(statearr_34872_34899[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 8))
{var inst_34845 = (state_34863[2]);var state_34863__$1 = state_34863;var statearr_34873_34900 = state_34863__$1;(statearr_34873_34900[2] = inst_34845);
(statearr_34873_34900[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 9))
{var inst_34827 = (state_34863[7]);var inst_34840 = (state_34863[2]);var inst_34841 = (inst_34827 + 1);var inst_34827__$1 = inst_34841;var state_34863__$1 = (function (){var statearr_34874 = state_34863;(statearr_34874[7] = inst_34827__$1);
(statearr_34874[10] = inst_34840);
return statearr_34874;
})();var statearr_34875_34901 = state_34863__$1;(statearr_34875_34901[2] = null);
(statearr_34875_34901[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 10))
{var inst_34831 = (state_34863[2]);var inst_34832 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34863__$1 = (function (){var statearr_34876 = state_34863;(statearr_34876[11] = inst_34831);
return statearr_34876;
})();var statearr_34877_34902 = state_34863__$1;(statearr_34877_34902[2] = inst_34832);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 11))
{var inst_34827 = (state_34863[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34863,10,Object,null,9);var inst_34836 = chs__$1.call(null,inst_34827);var inst_34837 = done.call(null,inst_34827);var inst_34838 = cljs.core.async.take_BANG_.call(null,inst_34836,inst_34837);var state_34863__$1 = state_34863;var statearr_34878_34903 = state_34863__$1;(statearr_34878_34903[2] = inst_34838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 12))
{var inst_34849 = (state_34863[12]);var inst_34849__$1 = (state_34863[2]);var inst_34850 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34849__$1);var state_34863__$1 = (function (){var statearr_34879 = state_34863;(statearr_34879[12] = inst_34849__$1);
return statearr_34879;
})();if(cljs.core.truth_(inst_34850))
{var statearr_34880_34904 = state_34863__$1;(statearr_34880_34904[1] = 13);
} else
{var statearr_34881_34905 = state_34863__$1;(statearr_34881_34905[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 13))
{var inst_34852 = cljs.core.async.close_BANG_.call(null,out);var state_34863__$1 = state_34863;var statearr_34882_34906 = state_34863__$1;(statearr_34882_34906[2] = inst_34852);
(statearr_34882_34906[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 14))
{var inst_34849 = (state_34863[12]);var inst_34854 = cljs.core.apply.call(null,f,inst_34849);var state_34863__$1 = state_34863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34863__$1,16,out,inst_34854);
} else
{if((state_val_34864 === 15))
{var inst_34859 = (state_34863[2]);var state_34863__$1 = state_34863;var statearr_34883_34907 = state_34863__$1;(statearr_34883_34907[2] = inst_34859);
(statearr_34883_34907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34864 === 16))
{var inst_34856 = (state_34863[2]);var state_34863__$1 = (function (){var statearr_34884 = state_34863;(statearr_34884[13] = inst_34856);
return statearr_34884;
})();var statearr_34885_34908 = state_34863__$1;(statearr_34885_34908[2] = null);
(statearr_34885_34908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34889[0] = state_machine__5507__auto__);
(statearr_34889[1] = 1);
return statearr_34889;
});
var state_machine__5507__auto____1 = (function (state_34863){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34890){if((e34890 instanceof Object))
{var ex__5510__auto__ = e34890;var statearr_34891_34909 = state_34863;(statearr_34891_34909[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34910 = state_34863;
state_34863 = G__34910;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34863){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34892 = f__5522__auto__.call(null);(statearr_34892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34893);
return statearr_34892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35018 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34994){var state_val_34995 = (state_34994[1]);if((state_val_34995 === 1))
{var inst_34965 = cljs.core.vec.call(null,chs);var inst_34966 = inst_34965;var state_34994__$1 = (function (){var statearr_34996 = state_34994;(statearr_34996[7] = inst_34966);
return statearr_34996;
})();var statearr_34997_35019 = state_34994__$1;(statearr_34997_35019[2] = null);
(statearr_34997_35019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 2))
{var inst_34966 = (state_34994[7]);var inst_34968 = cljs.core.count.call(null,inst_34966);var inst_34969 = (inst_34968 > 0);var state_34994__$1 = state_34994;if(cljs.core.truth_(inst_34969))
{var statearr_34998_35020 = state_34994__$1;(statearr_34998_35020[1] = 4);
} else
{var statearr_34999_35021 = state_34994__$1;(statearr_34999_35021[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 3))
{var inst_34992 = (state_34994[2]);var state_34994__$1 = state_34994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34994__$1,inst_34992);
} else
{if((state_val_34995 === 4))
{var inst_34966 = (state_34994[7]);var state_34994__$1 = state_34994;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34994__$1,7,inst_34966);
} else
{if((state_val_34995 === 5))
{var inst_34988 = cljs.core.async.close_BANG_.call(null,out);var state_34994__$1 = state_34994;var statearr_35000_35022 = state_34994__$1;(statearr_35000_35022[2] = inst_34988);
(statearr_35000_35022[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 6))
{var inst_34990 = (state_34994[2]);var state_34994__$1 = state_34994;var statearr_35001_35023 = state_34994__$1;(statearr_35001_35023[2] = inst_34990);
(statearr_35001_35023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 7))
{var inst_34973 = (state_34994[8]);var inst_34974 = (state_34994[9]);var inst_34973__$1 = (state_34994[2]);var inst_34974__$1 = cljs.core.nth.call(null,inst_34973__$1,0,null);var inst_34975 = cljs.core.nth.call(null,inst_34973__$1,1,null);var inst_34976 = (inst_34974__$1 == null);var state_34994__$1 = (function (){var statearr_35002 = state_34994;(statearr_35002[8] = inst_34973__$1);
(statearr_35002[9] = inst_34974__$1);
(statearr_35002[10] = inst_34975);
return statearr_35002;
})();if(cljs.core.truth_(inst_34976))
{var statearr_35003_35024 = state_34994__$1;(statearr_35003_35024[1] = 8);
} else
{var statearr_35004_35025 = state_34994__$1;(statearr_35004_35025[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 8))
{var inst_34973 = (state_34994[8]);var inst_34966 = (state_34994[7]);var inst_34974 = (state_34994[9]);var inst_34975 = (state_34994[10]);var inst_34978 = (function (){var c = inst_34975;var v = inst_34974;var vec__34971 = inst_34973;var cs = inst_34966;return ((function (c,v,vec__34971,cs,inst_34973,inst_34966,inst_34974,inst_34975,state_val_34995){
return (function (p1__34911_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34911_SHARP_);
});
;})(c,v,vec__34971,cs,inst_34973,inst_34966,inst_34974,inst_34975,state_val_34995))
})();var inst_34979 = cljs.core.filterv.call(null,inst_34978,inst_34966);var inst_34966__$1 = inst_34979;var state_34994__$1 = (function (){var statearr_35005 = state_34994;(statearr_35005[7] = inst_34966__$1);
return statearr_35005;
})();var statearr_35006_35026 = state_34994__$1;(statearr_35006_35026[2] = null);
(statearr_35006_35026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 9))
{var inst_34974 = (state_34994[9]);var state_34994__$1 = state_34994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34994__$1,11,out,inst_34974);
} else
{if((state_val_34995 === 10))
{var inst_34986 = (state_34994[2]);var state_34994__$1 = state_34994;var statearr_35008_35027 = state_34994__$1;(statearr_35008_35027[2] = inst_34986);
(statearr_35008_35027[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 11))
{var inst_34966 = (state_34994[7]);var inst_34983 = (state_34994[2]);var tmp35007 = inst_34966;var inst_34966__$1 = tmp35007;var state_34994__$1 = (function (){var statearr_35009 = state_34994;(statearr_35009[7] = inst_34966__$1);
(statearr_35009[11] = inst_34983);
return statearr_35009;
})();var statearr_35010_35028 = state_34994__$1;(statearr_35010_35028[2] = null);
(statearr_35010_35028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35014 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35014[0] = state_machine__5507__auto__);
(statearr_35014[1] = 1);
return statearr_35014;
});
var state_machine__5507__auto____1 = (function (state_34994){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35015){if((e35015 instanceof Object))
{var ex__5510__auto__ = e35015;var statearr_35016_35029 = state_34994;(statearr_35016_35029[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35030 = state_34994;
state_34994 = G__35030;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34994){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35017 = f__5522__auto__.call(null);(statearr_35017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35018);
return statearr_35017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35123 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35100){var state_val_35101 = (state_35100[1]);if((state_val_35101 === 1))
{var inst_35077 = 0;var state_35100__$1 = (function (){var statearr_35102 = state_35100;(statearr_35102[7] = inst_35077);
return statearr_35102;
})();var statearr_35103_35124 = state_35100__$1;(statearr_35103_35124[2] = null);
(statearr_35103_35124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 2))
{var inst_35077 = (state_35100[7]);var inst_35079 = (inst_35077 < n);var state_35100__$1 = state_35100;if(cljs.core.truth_(inst_35079))
{var statearr_35104_35125 = state_35100__$1;(statearr_35104_35125[1] = 4);
} else
{var statearr_35105_35126 = state_35100__$1;(statearr_35105_35126[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 3))
{var inst_35097 = (state_35100[2]);var inst_35098 = cljs.core.async.close_BANG_.call(null,out);var state_35100__$1 = (function (){var statearr_35106 = state_35100;(statearr_35106[8] = inst_35097);
return statearr_35106;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35100__$1,inst_35098);
} else
{if((state_val_35101 === 4))
{var state_35100__$1 = state_35100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35100__$1,7,ch);
} else
{if((state_val_35101 === 5))
{var state_35100__$1 = state_35100;var statearr_35107_35127 = state_35100__$1;(statearr_35107_35127[2] = null);
(statearr_35107_35127[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 6))
{var inst_35095 = (state_35100[2]);var state_35100__$1 = state_35100;var statearr_35108_35128 = state_35100__$1;(statearr_35108_35128[2] = inst_35095);
(statearr_35108_35128[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 7))
{var inst_35082 = (state_35100[9]);var inst_35082__$1 = (state_35100[2]);var inst_35083 = (inst_35082__$1 == null);var inst_35084 = cljs.core.not.call(null,inst_35083);var state_35100__$1 = (function (){var statearr_35109 = state_35100;(statearr_35109[9] = inst_35082__$1);
return statearr_35109;
})();if(inst_35084)
{var statearr_35110_35129 = state_35100__$1;(statearr_35110_35129[1] = 8);
} else
{var statearr_35111_35130 = state_35100__$1;(statearr_35111_35130[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 8))
{var inst_35082 = (state_35100[9]);var state_35100__$1 = state_35100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35100__$1,11,out,inst_35082);
} else
{if((state_val_35101 === 9))
{var state_35100__$1 = state_35100;var statearr_35112_35131 = state_35100__$1;(statearr_35112_35131[2] = null);
(statearr_35112_35131[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 10))
{var inst_35092 = (state_35100[2]);var state_35100__$1 = state_35100;var statearr_35113_35132 = state_35100__$1;(statearr_35113_35132[2] = inst_35092);
(statearr_35113_35132[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 11))
{var inst_35077 = (state_35100[7]);var inst_35087 = (state_35100[2]);var inst_35088 = (inst_35077 + 1);var inst_35077__$1 = inst_35088;var state_35100__$1 = (function (){var statearr_35114 = state_35100;(statearr_35114[7] = inst_35077__$1);
(statearr_35114[10] = inst_35087);
return statearr_35114;
})();var statearr_35115_35133 = state_35100__$1;(statearr_35115_35133[2] = null);
(statearr_35115_35133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35119 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35119[0] = state_machine__5507__auto__);
(statearr_35119[1] = 1);
return statearr_35119;
});
var state_machine__5507__auto____1 = (function (state_35100){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35120){if((e35120 instanceof Object))
{var ex__5510__auto__ = e35120;var statearr_35121_35134 = state_35100;(statearr_35121_35134[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35135 = state_35100;
state_35100 = G__35135;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35100){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35122 = f__5522__auto__.call(null);(statearr_35122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35123);
return statearr_35122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35207){var state_val_35208 = (state_35207[1]);if((state_val_35208 === 1))
{var inst_35184 = null;var state_35207__$1 = (function (){var statearr_35209 = state_35207;(statearr_35209[7] = inst_35184);
return statearr_35209;
})();var statearr_35210_35233 = state_35207__$1;(statearr_35210_35233[2] = null);
(statearr_35210_35233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35208 === 2))
{var state_35207__$1 = state_35207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35207__$1,4,ch);
} else
{if((state_val_35208 === 3))
{var inst_35204 = (state_35207[2]);var inst_35205 = cljs.core.async.close_BANG_.call(null,out);var state_35207__$1 = (function (){var statearr_35211 = state_35207;(statearr_35211[8] = inst_35204);
return statearr_35211;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35207__$1,inst_35205);
} else
{if((state_val_35208 === 4))
{var inst_35187 = (state_35207[9]);var inst_35187__$1 = (state_35207[2]);var inst_35188 = (inst_35187__$1 == null);var inst_35189 = cljs.core.not.call(null,inst_35188);var state_35207__$1 = (function (){var statearr_35212 = state_35207;(statearr_35212[9] = inst_35187__$1);
return statearr_35212;
})();if(inst_35189)
{var statearr_35213_35234 = state_35207__$1;(statearr_35213_35234[1] = 5);
} else
{var statearr_35214_35235 = state_35207__$1;(statearr_35214_35235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35208 === 5))
{var inst_35187 = (state_35207[9]);var inst_35184 = (state_35207[7]);var inst_35191 = cljs.core._EQ_.call(null,inst_35187,inst_35184);var state_35207__$1 = state_35207;if(inst_35191)
{var statearr_35215_35236 = state_35207__$1;(statearr_35215_35236[1] = 8);
} else
{var statearr_35216_35237 = state_35207__$1;(statearr_35216_35237[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35208 === 6))
{var state_35207__$1 = state_35207;var statearr_35218_35238 = state_35207__$1;(statearr_35218_35238[2] = null);
(statearr_35218_35238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35208 === 7))
{var inst_35202 = (state_35207[2]);var state_35207__$1 = state_35207;var statearr_35219_35239 = state_35207__$1;(statearr_35219_35239[2] = inst_35202);
(statearr_35219_35239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35208 === 8))
{var inst_35184 = (state_35207[7]);var tmp35217 = inst_35184;var inst_35184__$1 = tmp35217;var state_35207__$1 = (function (){var statearr_35220 = state_35207;(statearr_35220[7] = inst_35184__$1);
return statearr_35220;
})();var statearr_35221_35240 = state_35207__$1;(statearr_35221_35240[2] = null);
(statearr_35221_35240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35208 === 9))
{var inst_35187 = (state_35207[9]);var state_35207__$1 = state_35207;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35207__$1,11,out,inst_35187);
} else
{if((state_val_35208 === 10))
{var inst_35199 = (state_35207[2]);var state_35207__$1 = state_35207;var statearr_35222_35241 = state_35207__$1;(statearr_35222_35241[2] = inst_35199);
(statearr_35222_35241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35208 === 11))
{var inst_35187 = (state_35207[9]);var inst_35196 = (state_35207[2]);var inst_35184 = inst_35187;var state_35207__$1 = (function (){var statearr_35223 = state_35207;(statearr_35223[7] = inst_35184);
(statearr_35223[10] = inst_35196);
return statearr_35223;
})();var statearr_35224_35242 = state_35207__$1;(statearr_35224_35242[2] = null);
(statearr_35224_35242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35228 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35228[0] = state_machine__5507__auto__);
(statearr_35228[1] = 1);
return statearr_35228;
});
var state_machine__5507__auto____1 = (function (state_35207){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35207);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35229){if((e35229 instanceof Object))
{var ex__5510__auto__ = e35229;var statearr_35230_35243 = state_35207;(statearr_35230_35243[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35207);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35244 = state_35207;
state_35207 = G__35244;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35207){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35231 = f__5522__auto__.call(null);(statearr_35231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35232);
return statearr_35231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35349){var state_val_35350 = (state_35349[1]);if((state_val_35350 === 1))
{var inst_35312 = (new Array(n));var inst_35313 = inst_35312;var inst_35314 = 0;var state_35349__$1 = (function (){var statearr_35351 = state_35349;(statearr_35351[7] = inst_35314);
(statearr_35351[8] = inst_35313);
return statearr_35351;
})();var statearr_35352_35380 = state_35349__$1;(statearr_35352_35380[2] = null);
(statearr_35352_35380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 2))
{var state_35349__$1 = state_35349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35349__$1,4,ch);
} else
{if((state_val_35350 === 3))
{var inst_35347 = (state_35349[2]);var state_35349__$1 = state_35349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35349__$1,inst_35347);
} else
{if((state_val_35350 === 4))
{var inst_35317 = (state_35349[9]);var inst_35317__$1 = (state_35349[2]);var inst_35318 = (inst_35317__$1 == null);var inst_35319 = cljs.core.not.call(null,inst_35318);var state_35349__$1 = (function (){var statearr_35353 = state_35349;(statearr_35353[9] = inst_35317__$1);
return statearr_35353;
})();if(inst_35319)
{var statearr_35354_35381 = state_35349__$1;(statearr_35354_35381[1] = 5);
} else
{var statearr_35355_35382 = state_35349__$1;(statearr_35355_35382[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 5))
{var inst_35317 = (state_35349[9]);var inst_35322 = (state_35349[10]);var inst_35314 = (state_35349[7]);var inst_35313 = (state_35349[8]);var inst_35321 = (inst_35313[inst_35314] = inst_35317);var inst_35322__$1 = (inst_35314 + 1);var inst_35323 = (inst_35322__$1 < n);var state_35349__$1 = (function (){var statearr_35356 = state_35349;(statearr_35356[10] = inst_35322__$1);
(statearr_35356[11] = inst_35321);
return statearr_35356;
})();if(cljs.core.truth_(inst_35323))
{var statearr_35357_35383 = state_35349__$1;(statearr_35357_35383[1] = 8);
} else
{var statearr_35358_35384 = state_35349__$1;(statearr_35358_35384[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 6))
{var inst_35314 = (state_35349[7]);var inst_35335 = (inst_35314 > 0);var state_35349__$1 = state_35349;if(cljs.core.truth_(inst_35335))
{var statearr_35360_35385 = state_35349__$1;(statearr_35360_35385[1] = 12);
} else
{var statearr_35361_35386 = state_35349__$1;(statearr_35361_35386[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 7))
{var inst_35345 = (state_35349[2]);var state_35349__$1 = state_35349;var statearr_35362_35387 = state_35349__$1;(statearr_35362_35387[2] = inst_35345);
(statearr_35362_35387[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 8))
{var inst_35322 = (state_35349[10]);var inst_35313 = (state_35349[8]);var tmp35359 = inst_35313;var inst_35313__$1 = tmp35359;var inst_35314 = inst_35322;var state_35349__$1 = (function (){var statearr_35363 = state_35349;(statearr_35363[7] = inst_35314);
(statearr_35363[8] = inst_35313__$1);
return statearr_35363;
})();var statearr_35364_35388 = state_35349__$1;(statearr_35364_35388[2] = null);
(statearr_35364_35388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 9))
{var inst_35313 = (state_35349[8]);var inst_35327 = cljs.core.vec.call(null,inst_35313);var state_35349__$1 = state_35349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35349__$1,11,out,inst_35327);
} else
{if((state_val_35350 === 10))
{var inst_35333 = (state_35349[2]);var state_35349__$1 = state_35349;var statearr_35365_35389 = state_35349__$1;(statearr_35365_35389[2] = inst_35333);
(statearr_35365_35389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 11))
{var inst_35329 = (state_35349[2]);var inst_35330 = (new Array(n));var inst_35313 = inst_35330;var inst_35314 = 0;var state_35349__$1 = (function (){var statearr_35366 = state_35349;(statearr_35366[12] = inst_35329);
(statearr_35366[7] = inst_35314);
(statearr_35366[8] = inst_35313);
return statearr_35366;
})();var statearr_35367_35390 = state_35349__$1;(statearr_35367_35390[2] = null);
(statearr_35367_35390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 12))
{var inst_35313 = (state_35349[8]);var inst_35337 = cljs.core.vec.call(null,inst_35313);var state_35349__$1 = state_35349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35349__$1,15,out,inst_35337);
} else
{if((state_val_35350 === 13))
{var state_35349__$1 = state_35349;var statearr_35368_35391 = state_35349__$1;(statearr_35368_35391[2] = null);
(statearr_35368_35391[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 14))
{var inst_35342 = (state_35349[2]);var inst_35343 = cljs.core.async.close_BANG_.call(null,out);var state_35349__$1 = (function (){var statearr_35369 = state_35349;(statearr_35369[13] = inst_35342);
return statearr_35369;
})();var statearr_35370_35392 = state_35349__$1;(statearr_35370_35392[2] = inst_35343);
(statearr_35370_35392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35350 === 15))
{var inst_35339 = (state_35349[2]);var state_35349__$1 = state_35349;var statearr_35371_35393 = state_35349__$1;(statearr_35371_35393[2] = inst_35339);
(statearr_35371_35393[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35375[0] = state_machine__5507__auto__);
(statearr_35375[1] = 1);
return statearr_35375;
});
var state_machine__5507__auto____1 = (function (state_35349){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35349);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35376){if((e35376 instanceof Object))
{var ex__5510__auto__ = e35376;var statearr_35377_35394 = state_35349;(statearr_35377_35394[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35395 = state_35349;
state_35349 = G__35395;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35349){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35378 = f__5522__auto__.call(null);(statearr_35378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35379);
return statearr_35378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35508){var state_val_35509 = (state_35508[1]);if((state_val_35509 === 1))
{var inst_35467 = [];var inst_35468 = inst_35467;var inst_35469 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35508__$1 = (function (){var statearr_35510 = state_35508;(statearr_35510[7] = inst_35468);
(statearr_35510[8] = inst_35469);
return statearr_35510;
})();var statearr_35511_35539 = state_35508__$1;(statearr_35511_35539[2] = null);
(statearr_35511_35539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 2))
{var state_35508__$1 = state_35508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35508__$1,4,ch);
} else
{if((state_val_35509 === 3))
{var inst_35506 = (state_35508[2]);var state_35508__$1 = state_35508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35508__$1,inst_35506);
} else
{if((state_val_35509 === 4))
{var inst_35472 = (state_35508[9]);var inst_35472__$1 = (state_35508[2]);var inst_35473 = (inst_35472__$1 == null);var inst_35474 = cljs.core.not.call(null,inst_35473);var state_35508__$1 = (function (){var statearr_35512 = state_35508;(statearr_35512[9] = inst_35472__$1);
return statearr_35512;
})();if(inst_35474)
{var statearr_35513_35540 = state_35508__$1;(statearr_35513_35540[1] = 5);
} else
{var statearr_35514_35541 = state_35508__$1;(statearr_35514_35541[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 5))
{var inst_35472 = (state_35508[9]);var inst_35469 = (state_35508[8]);var inst_35476 = (state_35508[10]);var inst_35476__$1 = f.call(null,inst_35472);var inst_35477 = cljs.core._EQ_.call(null,inst_35476__$1,inst_35469);var inst_35478 = cljs.core.keyword_identical_QMARK_.call(null,inst_35469,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35479 = (inst_35477) || (inst_35478);var state_35508__$1 = (function (){var statearr_35515 = state_35508;(statearr_35515[10] = inst_35476__$1);
return statearr_35515;
})();if(cljs.core.truth_(inst_35479))
{var statearr_35516_35542 = state_35508__$1;(statearr_35516_35542[1] = 8);
} else
{var statearr_35517_35543 = state_35508__$1;(statearr_35517_35543[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 6))
{var inst_35468 = (state_35508[7]);var inst_35493 = inst_35468.length;var inst_35494 = (inst_35493 > 0);var state_35508__$1 = state_35508;if(cljs.core.truth_(inst_35494))
{var statearr_35519_35544 = state_35508__$1;(statearr_35519_35544[1] = 12);
} else
{var statearr_35520_35545 = state_35508__$1;(statearr_35520_35545[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 7))
{var inst_35504 = (state_35508[2]);var state_35508__$1 = state_35508;var statearr_35521_35546 = state_35508__$1;(statearr_35521_35546[2] = inst_35504);
(statearr_35521_35546[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 8))
{var inst_35468 = (state_35508[7]);var inst_35472 = (state_35508[9]);var inst_35476 = (state_35508[10]);var inst_35481 = inst_35468.push(inst_35472);var tmp35518 = inst_35468;var inst_35468__$1 = tmp35518;var inst_35469 = inst_35476;var state_35508__$1 = (function (){var statearr_35522 = state_35508;(statearr_35522[7] = inst_35468__$1);
(statearr_35522[8] = inst_35469);
(statearr_35522[11] = inst_35481);
return statearr_35522;
})();var statearr_35523_35547 = state_35508__$1;(statearr_35523_35547[2] = null);
(statearr_35523_35547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 9))
{var inst_35468 = (state_35508[7]);var inst_35484 = cljs.core.vec.call(null,inst_35468);var state_35508__$1 = state_35508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35508__$1,11,out,inst_35484);
} else
{if((state_val_35509 === 10))
{var inst_35491 = (state_35508[2]);var state_35508__$1 = state_35508;var statearr_35524_35548 = state_35508__$1;(statearr_35524_35548[2] = inst_35491);
(statearr_35524_35548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 11))
{var inst_35472 = (state_35508[9]);var inst_35476 = (state_35508[10]);var inst_35486 = (state_35508[2]);var inst_35487 = [];var inst_35488 = inst_35487.push(inst_35472);var inst_35468 = inst_35487;var inst_35469 = inst_35476;var state_35508__$1 = (function (){var statearr_35525 = state_35508;(statearr_35525[7] = inst_35468);
(statearr_35525[12] = inst_35488);
(statearr_35525[13] = inst_35486);
(statearr_35525[8] = inst_35469);
return statearr_35525;
})();var statearr_35526_35549 = state_35508__$1;(statearr_35526_35549[2] = null);
(statearr_35526_35549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 12))
{var inst_35468 = (state_35508[7]);var inst_35496 = cljs.core.vec.call(null,inst_35468);var state_35508__$1 = state_35508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35508__$1,15,out,inst_35496);
} else
{if((state_val_35509 === 13))
{var state_35508__$1 = state_35508;var statearr_35527_35550 = state_35508__$1;(statearr_35527_35550[2] = null);
(statearr_35527_35550[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 14))
{var inst_35501 = (state_35508[2]);var inst_35502 = cljs.core.async.close_BANG_.call(null,out);var state_35508__$1 = (function (){var statearr_35528 = state_35508;(statearr_35528[14] = inst_35501);
return statearr_35528;
})();var statearr_35529_35551 = state_35508__$1;(statearr_35529_35551[2] = inst_35502);
(statearr_35529_35551[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35509 === 15))
{var inst_35498 = (state_35508[2]);var state_35508__$1 = state_35508;var statearr_35530_35552 = state_35508__$1;(statearr_35530_35552[2] = inst_35498);
(statearr_35530_35552[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35534[0] = state_machine__5507__auto__);
(statearr_35534[1] = 1);
return statearr_35534;
});
var state_machine__5507__auto____1 = (function (state_35508){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35535){if((e35535 instanceof Object))
{var ex__5510__auto__ = e35535;var statearr_35536_35553 = state_35508;(statearr_35536_35553[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35554 = state_35508;
state_35508 = G__35554;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35508){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35537 = f__5522__auto__.call(null);(statearr_35537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35538);
return statearr_35537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
