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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29855 = (function (f,fn_handler,meta29856){
this.f = f;
this.fn_handler = fn_handler;
this.meta29856 = meta29856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29855.cljs$lang$type = true;
cljs.core.async.t29855.cljs$lang$ctorStr = "cljs.core.async/t29855";
cljs.core.async.t29855.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29855");
});
cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29857){var self__ = this;
var _29857__$1 = this;return self__.meta29856;
});
cljs.core.async.t29855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29857,meta29856__$1){var self__ = this;
var _29857__$1 = this;return (new cljs.core.async.t29855(self__.f,self__.fn_handler,meta29856__$1));
});
cljs.core.async.__GT_t29855 = (function __GT_t29855(f__$1,fn_handler__$1,meta29856){return (new cljs.core.async.t29855(f__$1,fn_handler__$1,meta29856));
});
}
return (new cljs.core.async.t29855(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29859 = buff;if(G__29859)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__29859.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29859.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29859);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29859);
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
{var val_29860 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29860);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_29860);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___29861 = n;var x_29862 = 0;while(true){
if((x_29862 < n__4248__auto___29861))
{(a[x_29862] = 0);
{
var G__29863 = (x_29862 + 1);
x_29862 = G__29863;
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
var G__29864 = (i + 1);
i = G__29864;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29868 = (function (flag,alt_flag,meta29869){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29869 = meta29869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29868.cljs$lang$type = true;
cljs.core.async.t29868.cljs$lang$ctorStr = "cljs.core.async/t29868";
cljs.core.async.t29868.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29868");
});
cljs.core.async.t29868.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29870){var self__ = this;
var _29870__$1 = this;return self__.meta29869;
});
cljs.core.async.t29868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29870,meta29869__$1){var self__ = this;
var _29870__$1 = this;return (new cljs.core.async.t29868(self__.flag,self__.alt_flag,meta29869__$1));
});
cljs.core.async.__GT_t29868 = (function __GT_t29868(flag__$1,alt_flag__$1,meta29869){return (new cljs.core.async.t29868(flag__$1,alt_flag__$1,meta29869));
});
}
return (new cljs.core.async.t29868(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29874 = (function (cb,flag,alt_handler,meta29875){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29875 = meta29875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29874.cljs$lang$type = true;
cljs.core.async.t29874.cljs$lang$ctorStr = "cljs.core.async/t29874";
cljs.core.async.t29874.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29874");
});
cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29876){var self__ = this;
var _29876__$1 = this;return self__.meta29875;
});
cljs.core.async.t29874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29876,meta29875__$1){var self__ = this;
var _29876__$1 = this;return (new cljs.core.async.t29874(self__.cb,self__.flag,self__.alt_handler,meta29875__$1));
});
cljs.core.async.__GT_t29874 = (function __GT_t29874(cb__$1,flag__$1,alt_handler__$1,meta29875){return (new cljs.core.async.t29874(cb__$1,flag__$1,alt_handler__$1,meta29875));
});
}
return (new cljs.core.async.t29874(cb,flag,alt_handler,null));
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
return (function (p1__29877_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29877_SHARP_,port], null));
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
var G__29878 = (i + 1);
i = G__29878;
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
var alts_BANG___delegate = function (ports,p__29879){var map__29881 = p__29879;var map__29881__$1 = ((cljs.core.seq_QMARK_.call(null,map__29881))?cljs.core.apply.call(null,cljs.core.hash_map,map__29881):map__29881);var opts = map__29881__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29879 = null;if (arguments.length > 1) {
  p__29879 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29879);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29882){
var ports = cljs.core.first(arglist__29882);
var p__29879 = cljs.core.rest(arglist__29882);
return alts_BANG___delegate(ports,p__29879);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29890 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29890 = (function (ch,f,map_LT_,meta29891){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29891 = meta29891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29890.cljs$lang$type = true;
cljs.core.async.t29890.cljs$lang$ctorStr = "cljs.core.async/t29890";
cljs.core.async.t29890.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29890");
});
cljs.core.async.t29890.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29890.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29893 = (function (fn1,_,meta29891,ch,f,map_LT_,meta29894){
this.fn1 = fn1;
this._ = _;
this.meta29891 = meta29891;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29894 = meta29894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29893.cljs$lang$type = true;
cljs.core.async.t29893.cljs$lang$ctorStr = "cljs.core.async/t29893";
cljs.core.async.t29893.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29893");
});
cljs.core.async.t29893.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29893.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29883_SHARP_){return f1.call(null,(((p1__29883_SHARP_ == null))?null:self__.f.call(null,p1__29883_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29895){var self__ = this;
var _29895__$1 = this;return self__.meta29894;
});
cljs.core.async.t29893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29895,meta29894__$1){var self__ = this;
var _29895__$1 = this;return (new cljs.core.async.t29893(self__.fn1,self__._,self__.meta29891,self__.ch,self__.f,self__.map_LT_,meta29894__$1));
});
cljs.core.async.__GT_t29893 = (function __GT_t29893(fn1__$1,___$2,meta29891__$1,ch__$2,f__$2,map_LT___$2,meta29894){return (new cljs.core.async.t29893(fn1__$1,___$2,meta29891__$1,ch__$2,f__$2,map_LT___$2,meta29894));
});
}
return (new cljs.core.async.t29893(fn1,___$1,self__.meta29891,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t29890.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29892){var self__ = this;
var _29892__$1 = this;return self__.meta29891;
});
cljs.core.async.t29890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29892,meta29891__$1){var self__ = this;
var _29892__$1 = this;return (new cljs.core.async.t29890(self__.ch,self__.f,self__.map_LT_,meta29891__$1));
});
cljs.core.async.__GT_t29890 = (function __GT_t29890(ch__$1,f__$1,map_LT___$1,meta29891){return (new cljs.core.async.t29890(ch__$1,f__$1,map_LT___$1,meta29891));
});
}
return (new cljs.core.async.t29890(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29899 = (function (ch,f,map_GT_,meta29900){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29900 = meta29900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29899.cljs$lang$type = true;
cljs.core.async.t29899.cljs$lang$ctorStr = "cljs.core.async/t29899";
cljs.core.async.t29899.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29899");
});
cljs.core.async.t29899.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29899.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29899.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29901){var self__ = this;
var _29901__$1 = this;return self__.meta29900;
});
cljs.core.async.t29899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29901,meta29900__$1){var self__ = this;
var _29901__$1 = this;return (new cljs.core.async.t29899(self__.ch,self__.f,self__.map_GT_,meta29900__$1));
});
cljs.core.async.__GT_t29899 = (function __GT_t29899(ch__$1,f__$1,map_GT___$1,meta29900){return (new cljs.core.async.t29899(ch__$1,f__$1,map_GT___$1,meta29900));
});
}
return (new cljs.core.async.t29899(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29905 = (function (ch,p,filter_GT_,meta29906){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29906 = meta29906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29905.cljs$lang$type = true;
cljs.core.async.t29905.cljs$lang$ctorStr = "cljs.core.async/t29905";
cljs.core.async.t29905.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t29905");
});
cljs.core.async.t29905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29905.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29907){var self__ = this;
var _29907__$1 = this;return self__.meta29906;
});
cljs.core.async.t29905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29907,meta29906__$1){var self__ = this;
var _29907__$1 = this;return (new cljs.core.async.t29905(self__.ch,self__.p,self__.filter_GT_,meta29906__$1));
});
cljs.core.async.__GT_t29905 = (function __GT_t29905(ch__$1,p__$1,filter_GT___$1,meta29906){return (new cljs.core.async.t29905(ch__$1,p__$1,filter_GT___$1,meta29906));
});
}
return (new cljs.core.async.t29905(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___29990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29969){var state_val_29970 = (state_29969[1]);if((state_val_29970 === 1))
{var state_29969__$1 = state_29969;var statearr_29971_29991 = state_29969__$1;(statearr_29971_29991[2] = null);
(statearr_29971_29991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29970 === 2))
{var state_29969__$1 = state_29969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29969__$1,4,ch);
} else
{if((state_val_29970 === 3))
{var inst_29967 = (state_29969[2]);var state_29969__$1 = state_29969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29969__$1,inst_29967);
} else
{if((state_val_29970 === 4))
{var inst_29951 = (state_29969[7]);var inst_29951__$1 = (state_29969[2]);var inst_29952 = (inst_29951__$1 == null);var state_29969__$1 = (function (){var statearr_29972 = state_29969;(statearr_29972[7] = inst_29951__$1);
return statearr_29972;
})();if(cljs.core.truth_(inst_29952))
{var statearr_29973_29992 = state_29969__$1;(statearr_29973_29992[1] = 5);
} else
{var statearr_29974_29993 = state_29969__$1;(statearr_29974_29993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29970 === 5))
{var inst_29954 = cljs.core.async.close_BANG_.call(null,out);var state_29969__$1 = state_29969;var statearr_29975_29994 = state_29969__$1;(statearr_29975_29994[2] = inst_29954);
(statearr_29975_29994[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29970 === 6))
{var inst_29951 = (state_29969[7]);var inst_29956 = p.call(null,inst_29951);var state_29969__$1 = state_29969;if(cljs.core.truth_(inst_29956))
{var statearr_29976_29995 = state_29969__$1;(statearr_29976_29995[1] = 8);
} else
{var statearr_29977_29996 = state_29969__$1;(statearr_29977_29996[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29970 === 7))
{var inst_29965 = (state_29969[2]);var state_29969__$1 = state_29969;var statearr_29978_29997 = state_29969__$1;(statearr_29978_29997[2] = inst_29965);
(statearr_29978_29997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29970 === 8))
{var inst_29951 = (state_29969[7]);var state_29969__$1 = state_29969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29969__$1,11,out,inst_29951);
} else
{if((state_val_29970 === 9))
{var state_29969__$1 = state_29969;var statearr_29979_29998 = state_29969__$1;(statearr_29979_29998[2] = null);
(statearr_29979_29998[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29970 === 10))
{var inst_29962 = (state_29969[2]);var state_29969__$1 = (function (){var statearr_29980 = state_29969;(statearr_29980[8] = inst_29962);
return statearr_29980;
})();var statearr_29981_29999 = state_29969__$1;(statearr_29981_29999[2] = null);
(statearr_29981_29999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29970 === 11))
{var inst_29959 = (state_29969[2]);var state_29969__$1 = state_29969;var statearr_29982_30000 = state_29969__$1;(statearr_29982_30000[2] = inst_29959);
(statearr_29982_30000[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29986 = [null,null,null,null,null,null,null,null,null];(statearr_29986[0] = state_machine__5507__auto__);
(statearr_29986[1] = 1);
return statearr_29986;
});
var state_machine__5507__auto____1 = (function (state_29969){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29969);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29987){if((e29987 instanceof Object))
{var ex__5510__auto__ = e29987;var statearr_29988_30001 = state_29969;(statearr_29988_30001[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30002 = state_29969;
state_29969 = G__30002;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29969){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29989 = f__5522__auto__.call(null);(statearr_29989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29990);
return statearr_29989;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30154){var state_val_30155 = (state_30154[1]);if((state_val_30155 === 1))
{var state_30154__$1 = state_30154;var statearr_30156_30193 = state_30154__$1;(statearr_30156_30193[2] = null);
(statearr_30156_30193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 2))
{var state_30154__$1 = state_30154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30154__$1,4,in$);
} else
{if((state_val_30155 === 3))
{var inst_30152 = (state_30154[2]);var state_30154__$1 = state_30154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30154__$1,inst_30152);
} else
{if((state_val_30155 === 4))
{var inst_30100 = (state_30154[7]);var inst_30100__$1 = (state_30154[2]);var inst_30101 = (inst_30100__$1 == null);var state_30154__$1 = (function (){var statearr_30157 = state_30154;(statearr_30157[7] = inst_30100__$1);
return statearr_30157;
})();if(cljs.core.truth_(inst_30101))
{var statearr_30158_30194 = state_30154__$1;(statearr_30158_30194[1] = 5);
} else
{var statearr_30159_30195 = state_30154__$1;(statearr_30159_30195[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 5))
{var inst_30103 = cljs.core.async.close_BANG_.call(null,out);var state_30154__$1 = state_30154;var statearr_30160_30196 = state_30154__$1;(statearr_30160_30196[2] = inst_30103);
(statearr_30160_30196[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 6))
{var inst_30100 = (state_30154[7]);var inst_30105 = f.call(null,inst_30100);var inst_30110 = cljs.core.seq.call(null,inst_30105);var inst_30111 = inst_30110;var inst_30112 = null;var inst_30113 = 0;var inst_30114 = 0;var state_30154__$1 = (function (){var statearr_30161 = state_30154;(statearr_30161[8] = inst_30112);
(statearr_30161[9] = inst_30113);
(statearr_30161[10] = inst_30114);
(statearr_30161[11] = inst_30111);
return statearr_30161;
})();var statearr_30162_30197 = state_30154__$1;(statearr_30162_30197[2] = null);
(statearr_30162_30197[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 7))
{var inst_30150 = (state_30154[2]);var state_30154__$1 = state_30154;var statearr_30163_30198 = state_30154__$1;(statearr_30163_30198[2] = inst_30150);
(statearr_30163_30198[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 8))
{var inst_30113 = (state_30154[9]);var inst_30114 = (state_30154[10]);var inst_30116 = (inst_30114 < inst_30113);var inst_30117 = inst_30116;var state_30154__$1 = state_30154;if(cljs.core.truth_(inst_30117))
{var statearr_30164_30199 = state_30154__$1;(statearr_30164_30199[1] = 10);
} else
{var statearr_30165_30200 = state_30154__$1;(statearr_30165_30200[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 9))
{var inst_30147 = (state_30154[2]);var state_30154__$1 = (function (){var statearr_30166 = state_30154;(statearr_30166[12] = inst_30147);
return statearr_30166;
})();var statearr_30167_30201 = state_30154__$1;(statearr_30167_30201[2] = null);
(statearr_30167_30201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 10))
{var inst_30112 = (state_30154[8]);var inst_30114 = (state_30154[10]);var inst_30119 = cljs.core._nth.call(null,inst_30112,inst_30114);var state_30154__$1 = state_30154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30154__$1,13,out,inst_30119);
} else
{if((state_val_30155 === 11))
{var inst_30125 = (state_30154[13]);var inst_30111 = (state_30154[11]);var inst_30125__$1 = cljs.core.seq.call(null,inst_30111);var state_30154__$1 = (function (){var statearr_30171 = state_30154;(statearr_30171[13] = inst_30125__$1);
return statearr_30171;
})();if(inst_30125__$1)
{var statearr_30172_30202 = state_30154__$1;(statearr_30172_30202[1] = 14);
} else
{var statearr_30173_30203 = state_30154__$1;(statearr_30173_30203[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 12))
{var inst_30145 = (state_30154[2]);var state_30154__$1 = state_30154;var statearr_30174_30204 = state_30154__$1;(statearr_30174_30204[2] = inst_30145);
(statearr_30174_30204[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 13))
{var inst_30112 = (state_30154[8]);var inst_30113 = (state_30154[9]);var inst_30114 = (state_30154[10]);var inst_30111 = (state_30154[11]);var inst_30121 = (state_30154[2]);var inst_30122 = (inst_30114 + 1);var tmp30168 = inst_30112;var tmp30169 = inst_30113;var tmp30170 = inst_30111;var inst_30111__$1 = tmp30170;var inst_30112__$1 = tmp30168;var inst_30113__$1 = tmp30169;var inst_30114__$1 = inst_30122;var state_30154__$1 = (function (){var statearr_30175 = state_30154;(statearr_30175[8] = inst_30112__$1);
(statearr_30175[14] = inst_30121);
(statearr_30175[9] = inst_30113__$1);
(statearr_30175[10] = inst_30114__$1);
(statearr_30175[11] = inst_30111__$1);
return statearr_30175;
})();var statearr_30176_30205 = state_30154__$1;(statearr_30176_30205[2] = null);
(statearr_30176_30205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 14))
{var inst_30125 = (state_30154[13]);var inst_30127 = cljs.core.chunked_seq_QMARK_.call(null,inst_30125);var state_30154__$1 = state_30154;if(inst_30127)
{var statearr_30177_30206 = state_30154__$1;(statearr_30177_30206[1] = 17);
} else
{var statearr_30178_30207 = state_30154__$1;(statearr_30178_30207[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 15))
{var state_30154__$1 = state_30154;var statearr_30179_30208 = state_30154__$1;(statearr_30179_30208[2] = null);
(statearr_30179_30208[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 16))
{var inst_30143 = (state_30154[2]);var state_30154__$1 = state_30154;var statearr_30180_30209 = state_30154__$1;(statearr_30180_30209[2] = inst_30143);
(statearr_30180_30209[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 17))
{var inst_30125 = (state_30154[13]);var inst_30129 = cljs.core.chunk_first.call(null,inst_30125);var inst_30130 = cljs.core.chunk_rest.call(null,inst_30125);var inst_30131 = cljs.core.count.call(null,inst_30129);var inst_30111 = inst_30130;var inst_30112 = inst_30129;var inst_30113 = inst_30131;var inst_30114 = 0;var state_30154__$1 = (function (){var statearr_30181 = state_30154;(statearr_30181[8] = inst_30112);
(statearr_30181[9] = inst_30113);
(statearr_30181[10] = inst_30114);
(statearr_30181[11] = inst_30111);
return statearr_30181;
})();var statearr_30182_30210 = state_30154__$1;(statearr_30182_30210[2] = null);
(statearr_30182_30210[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 18))
{var inst_30125 = (state_30154[13]);var inst_30134 = cljs.core.first.call(null,inst_30125);var state_30154__$1 = state_30154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30154__$1,20,out,inst_30134);
} else
{if((state_val_30155 === 19))
{var inst_30140 = (state_30154[2]);var state_30154__$1 = state_30154;var statearr_30183_30211 = state_30154__$1;(statearr_30183_30211[2] = inst_30140);
(statearr_30183_30211[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30155 === 20))
{var inst_30125 = (state_30154[13]);var inst_30136 = (state_30154[2]);var inst_30137 = cljs.core.next.call(null,inst_30125);var inst_30111 = inst_30137;var inst_30112 = null;var inst_30113 = 0;var inst_30114 = 0;var state_30154__$1 = (function (){var statearr_30184 = state_30154;(statearr_30184[8] = inst_30112);
(statearr_30184[9] = inst_30113);
(statearr_30184[10] = inst_30114);
(statearr_30184[11] = inst_30111);
(statearr_30184[15] = inst_30136);
return statearr_30184;
})();var statearr_30185_30212 = state_30154__$1;(statearr_30185_30212[2] = null);
(statearr_30185_30212[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_30189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30189[0] = state_machine__5507__auto__);
(statearr_30189[1] = 1);
return statearr_30189;
});
var state_machine__5507__auto____1 = (function (state_30154){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30154);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30190){if((e30190 instanceof Object))
{var ex__5510__auto__ = e30190;var statearr_30191_30213 = state_30154;(statearr_30191_30213[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30214 = state_30154;
state_30154 = G__30214;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30154){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30192 = f__5522__auto__.call(null);(statearr_30192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30192;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___30295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30274){var state_val_30275 = (state_30274[1]);if((state_val_30275 === 1))
{var state_30274__$1 = state_30274;var statearr_30276_30296 = state_30274__$1;(statearr_30276_30296[2] = null);
(statearr_30276_30296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30275 === 2))
{var state_30274__$1 = state_30274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30274__$1,4,from);
} else
{if((state_val_30275 === 3))
{var inst_30272 = (state_30274[2]);var state_30274__$1 = state_30274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30274__$1,inst_30272);
} else
{if((state_val_30275 === 4))
{var inst_30257 = (state_30274[7]);var inst_30257__$1 = (state_30274[2]);var inst_30258 = (inst_30257__$1 == null);var state_30274__$1 = (function (){var statearr_30277 = state_30274;(statearr_30277[7] = inst_30257__$1);
return statearr_30277;
})();if(cljs.core.truth_(inst_30258))
{var statearr_30278_30297 = state_30274__$1;(statearr_30278_30297[1] = 5);
} else
{var statearr_30279_30298 = state_30274__$1;(statearr_30279_30298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30275 === 5))
{var state_30274__$1 = state_30274;if(cljs.core.truth_(close_QMARK_))
{var statearr_30280_30299 = state_30274__$1;(statearr_30280_30299[1] = 8);
} else
{var statearr_30281_30300 = state_30274__$1;(statearr_30281_30300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30275 === 6))
{var inst_30257 = (state_30274[7]);var state_30274__$1 = state_30274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30274__$1,11,to,inst_30257);
} else
{if((state_val_30275 === 7))
{var inst_30270 = (state_30274[2]);var state_30274__$1 = state_30274;var statearr_30282_30301 = state_30274__$1;(statearr_30282_30301[2] = inst_30270);
(statearr_30282_30301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30275 === 8))
{var inst_30261 = cljs.core.async.close_BANG_.call(null,to);var state_30274__$1 = state_30274;var statearr_30283_30302 = state_30274__$1;(statearr_30283_30302[2] = inst_30261);
(statearr_30283_30302[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30275 === 9))
{var state_30274__$1 = state_30274;var statearr_30284_30303 = state_30274__$1;(statearr_30284_30303[2] = null);
(statearr_30284_30303[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30275 === 10))
{var inst_30264 = (state_30274[2]);var state_30274__$1 = state_30274;var statearr_30285_30304 = state_30274__$1;(statearr_30285_30304[2] = inst_30264);
(statearr_30285_30304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30275 === 11))
{var inst_30267 = (state_30274[2]);var state_30274__$1 = (function (){var statearr_30286 = state_30274;(statearr_30286[8] = inst_30267);
return statearr_30286;
})();var statearr_30287_30305 = state_30274__$1;(statearr_30287_30305[2] = null);
(statearr_30287_30305[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30291 = [null,null,null,null,null,null,null,null,null];(statearr_30291[0] = state_machine__5507__auto__);
(statearr_30291[1] = 1);
return statearr_30291;
});
var state_machine__5507__auto____1 = (function (state_30274){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30274);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30292){if((e30292 instanceof Object))
{var ex__5510__auto__ = e30292;var statearr_30293_30306 = state_30274;(statearr_30293_30306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30307 = state_30274;
state_30274 = G__30307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30274){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30294 = f__5522__auto__.call(null);(statearr_30294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30295);
return statearr_30294;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___30394 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30372){var state_val_30373 = (state_30372[1]);if((state_val_30373 === 1))
{var state_30372__$1 = state_30372;var statearr_30374_30395 = state_30372__$1;(statearr_30374_30395[2] = null);
(statearr_30374_30395[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 2))
{var state_30372__$1 = state_30372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30372__$1,4,ch);
} else
{if((state_val_30373 === 3))
{var inst_30370 = (state_30372[2]);var state_30372__$1 = state_30372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30372__$1,inst_30370);
} else
{if((state_val_30373 === 4))
{var inst_30353 = (state_30372[7]);var inst_30353__$1 = (state_30372[2]);var inst_30354 = (inst_30353__$1 == null);var state_30372__$1 = (function (){var statearr_30375 = state_30372;(statearr_30375[7] = inst_30353__$1);
return statearr_30375;
})();if(cljs.core.truth_(inst_30354))
{var statearr_30376_30396 = state_30372__$1;(statearr_30376_30396[1] = 5);
} else
{var statearr_30377_30397 = state_30372__$1;(statearr_30377_30397[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 5))
{var inst_30356 = cljs.core.async.close_BANG_.call(null,tc);var inst_30357 = cljs.core.async.close_BANG_.call(null,fc);var state_30372__$1 = (function (){var statearr_30378 = state_30372;(statearr_30378[8] = inst_30356);
return statearr_30378;
})();var statearr_30379_30398 = state_30372__$1;(statearr_30379_30398[2] = inst_30357);
(statearr_30379_30398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 6))
{var inst_30353 = (state_30372[7]);var inst_30359 = p.call(null,inst_30353);var state_30372__$1 = state_30372;if(cljs.core.truth_(inst_30359))
{var statearr_30380_30399 = state_30372__$1;(statearr_30380_30399[1] = 9);
} else
{var statearr_30381_30400 = state_30372__$1;(statearr_30381_30400[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 7))
{var inst_30368 = (state_30372[2]);var state_30372__$1 = state_30372;var statearr_30382_30401 = state_30372__$1;(statearr_30382_30401[2] = inst_30368);
(statearr_30382_30401[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 8))
{var inst_30365 = (state_30372[2]);var state_30372__$1 = (function (){var statearr_30383 = state_30372;(statearr_30383[9] = inst_30365);
return statearr_30383;
})();var statearr_30384_30402 = state_30372__$1;(statearr_30384_30402[2] = null);
(statearr_30384_30402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 9))
{var state_30372__$1 = state_30372;var statearr_30385_30403 = state_30372__$1;(statearr_30385_30403[2] = tc);
(statearr_30385_30403[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 10))
{var state_30372__$1 = state_30372;var statearr_30386_30404 = state_30372__$1;(statearr_30386_30404[2] = fc);
(statearr_30386_30404[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30373 === 11))
{var inst_30353 = (state_30372[7]);var inst_30363 = (state_30372[2]);var state_30372__$1 = state_30372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30372__$1,8,inst_30363,inst_30353);
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
var state_machine__5507__auto____0 = (function (){var statearr_30390 = [null,null,null,null,null,null,null,null,null,null];(statearr_30390[0] = state_machine__5507__auto__);
(statearr_30390[1] = 1);
return statearr_30390;
});
var state_machine__5507__auto____1 = (function (state_30372){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30391){if((e30391 instanceof Object))
{var ex__5510__auto__ = e30391;var statearr_30392_30405 = state_30372;(statearr_30392_30405[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30406 = state_30372;
state_30372 = G__30406;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30372){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30393 = f__5522__auto__.call(null);(statearr_30393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30394);
return statearr_30393;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30453){var state_val_30454 = (state_30453[1]);if((state_val_30454 === 7))
{var inst_30449 = (state_30453[2]);var state_30453__$1 = state_30453;var statearr_30455_30471 = state_30453__$1;(statearr_30455_30471[2] = inst_30449);
(statearr_30455_30471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30454 === 6))
{var inst_30442 = (state_30453[7]);var inst_30439 = (state_30453[8]);var inst_30446 = f.call(null,inst_30439,inst_30442);var inst_30439__$1 = inst_30446;var state_30453__$1 = (function (){var statearr_30456 = state_30453;(statearr_30456[8] = inst_30439__$1);
return statearr_30456;
})();var statearr_30457_30472 = state_30453__$1;(statearr_30457_30472[2] = null);
(statearr_30457_30472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30454 === 5))
{var inst_30439 = (state_30453[8]);var state_30453__$1 = state_30453;var statearr_30458_30473 = state_30453__$1;(statearr_30458_30473[2] = inst_30439);
(statearr_30458_30473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30454 === 4))
{var inst_30442 = (state_30453[7]);var inst_30442__$1 = (state_30453[2]);var inst_30443 = (inst_30442__$1 == null);var state_30453__$1 = (function (){var statearr_30459 = state_30453;(statearr_30459[7] = inst_30442__$1);
return statearr_30459;
})();if(cljs.core.truth_(inst_30443))
{var statearr_30460_30474 = state_30453__$1;(statearr_30460_30474[1] = 5);
} else
{var statearr_30461_30475 = state_30453__$1;(statearr_30461_30475[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30454 === 3))
{var inst_30451 = (state_30453[2]);var state_30453__$1 = state_30453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30453__$1,inst_30451);
} else
{if((state_val_30454 === 2))
{var state_30453__$1 = state_30453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,4,ch);
} else
{if((state_val_30454 === 1))
{var inst_30439 = init;var state_30453__$1 = (function (){var statearr_30462 = state_30453;(statearr_30462[8] = inst_30439);
return statearr_30462;
})();var statearr_30463_30476 = state_30453__$1;(statearr_30463_30476[2] = null);
(statearr_30463_30476[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30467 = [null,null,null,null,null,null,null,null,null];(statearr_30467[0] = state_machine__5507__auto__);
(statearr_30467[1] = 1);
return statearr_30467;
});
var state_machine__5507__auto____1 = (function (state_30453){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30468){if((e30468 instanceof Object))
{var ex__5510__auto__ = e30468;var statearr_30469_30477 = state_30453;(statearr_30469_30477[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30478 = state_30453;
state_30453 = G__30478;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30470 = f__5522__auto__.call(null);(statearr_30470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30470;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30540){var state_val_30541 = (state_30540[1]);if((state_val_30541 === 1))
{var inst_30520 = cljs.core.seq.call(null,coll);var inst_30521 = inst_30520;var state_30540__$1 = (function (){var statearr_30542 = state_30540;(statearr_30542[7] = inst_30521);
return statearr_30542;
})();var statearr_30543_30561 = state_30540__$1;(statearr_30543_30561[2] = null);
(statearr_30543_30561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30541 === 2))
{var inst_30521 = (state_30540[7]);var state_30540__$1 = state_30540;if(cljs.core.truth_(inst_30521))
{var statearr_30544_30562 = state_30540__$1;(statearr_30544_30562[1] = 4);
} else
{var statearr_30545_30563 = state_30540__$1;(statearr_30545_30563[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30541 === 3))
{var inst_30538 = (state_30540[2]);var state_30540__$1 = state_30540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30540__$1,inst_30538);
} else
{if((state_val_30541 === 4))
{var inst_30521 = (state_30540[7]);var inst_30524 = cljs.core.first.call(null,inst_30521);var state_30540__$1 = state_30540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30540__$1,7,ch,inst_30524);
} else
{if((state_val_30541 === 5))
{var state_30540__$1 = state_30540;if(cljs.core.truth_(close_QMARK_))
{var statearr_30546_30564 = state_30540__$1;(statearr_30546_30564[1] = 8);
} else
{var statearr_30547_30565 = state_30540__$1;(statearr_30547_30565[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30541 === 6))
{var inst_30536 = (state_30540[2]);var state_30540__$1 = state_30540;var statearr_30548_30566 = state_30540__$1;(statearr_30548_30566[2] = inst_30536);
(statearr_30548_30566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30541 === 7))
{var inst_30521 = (state_30540[7]);var inst_30526 = (state_30540[2]);var inst_30527 = cljs.core.next.call(null,inst_30521);var inst_30521__$1 = inst_30527;var state_30540__$1 = (function (){var statearr_30549 = state_30540;(statearr_30549[7] = inst_30521__$1);
(statearr_30549[8] = inst_30526);
return statearr_30549;
})();var statearr_30550_30567 = state_30540__$1;(statearr_30550_30567[2] = null);
(statearr_30550_30567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30541 === 8))
{var inst_30531 = cljs.core.async.close_BANG_.call(null,ch);var state_30540__$1 = state_30540;var statearr_30551_30568 = state_30540__$1;(statearr_30551_30568[2] = inst_30531);
(statearr_30551_30568[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30541 === 9))
{var state_30540__$1 = state_30540;var statearr_30552_30569 = state_30540__$1;(statearr_30552_30569[2] = null);
(statearr_30552_30569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30541 === 10))
{var inst_30534 = (state_30540[2]);var state_30540__$1 = state_30540;var statearr_30553_30570 = state_30540__$1;(statearr_30553_30570[2] = inst_30534);
(statearr_30553_30570[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_30557 = [null,null,null,null,null,null,null,null,null];(statearr_30557[0] = state_machine__5507__auto__);
(statearr_30557[1] = 1);
return statearr_30557;
});
var state_machine__5507__auto____1 = (function (state_30540){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30540);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30558){if((e30558 instanceof Object))
{var ex__5510__auto__ = e30558;var statearr_30559_30571 = state_30540;(statearr_30559_30571[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30572 = state_30540;
state_30540 = G__30572;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30540){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30560 = f__5522__auto__.call(null);(statearr_30560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30560;
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
cljs.core.async.Mux = (function (){var obj30574 = {};return obj30574;
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
cljs.core.async.Mult = (function (){var obj30576 = {};return obj30576;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30800 = (function (cs,ch,mult,meta30801){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30801 = meta30801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30800.cljs$lang$type = true;
cljs.core.async.t30800.cljs$lang$ctorStr = "cljs.core.async/t30800";
cljs.core.async.t30800.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30800");
});})(cs))
;
cljs.core.async.t30800.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30800.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30800.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30800.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30800.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30802){var self__ = this;
var _30802__$1 = this;return self__.meta30801;
});})(cs))
;
cljs.core.async.t30800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30802,meta30801__$1){var self__ = this;
var _30802__$1 = this;return (new cljs.core.async.t30800(self__.cs,self__.ch,self__.mult,meta30801__$1));
});})(cs))
;
cljs.core.async.__GT_t30800 = ((function (cs){
return (function __GT_t30800(cs__$1,ch__$1,mult__$1,meta30801){return (new cljs.core.async.t30800(cs__$1,ch__$1,mult__$1,meta30801));
});})(cs))
;
}
return (new cljs.core.async.t30800(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___31023 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30937){var state_val_30938 = (state_30937[1]);if((state_val_30938 === 32))
{var inst_30881 = (state_30937[7]);var inst_30805 = (state_30937[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30937,31,Object,null,30);var inst_30888 = cljs.core.async.put_BANG_.call(null,inst_30881,inst_30805,done);var state_30937__$1 = state_30937;var statearr_30939_31024 = state_30937__$1;(statearr_30939_31024[2] = inst_30888);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 1))
{var state_30937__$1 = state_30937;var statearr_30940_31025 = state_30937__$1;(statearr_30940_31025[2] = null);
(statearr_30940_31025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 33))
{var inst_30894 = (state_30937[9]);var inst_30896 = cljs.core.chunked_seq_QMARK_.call(null,inst_30894);var state_30937__$1 = state_30937;if(inst_30896)
{var statearr_30941_31026 = state_30937__$1;(statearr_30941_31026[1] = 36);
} else
{var statearr_30942_31027 = state_30937__$1;(statearr_30942_31027[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 2))
{var state_30937__$1 = state_30937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30937__$1,4,ch);
} else
{if((state_val_30938 === 34))
{var state_30937__$1 = state_30937;var statearr_30943_31028 = state_30937__$1;(statearr_30943_31028[2] = null);
(statearr_30943_31028[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 3))
{var inst_30935 = (state_30937[2]);var state_30937__$1 = state_30937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30937__$1,inst_30935);
} else
{if((state_val_30938 === 35))
{var inst_30919 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30944_31029 = state_30937__$1;(statearr_30944_31029[2] = inst_30919);
(statearr_30944_31029[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 4))
{var inst_30805 = (state_30937[8]);var inst_30805__$1 = (state_30937[2]);var inst_30806 = (inst_30805__$1 == null);var state_30937__$1 = (function (){var statearr_30945 = state_30937;(statearr_30945[8] = inst_30805__$1);
return statearr_30945;
})();if(cljs.core.truth_(inst_30806))
{var statearr_30946_31030 = state_30937__$1;(statearr_30946_31030[1] = 5);
} else
{var statearr_30947_31031 = state_30937__$1;(statearr_30947_31031[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 36))
{var inst_30894 = (state_30937[9]);var inst_30898 = cljs.core.chunk_first.call(null,inst_30894);var inst_30899 = cljs.core.chunk_rest.call(null,inst_30894);var inst_30900 = cljs.core.count.call(null,inst_30898);var inst_30873 = inst_30899;var inst_30874 = inst_30898;var inst_30875 = inst_30900;var inst_30876 = 0;var state_30937__$1 = (function (){var statearr_30948 = state_30937;(statearr_30948[10] = inst_30873);
(statearr_30948[11] = inst_30874);
(statearr_30948[12] = inst_30876);
(statearr_30948[13] = inst_30875);
return statearr_30948;
})();var statearr_30949_31032 = state_30937__$1;(statearr_30949_31032[2] = null);
(statearr_30949_31032[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 5))
{var inst_30812 = cljs.core.deref.call(null,cs);var inst_30813 = cljs.core.seq.call(null,inst_30812);var inst_30814 = inst_30813;var inst_30815 = null;var inst_30816 = 0;var inst_30817 = 0;var state_30937__$1 = (function (){var statearr_30950 = state_30937;(statearr_30950[14] = inst_30815);
(statearr_30950[15] = inst_30816);
(statearr_30950[16] = inst_30814);
(statearr_30950[17] = inst_30817);
return statearr_30950;
})();var statearr_30951_31033 = state_30937__$1;(statearr_30951_31033[2] = null);
(statearr_30951_31033[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 37))
{var inst_30894 = (state_30937[9]);var inst_30903 = cljs.core.first.call(null,inst_30894);var state_30937__$1 = (function (){var statearr_30952 = state_30937;(statearr_30952[18] = inst_30903);
return statearr_30952;
})();var statearr_30953_31034 = state_30937__$1;(statearr_30953_31034[2] = null);
(statearr_30953_31034[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 6))
{var inst_30865 = (state_30937[19]);var inst_30864 = cljs.core.deref.call(null,cs);var inst_30865__$1 = cljs.core.keys.call(null,inst_30864);var inst_30866 = cljs.core.count.call(null,inst_30865__$1);var inst_30867 = cljs.core.reset_BANG_.call(null,dctr,inst_30866);var inst_30872 = cljs.core.seq.call(null,inst_30865__$1);var inst_30873 = inst_30872;var inst_30874 = null;var inst_30875 = 0;var inst_30876 = 0;var state_30937__$1 = (function (){var statearr_30954 = state_30937;(statearr_30954[19] = inst_30865__$1);
(statearr_30954[20] = inst_30867);
(statearr_30954[10] = inst_30873);
(statearr_30954[11] = inst_30874);
(statearr_30954[12] = inst_30876);
(statearr_30954[13] = inst_30875);
return statearr_30954;
})();var statearr_30955_31035 = state_30937__$1;(statearr_30955_31035[2] = null);
(statearr_30955_31035[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 38))
{var inst_30916 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30956_31036 = state_30937__$1;(statearr_30956_31036[2] = inst_30916);
(statearr_30956_31036[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 7))
{var inst_30933 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30957_31037 = state_30937__$1;(statearr_30957_31037[2] = inst_30933);
(statearr_30957_31037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 39))
{var inst_30894 = (state_30937[9]);var inst_30912 = (state_30937[2]);var inst_30913 = cljs.core.next.call(null,inst_30894);var inst_30873 = inst_30913;var inst_30874 = null;var inst_30875 = 0;var inst_30876 = 0;var state_30937__$1 = (function (){var statearr_30958 = state_30937;(statearr_30958[10] = inst_30873);
(statearr_30958[11] = inst_30874);
(statearr_30958[12] = inst_30876);
(statearr_30958[13] = inst_30875);
(statearr_30958[21] = inst_30912);
return statearr_30958;
})();var statearr_30959_31038 = state_30937__$1;(statearr_30959_31038[2] = null);
(statearr_30959_31038[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 8))
{var inst_30816 = (state_30937[15]);var inst_30817 = (state_30937[17]);var inst_30819 = (inst_30817 < inst_30816);var inst_30820 = inst_30819;var state_30937__$1 = state_30937;if(cljs.core.truth_(inst_30820))
{var statearr_30960_31039 = state_30937__$1;(statearr_30960_31039[1] = 10);
} else
{var statearr_30961_31040 = state_30937__$1;(statearr_30961_31040[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 40))
{var inst_30903 = (state_30937[18]);var inst_30904 = (state_30937[2]);var inst_30905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30906 = cljs.core.async.untap_STAR_.call(null,m,inst_30903);var state_30937__$1 = (function (){var statearr_30962 = state_30937;(statearr_30962[22] = inst_30905);
(statearr_30962[23] = inst_30904);
return statearr_30962;
})();var statearr_30963_31041 = state_30937__$1;(statearr_30963_31041[2] = inst_30906);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 9))
{var inst_30862 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30964_31042 = state_30937__$1;(statearr_30964_31042[2] = inst_30862);
(statearr_30964_31042[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 41))
{var inst_30903 = (state_30937[18]);var inst_30805 = (state_30937[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30937,40,Object,null,39);var inst_30910 = cljs.core.async.put_BANG_.call(null,inst_30903,inst_30805,done);var state_30937__$1 = state_30937;var statearr_30965_31043 = state_30937__$1;(statearr_30965_31043[2] = inst_30910);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 10))
{var inst_30815 = (state_30937[14]);var inst_30817 = (state_30937[17]);var inst_30823 = cljs.core._nth.call(null,inst_30815,inst_30817);var inst_30824 = cljs.core.nth.call(null,inst_30823,0,null);var inst_30825 = cljs.core.nth.call(null,inst_30823,1,null);var state_30937__$1 = (function (){var statearr_30966 = state_30937;(statearr_30966[24] = inst_30824);
return statearr_30966;
})();if(cljs.core.truth_(inst_30825))
{var statearr_30967_31044 = state_30937__$1;(statearr_30967_31044[1] = 13);
} else
{var statearr_30968_31045 = state_30937__$1;(statearr_30968_31045[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 42))
{var state_30937__$1 = state_30937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30937__$1,45,dchan);
} else
{if((state_val_30938 === 11))
{var inst_30814 = (state_30937[16]);var inst_30834 = (state_30937[25]);var inst_30834__$1 = cljs.core.seq.call(null,inst_30814);var state_30937__$1 = (function (){var statearr_30969 = state_30937;(statearr_30969[25] = inst_30834__$1);
return statearr_30969;
})();if(inst_30834__$1)
{var statearr_30970_31046 = state_30937__$1;(statearr_30970_31046[1] = 16);
} else
{var statearr_30971_31047 = state_30937__$1;(statearr_30971_31047[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 43))
{var state_30937__$1 = state_30937;var statearr_30972_31048 = state_30937__$1;(statearr_30972_31048[2] = null);
(statearr_30972_31048[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 12))
{var inst_30860 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30973_31049 = state_30937__$1;(statearr_30973_31049[2] = inst_30860);
(statearr_30973_31049[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 44))
{var inst_30930 = (state_30937[2]);var state_30937__$1 = (function (){var statearr_30974 = state_30937;(statearr_30974[26] = inst_30930);
return statearr_30974;
})();var statearr_30975_31050 = state_30937__$1;(statearr_30975_31050[2] = null);
(statearr_30975_31050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 13))
{var inst_30824 = (state_30937[24]);var inst_30827 = cljs.core.async.close_BANG_.call(null,inst_30824);var state_30937__$1 = state_30937;var statearr_30976_31051 = state_30937__$1;(statearr_30976_31051[2] = inst_30827);
(statearr_30976_31051[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 45))
{var inst_30927 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30980_31052 = state_30937__$1;(statearr_30980_31052[2] = inst_30927);
(statearr_30980_31052[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 14))
{var state_30937__$1 = state_30937;var statearr_30981_31053 = state_30937__$1;(statearr_30981_31053[2] = null);
(statearr_30981_31053[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 15))
{var inst_30815 = (state_30937[14]);var inst_30816 = (state_30937[15]);var inst_30814 = (state_30937[16]);var inst_30817 = (state_30937[17]);var inst_30830 = (state_30937[2]);var inst_30831 = (inst_30817 + 1);var tmp30977 = inst_30815;var tmp30978 = inst_30816;var tmp30979 = inst_30814;var inst_30814__$1 = tmp30979;var inst_30815__$1 = tmp30977;var inst_30816__$1 = tmp30978;var inst_30817__$1 = inst_30831;var state_30937__$1 = (function (){var statearr_30982 = state_30937;(statearr_30982[14] = inst_30815__$1);
(statearr_30982[15] = inst_30816__$1);
(statearr_30982[16] = inst_30814__$1);
(statearr_30982[17] = inst_30817__$1);
(statearr_30982[27] = inst_30830);
return statearr_30982;
})();var statearr_30983_31054 = state_30937__$1;(statearr_30983_31054[2] = null);
(statearr_30983_31054[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 16))
{var inst_30834 = (state_30937[25]);var inst_30836 = cljs.core.chunked_seq_QMARK_.call(null,inst_30834);var state_30937__$1 = state_30937;if(inst_30836)
{var statearr_30984_31055 = state_30937__$1;(statearr_30984_31055[1] = 19);
} else
{var statearr_30985_31056 = state_30937__$1;(statearr_30985_31056[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 17))
{var state_30937__$1 = state_30937;var statearr_30986_31057 = state_30937__$1;(statearr_30986_31057[2] = null);
(statearr_30986_31057[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 18))
{var inst_30858 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30987_31058 = state_30937__$1;(statearr_30987_31058[2] = inst_30858);
(statearr_30987_31058[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 19))
{var inst_30834 = (state_30937[25]);var inst_30838 = cljs.core.chunk_first.call(null,inst_30834);var inst_30839 = cljs.core.chunk_rest.call(null,inst_30834);var inst_30840 = cljs.core.count.call(null,inst_30838);var inst_30814 = inst_30839;var inst_30815 = inst_30838;var inst_30816 = inst_30840;var inst_30817 = 0;var state_30937__$1 = (function (){var statearr_30988 = state_30937;(statearr_30988[14] = inst_30815);
(statearr_30988[15] = inst_30816);
(statearr_30988[16] = inst_30814);
(statearr_30988[17] = inst_30817);
return statearr_30988;
})();var statearr_30989_31059 = state_30937__$1;(statearr_30989_31059[2] = null);
(statearr_30989_31059[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 20))
{var inst_30834 = (state_30937[25]);var inst_30844 = cljs.core.first.call(null,inst_30834);var inst_30845 = cljs.core.nth.call(null,inst_30844,0,null);var inst_30846 = cljs.core.nth.call(null,inst_30844,1,null);var state_30937__$1 = (function (){var statearr_30990 = state_30937;(statearr_30990[28] = inst_30845);
return statearr_30990;
})();if(cljs.core.truth_(inst_30846))
{var statearr_30991_31060 = state_30937__$1;(statearr_30991_31060[1] = 22);
} else
{var statearr_30992_31061 = state_30937__$1;(statearr_30992_31061[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 21))
{var inst_30855 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_30993_31062 = state_30937__$1;(statearr_30993_31062[2] = inst_30855);
(statearr_30993_31062[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 22))
{var inst_30845 = (state_30937[28]);var inst_30848 = cljs.core.async.close_BANG_.call(null,inst_30845);var state_30937__$1 = state_30937;var statearr_30994_31063 = state_30937__$1;(statearr_30994_31063[2] = inst_30848);
(statearr_30994_31063[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 23))
{var state_30937__$1 = state_30937;var statearr_30995_31064 = state_30937__$1;(statearr_30995_31064[2] = null);
(statearr_30995_31064[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 24))
{var inst_30834 = (state_30937[25]);var inst_30851 = (state_30937[2]);var inst_30852 = cljs.core.next.call(null,inst_30834);var inst_30814 = inst_30852;var inst_30815 = null;var inst_30816 = 0;var inst_30817 = 0;var state_30937__$1 = (function (){var statearr_30996 = state_30937;(statearr_30996[14] = inst_30815);
(statearr_30996[15] = inst_30816);
(statearr_30996[16] = inst_30814);
(statearr_30996[17] = inst_30817);
(statearr_30996[29] = inst_30851);
return statearr_30996;
})();var statearr_30997_31065 = state_30937__$1;(statearr_30997_31065[2] = null);
(statearr_30997_31065[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 25))
{var inst_30876 = (state_30937[12]);var inst_30875 = (state_30937[13]);var inst_30878 = (inst_30876 < inst_30875);var inst_30879 = inst_30878;var state_30937__$1 = state_30937;if(cljs.core.truth_(inst_30879))
{var statearr_30998_31066 = state_30937__$1;(statearr_30998_31066[1] = 27);
} else
{var statearr_30999_31067 = state_30937__$1;(statearr_30999_31067[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 26))
{var inst_30865 = (state_30937[19]);var inst_30923 = (state_30937[2]);var inst_30924 = cljs.core.seq.call(null,inst_30865);var state_30937__$1 = (function (){var statearr_31000 = state_30937;(statearr_31000[30] = inst_30923);
return statearr_31000;
})();if(inst_30924)
{var statearr_31001_31068 = state_30937__$1;(statearr_31001_31068[1] = 42);
} else
{var statearr_31002_31069 = state_30937__$1;(statearr_31002_31069[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 27))
{var inst_30874 = (state_30937[11]);var inst_30876 = (state_30937[12]);var inst_30881 = cljs.core._nth.call(null,inst_30874,inst_30876);var state_30937__$1 = (function (){var statearr_31003 = state_30937;(statearr_31003[7] = inst_30881);
return statearr_31003;
})();var statearr_31004_31070 = state_30937__$1;(statearr_31004_31070[2] = null);
(statearr_31004_31070[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 28))
{var inst_30873 = (state_30937[10]);var inst_30894 = (state_30937[9]);var inst_30894__$1 = cljs.core.seq.call(null,inst_30873);var state_30937__$1 = (function (){var statearr_31008 = state_30937;(statearr_31008[9] = inst_30894__$1);
return statearr_31008;
})();if(inst_30894__$1)
{var statearr_31009_31071 = state_30937__$1;(statearr_31009_31071[1] = 33);
} else
{var statearr_31010_31072 = state_30937__$1;(statearr_31010_31072[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 29))
{var inst_30921 = (state_30937[2]);var state_30937__$1 = state_30937;var statearr_31011_31073 = state_30937__$1;(statearr_31011_31073[2] = inst_30921);
(statearr_31011_31073[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 30))
{var inst_30873 = (state_30937[10]);var inst_30874 = (state_30937[11]);var inst_30876 = (state_30937[12]);var inst_30875 = (state_30937[13]);var inst_30890 = (state_30937[2]);var inst_30891 = (inst_30876 + 1);var tmp31005 = inst_30873;var tmp31006 = inst_30874;var tmp31007 = inst_30875;var inst_30873__$1 = tmp31005;var inst_30874__$1 = tmp31006;var inst_30875__$1 = tmp31007;var inst_30876__$1 = inst_30891;var state_30937__$1 = (function (){var statearr_31012 = state_30937;(statearr_31012[31] = inst_30890);
(statearr_31012[10] = inst_30873__$1);
(statearr_31012[11] = inst_30874__$1);
(statearr_31012[12] = inst_30876__$1);
(statearr_31012[13] = inst_30875__$1);
return statearr_31012;
})();var statearr_31013_31074 = state_30937__$1;(statearr_31013_31074[2] = null);
(statearr_31013_31074[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30938 === 31))
{var inst_30881 = (state_30937[7]);var inst_30882 = (state_30937[2]);var inst_30883 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30884 = cljs.core.async.untap_STAR_.call(null,m,inst_30881);var state_30937__$1 = (function (){var statearr_31014 = state_30937;(statearr_31014[32] = inst_30882);
(statearr_31014[33] = inst_30883);
return statearr_31014;
})();var statearr_31015_31075 = state_30937__$1;(statearr_31015_31075[2] = inst_30884);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_31019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31019[0] = state_machine__5507__auto__);
(statearr_31019[1] = 1);
return statearr_31019;
});
var state_machine__5507__auto____1 = (function (state_30937){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30937);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object))
{var ex__5510__auto__ = e31020;var statearr_31021_31076 = state_30937;(statearr_31021_31076[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31077 = state_30937;
state_30937 = G__31077;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30937){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31022 = f__5522__auto__.call(null);(statearr_31022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31023);
return statearr_31022;
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
cljs.core.async.Mix = (function (){var obj31079 = {};return obj31079;
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
;var m = (function (){if(typeof cljs.core.async.t31189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31189 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31190){
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
this.meta31190 = meta31190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31189.cljs$lang$type = true;
cljs.core.async.t31189.cljs$lang$ctorStr = "cljs.core.async/t31189";
cljs.core.async.t31189.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31189");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31189.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31191){var self__ = this;
var _31191__$1 = this;return self__.meta31190;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31191,meta31190__$1){var self__ = this;
var _31191__$1 = this;return (new cljs.core.async.t31189(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31190__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31189 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31189(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31190){return (new cljs.core.async.t31189(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31190));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31189(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___31298 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31256){var state_val_31257 = (state_31256[1]);if((state_val_31257 === 1))
{var inst_31195 = (state_31256[7]);var inst_31195__$1 = calc_state.call(null);var inst_31196 = cljs.core.seq_QMARK_.call(null,inst_31195__$1);var state_31256__$1 = (function (){var statearr_31258 = state_31256;(statearr_31258[7] = inst_31195__$1);
return statearr_31258;
})();if(inst_31196)
{var statearr_31259_31299 = state_31256__$1;(statearr_31259_31299[1] = 2);
} else
{var statearr_31260_31300 = state_31256__$1;(statearr_31260_31300[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 2))
{var inst_31195 = (state_31256[7]);var inst_31198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31195);var state_31256__$1 = state_31256;var statearr_31261_31301 = state_31256__$1;(statearr_31261_31301[2] = inst_31198);
(statearr_31261_31301[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 3))
{var inst_31195 = (state_31256[7]);var state_31256__$1 = state_31256;var statearr_31262_31302 = state_31256__$1;(statearr_31262_31302[2] = inst_31195);
(statearr_31262_31302[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 4))
{var inst_31195 = (state_31256[7]);var inst_31201 = (state_31256[2]);var inst_31202 = cljs.core.get.call(null,inst_31201,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31203 = cljs.core.get.call(null,inst_31201,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31204 = cljs.core.get.call(null,inst_31201,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31205 = inst_31195;var state_31256__$1 = (function (){var statearr_31263 = state_31256;(statearr_31263[8] = inst_31202);
(statearr_31263[9] = inst_31203);
(statearr_31263[10] = inst_31204);
(statearr_31263[11] = inst_31205);
return statearr_31263;
})();var statearr_31264_31303 = state_31256__$1;(statearr_31264_31303[2] = null);
(statearr_31264_31303[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 5))
{var inst_31205 = (state_31256[11]);var inst_31208 = cljs.core.seq_QMARK_.call(null,inst_31205);var state_31256__$1 = state_31256;if(inst_31208)
{var statearr_31265_31304 = state_31256__$1;(statearr_31265_31304[1] = 7);
} else
{var statearr_31266_31305 = state_31256__$1;(statearr_31266_31305[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 6))
{var inst_31254 = (state_31256[2]);var state_31256__$1 = state_31256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31256__$1,inst_31254);
} else
{if((state_val_31257 === 7))
{var inst_31205 = (state_31256[11]);var inst_31210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31205);var state_31256__$1 = state_31256;var statearr_31267_31306 = state_31256__$1;(statearr_31267_31306[2] = inst_31210);
(statearr_31267_31306[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 8))
{var inst_31205 = (state_31256[11]);var state_31256__$1 = state_31256;var statearr_31268_31307 = state_31256__$1;(statearr_31268_31307[2] = inst_31205);
(statearr_31268_31307[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 9))
{var inst_31213 = (state_31256[12]);var inst_31213__$1 = (state_31256[2]);var inst_31214 = cljs.core.get.call(null,inst_31213__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31215 = cljs.core.get.call(null,inst_31213__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31216 = cljs.core.get.call(null,inst_31213__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31256__$1 = (function (){var statearr_31269 = state_31256;(statearr_31269[12] = inst_31213__$1);
(statearr_31269[13] = inst_31215);
(statearr_31269[14] = inst_31216);
return statearr_31269;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31256__$1,10,inst_31214);
} else
{if((state_val_31257 === 10))
{var inst_31221 = (state_31256[15]);var inst_31220 = (state_31256[16]);var inst_31219 = (state_31256[2]);var inst_31220__$1 = cljs.core.nth.call(null,inst_31219,0,null);var inst_31221__$1 = cljs.core.nth.call(null,inst_31219,1,null);var inst_31222 = (inst_31220__$1 == null);var inst_31223 = cljs.core._EQ_.call(null,inst_31221__$1,change);var inst_31224 = (inst_31222) || (inst_31223);var state_31256__$1 = (function (){var statearr_31270 = state_31256;(statearr_31270[15] = inst_31221__$1);
(statearr_31270[16] = inst_31220__$1);
return statearr_31270;
})();if(cljs.core.truth_(inst_31224))
{var statearr_31271_31308 = state_31256__$1;(statearr_31271_31308[1] = 11);
} else
{var statearr_31272_31309 = state_31256__$1;(statearr_31272_31309[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 11))
{var inst_31220 = (state_31256[16]);var inst_31226 = (inst_31220 == null);var state_31256__$1 = state_31256;if(cljs.core.truth_(inst_31226))
{var statearr_31273_31310 = state_31256__$1;(statearr_31273_31310[1] = 14);
} else
{var statearr_31274_31311 = state_31256__$1;(statearr_31274_31311[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 12))
{var inst_31221 = (state_31256[15]);var inst_31235 = (state_31256[17]);var inst_31216 = (state_31256[14]);var inst_31235__$1 = inst_31216.call(null,inst_31221);var state_31256__$1 = (function (){var statearr_31275 = state_31256;(statearr_31275[17] = inst_31235__$1);
return statearr_31275;
})();if(cljs.core.truth_(inst_31235__$1))
{var statearr_31276_31312 = state_31256__$1;(statearr_31276_31312[1] = 17);
} else
{var statearr_31277_31313 = state_31256__$1;(statearr_31277_31313[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 13))
{var inst_31252 = (state_31256[2]);var state_31256__$1 = state_31256;var statearr_31278_31314 = state_31256__$1;(statearr_31278_31314[2] = inst_31252);
(statearr_31278_31314[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 14))
{var inst_31221 = (state_31256[15]);var inst_31228 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31221);var state_31256__$1 = state_31256;var statearr_31279_31315 = state_31256__$1;(statearr_31279_31315[2] = inst_31228);
(statearr_31279_31315[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 15))
{var state_31256__$1 = state_31256;var statearr_31280_31316 = state_31256__$1;(statearr_31280_31316[2] = null);
(statearr_31280_31316[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 16))
{var inst_31231 = (state_31256[2]);var inst_31232 = calc_state.call(null);var inst_31205 = inst_31232;var state_31256__$1 = (function (){var statearr_31281 = state_31256;(statearr_31281[11] = inst_31205);
(statearr_31281[18] = inst_31231);
return statearr_31281;
})();var statearr_31282_31317 = state_31256__$1;(statearr_31282_31317[2] = null);
(statearr_31282_31317[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 17))
{var inst_31235 = (state_31256[17]);var state_31256__$1 = state_31256;var statearr_31283_31318 = state_31256__$1;(statearr_31283_31318[2] = inst_31235);
(statearr_31283_31318[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 18))
{var inst_31221 = (state_31256[15]);var inst_31215 = (state_31256[13]);var inst_31216 = (state_31256[14]);var inst_31238 = cljs.core.empty_QMARK_.call(null,inst_31216);var inst_31239 = inst_31215.call(null,inst_31221);var inst_31240 = cljs.core.not.call(null,inst_31239);var inst_31241 = (inst_31238) && (inst_31240);var state_31256__$1 = state_31256;var statearr_31284_31319 = state_31256__$1;(statearr_31284_31319[2] = inst_31241);
(statearr_31284_31319[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 19))
{var inst_31243 = (state_31256[2]);var state_31256__$1 = state_31256;if(cljs.core.truth_(inst_31243))
{var statearr_31285_31320 = state_31256__$1;(statearr_31285_31320[1] = 20);
} else
{var statearr_31286_31321 = state_31256__$1;(statearr_31286_31321[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 20))
{var inst_31220 = (state_31256[16]);var state_31256__$1 = state_31256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31256__$1,23,out,inst_31220);
} else
{if((state_val_31257 === 21))
{var state_31256__$1 = state_31256;var statearr_31287_31322 = state_31256__$1;(statearr_31287_31322[2] = null);
(statearr_31287_31322[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 22))
{var inst_31213 = (state_31256[12]);var inst_31249 = (state_31256[2]);var inst_31205 = inst_31213;var state_31256__$1 = (function (){var statearr_31288 = state_31256;(statearr_31288[19] = inst_31249);
(statearr_31288[11] = inst_31205);
return statearr_31288;
})();var statearr_31289_31323 = state_31256__$1;(statearr_31289_31323[2] = null);
(statearr_31289_31323[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31257 === 23))
{var inst_31246 = (state_31256[2]);var state_31256__$1 = state_31256;var statearr_31290_31324 = state_31256__$1;(statearr_31290_31324[2] = inst_31246);
(statearr_31290_31324[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31294[0] = state_machine__5507__auto__);
(statearr_31294[1] = 1);
return statearr_31294;
});
var state_machine__5507__auto____1 = (function (state_31256){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31256);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31295){if((e31295 instanceof Object))
{var ex__5510__auto__ = e31295;var statearr_31296_31325 = state_31256;(statearr_31296_31325[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31326 = state_31256;
state_31256 = G__31326;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31256){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31297 = f__5522__auto__.call(null);(statearr_31297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31298);
return statearr_31297;
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
cljs.core.async.Pub = (function (){var obj31328 = {};return obj31328;
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
return (function (p1__31329_SHARP_){if(cljs.core.truth_(p1__31329_SHARP_.call(null,topic)))
{return p1__31329_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31329_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31454 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31455){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31455 = meta31455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31454.cljs$lang$type = true;
cljs.core.async.t31454.cljs$lang$ctorStr = "cljs.core.async/t31454";
cljs.core.async.t31454.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31454");
});})(mults,ensure_mult))
;
cljs.core.async.t31454.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31454.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31454.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31454.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31456){var self__ = this;
var _31456__$1 = this;return self__.meta31455;
});})(mults,ensure_mult))
;
cljs.core.async.t31454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31456,meta31455__$1){var self__ = this;
var _31456__$1 = this;return (new cljs.core.async.t31454(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31455__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31454 = ((function (mults,ensure_mult){
return (function __GT_t31454(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31455){return (new cljs.core.async.t31454(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31455));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31454(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___31578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31530){var state_val_31531 = (state_31530[1]);if((state_val_31531 === 1))
{var state_31530__$1 = state_31530;var statearr_31532_31579 = state_31530__$1;(statearr_31532_31579[2] = null);
(statearr_31532_31579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 2))
{var state_31530__$1 = state_31530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31530__$1,4,ch);
} else
{if((state_val_31531 === 3))
{var inst_31528 = (state_31530[2]);var state_31530__$1 = state_31530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31530__$1,inst_31528);
} else
{if((state_val_31531 === 4))
{var inst_31459 = (state_31530[7]);var inst_31459__$1 = (state_31530[2]);var inst_31460 = (inst_31459__$1 == null);var state_31530__$1 = (function (){var statearr_31533 = state_31530;(statearr_31533[7] = inst_31459__$1);
return statearr_31533;
})();if(cljs.core.truth_(inst_31460))
{var statearr_31534_31580 = state_31530__$1;(statearr_31534_31580[1] = 5);
} else
{var statearr_31535_31581 = state_31530__$1;(statearr_31535_31581[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 5))
{var inst_31466 = cljs.core.deref.call(null,mults);var inst_31467 = cljs.core.vals.call(null,inst_31466);var inst_31468 = cljs.core.seq.call(null,inst_31467);var inst_31469 = inst_31468;var inst_31470 = null;var inst_31471 = 0;var inst_31472 = 0;var state_31530__$1 = (function (){var statearr_31536 = state_31530;(statearr_31536[8] = inst_31469);
(statearr_31536[9] = inst_31470);
(statearr_31536[10] = inst_31471);
(statearr_31536[11] = inst_31472);
return statearr_31536;
})();var statearr_31537_31582 = state_31530__$1;(statearr_31537_31582[2] = null);
(statearr_31537_31582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 6))
{var inst_31509 = (state_31530[12]);var inst_31507 = (state_31530[13]);var inst_31459 = (state_31530[7]);var inst_31507__$1 = topic_fn.call(null,inst_31459);var inst_31508 = cljs.core.deref.call(null,mults);var inst_31509__$1 = cljs.core.get.call(null,inst_31508,inst_31507__$1);var state_31530__$1 = (function (){var statearr_31538 = state_31530;(statearr_31538[12] = inst_31509__$1);
(statearr_31538[13] = inst_31507__$1);
return statearr_31538;
})();if(cljs.core.truth_(inst_31509__$1))
{var statearr_31539_31583 = state_31530__$1;(statearr_31539_31583[1] = 19);
} else
{var statearr_31540_31584 = state_31530__$1;(statearr_31540_31584[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 7))
{var inst_31526 = (state_31530[2]);var state_31530__$1 = state_31530;var statearr_31541_31585 = state_31530__$1;(statearr_31541_31585[2] = inst_31526);
(statearr_31541_31585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 8))
{var inst_31471 = (state_31530[10]);var inst_31472 = (state_31530[11]);var inst_31474 = (inst_31472 < inst_31471);var inst_31475 = inst_31474;var state_31530__$1 = state_31530;if(cljs.core.truth_(inst_31475))
{var statearr_31545_31586 = state_31530__$1;(statearr_31545_31586[1] = 10);
} else
{var statearr_31546_31587 = state_31530__$1;(statearr_31546_31587[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 9))
{var inst_31505 = (state_31530[2]);var state_31530__$1 = state_31530;var statearr_31547_31588 = state_31530__$1;(statearr_31547_31588[2] = inst_31505);
(statearr_31547_31588[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 10))
{var inst_31469 = (state_31530[8]);var inst_31470 = (state_31530[9]);var inst_31471 = (state_31530[10]);var inst_31472 = (state_31530[11]);var inst_31477 = cljs.core._nth.call(null,inst_31470,inst_31472);var inst_31478 = cljs.core.async.muxch_STAR_.call(null,inst_31477);var inst_31479 = cljs.core.async.close_BANG_.call(null,inst_31478);var inst_31480 = (inst_31472 + 1);var tmp31542 = inst_31469;var tmp31543 = inst_31470;var tmp31544 = inst_31471;var inst_31469__$1 = tmp31542;var inst_31470__$1 = tmp31543;var inst_31471__$1 = tmp31544;var inst_31472__$1 = inst_31480;var state_31530__$1 = (function (){var statearr_31548 = state_31530;(statearr_31548[8] = inst_31469__$1);
(statearr_31548[9] = inst_31470__$1);
(statearr_31548[10] = inst_31471__$1);
(statearr_31548[14] = inst_31479);
(statearr_31548[11] = inst_31472__$1);
return statearr_31548;
})();var statearr_31549_31589 = state_31530__$1;(statearr_31549_31589[2] = null);
(statearr_31549_31589[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 11))
{var inst_31469 = (state_31530[8]);var inst_31483 = (state_31530[15]);var inst_31483__$1 = cljs.core.seq.call(null,inst_31469);var state_31530__$1 = (function (){var statearr_31550 = state_31530;(statearr_31550[15] = inst_31483__$1);
return statearr_31550;
})();if(inst_31483__$1)
{var statearr_31551_31590 = state_31530__$1;(statearr_31551_31590[1] = 13);
} else
{var statearr_31552_31591 = state_31530__$1;(statearr_31552_31591[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 12))
{var inst_31503 = (state_31530[2]);var state_31530__$1 = state_31530;var statearr_31553_31592 = state_31530__$1;(statearr_31553_31592[2] = inst_31503);
(statearr_31553_31592[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 13))
{var inst_31483 = (state_31530[15]);var inst_31485 = cljs.core.chunked_seq_QMARK_.call(null,inst_31483);var state_31530__$1 = state_31530;if(inst_31485)
{var statearr_31554_31593 = state_31530__$1;(statearr_31554_31593[1] = 16);
} else
{var statearr_31555_31594 = state_31530__$1;(statearr_31555_31594[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 14))
{var state_31530__$1 = state_31530;var statearr_31556_31595 = state_31530__$1;(statearr_31556_31595[2] = null);
(statearr_31556_31595[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 15))
{var inst_31501 = (state_31530[2]);var state_31530__$1 = state_31530;var statearr_31557_31596 = state_31530__$1;(statearr_31557_31596[2] = inst_31501);
(statearr_31557_31596[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 16))
{var inst_31483 = (state_31530[15]);var inst_31487 = cljs.core.chunk_first.call(null,inst_31483);var inst_31488 = cljs.core.chunk_rest.call(null,inst_31483);var inst_31489 = cljs.core.count.call(null,inst_31487);var inst_31469 = inst_31488;var inst_31470 = inst_31487;var inst_31471 = inst_31489;var inst_31472 = 0;var state_31530__$1 = (function (){var statearr_31558 = state_31530;(statearr_31558[8] = inst_31469);
(statearr_31558[9] = inst_31470);
(statearr_31558[10] = inst_31471);
(statearr_31558[11] = inst_31472);
return statearr_31558;
})();var statearr_31559_31597 = state_31530__$1;(statearr_31559_31597[2] = null);
(statearr_31559_31597[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 17))
{var inst_31483 = (state_31530[15]);var inst_31492 = cljs.core.first.call(null,inst_31483);var inst_31493 = cljs.core.async.muxch_STAR_.call(null,inst_31492);var inst_31494 = cljs.core.async.close_BANG_.call(null,inst_31493);var inst_31495 = cljs.core.next.call(null,inst_31483);var inst_31469 = inst_31495;var inst_31470 = null;var inst_31471 = 0;var inst_31472 = 0;var state_31530__$1 = (function (){var statearr_31560 = state_31530;(statearr_31560[8] = inst_31469);
(statearr_31560[16] = inst_31494);
(statearr_31560[9] = inst_31470);
(statearr_31560[10] = inst_31471);
(statearr_31560[11] = inst_31472);
return statearr_31560;
})();var statearr_31561_31598 = state_31530__$1;(statearr_31561_31598[2] = null);
(statearr_31561_31598[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 18))
{var inst_31498 = (state_31530[2]);var state_31530__$1 = state_31530;var statearr_31562_31599 = state_31530__$1;(statearr_31562_31599[2] = inst_31498);
(statearr_31562_31599[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 19))
{var state_31530__$1 = state_31530;var statearr_31563_31600 = state_31530__$1;(statearr_31563_31600[2] = null);
(statearr_31563_31600[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 20))
{var state_31530__$1 = state_31530;var statearr_31564_31601 = state_31530__$1;(statearr_31564_31601[2] = null);
(statearr_31564_31601[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 21))
{var inst_31523 = (state_31530[2]);var state_31530__$1 = (function (){var statearr_31565 = state_31530;(statearr_31565[17] = inst_31523);
return statearr_31565;
})();var statearr_31566_31602 = state_31530__$1;(statearr_31566_31602[2] = null);
(statearr_31566_31602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 22))
{var inst_31520 = (state_31530[2]);var state_31530__$1 = state_31530;var statearr_31567_31603 = state_31530__$1;(statearr_31567_31603[2] = inst_31520);
(statearr_31567_31603[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 23))
{var inst_31507 = (state_31530[13]);var inst_31511 = (state_31530[2]);var inst_31512 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31507);var state_31530__$1 = (function (){var statearr_31568 = state_31530;(statearr_31568[18] = inst_31511);
return statearr_31568;
})();var statearr_31569_31604 = state_31530__$1;(statearr_31569_31604[2] = inst_31512);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31530__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31531 === 24))
{var inst_31509 = (state_31530[12]);var inst_31459 = (state_31530[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31530,23,Object,null,22);var inst_31516 = cljs.core.async.muxch_STAR_.call(null,inst_31509);var state_31530__$1 = state_31530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31530__$1,25,inst_31516,inst_31459);
} else
{if((state_val_31531 === 25))
{var inst_31518 = (state_31530[2]);var state_31530__$1 = state_31530;var statearr_31570_31605 = state_31530__$1;(statearr_31570_31605[2] = inst_31518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31530__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_31574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31574[0] = state_machine__5507__auto__);
(statearr_31574[1] = 1);
return statearr_31574;
});
var state_machine__5507__auto____1 = (function (state_31530){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31530);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31575){if((e31575 instanceof Object))
{var ex__5510__auto__ = e31575;var statearr_31576_31606 = state_31530;(statearr_31576_31606[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31607 = state_31530;
state_31530 = G__31607;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31530){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31577 = f__5522__auto__.call(null);(statearr_31577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31578);
return statearr_31577;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___31744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31714){var state_val_31715 = (state_31714[1]);if((state_val_31715 === 1))
{var state_31714__$1 = state_31714;var statearr_31716_31745 = state_31714__$1;(statearr_31716_31745[2] = null);
(statearr_31716_31745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 2))
{var inst_31677 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31678 = 0;var state_31714__$1 = (function (){var statearr_31717 = state_31714;(statearr_31717[7] = inst_31678);
(statearr_31717[8] = inst_31677);
return statearr_31717;
})();var statearr_31718_31746 = state_31714__$1;(statearr_31718_31746[2] = null);
(statearr_31718_31746[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 3))
{var inst_31712 = (state_31714[2]);var state_31714__$1 = state_31714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31714__$1,inst_31712);
} else
{if((state_val_31715 === 4))
{var inst_31678 = (state_31714[7]);var inst_31680 = (inst_31678 < cnt);var state_31714__$1 = state_31714;if(cljs.core.truth_(inst_31680))
{var statearr_31719_31747 = state_31714__$1;(statearr_31719_31747[1] = 6);
} else
{var statearr_31720_31748 = state_31714__$1;(statearr_31720_31748[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 5))
{var inst_31698 = (state_31714[2]);var state_31714__$1 = (function (){var statearr_31721 = state_31714;(statearr_31721[9] = inst_31698);
return statearr_31721;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31714__$1,12,dchan);
} else
{if((state_val_31715 === 6))
{var state_31714__$1 = state_31714;var statearr_31722_31749 = state_31714__$1;(statearr_31722_31749[2] = null);
(statearr_31722_31749[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 7))
{var state_31714__$1 = state_31714;var statearr_31723_31750 = state_31714__$1;(statearr_31723_31750[2] = null);
(statearr_31723_31750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 8))
{var inst_31696 = (state_31714[2]);var state_31714__$1 = state_31714;var statearr_31724_31751 = state_31714__$1;(statearr_31724_31751[2] = inst_31696);
(statearr_31724_31751[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 9))
{var inst_31678 = (state_31714[7]);var inst_31691 = (state_31714[2]);var inst_31692 = (inst_31678 + 1);var inst_31678__$1 = inst_31692;var state_31714__$1 = (function (){var statearr_31725 = state_31714;(statearr_31725[10] = inst_31691);
(statearr_31725[7] = inst_31678__$1);
return statearr_31725;
})();var statearr_31726_31752 = state_31714__$1;(statearr_31726_31752[2] = null);
(statearr_31726_31752[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 10))
{var inst_31682 = (state_31714[2]);var inst_31683 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31714__$1 = (function (){var statearr_31727 = state_31714;(statearr_31727[11] = inst_31682);
return statearr_31727;
})();var statearr_31728_31753 = state_31714__$1;(statearr_31728_31753[2] = inst_31683);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31714__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 11))
{var inst_31678 = (state_31714[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31714,10,Object,null,9);var inst_31687 = chs__$1.call(null,inst_31678);var inst_31688 = done.call(null,inst_31678);var inst_31689 = cljs.core.async.take_BANG_.call(null,inst_31687,inst_31688);var state_31714__$1 = state_31714;var statearr_31729_31754 = state_31714__$1;(statearr_31729_31754[2] = inst_31689);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31714__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 12))
{var inst_31700 = (state_31714[12]);var inst_31700__$1 = (state_31714[2]);var inst_31701 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31700__$1);var state_31714__$1 = (function (){var statearr_31730 = state_31714;(statearr_31730[12] = inst_31700__$1);
return statearr_31730;
})();if(cljs.core.truth_(inst_31701))
{var statearr_31731_31755 = state_31714__$1;(statearr_31731_31755[1] = 13);
} else
{var statearr_31732_31756 = state_31714__$1;(statearr_31732_31756[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 13))
{var inst_31703 = cljs.core.async.close_BANG_.call(null,out);var state_31714__$1 = state_31714;var statearr_31733_31757 = state_31714__$1;(statearr_31733_31757[2] = inst_31703);
(statearr_31733_31757[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 14))
{var inst_31700 = (state_31714[12]);var inst_31705 = cljs.core.apply.call(null,f,inst_31700);var state_31714__$1 = state_31714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31714__$1,16,out,inst_31705);
} else
{if((state_val_31715 === 15))
{var inst_31710 = (state_31714[2]);var state_31714__$1 = state_31714;var statearr_31734_31758 = state_31714__$1;(statearr_31734_31758[2] = inst_31710);
(statearr_31734_31758[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31715 === 16))
{var inst_31707 = (state_31714[2]);var state_31714__$1 = (function (){var statearr_31735 = state_31714;(statearr_31735[13] = inst_31707);
return statearr_31735;
})();var statearr_31736_31759 = state_31714__$1;(statearr_31736_31759[2] = null);
(statearr_31736_31759[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31740[0] = state_machine__5507__auto__);
(statearr_31740[1] = 1);
return statearr_31740;
});
var state_machine__5507__auto____1 = (function (state_31714){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31714);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31741){if((e31741 instanceof Object))
{var ex__5510__auto__ = e31741;var statearr_31742_31760 = state_31714;(statearr_31742_31760[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31761 = state_31714;
state_31714 = G__31761;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31714){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31743 = f__5522__auto__.call(null);(statearr_31743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31744);
return statearr_31743;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31845){var state_val_31846 = (state_31845[1]);if((state_val_31846 === 1))
{var inst_31816 = cljs.core.vec.call(null,chs);var inst_31817 = inst_31816;var state_31845__$1 = (function (){var statearr_31847 = state_31845;(statearr_31847[7] = inst_31817);
return statearr_31847;
})();var statearr_31848_31870 = state_31845__$1;(statearr_31848_31870[2] = null);
(statearr_31848_31870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 2))
{var inst_31817 = (state_31845[7]);var inst_31819 = cljs.core.count.call(null,inst_31817);var inst_31820 = (inst_31819 > 0);var state_31845__$1 = state_31845;if(cljs.core.truth_(inst_31820))
{var statearr_31849_31871 = state_31845__$1;(statearr_31849_31871[1] = 4);
} else
{var statearr_31850_31872 = state_31845__$1;(statearr_31850_31872[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 3))
{var inst_31843 = (state_31845[2]);var state_31845__$1 = state_31845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31845__$1,inst_31843);
} else
{if((state_val_31846 === 4))
{var inst_31817 = (state_31845[7]);var state_31845__$1 = state_31845;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31845__$1,7,inst_31817);
} else
{if((state_val_31846 === 5))
{var inst_31839 = cljs.core.async.close_BANG_.call(null,out);var state_31845__$1 = state_31845;var statearr_31851_31873 = state_31845__$1;(statearr_31851_31873[2] = inst_31839);
(statearr_31851_31873[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 6))
{var inst_31841 = (state_31845[2]);var state_31845__$1 = state_31845;var statearr_31852_31874 = state_31845__$1;(statearr_31852_31874[2] = inst_31841);
(statearr_31852_31874[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 7))
{var inst_31824 = (state_31845[8]);var inst_31825 = (state_31845[9]);var inst_31824__$1 = (state_31845[2]);var inst_31825__$1 = cljs.core.nth.call(null,inst_31824__$1,0,null);var inst_31826 = cljs.core.nth.call(null,inst_31824__$1,1,null);var inst_31827 = (inst_31825__$1 == null);var state_31845__$1 = (function (){var statearr_31853 = state_31845;(statearr_31853[8] = inst_31824__$1);
(statearr_31853[9] = inst_31825__$1);
(statearr_31853[10] = inst_31826);
return statearr_31853;
})();if(cljs.core.truth_(inst_31827))
{var statearr_31854_31875 = state_31845__$1;(statearr_31854_31875[1] = 8);
} else
{var statearr_31855_31876 = state_31845__$1;(statearr_31855_31876[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 8))
{var inst_31824 = (state_31845[8]);var inst_31825 = (state_31845[9]);var inst_31826 = (state_31845[10]);var inst_31817 = (state_31845[7]);var inst_31829 = (function (){var c = inst_31826;var v = inst_31825;var vec__31822 = inst_31824;var cs = inst_31817;return ((function (c,v,vec__31822,cs,inst_31824,inst_31825,inst_31826,inst_31817,state_val_31846){
return (function (p1__31762_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31762_SHARP_);
});
;})(c,v,vec__31822,cs,inst_31824,inst_31825,inst_31826,inst_31817,state_val_31846))
})();var inst_31830 = cljs.core.filterv.call(null,inst_31829,inst_31817);var inst_31817__$1 = inst_31830;var state_31845__$1 = (function (){var statearr_31856 = state_31845;(statearr_31856[7] = inst_31817__$1);
return statearr_31856;
})();var statearr_31857_31877 = state_31845__$1;(statearr_31857_31877[2] = null);
(statearr_31857_31877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 9))
{var inst_31825 = (state_31845[9]);var state_31845__$1 = state_31845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31845__$1,11,out,inst_31825);
} else
{if((state_val_31846 === 10))
{var inst_31837 = (state_31845[2]);var state_31845__$1 = state_31845;var statearr_31859_31878 = state_31845__$1;(statearr_31859_31878[2] = inst_31837);
(statearr_31859_31878[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 11))
{var inst_31817 = (state_31845[7]);var inst_31834 = (state_31845[2]);var tmp31858 = inst_31817;var inst_31817__$1 = tmp31858;var state_31845__$1 = (function (){var statearr_31860 = state_31845;(statearr_31860[11] = inst_31834);
(statearr_31860[7] = inst_31817__$1);
return statearr_31860;
})();var statearr_31861_31879 = state_31845__$1;(statearr_31861_31879[2] = null);
(statearr_31861_31879[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31865 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31865[0] = state_machine__5507__auto__);
(statearr_31865[1] = 1);
return statearr_31865;
});
var state_machine__5507__auto____1 = (function (state_31845){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31845);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31866){if((e31866 instanceof Object))
{var ex__5510__auto__ = e31866;var statearr_31867_31880 = state_31845;(statearr_31867_31880[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31881 = state_31845;
state_31845 = G__31881;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31845){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31868 = f__5522__auto__.call(null);(statearr_31868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31869);
return statearr_31868;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31951){var state_val_31952 = (state_31951[1]);if((state_val_31952 === 1))
{var inst_31928 = 0;var state_31951__$1 = (function (){var statearr_31953 = state_31951;(statearr_31953[7] = inst_31928);
return statearr_31953;
})();var statearr_31954_31975 = state_31951__$1;(statearr_31954_31975[2] = null);
(statearr_31954_31975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31952 === 2))
{var inst_31928 = (state_31951[7]);var inst_31930 = (inst_31928 < n);var state_31951__$1 = state_31951;if(cljs.core.truth_(inst_31930))
{var statearr_31955_31976 = state_31951__$1;(statearr_31955_31976[1] = 4);
} else
{var statearr_31956_31977 = state_31951__$1;(statearr_31956_31977[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31952 === 3))
{var inst_31948 = (state_31951[2]);var inst_31949 = cljs.core.async.close_BANG_.call(null,out);var state_31951__$1 = (function (){var statearr_31957 = state_31951;(statearr_31957[8] = inst_31948);
return statearr_31957;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31951__$1,inst_31949);
} else
{if((state_val_31952 === 4))
{var state_31951__$1 = state_31951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31951__$1,7,ch);
} else
{if((state_val_31952 === 5))
{var state_31951__$1 = state_31951;var statearr_31958_31978 = state_31951__$1;(statearr_31958_31978[2] = null);
(statearr_31958_31978[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31952 === 6))
{var inst_31946 = (state_31951[2]);var state_31951__$1 = state_31951;var statearr_31959_31979 = state_31951__$1;(statearr_31959_31979[2] = inst_31946);
(statearr_31959_31979[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31952 === 7))
{var inst_31933 = (state_31951[9]);var inst_31933__$1 = (state_31951[2]);var inst_31934 = (inst_31933__$1 == null);var inst_31935 = cljs.core.not.call(null,inst_31934);var state_31951__$1 = (function (){var statearr_31960 = state_31951;(statearr_31960[9] = inst_31933__$1);
return statearr_31960;
})();if(inst_31935)
{var statearr_31961_31980 = state_31951__$1;(statearr_31961_31980[1] = 8);
} else
{var statearr_31962_31981 = state_31951__$1;(statearr_31962_31981[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31952 === 8))
{var inst_31933 = (state_31951[9]);var state_31951__$1 = state_31951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31951__$1,11,out,inst_31933);
} else
{if((state_val_31952 === 9))
{var state_31951__$1 = state_31951;var statearr_31963_31982 = state_31951__$1;(statearr_31963_31982[2] = null);
(statearr_31963_31982[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31952 === 10))
{var inst_31943 = (state_31951[2]);var state_31951__$1 = state_31951;var statearr_31964_31983 = state_31951__$1;(statearr_31964_31983[2] = inst_31943);
(statearr_31964_31983[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31952 === 11))
{var inst_31928 = (state_31951[7]);var inst_31938 = (state_31951[2]);var inst_31939 = (inst_31928 + 1);var inst_31928__$1 = inst_31939;var state_31951__$1 = (function (){var statearr_31965 = state_31951;(statearr_31965[7] = inst_31928__$1);
(statearr_31965[10] = inst_31938);
return statearr_31965;
})();var statearr_31966_31984 = state_31951__$1;(statearr_31966_31984[2] = null);
(statearr_31966_31984[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31970 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31970[0] = state_machine__5507__auto__);
(statearr_31970[1] = 1);
return statearr_31970;
});
var state_machine__5507__auto____1 = (function (state_31951){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31971){if((e31971 instanceof Object))
{var ex__5510__auto__ = e31971;var statearr_31972_31985 = state_31951;(statearr_31972_31985[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31986 = state_31951;
state_31951 = G__31986;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31951){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31973 = f__5522__auto__.call(null);(statearr_31973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31974);
return statearr_31973;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32083 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32058){var state_val_32059 = (state_32058[1]);if((state_val_32059 === 1))
{var inst_32035 = null;var state_32058__$1 = (function (){var statearr_32060 = state_32058;(statearr_32060[7] = inst_32035);
return statearr_32060;
})();var statearr_32061_32084 = state_32058__$1;(statearr_32061_32084[2] = null);
(statearr_32061_32084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32059 === 2))
{var state_32058__$1 = state_32058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32058__$1,4,ch);
} else
{if((state_val_32059 === 3))
{var inst_32055 = (state_32058[2]);var inst_32056 = cljs.core.async.close_BANG_.call(null,out);var state_32058__$1 = (function (){var statearr_32062 = state_32058;(statearr_32062[8] = inst_32055);
return statearr_32062;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32058__$1,inst_32056);
} else
{if((state_val_32059 === 4))
{var inst_32038 = (state_32058[9]);var inst_32038__$1 = (state_32058[2]);var inst_32039 = (inst_32038__$1 == null);var inst_32040 = cljs.core.not.call(null,inst_32039);var state_32058__$1 = (function (){var statearr_32063 = state_32058;(statearr_32063[9] = inst_32038__$1);
return statearr_32063;
})();if(inst_32040)
{var statearr_32064_32085 = state_32058__$1;(statearr_32064_32085[1] = 5);
} else
{var statearr_32065_32086 = state_32058__$1;(statearr_32065_32086[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32059 === 5))
{var inst_32035 = (state_32058[7]);var inst_32038 = (state_32058[9]);var inst_32042 = cljs.core._EQ_.call(null,inst_32038,inst_32035);var state_32058__$1 = state_32058;if(inst_32042)
{var statearr_32066_32087 = state_32058__$1;(statearr_32066_32087[1] = 8);
} else
{var statearr_32067_32088 = state_32058__$1;(statearr_32067_32088[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32059 === 6))
{var state_32058__$1 = state_32058;var statearr_32069_32089 = state_32058__$1;(statearr_32069_32089[2] = null);
(statearr_32069_32089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32059 === 7))
{var inst_32053 = (state_32058[2]);var state_32058__$1 = state_32058;var statearr_32070_32090 = state_32058__$1;(statearr_32070_32090[2] = inst_32053);
(statearr_32070_32090[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32059 === 8))
{var inst_32035 = (state_32058[7]);var tmp32068 = inst_32035;var inst_32035__$1 = tmp32068;var state_32058__$1 = (function (){var statearr_32071 = state_32058;(statearr_32071[7] = inst_32035__$1);
return statearr_32071;
})();var statearr_32072_32091 = state_32058__$1;(statearr_32072_32091[2] = null);
(statearr_32072_32091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32059 === 9))
{var inst_32038 = (state_32058[9]);var state_32058__$1 = state_32058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32058__$1,11,out,inst_32038);
} else
{if((state_val_32059 === 10))
{var inst_32050 = (state_32058[2]);var state_32058__$1 = state_32058;var statearr_32073_32092 = state_32058__$1;(statearr_32073_32092[2] = inst_32050);
(statearr_32073_32092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32059 === 11))
{var inst_32038 = (state_32058[9]);var inst_32047 = (state_32058[2]);var inst_32035 = inst_32038;var state_32058__$1 = (function (){var statearr_32074 = state_32058;(statearr_32074[7] = inst_32035);
(statearr_32074[10] = inst_32047);
return statearr_32074;
})();var statearr_32075_32093 = state_32058__$1;(statearr_32075_32093[2] = null);
(statearr_32075_32093[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32079 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32079[0] = state_machine__5507__auto__);
(statearr_32079[1] = 1);
return statearr_32079;
});
var state_machine__5507__auto____1 = (function (state_32058){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32058);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32080){if((e32080 instanceof Object))
{var ex__5510__auto__ = e32080;var statearr_32081_32094 = state_32058;(statearr_32081_32094[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32095 = state_32058;
state_32058 = G__32095;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32058){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32082 = f__5522__auto__.call(null);(statearr_32082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32083);
return statearr_32082;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32230 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32200){var state_val_32201 = (state_32200[1]);if((state_val_32201 === 1))
{var inst_32163 = (new Array(n));var inst_32164 = inst_32163;var inst_32165 = 0;var state_32200__$1 = (function (){var statearr_32202 = state_32200;(statearr_32202[7] = inst_32164);
(statearr_32202[8] = inst_32165);
return statearr_32202;
})();var statearr_32203_32231 = state_32200__$1;(statearr_32203_32231[2] = null);
(statearr_32203_32231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 2))
{var state_32200__$1 = state_32200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32200__$1,4,ch);
} else
{if((state_val_32201 === 3))
{var inst_32198 = (state_32200[2]);var state_32200__$1 = state_32200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32200__$1,inst_32198);
} else
{if((state_val_32201 === 4))
{var inst_32168 = (state_32200[9]);var inst_32168__$1 = (state_32200[2]);var inst_32169 = (inst_32168__$1 == null);var inst_32170 = cljs.core.not.call(null,inst_32169);var state_32200__$1 = (function (){var statearr_32204 = state_32200;(statearr_32204[9] = inst_32168__$1);
return statearr_32204;
})();if(inst_32170)
{var statearr_32205_32232 = state_32200__$1;(statearr_32205_32232[1] = 5);
} else
{var statearr_32206_32233 = state_32200__$1;(statearr_32206_32233[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 5))
{var inst_32164 = (state_32200[7]);var inst_32173 = (state_32200[10]);var inst_32168 = (state_32200[9]);var inst_32165 = (state_32200[8]);var inst_32172 = (inst_32164[inst_32165] = inst_32168);var inst_32173__$1 = (inst_32165 + 1);var inst_32174 = (inst_32173__$1 < n);var state_32200__$1 = (function (){var statearr_32207 = state_32200;(statearr_32207[11] = inst_32172);
(statearr_32207[10] = inst_32173__$1);
return statearr_32207;
})();if(cljs.core.truth_(inst_32174))
{var statearr_32208_32234 = state_32200__$1;(statearr_32208_32234[1] = 8);
} else
{var statearr_32209_32235 = state_32200__$1;(statearr_32209_32235[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 6))
{var inst_32165 = (state_32200[8]);var inst_32186 = (inst_32165 > 0);var state_32200__$1 = state_32200;if(cljs.core.truth_(inst_32186))
{var statearr_32211_32236 = state_32200__$1;(statearr_32211_32236[1] = 12);
} else
{var statearr_32212_32237 = state_32200__$1;(statearr_32212_32237[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 7))
{var inst_32196 = (state_32200[2]);var state_32200__$1 = state_32200;var statearr_32213_32238 = state_32200__$1;(statearr_32213_32238[2] = inst_32196);
(statearr_32213_32238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 8))
{var inst_32164 = (state_32200[7]);var inst_32173 = (state_32200[10]);var tmp32210 = inst_32164;var inst_32164__$1 = tmp32210;var inst_32165 = inst_32173;var state_32200__$1 = (function (){var statearr_32214 = state_32200;(statearr_32214[7] = inst_32164__$1);
(statearr_32214[8] = inst_32165);
return statearr_32214;
})();var statearr_32215_32239 = state_32200__$1;(statearr_32215_32239[2] = null);
(statearr_32215_32239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 9))
{var inst_32164 = (state_32200[7]);var inst_32178 = cljs.core.vec.call(null,inst_32164);var state_32200__$1 = state_32200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32200__$1,11,out,inst_32178);
} else
{if((state_val_32201 === 10))
{var inst_32184 = (state_32200[2]);var state_32200__$1 = state_32200;var statearr_32216_32240 = state_32200__$1;(statearr_32216_32240[2] = inst_32184);
(statearr_32216_32240[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 11))
{var inst_32180 = (state_32200[2]);var inst_32181 = (new Array(n));var inst_32164 = inst_32181;var inst_32165 = 0;var state_32200__$1 = (function (){var statearr_32217 = state_32200;(statearr_32217[12] = inst_32180);
(statearr_32217[7] = inst_32164);
(statearr_32217[8] = inst_32165);
return statearr_32217;
})();var statearr_32218_32241 = state_32200__$1;(statearr_32218_32241[2] = null);
(statearr_32218_32241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 12))
{var inst_32164 = (state_32200[7]);var inst_32188 = cljs.core.vec.call(null,inst_32164);var state_32200__$1 = state_32200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32200__$1,15,out,inst_32188);
} else
{if((state_val_32201 === 13))
{var state_32200__$1 = state_32200;var statearr_32219_32242 = state_32200__$1;(statearr_32219_32242[2] = null);
(statearr_32219_32242[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 14))
{var inst_32193 = (state_32200[2]);var inst_32194 = cljs.core.async.close_BANG_.call(null,out);var state_32200__$1 = (function (){var statearr_32220 = state_32200;(statearr_32220[13] = inst_32193);
return statearr_32220;
})();var statearr_32221_32243 = state_32200__$1;(statearr_32221_32243[2] = inst_32194);
(statearr_32221_32243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32201 === 15))
{var inst_32190 = (state_32200[2]);var state_32200__$1 = state_32200;var statearr_32222_32244 = state_32200__$1;(statearr_32222_32244[2] = inst_32190);
(statearr_32222_32244[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32226[0] = state_machine__5507__auto__);
(statearr_32226[1] = 1);
return statearr_32226;
});
var state_machine__5507__auto____1 = (function (state_32200){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32200);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32227){if((e32227 instanceof Object))
{var ex__5510__auto__ = e32227;var statearr_32228_32245 = state_32200;(statearr_32228_32245[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32246 = state_32200;
state_32200 = G__32246;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32200){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32229 = f__5522__auto__.call(null);(statearr_32229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32230);
return statearr_32229;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32359){var state_val_32360 = (state_32359[1]);if((state_val_32360 === 1))
{var inst_32318 = [];var inst_32319 = inst_32318;var inst_32320 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32359__$1 = (function (){var statearr_32361 = state_32359;(statearr_32361[7] = inst_32319);
(statearr_32361[8] = inst_32320);
return statearr_32361;
})();var statearr_32362_32390 = state_32359__$1;(statearr_32362_32390[2] = null);
(statearr_32362_32390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 2))
{var state_32359__$1 = state_32359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32359__$1,4,ch);
} else
{if((state_val_32360 === 3))
{var inst_32357 = (state_32359[2]);var state_32359__$1 = state_32359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32359__$1,inst_32357);
} else
{if((state_val_32360 === 4))
{var inst_32323 = (state_32359[9]);var inst_32323__$1 = (state_32359[2]);var inst_32324 = (inst_32323__$1 == null);var inst_32325 = cljs.core.not.call(null,inst_32324);var state_32359__$1 = (function (){var statearr_32363 = state_32359;(statearr_32363[9] = inst_32323__$1);
return statearr_32363;
})();if(inst_32325)
{var statearr_32364_32391 = state_32359__$1;(statearr_32364_32391[1] = 5);
} else
{var statearr_32365_32392 = state_32359__$1;(statearr_32365_32392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 5))
{var inst_32327 = (state_32359[10]);var inst_32323 = (state_32359[9]);var inst_32320 = (state_32359[8]);var inst_32327__$1 = f.call(null,inst_32323);var inst_32328 = cljs.core._EQ_.call(null,inst_32327__$1,inst_32320);var inst_32329 = cljs.core.keyword_identical_QMARK_.call(null,inst_32320,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32330 = (inst_32328) || (inst_32329);var state_32359__$1 = (function (){var statearr_32366 = state_32359;(statearr_32366[10] = inst_32327__$1);
return statearr_32366;
})();if(cljs.core.truth_(inst_32330))
{var statearr_32367_32393 = state_32359__$1;(statearr_32367_32393[1] = 8);
} else
{var statearr_32368_32394 = state_32359__$1;(statearr_32368_32394[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 6))
{var inst_32319 = (state_32359[7]);var inst_32344 = inst_32319.length;var inst_32345 = (inst_32344 > 0);var state_32359__$1 = state_32359;if(cljs.core.truth_(inst_32345))
{var statearr_32370_32395 = state_32359__$1;(statearr_32370_32395[1] = 12);
} else
{var statearr_32371_32396 = state_32359__$1;(statearr_32371_32396[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 7))
{var inst_32355 = (state_32359[2]);var state_32359__$1 = state_32359;var statearr_32372_32397 = state_32359__$1;(statearr_32372_32397[2] = inst_32355);
(statearr_32372_32397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 8))
{var inst_32319 = (state_32359[7]);var inst_32327 = (state_32359[10]);var inst_32323 = (state_32359[9]);var inst_32332 = inst_32319.push(inst_32323);var tmp32369 = inst_32319;var inst_32319__$1 = tmp32369;var inst_32320 = inst_32327;var state_32359__$1 = (function (){var statearr_32373 = state_32359;(statearr_32373[7] = inst_32319__$1);
(statearr_32373[11] = inst_32332);
(statearr_32373[8] = inst_32320);
return statearr_32373;
})();var statearr_32374_32398 = state_32359__$1;(statearr_32374_32398[2] = null);
(statearr_32374_32398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 9))
{var inst_32319 = (state_32359[7]);var inst_32335 = cljs.core.vec.call(null,inst_32319);var state_32359__$1 = state_32359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32359__$1,11,out,inst_32335);
} else
{if((state_val_32360 === 10))
{var inst_32342 = (state_32359[2]);var state_32359__$1 = state_32359;var statearr_32375_32399 = state_32359__$1;(statearr_32375_32399[2] = inst_32342);
(statearr_32375_32399[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 11))
{var inst_32327 = (state_32359[10]);var inst_32323 = (state_32359[9]);var inst_32337 = (state_32359[2]);var inst_32338 = [];var inst_32339 = inst_32338.push(inst_32323);var inst_32319 = inst_32338;var inst_32320 = inst_32327;var state_32359__$1 = (function (){var statearr_32376 = state_32359;(statearr_32376[7] = inst_32319);
(statearr_32376[12] = inst_32337);
(statearr_32376[13] = inst_32339);
(statearr_32376[8] = inst_32320);
return statearr_32376;
})();var statearr_32377_32400 = state_32359__$1;(statearr_32377_32400[2] = null);
(statearr_32377_32400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 12))
{var inst_32319 = (state_32359[7]);var inst_32347 = cljs.core.vec.call(null,inst_32319);var state_32359__$1 = state_32359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32359__$1,15,out,inst_32347);
} else
{if((state_val_32360 === 13))
{var state_32359__$1 = state_32359;var statearr_32378_32401 = state_32359__$1;(statearr_32378_32401[2] = null);
(statearr_32378_32401[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 14))
{var inst_32352 = (state_32359[2]);var inst_32353 = cljs.core.async.close_BANG_.call(null,out);var state_32359__$1 = (function (){var statearr_32379 = state_32359;(statearr_32379[14] = inst_32352);
return statearr_32379;
})();var statearr_32380_32402 = state_32359__$1;(statearr_32380_32402[2] = inst_32353);
(statearr_32380_32402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32360 === 15))
{var inst_32349 = (state_32359[2]);var state_32359__$1 = state_32359;var statearr_32381_32403 = state_32359__$1;(statearr_32381_32403[2] = inst_32349);
(statearr_32381_32403[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32385[0] = state_machine__5507__auto__);
(statearr_32385[1] = 1);
return statearr_32385;
});
var state_machine__5507__auto____1 = (function (state_32359){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32359);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32386){if((e32386 instanceof Object))
{var ex__5510__auto__ = e32386;var statearr_32387_32404 = state_32359;(statearr_32387_32404[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32405 = state_32359;
state_32359 = G__32405;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32359){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32388 = f__5522__auto__.call(null);(statearr_32388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32389);
return statearr_32388;
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
