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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11949 = (function (f,fn_handler,meta11950){
this.f = f;
this.fn_handler = fn_handler;
this.meta11950 = meta11950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11949.cljs$lang$type = true;
cljs.core.async.t11949.cljs$lang$ctorStr = "cljs.core.async/t11949";
cljs.core.async.t11949.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11949");
});
cljs.core.async.t11949.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11951){var self__ = this;
var _11951__$1 = this;return self__.meta11950;
});
cljs.core.async.t11949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11951,meta11950__$1){var self__ = this;
var _11951__$1 = this;return (new cljs.core.async.t11949(self__.f,self__.fn_handler,meta11950__$1));
});
cljs.core.async.__GT_t11949 = (function __GT_t11949(f__$1,fn_handler__$1,meta11950){return (new cljs.core.async.t11949(f__$1,fn_handler__$1,meta11950));
});
}
return (new cljs.core.async.t11949(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11953 = buff;if(G__11953)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11953.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11953.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11953);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11953);
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
{var val_11954 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11954);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11954);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11955 = n;var x_11956 = 0;while(true){
if((x_11956 < n__4248__auto___11955))
{(a[x_11956] = 0);
{
var G__11957 = (x_11956 + 1);
x_11956 = G__11957;
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
var G__11958 = (i + 1);
i = G__11958;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11962 = (function (flag,alt_flag,meta11963){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11963 = meta11963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11962.cljs$lang$type = true;
cljs.core.async.t11962.cljs$lang$ctorStr = "cljs.core.async/t11962";
cljs.core.async.t11962.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11962");
});
cljs.core.async.t11962.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11964){var self__ = this;
var _11964__$1 = this;return self__.meta11963;
});
cljs.core.async.t11962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11964,meta11963__$1){var self__ = this;
var _11964__$1 = this;return (new cljs.core.async.t11962(self__.flag,self__.alt_flag,meta11963__$1));
});
cljs.core.async.__GT_t11962 = (function __GT_t11962(flag__$1,alt_flag__$1,meta11963){return (new cljs.core.async.t11962(flag__$1,alt_flag__$1,meta11963));
});
}
return (new cljs.core.async.t11962(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11968 = (function (cb,flag,alt_handler,meta11969){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11969 = meta11969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11968.cljs$lang$type = true;
cljs.core.async.t11968.cljs$lang$ctorStr = "cljs.core.async/t11968";
cljs.core.async.t11968.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11968");
});
cljs.core.async.t11968.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11970){var self__ = this;
var _11970__$1 = this;return self__.meta11969;
});
cljs.core.async.t11968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11970,meta11969__$1){var self__ = this;
var _11970__$1 = this;return (new cljs.core.async.t11968(self__.cb,self__.flag,self__.alt_handler,meta11969__$1));
});
cljs.core.async.__GT_t11968 = (function __GT_t11968(cb__$1,flag__$1,alt_handler__$1,meta11969){return (new cljs.core.async.t11968(cb__$1,flag__$1,alt_handler__$1,meta11969));
});
}
return (new cljs.core.async.t11968(cb,flag,alt_handler,null));
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
return (function (p1__11971_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11971_SHARP_,port], null));
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
var G__11972 = (i + 1);
i = G__11972;
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
var alts_BANG___delegate = function (ports,p__11973){var map__11975 = p__11973;var map__11975__$1 = ((cljs.core.seq_QMARK_.call(null,map__11975))?cljs.core.apply.call(null,cljs.core.hash_map,map__11975):map__11975);var opts = map__11975__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11973 = null;if (arguments.length > 1) {
  p__11973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11973);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11976){
var ports = cljs.core.first(arglist__11976);
var p__11973 = cljs.core.rest(arglist__11976);
return alts_BANG___delegate(ports,p__11973);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11984 = (function (ch,f,map_LT_,meta11985){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11985 = meta11985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11984.cljs$lang$type = true;
cljs.core.async.t11984.cljs$lang$ctorStr = "cljs.core.async/t11984";
cljs.core.async.t11984.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11984");
});
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11987 = (function (fn1,_,meta11985,ch,f,map_LT_,meta11988){
this.fn1 = fn1;
this._ = _;
this.meta11985 = meta11985;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11988 = meta11988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11987.cljs$lang$type = true;
cljs.core.async.t11987.cljs$lang$ctorStr = "cljs.core.async/t11987";
cljs.core.async.t11987.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11987");
});
cljs.core.async.t11987.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11987.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11977_SHARP_){return f1.call(null,(((p1__11977_SHARP_ == null))?null:self__.f.call(null,p1__11977_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11989){var self__ = this;
var _11989__$1 = this;return self__.meta11988;
});
cljs.core.async.t11987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11989,meta11988__$1){var self__ = this;
var _11989__$1 = this;return (new cljs.core.async.t11987(self__.fn1,self__._,self__.meta11985,self__.ch,self__.f,self__.map_LT_,meta11988__$1));
});
cljs.core.async.__GT_t11987 = (function __GT_t11987(fn1__$1,___$2,meta11985__$1,ch__$2,f__$2,map_LT___$2,meta11988){return (new cljs.core.async.t11987(fn1__$1,___$2,meta11985__$1,ch__$2,f__$2,map_LT___$2,meta11988));
});
}
return (new cljs.core.async.t11987(fn1,___$1,self__.meta11985,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11986){var self__ = this;
var _11986__$1 = this;return self__.meta11985;
});
cljs.core.async.t11984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11986,meta11985__$1){var self__ = this;
var _11986__$1 = this;return (new cljs.core.async.t11984(self__.ch,self__.f,self__.map_LT_,meta11985__$1));
});
cljs.core.async.__GT_t11984 = (function __GT_t11984(ch__$1,f__$1,map_LT___$1,meta11985){return (new cljs.core.async.t11984(ch__$1,f__$1,map_LT___$1,meta11985));
});
}
return (new cljs.core.async.t11984(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11993 = (function (ch,f,map_GT_,meta11994){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11994 = meta11994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11993.cljs$lang$type = true;
cljs.core.async.t11993.cljs$lang$ctorStr = "cljs.core.async/t11993";
cljs.core.async.t11993.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11993");
});
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11995){var self__ = this;
var _11995__$1 = this;return self__.meta11994;
});
cljs.core.async.t11993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11995,meta11994__$1){var self__ = this;
var _11995__$1 = this;return (new cljs.core.async.t11993(self__.ch,self__.f,self__.map_GT_,meta11994__$1));
});
cljs.core.async.__GT_t11993 = (function __GT_t11993(ch__$1,f__$1,map_GT___$1,meta11994){return (new cljs.core.async.t11993(ch__$1,f__$1,map_GT___$1,meta11994));
});
}
return (new cljs.core.async.t11993(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11999 = (function (ch,p,filter_GT_,meta12000){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12000 = meta12000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11999.cljs$lang$type = true;
cljs.core.async.t11999.cljs$lang$ctorStr = "cljs.core.async/t11999";
cljs.core.async.t11999.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11999");
});
cljs.core.async.t11999.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11999.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11999.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12001){var self__ = this;
var _12001__$1 = this;return self__.meta12000;
});
cljs.core.async.t11999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12001,meta12000__$1){var self__ = this;
var _12001__$1 = this;return (new cljs.core.async.t11999(self__.ch,self__.p,self__.filter_GT_,meta12000__$1));
});
cljs.core.async.__GT_t11999 = (function __GT_t11999(ch__$1,p__$1,filter_GT___$1,meta12000){return (new cljs.core.async.t11999(ch__$1,p__$1,filter_GT___$1,meta12000));
});
}
return (new cljs.core.async.t11999(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12084 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12063){var state_val_12064 = (state_12063[1]);if((state_val_12064 === 1))
{var state_12063__$1 = state_12063;var statearr_12065_12085 = state_12063__$1;(statearr_12065_12085[2] = null);
(statearr_12065_12085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12064 === 2))
{var state_12063__$1 = state_12063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12063__$1,4,ch);
} else
{if((state_val_12064 === 3))
{var inst_12061 = (state_12063[2]);var state_12063__$1 = state_12063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12063__$1,inst_12061);
} else
{if((state_val_12064 === 4))
{var inst_12045 = (state_12063[7]);var inst_12045__$1 = (state_12063[2]);var inst_12046 = (inst_12045__$1 == null);var state_12063__$1 = (function (){var statearr_12066 = state_12063;(statearr_12066[7] = inst_12045__$1);
return statearr_12066;
})();if(cljs.core.truth_(inst_12046))
{var statearr_12067_12086 = state_12063__$1;(statearr_12067_12086[1] = 5);
} else
{var statearr_12068_12087 = state_12063__$1;(statearr_12068_12087[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12064 === 5))
{var inst_12048 = cljs.core.async.close_BANG_.call(null,out);var state_12063__$1 = state_12063;var statearr_12069_12088 = state_12063__$1;(statearr_12069_12088[2] = inst_12048);
(statearr_12069_12088[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12064 === 6))
{var inst_12045 = (state_12063[7]);var inst_12050 = p.call(null,inst_12045);var state_12063__$1 = state_12063;if(cljs.core.truth_(inst_12050))
{var statearr_12070_12089 = state_12063__$1;(statearr_12070_12089[1] = 8);
} else
{var statearr_12071_12090 = state_12063__$1;(statearr_12071_12090[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12064 === 7))
{var inst_12059 = (state_12063[2]);var state_12063__$1 = state_12063;var statearr_12072_12091 = state_12063__$1;(statearr_12072_12091[2] = inst_12059);
(statearr_12072_12091[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12064 === 8))
{var inst_12045 = (state_12063[7]);var state_12063__$1 = state_12063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12063__$1,11,out,inst_12045);
} else
{if((state_val_12064 === 9))
{var state_12063__$1 = state_12063;var statearr_12073_12092 = state_12063__$1;(statearr_12073_12092[2] = null);
(statearr_12073_12092[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12064 === 10))
{var inst_12056 = (state_12063[2]);var state_12063__$1 = (function (){var statearr_12074 = state_12063;(statearr_12074[8] = inst_12056);
return statearr_12074;
})();var statearr_12075_12093 = state_12063__$1;(statearr_12075_12093[2] = null);
(statearr_12075_12093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12064 === 11))
{var inst_12053 = (state_12063[2]);var state_12063__$1 = state_12063;var statearr_12076_12094 = state_12063__$1;(statearr_12076_12094[2] = inst_12053);
(statearr_12076_12094[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12080 = [null,null,null,null,null,null,null,null,null];(statearr_12080[0] = state_machine__5507__auto__);
(statearr_12080[1] = 1);
return statearr_12080;
});
var state_machine__5507__auto____1 = (function (state_12063){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12063);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12081){if((e12081 instanceof Object))
{var ex__5510__auto__ = e12081;var statearr_12082_12095 = state_12063;(statearr_12082_12095[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12096 = state_12063;
state_12063 = G__12096;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12063){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12083 = f__5522__auto__.call(null);(statearr_12083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12084);
return statearr_12083;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12248){var state_val_12249 = (state_12248[1]);if((state_val_12249 === 1))
{var state_12248__$1 = state_12248;var statearr_12250_12287 = state_12248__$1;(statearr_12250_12287[2] = null);
(statearr_12250_12287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 2))
{var state_12248__$1 = state_12248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12248__$1,4,in$);
} else
{if((state_val_12249 === 3))
{var inst_12246 = (state_12248[2]);var state_12248__$1 = state_12248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12248__$1,inst_12246);
} else
{if((state_val_12249 === 4))
{var inst_12194 = (state_12248[7]);var inst_12194__$1 = (state_12248[2]);var inst_12195 = (inst_12194__$1 == null);var state_12248__$1 = (function (){var statearr_12251 = state_12248;(statearr_12251[7] = inst_12194__$1);
return statearr_12251;
})();if(cljs.core.truth_(inst_12195))
{var statearr_12252_12288 = state_12248__$1;(statearr_12252_12288[1] = 5);
} else
{var statearr_12253_12289 = state_12248__$1;(statearr_12253_12289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 5))
{var inst_12197 = cljs.core.async.close_BANG_.call(null,out);var state_12248__$1 = state_12248;var statearr_12254_12290 = state_12248__$1;(statearr_12254_12290[2] = inst_12197);
(statearr_12254_12290[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 6))
{var inst_12194 = (state_12248[7]);var inst_12199 = f.call(null,inst_12194);var inst_12204 = cljs.core.seq.call(null,inst_12199);var inst_12205 = inst_12204;var inst_12206 = null;var inst_12207 = 0;var inst_12208 = 0;var state_12248__$1 = (function (){var statearr_12255 = state_12248;(statearr_12255[8] = inst_12208);
(statearr_12255[9] = inst_12205);
(statearr_12255[10] = inst_12206);
(statearr_12255[11] = inst_12207);
return statearr_12255;
})();var statearr_12256_12291 = state_12248__$1;(statearr_12256_12291[2] = null);
(statearr_12256_12291[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 7))
{var inst_12244 = (state_12248[2]);var state_12248__$1 = state_12248;var statearr_12257_12292 = state_12248__$1;(statearr_12257_12292[2] = inst_12244);
(statearr_12257_12292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 8))
{var inst_12208 = (state_12248[8]);var inst_12207 = (state_12248[11]);var inst_12210 = (inst_12208 < inst_12207);var inst_12211 = inst_12210;var state_12248__$1 = state_12248;if(cljs.core.truth_(inst_12211))
{var statearr_12258_12293 = state_12248__$1;(statearr_12258_12293[1] = 10);
} else
{var statearr_12259_12294 = state_12248__$1;(statearr_12259_12294[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 9))
{var inst_12241 = (state_12248[2]);var state_12248__$1 = (function (){var statearr_12260 = state_12248;(statearr_12260[12] = inst_12241);
return statearr_12260;
})();var statearr_12261_12295 = state_12248__$1;(statearr_12261_12295[2] = null);
(statearr_12261_12295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 10))
{var inst_12208 = (state_12248[8]);var inst_12206 = (state_12248[10]);var inst_12213 = cljs.core._nth.call(null,inst_12206,inst_12208);var state_12248__$1 = state_12248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12248__$1,13,out,inst_12213);
} else
{if((state_val_12249 === 11))
{var inst_12219 = (state_12248[13]);var inst_12205 = (state_12248[9]);var inst_12219__$1 = cljs.core.seq.call(null,inst_12205);var state_12248__$1 = (function (){var statearr_12265 = state_12248;(statearr_12265[13] = inst_12219__$1);
return statearr_12265;
})();if(inst_12219__$1)
{var statearr_12266_12296 = state_12248__$1;(statearr_12266_12296[1] = 14);
} else
{var statearr_12267_12297 = state_12248__$1;(statearr_12267_12297[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 12))
{var inst_12239 = (state_12248[2]);var state_12248__$1 = state_12248;var statearr_12268_12298 = state_12248__$1;(statearr_12268_12298[2] = inst_12239);
(statearr_12268_12298[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 13))
{var inst_12208 = (state_12248[8]);var inst_12205 = (state_12248[9]);var inst_12206 = (state_12248[10]);var inst_12207 = (state_12248[11]);var inst_12215 = (state_12248[2]);var inst_12216 = (inst_12208 + 1);var tmp12262 = inst_12205;var tmp12263 = inst_12206;var tmp12264 = inst_12207;var inst_12205__$1 = tmp12262;var inst_12206__$1 = tmp12263;var inst_12207__$1 = tmp12264;var inst_12208__$1 = inst_12216;var state_12248__$1 = (function (){var statearr_12269 = state_12248;(statearr_12269[8] = inst_12208__$1);
(statearr_12269[14] = inst_12215);
(statearr_12269[9] = inst_12205__$1);
(statearr_12269[10] = inst_12206__$1);
(statearr_12269[11] = inst_12207__$1);
return statearr_12269;
})();var statearr_12270_12299 = state_12248__$1;(statearr_12270_12299[2] = null);
(statearr_12270_12299[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 14))
{var inst_12219 = (state_12248[13]);var inst_12221 = cljs.core.chunked_seq_QMARK_.call(null,inst_12219);var state_12248__$1 = state_12248;if(inst_12221)
{var statearr_12271_12300 = state_12248__$1;(statearr_12271_12300[1] = 17);
} else
{var statearr_12272_12301 = state_12248__$1;(statearr_12272_12301[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 15))
{var state_12248__$1 = state_12248;var statearr_12273_12302 = state_12248__$1;(statearr_12273_12302[2] = null);
(statearr_12273_12302[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 16))
{var inst_12237 = (state_12248[2]);var state_12248__$1 = state_12248;var statearr_12274_12303 = state_12248__$1;(statearr_12274_12303[2] = inst_12237);
(statearr_12274_12303[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 17))
{var inst_12219 = (state_12248[13]);var inst_12223 = cljs.core.chunk_first.call(null,inst_12219);var inst_12224 = cljs.core.chunk_rest.call(null,inst_12219);var inst_12225 = cljs.core.count.call(null,inst_12223);var inst_12205 = inst_12224;var inst_12206 = inst_12223;var inst_12207 = inst_12225;var inst_12208 = 0;var state_12248__$1 = (function (){var statearr_12275 = state_12248;(statearr_12275[8] = inst_12208);
(statearr_12275[9] = inst_12205);
(statearr_12275[10] = inst_12206);
(statearr_12275[11] = inst_12207);
return statearr_12275;
})();var statearr_12276_12304 = state_12248__$1;(statearr_12276_12304[2] = null);
(statearr_12276_12304[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 18))
{var inst_12219 = (state_12248[13]);var inst_12228 = cljs.core.first.call(null,inst_12219);var state_12248__$1 = state_12248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12248__$1,20,out,inst_12228);
} else
{if((state_val_12249 === 19))
{var inst_12234 = (state_12248[2]);var state_12248__$1 = state_12248;var statearr_12277_12305 = state_12248__$1;(statearr_12277_12305[2] = inst_12234);
(statearr_12277_12305[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12249 === 20))
{var inst_12219 = (state_12248[13]);var inst_12230 = (state_12248[2]);var inst_12231 = cljs.core.next.call(null,inst_12219);var inst_12205 = inst_12231;var inst_12206 = null;var inst_12207 = 0;var inst_12208 = 0;var state_12248__$1 = (function (){var statearr_12278 = state_12248;(statearr_12278[8] = inst_12208);
(statearr_12278[15] = inst_12230);
(statearr_12278[9] = inst_12205);
(statearr_12278[10] = inst_12206);
(statearr_12278[11] = inst_12207);
return statearr_12278;
})();var statearr_12279_12306 = state_12248__$1;(statearr_12279_12306[2] = null);
(statearr_12279_12306[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12283[0] = state_machine__5507__auto__);
(statearr_12283[1] = 1);
return statearr_12283;
});
var state_machine__5507__auto____1 = (function (state_12248){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12248);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12284){if((e12284 instanceof Object))
{var ex__5510__auto__ = e12284;var statearr_12285_12307 = state_12248;(statearr_12285_12307[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12248);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12308 = state_12248;
state_12248 = G__12308;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12248){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12286 = f__5522__auto__.call(null);(statearr_12286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12286;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12368){var state_val_12369 = (state_12368[1]);if((state_val_12369 === 1))
{var state_12368__$1 = state_12368;var statearr_12370_12390 = state_12368__$1;(statearr_12370_12390[2] = null);
(statearr_12370_12390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 2))
{var state_12368__$1 = state_12368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12368__$1,4,from);
} else
{if((state_val_12369 === 3))
{var inst_12366 = (state_12368[2]);var state_12368__$1 = state_12368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12368__$1,inst_12366);
} else
{if((state_val_12369 === 4))
{var inst_12351 = (state_12368[7]);var inst_12351__$1 = (state_12368[2]);var inst_12352 = (inst_12351__$1 == null);var state_12368__$1 = (function (){var statearr_12371 = state_12368;(statearr_12371[7] = inst_12351__$1);
return statearr_12371;
})();if(cljs.core.truth_(inst_12352))
{var statearr_12372_12391 = state_12368__$1;(statearr_12372_12391[1] = 5);
} else
{var statearr_12373_12392 = state_12368__$1;(statearr_12373_12392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 5))
{var state_12368__$1 = state_12368;if(cljs.core.truth_(close_QMARK_))
{var statearr_12374_12393 = state_12368__$1;(statearr_12374_12393[1] = 8);
} else
{var statearr_12375_12394 = state_12368__$1;(statearr_12375_12394[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 6))
{var inst_12351 = (state_12368[7]);var state_12368__$1 = state_12368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12368__$1,11,to,inst_12351);
} else
{if((state_val_12369 === 7))
{var inst_12364 = (state_12368[2]);var state_12368__$1 = state_12368;var statearr_12376_12395 = state_12368__$1;(statearr_12376_12395[2] = inst_12364);
(statearr_12376_12395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 8))
{var inst_12355 = cljs.core.async.close_BANG_.call(null,to);var state_12368__$1 = state_12368;var statearr_12377_12396 = state_12368__$1;(statearr_12377_12396[2] = inst_12355);
(statearr_12377_12396[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 9))
{var state_12368__$1 = state_12368;var statearr_12378_12397 = state_12368__$1;(statearr_12378_12397[2] = null);
(statearr_12378_12397[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 10))
{var inst_12358 = (state_12368[2]);var state_12368__$1 = state_12368;var statearr_12379_12398 = state_12368__$1;(statearr_12379_12398[2] = inst_12358);
(statearr_12379_12398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12369 === 11))
{var inst_12361 = (state_12368[2]);var state_12368__$1 = (function (){var statearr_12380 = state_12368;(statearr_12380[8] = inst_12361);
return statearr_12380;
})();var statearr_12381_12399 = state_12368__$1;(statearr_12381_12399[2] = null);
(statearr_12381_12399[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12385 = [null,null,null,null,null,null,null,null,null];(statearr_12385[0] = state_machine__5507__auto__);
(statearr_12385[1] = 1);
return statearr_12385;
});
var state_machine__5507__auto____1 = (function (state_12368){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12368);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12386){if((e12386 instanceof Object))
{var ex__5510__auto__ = e12386;var statearr_12387_12400 = state_12368;(statearr_12387_12400[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12401 = state_12368;
state_12368 = G__12401;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12368){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12388 = f__5522__auto__.call(null);(statearr_12388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12389);
return statearr_12388;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12488 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12466){var state_val_12467 = (state_12466[1]);if((state_val_12467 === 1))
{var state_12466__$1 = state_12466;var statearr_12468_12489 = state_12466__$1;(statearr_12468_12489[2] = null);
(statearr_12468_12489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 2))
{var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12466__$1,4,ch);
} else
{if((state_val_12467 === 3))
{var inst_12464 = (state_12466[2]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12466__$1,inst_12464);
} else
{if((state_val_12467 === 4))
{var inst_12447 = (state_12466[7]);var inst_12447__$1 = (state_12466[2]);var inst_12448 = (inst_12447__$1 == null);var state_12466__$1 = (function (){var statearr_12469 = state_12466;(statearr_12469[7] = inst_12447__$1);
return statearr_12469;
})();if(cljs.core.truth_(inst_12448))
{var statearr_12470_12490 = state_12466__$1;(statearr_12470_12490[1] = 5);
} else
{var statearr_12471_12491 = state_12466__$1;(statearr_12471_12491[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 5))
{var inst_12450 = cljs.core.async.close_BANG_.call(null,tc);var inst_12451 = cljs.core.async.close_BANG_.call(null,fc);var state_12466__$1 = (function (){var statearr_12472 = state_12466;(statearr_12472[8] = inst_12450);
return statearr_12472;
})();var statearr_12473_12492 = state_12466__$1;(statearr_12473_12492[2] = inst_12451);
(statearr_12473_12492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 6))
{var inst_12447 = (state_12466[7]);var inst_12453 = p.call(null,inst_12447);var state_12466__$1 = state_12466;if(cljs.core.truth_(inst_12453))
{var statearr_12474_12493 = state_12466__$1;(statearr_12474_12493[1] = 9);
} else
{var statearr_12475_12494 = state_12466__$1;(statearr_12475_12494[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 7))
{var inst_12462 = (state_12466[2]);var state_12466__$1 = state_12466;var statearr_12476_12495 = state_12466__$1;(statearr_12476_12495[2] = inst_12462);
(statearr_12476_12495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 8))
{var inst_12459 = (state_12466[2]);var state_12466__$1 = (function (){var statearr_12477 = state_12466;(statearr_12477[9] = inst_12459);
return statearr_12477;
})();var statearr_12478_12496 = state_12466__$1;(statearr_12478_12496[2] = null);
(statearr_12478_12496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 9))
{var state_12466__$1 = state_12466;var statearr_12479_12497 = state_12466__$1;(statearr_12479_12497[2] = tc);
(statearr_12479_12497[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 10))
{var state_12466__$1 = state_12466;var statearr_12480_12498 = state_12466__$1;(statearr_12480_12498[2] = fc);
(statearr_12480_12498[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12467 === 11))
{var inst_12447 = (state_12466[7]);var inst_12457 = (state_12466[2]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12466__$1,8,inst_12457,inst_12447);
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
var state_machine__5507__auto____0 = (function (){var statearr_12484 = [null,null,null,null,null,null,null,null,null,null];(statearr_12484[0] = state_machine__5507__auto__);
(statearr_12484[1] = 1);
return statearr_12484;
});
var state_machine__5507__auto____1 = (function (state_12466){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12485){if((e12485 instanceof Object))
{var ex__5510__auto__ = e12485;var statearr_12486_12499 = state_12466;(statearr_12486_12499[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12500 = state_12466;
state_12466 = G__12500;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12466){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12487 = f__5522__auto__.call(null);(statearr_12487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12488);
return statearr_12487;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12547){var state_val_12548 = (state_12547[1]);if((state_val_12548 === 7))
{var inst_12543 = (state_12547[2]);var state_12547__$1 = state_12547;var statearr_12549_12565 = state_12547__$1;(statearr_12549_12565[2] = inst_12543);
(statearr_12549_12565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 6))
{var inst_12536 = (state_12547[7]);var inst_12533 = (state_12547[8]);var inst_12540 = f.call(null,inst_12533,inst_12536);var inst_12533__$1 = inst_12540;var state_12547__$1 = (function (){var statearr_12550 = state_12547;(statearr_12550[8] = inst_12533__$1);
return statearr_12550;
})();var statearr_12551_12566 = state_12547__$1;(statearr_12551_12566[2] = null);
(statearr_12551_12566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 5))
{var inst_12533 = (state_12547[8]);var state_12547__$1 = state_12547;var statearr_12552_12567 = state_12547__$1;(statearr_12552_12567[2] = inst_12533);
(statearr_12552_12567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 4))
{var inst_12536 = (state_12547[7]);var inst_12536__$1 = (state_12547[2]);var inst_12537 = (inst_12536__$1 == null);var state_12547__$1 = (function (){var statearr_12553 = state_12547;(statearr_12553[7] = inst_12536__$1);
return statearr_12553;
})();if(cljs.core.truth_(inst_12537))
{var statearr_12554_12568 = state_12547__$1;(statearr_12554_12568[1] = 5);
} else
{var statearr_12555_12569 = state_12547__$1;(statearr_12555_12569[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 3))
{var inst_12545 = (state_12547[2]);var state_12547__$1 = state_12547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12547__$1,inst_12545);
} else
{if((state_val_12548 === 2))
{var state_12547__$1 = state_12547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12547__$1,4,ch);
} else
{if((state_val_12548 === 1))
{var inst_12533 = init;var state_12547__$1 = (function (){var statearr_12556 = state_12547;(statearr_12556[8] = inst_12533);
return statearr_12556;
})();var statearr_12557_12570 = state_12547__$1;(statearr_12557_12570[2] = null);
(statearr_12557_12570[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12561 = [null,null,null,null,null,null,null,null,null];(statearr_12561[0] = state_machine__5507__auto__);
(statearr_12561[1] = 1);
return statearr_12561;
});
var state_machine__5507__auto____1 = (function (state_12547){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12562){if((e12562 instanceof Object))
{var ex__5510__auto__ = e12562;var statearr_12563_12571 = state_12547;(statearr_12563_12571[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12572 = state_12547;
state_12547 = G__12572;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12547){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12564 = f__5522__auto__.call(null);(statearr_12564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12564;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12634){var state_val_12635 = (state_12634[1]);if((state_val_12635 === 1))
{var inst_12614 = cljs.core.seq.call(null,coll);var inst_12615 = inst_12614;var state_12634__$1 = (function (){var statearr_12636 = state_12634;(statearr_12636[7] = inst_12615);
return statearr_12636;
})();var statearr_12637_12655 = state_12634__$1;(statearr_12637_12655[2] = null);
(statearr_12637_12655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 2))
{var inst_12615 = (state_12634[7]);var state_12634__$1 = state_12634;if(cljs.core.truth_(inst_12615))
{var statearr_12638_12656 = state_12634__$1;(statearr_12638_12656[1] = 4);
} else
{var statearr_12639_12657 = state_12634__$1;(statearr_12639_12657[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 3))
{var inst_12632 = (state_12634[2]);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12634__$1,inst_12632);
} else
{if((state_val_12635 === 4))
{var inst_12615 = (state_12634[7]);var inst_12618 = cljs.core.first.call(null,inst_12615);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12634__$1,7,ch,inst_12618);
} else
{if((state_val_12635 === 5))
{var state_12634__$1 = state_12634;if(cljs.core.truth_(close_QMARK_))
{var statearr_12640_12658 = state_12634__$1;(statearr_12640_12658[1] = 8);
} else
{var statearr_12641_12659 = state_12634__$1;(statearr_12641_12659[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 6))
{var inst_12630 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12642_12660 = state_12634__$1;(statearr_12642_12660[2] = inst_12630);
(statearr_12642_12660[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 7))
{var inst_12615 = (state_12634[7]);var inst_12620 = (state_12634[2]);var inst_12621 = cljs.core.next.call(null,inst_12615);var inst_12615__$1 = inst_12621;var state_12634__$1 = (function (){var statearr_12643 = state_12634;(statearr_12643[8] = inst_12620);
(statearr_12643[7] = inst_12615__$1);
return statearr_12643;
})();var statearr_12644_12661 = state_12634__$1;(statearr_12644_12661[2] = null);
(statearr_12644_12661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 8))
{var inst_12625 = cljs.core.async.close_BANG_.call(null,ch);var state_12634__$1 = state_12634;var statearr_12645_12662 = state_12634__$1;(statearr_12645_12662[2] = inst_12625);
(statearr_12645_12662[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 9))
{var state_12634__$1 = state_12634;var statearr_12646_12663 = state_12634__$1;(statearr_12646_12663[2] = null);
(statearr_12646_12663[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 10))
{var inst_12628 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12647_12664 = state_12634__$1;(statearr_12647_12664[2] = inst_12628);
(statearr_12647_12664[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12651 = [null,null,null,null,null,null,null,null,null];(statearr_12651[0] = state_machine__5507__auto__);
(statearr_12651[1] = 1);
return statearr_12651;
});
var state_machine__5507__auto____1 = (function (state_12634){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12652){if((e12652 instanceof Object))
{var ex__5510__auto__ = e12652;var statearr_12653_12665 = state_12634;(statearr_12653_12665[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12666 = state_12634;
state_12634 = G__12666;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12634){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12654 = f__5522__auto__.call(null);(statearr_12654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12654;
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
cljs.core.async.Mux = (function (){var obj12668 = {};return obj12668;
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
cljs.core.async.Mult = (function (){var obj12670 = {};return obj12670;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12894 = (function (cs,ch,mult,meta12895){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12895 = meta12895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12894.cljs$lang$type = true;
cljs.core.async.t12894.cljs$lang$ctorStr = "cljs.core.async/t12894";
cljs.core.async.t12894.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12894");
});})(cs))
;
cljs.core.async.t12894.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12894.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12894.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12894.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12894.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12896){var self__ = this;
var _12896__$1 = this;return self__.meta12895;
});})(cs))
;
cljs.core.async.t12894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12896,meta12895__$1){var self__ = this;
var _12896__$1 = this;return (new cljs.core.async.t12894(self__.cs,self__.ch,self__.mult,meta12895__$1));
});})(cs))
;
cljs.core.async.__GT_t12894 = ((function (cs){
return (function __GT_t12894(cs__$1,ch__$1,mult__$1,meta12895){return (new cljs.core.async.t12894(cs__$1,ch__$1,mult__$1,meta12895));
});})(cs))
;
}
return (new cljs.core.async.t12894(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13117 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13031){var state_val_13032 = (state_13031[1]);if((state_val_13032 === 32))
{var inst_12975 = (state_13031[7]);var inst_12899 = (state_13031[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13031,31,Object,null,30);var inst_12982 = cljs.core.async.put_BANG_.call(null,inst_12975,inst_12899,done);var state_13031__$1 = state_13031;var statearr_13033_13118 = state_13031__$1;(statearr_13033_13118[2] = inst_12982);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 1))
{var state_13031__$1 = state_13031;var statearr_13034_13119 = state_13031__$1;(statearr_13034_13119[2] = null);
(statearr_13034_13119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 33))
{var inst_12988 = (state_13031[9]);var inst_12990 = cljs.core.chunked_seq_QMARK_.call(null,inst_12988);var state_13031__$1 = state_13031;if(inst_12990)
{var statearr_13035_13120 = state_13031__$1;(statearr_13035_13120[1] = 36);
} else
{var statearr_13036_13121 = state_13031__$1;(statearr_13036_13121[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 2))
{var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13031__$1,4,ch);
} else
{if((state_val_13032 === 34))
{var state_13031__$1 = state_13031;var statearr_13037_13122 = state_13031__$1;(statearr_13037_13122[2] = null);
(statearr_13037_13122[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 3))
{var inst_13029 = (state_13031[2]);var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13031__$1,inst_13029);
} else
{if((state_val_13032 === 35))
{var inst_13013 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13038_13123 = state_13031__$1;(statearr_13038_13123[2] = inst_13013);
(statearr_13038_13123[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 4))
{var inst_12899 = (state_13031[8]);var inst_12899__$1 = (state_13031[2]);var inst_12900 = (inst_12899__$1 == null);var state_13031__$1 = (function (){var statearr_13039 = state_13031;(statearr_13039[8] = inst_12899__$1);
return statearr_13039;
})();if(cljs.core.truth_(inst_12900))
{var statearr_13040_13124 = state_13031__$1;(statearr_13040_13124[1] = 5);
} else
{var statearr_13041_13125 = state_13031__$1;(statearr_13041_13125[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 36))
{var inst_12988 = (state_13031[9]);var inst_12992 = cljs.core.chunk_first.call(null,inst_12988);var inst_12993 = cljs.core.chunk_rest.call(null,inst_12988);var inst_12994 = cljs.core.count.call(null,inst_12992);var inst_12967 = inst_12993;var inst_12968 = inst_12992;var inst_12969 = inst_12994;var inst_12970 = 0;var state_13031__$1 = (function (){var statearr_13042 = state_13031;(statearr_13042[10] = inst_12968);
(statearr_13042[11] = inst_12967);
(statearr_13042[12] = inst_12969);
(statearr_13042[13] = inst_12970);
return statearr_13042;
})();var statearr_13043_13126 = state_13031__$1;(statearr_13043_13126[2] = null);
(statearr_13043_13126[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 5))
{var inst_12906 = cljs.core.deref.call(null,cs);var inst_12907 = cljs.core.seq.call(null,inst_12906);var inst_12908 = inst_12907;var inst_12909 = null;var inst_12910 = 0;var inst_12911 = 0;var state_13031__$1 = (function (){var statearr_13044 = state_13031;(statearr_13044[14] = inst_12909);
(statearr_13044[15] = inst_12908);
(statearr_13044[16] = inst_12910);
(statearr_13044[17] = inst_12911);
return statearr_13044;
})();var statearr_13045_13127 = state_13031__$1;(statearr_13045_13127[2] = null);
(statearr_13045_13127[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 37))
{var inst_12988 = (state_13031[9]);var inst_12997 = cljs.core.first.call(null,inst_12988);var state_13031__$1 = (function (){var statearr_13046 = state_13031;(statearr_13046[18] = inst_12997);
return statearr_13046;
})();var statearr_13047_13128 = state_13031__$1;(statearr_13047_13128[2] = null);
(statearr_13047_13128[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 6))
{var inst_12959 = (state_13031[19]);var inst_12958 = cljs.core.deref.call(null,cs);var inst_12959__$1 = cljs.core.keys.call(null,inst_12958);var inst_12960 = cljs.core.count.call(null,inst_12959__$1);var inst_12961 = cljs.core.reset_BANG_.call(null,dctr,inst_12960);var inst_12966 = cljs.core.seq.call(null,inst_12959__$1);var inst_12967 = inst_12966;var inst_12968 = null;var inst_12969 = 0;var inst_12970 = 0;var state_13031__$1 = (function (){var statearr_13048 = state_13031;(statearr_13048[19] = inst_12959__$1);
(statearr_13048[10] = inst_12968);
(statearr_13048[11] = inst_12967);
(statearr_13048[12] = inst_12969);
(statearr_13048[13] = inst_12970);
(statearr_13048[20] = inst_12961);
return statearr_13048;
})();var statearr_13049_13129 = state_13031__$1;(statearr_13049_13129[2] = null);
(statearr_13049_13129[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 38))
{var inst_13010 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13050_13130 = state_13031__$1;(statearr_13050_13130[2] = inst_13010);
(statearr_13050_13130[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 7))
{var inst_13027 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13051_13131 = state_13031__$1;(statearr_13051_13131[2] = inst_13027);
(statearr_13051_13131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 39))
{var inst_12988 = (state_13031[9]);var inst_13006 = (state_13031[2]);var inst_13007 = cljs.core.next.call(null,inst_12988);var inst_12967 = inst_13007;var inst_12968 = null;var inst_12969 = 0;var inst_12970 = 0;var state_13031__$1 = (function (){var statearr_13052 = state_13031;(statearr_13052[21] = inst_13006);
(statearr_13052[10] = inst_12968);
(statearr_13052[11] = inst_12967);
(statearr_13052[12] = inst_12969);
(statearr_13052[13] = inst_12970);
return statearr_13052;
})();var statearr_13053_13132 = state_13031__$1;(statearr_13053_13132[2] = null);
(statearr_13053_13132[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 8))
{var inst_12910 = (state_13031[16]);var inst_12911 = (state_13031[17]);var inst_12913 = (inst_12911 < inst_12910);var inst_12914 = inst_12913;var state_13031__$1 = state_13031;if(cljs.core.truth_(inst_12914))
{var statearr_13054_13133 = state_13031__$1;(statearr_13054_13133[1] = 10);
} else
{var statearr_13055_13134 = state_13031__$1;(statearr_13055_13134[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 40))
{var inst_12997 = (state_13031[18]);var inst_12998 = (state_13031[2]);var inst_12999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13000 = cljs.core.async.untap_STAR_.call(null,m,inst_12997);var state_13031__$1 = (function (){var statearr_13056 = state_13031;(statearr_13056[22] = inst_12998);
(statearr_13056[23] = inst_12999);
return statearr_13056;
})();var statearr_13057_13135 = state_13031__$1;(statearr_13057_13135[2] = inst_13000);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 9))
{var inst_12956 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13058_13136 = state_13031__$1;(statearr_13058_13136[2] = inst_12956);
(statearr_13058_13136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 41))
{var inst_12899 = (state_13031[8]);var inst_12997 = (state_13031[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13031,40,Object,null,39);var inst_13004 = cljs.core.async.put_BANG_.call(null,inst_12997,inst_12899,done);var state_13031__$1 = state_13031;var statearr_13059_13137 = state_13031__$1;(statearr_13059_13137[2] = inst_13004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 10))
{var inst_12909 = (state_13031[14]);var inst_12911 = (state_13031[17]);var inst_12917 = cljs.core._nth.call(null,inst_12909,inst_12911);var inst_12918 = cljs.core.nth.call(null,inst_12917,0,null);var inst_12919 = cljs.core.nth.call(null,inst_12917,1,null);var state_13031__$1 = (function (){var statearr_13060 = state_13031;(statearr_13060[24] = inst_12918);
return statearr_13060;
})();if(cljs.core.truth_(inst_12919))
{var statearr_13061_13138 = state_13031__$1;(statearr_13061_13138[1] = 13);
} else
{var statearr_13062_13139 = state_13031__$1;(statearr_13062_13139[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 42))
{var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13031__$1,45,dchan);
} else
{if((state_val_13032 === 11))
{var inst_12928 = (state_13031[25]);var inst_12908 = (state_13031[15]);var inst_12928__$1 = cljs.core.seq.call(null,inst_12908);var state_13031__$1 = (function (){var statearr_13063 = state_13031;(statearr_13063[25] = inst_12928__$1);
return statearr_13063;
})();if(inst_12928__$1)
{var statearr_13064_13140 = state_13031__$1;(statearr_13064_13140[1] = 16);
} else
{var statearr_13065_13141 = state_13031__$1;(statearr_13065_13141[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 43))
{var state_13031__$1 = state_13031;var statearr_13066_13142 = state_13031__$1;(statearr_13066_13142[2] = null);
(statearr_13066_13142[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 12))
{var inst_12954 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13067_13143 = state_13031__$1;(statearr_13067_13143[2] = inst_12954);
(statearr_13067_13143[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 44))
{var inst_13024 = (state_13031[2]);var state_13031__$1 = (function (){var statearr_13068 = state_13031;(statearr_13068[26] = inst_13024);
return statearr_13068;
})();var statearr_13069_13144 = state_13031__$1;(statearr_13069_13144[2] = null);
(statearr_13069_13144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 13))
{var inst_12918 = (state_13031[24]);var inst_12921 = cljs.core.async.close_BANG_.call(null,inst_12918);var state_13031__$1 = state_13031;var statearr_13070_13145 = state_13031__$1;(statearr_13070_13145[2] = inst_12921);
(statearr_13070_13145[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 45))
{var inst_13021 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13074_13146 = state_13031__$1;(statearr_13074_13146[2] = inst_13021);
(statearr_13074_13146[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 14))
{var state_13031__$1 = state_13031;var statearr_13075_13147 = state_13031__$1;(statearr_13075_13147[2] = null);
(statearr_13075_13147[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 15))
{var inst_12909 = (state_13031[14]);var inst_12908 = (state_13031[15]);var inst_12910 = (state_13031[16]);var inst_12911 = (state_13031[17]);var inst_12924 = (state_13031[2]);var inst_12925 = (inst_12911 + 1);var tmp13071 = inst_12909;var tmp13072 = inst_12908;var tmp13073 = inst_12910;var inst_12908__$1 = tmp13072;var inst_12909__$1 = tmp13071;var inst_12910__$1 = tmp13073;var inst_12911__$1 = inst_12925;var state_13031__$1 = (function (){var statearr_13076 = state_13031;(statearr_13076[27] = inst_12924);
(statearr_13076[14] = inst_12909__$1);
(statearr_13076[15] = inst_12908__$1);
(statearr_13076[16] = inst_12910__$1);
(statearr_13076[17] = inst_12911__$1);
return statearr_13076;
})();var statearr_13077_13148 = state_13031__$1;(statearr_13077_13148[2] = null);
(statearr_13077_13148[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 16))
{var inst_12928 = (state_13031[25]);var inst_12930 = cljs.core.chunked_seq_QMARK_.call(null,inst_12928);var state_13031__$1 = state_13031;if(inst_12930)
{var statearr_13078_13149 = state_13031__$1;(statearr_13078_13149[1] = 19);
} else
{var statearr_13079_13150 = state_13031__$1;(statearr_13079_13150[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 17))
{var state_13031__$1 = state_13031;var statearr_13080_13151 = state_13031__$1;(statearr_13080_13151[2] = null);
(statearr_13080_13151[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 18))
{var inst_12952 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13081_13152 = state_13031__$1;(statearr_13081_13152[2] = inst_12952);
(statearr_13081_13152[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 19))
{var inst_12928 = (state_13031[25]);var inst_12932 = cljs.core.chunk_first.call(null,inst_12928);var inst_12933 = cljs.core.chunk_rest.call(null,inst_12928);var inst_12934 = cljs.core.count.call(null,inst_12932);var inst_12908 = inst_12933;var inst_12909 = inst_12932;var inst_12910 = inst_12934;var inst_12911 = 0;var state_13031__$1 = (function (){var statearr_13082 = state_13031;(statearr_13082[14] = inst_12909);
(statearr_13082[15] = inst_12908);
(statearr_13082[16] = inst_12910);
(statearr_13082[17] = inst_12911);
return statearr_13082;
})();var statearr_13083_13153 = state_13031__$1;(statearr_13083_13153[2] = null);
(statearr_13083_13153[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 20))
{var inst_12928 = (state_13031[25]);var inst_12938 = cljs.core.first.call(null,inst_12928);var inst_12939 = cljs.core.nth.call(null,inst_12938,0,null);var inst_12940 = cljs.core.nth.call(null,inst_12938,1,null);var state_13031__$1 = (function (){var statearr_13084 = state_13031;(statearr_13084[28] = inst_12939);
return statearr_13084;
})();if(cljs.core.truth_(inst_12940))
{var statearr_13085_13154 = state_13031__$1;(statearr_13085_13154[1] = 22);
} else
{var statearr_13086_13155 = state_13031__$1;(statearr_13086_13155[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 21))
{var inst_12949 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13087_13156 = state_13031__$1;(statearr_13087_13156[2] = inst_12949);
(statearr_13087_13156[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 22))
{var inst_12939 = (state_13031[28]);var inst_12942 = cljs.core.async.close_BANG_.call(null,inst_12939);var state_13031__$1 = state_13031;var statearr_13088_13157 = state_13031__$1;(statearr_13088_13157[2] = inst_12942);
(statearr_13088_13157[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 23))
{var state_13031__$1 = state_13031;var statearr_13089_13158 = state_13031__$1;(statearr_13089_13158[2] = null);
(statearr_13089_13158[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 24))
{var inst_12928 = (state_13031[25]);var inst_12945 = (state_13031[2]);var inst_12946 = cljs.core.next.call(null,inst_12928);var inst_12908 = inst_12946;var inst_12909 = null;var inst_12910 = 0;var inst_12911 = 0;var state_13031__$1 = (function (){var statearr_13090 = state_13031;(statearr_13090[14] = inst_12909);
(statearr_13090[29] = inst_12945);
(statearr_13090[15] = inst_12908);
(statearr_13090[16] = inst_12910);
(statearr_13090[17] = inst_12911);
return statearr_13090;
})();var statearr_13091_13159 = state_13031__$1;(statearr_13091_13159[2] = null);
(statearr_13091_13159[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 25))
{var inst_12969 = (state_13031[12]);var inst_12970 = (state_13031[13]);var inst_12972 = (inst_12970 < inst_12969);var inst_12973 = inst_12972;var state_13031__$1 = state_13031;if(cljs.core.truth_(inst_12973))
{var statearr_13092_13160 = state_13031__$1;(statearr_13092_13160[1] = 27);
} else
{var statearr_13093_13161 = state_13031__$1;(statearr_13093_13161[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 26))
{var inst_12959 = (state_13031[19]);var inst_13017 = (state_13031[2]);var inst_13018 = cljs.core.seq.call(null,inst_12959);var state_13031__$1 = (function (){var statearr_13094 = state_13031;(statearr_13094[30] = inst_13017);
return statearr_13094;
})();if(inst_13018)
{var statearr_13095_13162 = state_13031__$1;(statearr_13095_13162[1] = 42);
} else
{var statearr_13096_13163 = state_13031__$1;(statearr_13096_13163[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 27))
{var inst_12968 = (state_13031[10]);var inst_12970 = (state_13031[13]);var inst_12975 = cljs.core._nth.call(null,inst_12968,inst_12970);var state_13031__$1 = (function (){var statearr_13097 = state_13031;(statearr_13097[7] = inst_12975);
return statearr_13097;
})();var statearr_13098_13164 = state_13031__$1;(statearr_13098_13164[2] = null);
(statearr_13098_13164[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 28))
{var inst_12988 = (state_13031[9]);var inst_12967 = (state_13031[11]);var inst_12988__$1 = cljs.core.seq.call(null,inst_12967);var state_13031__$1 = (function (){var statearr_13102 = state_13031;(statearr_13102[9] = inst_12988__$1);
return statearr_13102;
})();if(inst_12988__$1)
{var statearr_13103_13165 = state_13031__$1;(statearr_13103_13165[1] = 33);
} else
{var statearr_13104_13166 = state_13031__$1;(statearr_13104_13166[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 29))
{var inst_13015 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13105_13167 = state_13031__$1;(statearr_13105_13167[2] = inst_13015);
(statearr_13105_13167[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 30))
{var inst_12968 = (state_13031[10]);var inst_12967 = (state_13031[11]);var inst_12969 = (state_13031[12]);var inst_12970 = (state_13031[13]);var inst_12984 = (state_13031[2]);var inst_12985 = (inst_12970 + 1);var tmp13099 = inst_12968;var tmp13100 = inst_12967;var tmp13101 = inst_12969;var inst_12967__$1 = tmp13100;var inst_12968__$1 = tmp13099;var inst_12969__$1 = tmp13101;var inst_12970__$1 = inst_12985;var state_13031__$1 = (function (){var statearr_13106 = state_13031;(statearr_13106[10] = inst_12968__$1);
(statearr_13106[11] = inst_12967__$1);
(statearr_13106[12] = inst_12969__$1);
(statearr_13106[31] = inst_12984);
(statearr_13106[13] = inst_12970__$1);
return statearr_13106;
})();var statearr_13107_13168 = state_13031__$1;(statearr_13107_13168[2] = null);
(statearr_13107_13168[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 31))
{var inst_12975 = (state_13031[7]);var inst_12976 = (state_13031[2]);var inst_12977 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12978 = cljs.core.async.untap_STAR_.call(null,m,inst_12975);var state_13031__$1 = (function (){var statearr_13108 = state_13031;(statearr_13108[32] = inst_12976);
(statearr_13108[33] = inst_12977);
return statearr_13108;
})();var statearr_13109_13169 = state_13031__$1;(statearr_13109_13169[2] = inst_12978);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13113[0] = state_machine__5507__auto__);
(statearr_13113[1] = 1);
return statearr_13113;
});
var state_machine__5507__auto____1 = (function (state_13031){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13031);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13114){if((e13114 instanceof Object))
{var ex__5510__auto__ = e13114;var statearr_13115_13170 = state_13031;(statearr_13115_13170[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13171 = state_13031;
state_13031 = G__13171;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13031){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13116 = f__5522__auto__.call(null);(statearr_13116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13117);
return statearr_13116;
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
cljs.core.async.Mix = (function (){var obj13173 = {};return obj13173;
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
;var m = (function (){if(typeof cljs.core.async.t13283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13283 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13284){
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
this.meta13284 = meta13284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13283.cljs$lang$type = true;
cljs.core.async.t13283.cljs$lang$ctorStr = "cljs.core.async/t13283";
cljs.core.async.t13283.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13283");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13283.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13285){var self__ = this;
var _13285__$1 = this;return self__.meta13284;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13285,meta13284__$1){var self__ = this;
var _13285__$1 = this;return (new cljs.core.async.t13283(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13284__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13283 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13283(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13284){return (new cljs.core.async.t13283(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13284));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13283(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13350){var state_val_13351 = (state_13350[1]);if((state_val_13351 === 1))
{var inst_13289 = (state_13350[7]);var inst_13289__$1 = calc_state.call(null);var inst_13290 = cljs.core.seq_QMARK_.call(null,inst_13289__$1);var state_13350__$1 = (function (){var statearr_13352 = state_13350;(statearr_13352[7] = inst_13289__$1);
return statearr_13352;
})();if(inst_13290)
{var statearr_13353_13393 = state_13350__$1;(statearr_13353_13393[1] = 2);
} else
{var statearr_13354_13394 = state_13350__$1;(statearr_13354_13394[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 2))
{var inst_13289 = (state_13350[7]);var inst_13292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13289);var state_13350__$1 = state_13350;var statearr_13355_13395 = state_13350__$1;(statearr_13355_13395[2] = inst_13292);
(statearr_13355_13395[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 3))
{var inst_13289 = (state_13350[7]);var state_13350__$1 = state_13350;var statearr_13356_13396 = state_13350__$1;(statearr_13356_13396[2] = inst_13289);
(statearr_13356_13396[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 4))
{var inst_13289 = (state_13350[7]);var inst_13295 = (state_13350[2]);var inst_13296 = cljs.core.get.call(null,inst_13295,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13297 = cljs.core.get.call(null,inst_13295,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13298 = cljs.core.get.call(null,inst_13295,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13299 = inst_13289;var state_13350__$1 = (function (){var statearr_13357 = state_13350;(statearr_13357[8] = inst_13298);
(statearr_13357[9] = inst_13299);
(statearr_13357[10] = inst_13296);
(statearr_13357[11] = inst_13297);
return statearr_13357;
})();var statearr_13358_13397 = state_13350__$1;(statearr_13358_13397[2] = null);
(statearr_13358_13397[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 5))
{var inst_13299 = (state_13350[9]);var inst_13302 = cljs.core.seq_QMARK_.call(null,inst_13299);var state_13350__$1 = state_13350;if(inst_13302)
{var statearr_13359_13398 = state_13350__$1;(statearr_13359_13398[1] = 7);
} else
{var statearr_13360_13399 = state_13350__$1;(statearr_13360_13399[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 6))
{var inst_13348 = (state_13350[2]);var state_13350__$1 = state_13350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13350__$1,inst_13348);
} else
{if((state_val_13351 === 7))
{var inst_13299 = (state_13350[9]);var inst_13304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13299);var state_13350__$1 = state_13350;var statearr_13361_13400 = state_13350__$1;(statearr_13361_13400[2] = inst_13304);
(statearr_13361_13400[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 8))
{var inst_13299 = (state_13350[9]);var state_13350__$1 = state_13350;var statearr_13362_13401 = state_13350__$1;(statearr_13362_13401[2] = inst_13299);
(statearr_13362_13401[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 9))
{var inst_13307 = (state_13350[12]);var inst_13307__$1 = (state_13350[2]);var inst_13308 = cljs.core.get.call(null,inst_13307__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13309 = cljs.core.get.call(null,inst_13307__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13310 = cljs.core.get.call(null,inst_13307__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13350__$1 = (function (){var statearr_13363 = state_13350;(statearr_13363[13] = inst_13310);
(statearr_13363[12] = inst_13307__$1);
(statearr_13363[14] = inst_13309);
return statearr_13363;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13350__$1,10,inst_13308);
} else
{if((state_val_13351 === 10))
{var inst_13315 = (state_13350[15]);var inst_13314 = (state_13350[16]);var inst_13313 = (state_13350[2]);var inst_13314__$1 = cljs.core.nth.call(null,inst_13313,0,null);var inst_13315__$1 = cljs.core.nth.call(null,inst_13313,1,null);var inst_13316 = (inst_13314__$1 == null);var inst_13317 = cljs.core._EQ_.call(null,inst_13315__$1,change);var inst_13318 = (inst_13316) || (inst_13317);var state_13350__$1 = (function (){var statearr_13364 = state_13350;(statearr_13364[15] = inst_13315__$1);
(statearr_13364[16] = inst_13314__$1);
return statearr_13364;
})();if(cljs.core.truth_(inst_13318))
{var statearr_13365_13402 = state_13350__$1;(statearr_13365_13402[1] = 11);
} else
{var statearr_13366_13403 = state_13350__$1;(statearr_13366_13403[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 11))
{var inst_13314 = (state_13350[16]);var inst_13320 = (inst_13314 == null);var state_13350__$1 = state_13350;if(cljs.core.truth_(inst_13320))
{var statearr_13367_13404 = state_13350__$1;(statearr_13367_13404[1] = 14);
} else
{var statearr_13368_13405 = state_13350__$1;(statearr_13368_13405[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 12))
{var inst_13310 = (state_13350[13]);var inst_13315 = (state_13350[15]);var inst_13329 = (state_13350[17]);var inst_13329__$1 = inst_13310.call(null,inst_13315);var state_13350__$1 = (function (){var statearr_13369 = state_13350;(statearr_13369[17] = inst_13329__$1);
return statearr_13369;
})();if(cljs.core.truth_(inst_13329__$1))
{var statearr_13370_13406 = state_13350__$1;(statearr_13370_13406[1] = 17);
} else
{var statearr_13371_13407 = state_13350__$1;(statearr_13371_13407[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 13))
{var inst_13346 = (state_13350[2]);var state_13350__$1 = state_13350;var statearr_13372_13408 = state_13350__$1;(statearr_13372_13408[2] = inst_13346);
(statearr_13372_13408[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 14))
{var inst_13315 = (state_13350[15]);var inst_13322 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13315);var state_13350__$1 = state_13350;var statearr_13373_13409 = state_13350__$1;(statearr_13373_13409[2] = inst_13322);
(statearr_13373_13409[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 15))
{var state_13350__$1 = state_13350;var statearr_13374_13410 = state_13350__$1;(statearr_13374_13410[2] = null);
(statearr_13374_13410[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 16))
{var inst_13325 = (state_13350[2]);var inst_13326 = calc_state.call(null);var inst_13299 = inst_13326;var state_13350__$1 = (function (){var statearr_13375 = state_13350;(statearr_13375[18] = inst_13325);
(statearr_13375[9] = inst_13299);
return statearr_13375;
})();var statearr_13376_13411 = state_13350__$1;(statearr_13376_13411[2] = null);
(statearr_13376_13411[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 17))
{var inst_13329 = (state_13350[17]);var state_13350__$1 = state_13350;var statearr_13377_13412 = state_13350__$1;(statearr_13377_13412[2] = inst_13329);
(statearr_13377_13412[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 18))
{var inst_13310 = (state_13350[13]);var inst_13315 = (state_13350[15]);var inst_13309 = (state_13350[14]);var inst_13332 = cljs.core.empty_QMARK_.call(null,inst_13310);var inst_13333 = inst_13309.call(null,inst_13315);var inst_13334 = cljs.core.not.call(null,inst_13333);var inst_13335 = (inst_13332) && (inst_13334);var state_13350__$1 = state_13350;var statearr_13378_13413 = state_13350__$1;(statearr_13378_13413[2] = inst_13335);
(statearr_13378_13413[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 19))
{var inst_13337 = (state_13350[2]);var state_13350__$1 = state_13350;if(cljs.core.truth_(inst_13337))
{var statearr_13379_13414 = state_13350__$1;(statearr_13379_13414[1] = 20);
} else
{var statearr_13380_13415 = state_13350__$1;(statearr_13380_13415[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 20))
{var inst_13314 = (state_13350[16]);var state_13350__$1 = state_13350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13350__$1,23,out,inst_13314);
} else
{if((state_val_13351 === 21))
{var state_13350__$1 = state_13350;var statearr_13381_13416 = state_13350__$1;(statearr_13381_13416[2] = null);
(statearr_13381_13416[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 22))
{var inst_13307 = (state_13350[12]);var inst_13343 = (state_13350[2]);var inst_13299 = inst_13307;var state_13350__$1 = (function (){var statearr_13382 = state_13350;(statearr_13382[9] = inst_13299);
(statearr_13382[19] = inst_13343);
return statearr_13382;
})();var statearr_13383_13417 = state_13350__$1;(statearr_13383_13417[2] = null);
(statearr_13383_13417[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13351 === 23))
{var inst_13340 = (state_13350[2]);var state_13350__$1 = state_13350;var statearr_13384_13418 = state_13350__$1;(statearr_13384_13418[2] = inst_13340);
(statearr_13384_13418[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13388[0] = state_machine__5507__auto__);
(statearr_13388[1] = 1);
return statearr_13388;
});
var state_machine__5507__auto____1 = (function (state_13350){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13350);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13389){if((e13389 instanceof Object))
{var ex__5510__auto__ = e13389;var statearr_13390_13419 = state_13350;(statearr_13390_13419[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13420 = state_13350;
state_13350 = G__13420;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13350){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13391 = f__5522__auto__.call(null);(statearr_13391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13392);
return statearr_13391;
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
cljs.core.async.Pub = (function (){var obj13422 = {};return obj13422;
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
return (function (p1__13423_SHARP_){if(cljs.core.truth_(p1__13423_SHARP_.call(null,topic)))
{return p1__13423_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13423_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13548 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13548 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13549){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13549 = meta13549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13548.cljs$lang$type = true;
cljs.core.async.t13548.cljs$lang$ctorStr = "cljs.core.async/t13548";
cljs.core.async.t13548.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13548");
});})(mults,ensure_mult))
;
cljs.core.async.t13548.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13548.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13548.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13548.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13550){var self__ = this;
var _13550__$1 = this;return self__.meta13549;
});})(mults,ensure_mult))
;
cljs.core.async.t13548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13550,meta13549__$1){var self__ = this;
var _13550__$1 = this;return (new cljs.core.async.t13548(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13549__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13548 = ((function (mults,ensure_mult){
return (function __GT_t13548(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13549){return (new cljs.core.async.t13548(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13549));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13548(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13672 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13624){var state_val_13625 = (state_13624[1]);if((state_val_13625 === 1))
{var state_13624__$1 = state_13624;var statearr_13626_13673 = state_13624__$1;(statearr_13626_13673[2] = null);
(statearr_13626_13673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 2))
{var state_13624__$1 = state_13624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13624__$1,4,ch);
} else
{if((state_val_13625 === 3))
{var inst_13622 = (state_13624[2]);var state_13624__$1 = state_13624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13624__$1,inst_13622);
} else
{if((state_val_13625 === 4))
{var inst_13553 = (state_13624[7]);var inst_13553__$1 = (state_13624[2]);var inst_13554 = (inst_13553__$1 == null);var state_13624__$1 = (function (){var statearr_13627 = state_13624;(statearr_13627[7] = inst_13553__$1);
return statearr_13627;
})();if(cljs.core.truth_(inst_13554))
{var statearr_13628_13674 = state_13624__$1;(statearr_13628_13674[1] = 5);
} else
{var statearr_13629_13675 = state_13624__$1;(statearr_13629_13675[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 5))
{var inst_13560 = cljs.core.deref.call(null,mults);var inst_13561 = cljs.core.vals.call(null,inst_13560);var inst_13562 = cljs.core.seq.call(null,inst_13561);var inst_13563 = inst_13562;var inst_13564 = null;var inst_13565 = 0;var inst_13566 = 0;var state_13624__$1 = (function (){var statearr_13630 = state_13624;(statearr_13630[8] = inst_13566);
(statearr_13630[9] = inst_13565);
(statearr_13630[10] = inst_13564);
(statearr_13630[11] = inst_13563);
return statearr_13630;
})();var statearr_13631_13676 = state_13624__$1;(statearr_13631_13676[2] = null);
(statearr_13631_13676[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 6))
{var inst_13553 = (state_13624[7]);var inst_13601 = (state_13624[12]);var inst_13603 = (state_13624[13]);var inst_13601__$1 = topic_fn.call(null,inst_13553);var inst_13602 = cljs.core.deref.call(null,mults);var inst_13603__$1 = cljs.core.get.call(null,inst_13602,inst_13601__$1);var state_13624__$1 = (function (){var statearr_13632 = state_13624;(statearr_13632[12] = inst_13601__$1);
(statearr_13632[13] = inst_13603__$1);
return statearr_13632;
})();if(cljs.core.truth_(inst_13603__$1))
{var statearr_13633_13677 = state_13624__$1;(statearr_13633_13677[1] = 19);
} else
{var statearr_13634_13678 = state_13624__$1;(statearr_13634_13678[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 7))
{var inst_13620 = (state_13624[2]);var state_13624__$1 = state_13624;var statearr_13635_13679 = state_13624__$1;(statearr_13635_13679[2] = inst_13620);
(statearr_13635_13679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 8))
{var inst_13566 = (state_13624[8]);var inst_13565 = (state_13624[9]);var inst_13568 = (inst_13566 < inst_13565);var inst_13569 = inst_13568;var state_13624__$1 = state_13624;if(cljs.core.truth_(inst_13569))
{var statearr_13639_13680 = state_13624__$1;(statearr_13639_13680[1] = 10);
} else
{var statearr_13640_13681 = state_13624__$1;(statearr_13640_13681[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 9))
{var inst_13599 = (state_13624[2]);var state_13624__$1 = state_13624;var statearr_13641_13682 = state_13624__$1;(statearr_13641_13682[2] = inst_13599);
(statearr_13641_13682[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 10))
{var inst_13566 = (state_13624[8]);var inst_13565 = (state_13624[9]);var inst_13564 = (state_13624[10]);var inst_13563 = (state_13624[11]);var inst_13571 = cljs.core._nth.call(null,inst_13564,inst_13566);var inst_13572 = cljs.core.async.muxch_STAR_.call(null,inst_13571);var inst_13573 = cljs.core.async.close_BANG_.call(null,inst_13572);var inst_13574 = (inst_13566 + 1);var tmp13636 = inst_13565;var tmp13637 = inst_13564;var tmp13638 = inst_13563;var inst_13563__$1 = tmp13638;var inst_13564__$1 = tmp13637;var inst_13565__$1 = tmp13636;var inst_13566__$1 = inst_13574;var state_13624__$1 = (function (){var statearr_13642 = state_13624;(statearr_13642[8] = inst_13566__$1);
(statearr_13642[9] = inst_13565__$1);
(statearr_13642[10] = inst_13564__$1);
(statearr_13642[11] = inst_13563__$1);
(statearr_13642[14] = inst_13573);
return statearr_13642;
})();var statearr_13643_13683 = state_13624__$1;(statearr_13643_13683[2] = null);
(statearr_13643_13683[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 11))
{var inst_13563 = (state_13624[11]);var inst_13577 = (state_13624[15]);var inst_13577__$1 = cljs.core.seq.call(null,inst_13563);var state_13624__$1 = (function (){var statearr_13644 = state_13624;(statearr_13644[15] = inst_13577__$1);
return statearr_13644;
})();if(inst_13577__$1)
{var statearr_13645_13684 = state_13624__$1;(statearr_13645_13684[1] = 13);
} else
{var statearr_13646_13685 = state_13624__$1;(statearr_13646_13685[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 12))
{var inst_13597 = (state_13624[2]);var state_13624__$1 = state_13624;var statearr_13647_13686 = state_13624__$1;(statearr_13647_13686[2] = inst_13597);
(statearr_13647_13686[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 13))
{var inst_13577 = (state_13624[15]);var inst_13579 = cljs.core.chunked_seq_QMARK_.call(null,inst_13577);var state_13624__$1 = state_13624;if(inst_13579)
{var statearr_13648_13687 = state_13624__$1;(statearr_13648_13687[1] = 16);
} else
{var statearr_13649_13688 = state_13624__$1;(statearr_13649_13688[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 14))
{var state_13624__$1 = state_13624;var statearr_13650_13689 = state_13624__$1;(statearr_13650_13689[2] = null);
(statearr_13650_13689[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 15))
{var inst_13595 = (state_13624[2]);var state_13624__$1 = state_13624;var statearr_13651_13690 = state_13624__$1;(statearr_13651_13690[2] = inst_13595);
(statearr_13651_13690[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 16))
{var inst_13577 = (state_13624[15]);var inst_13581 = cljs.core.chunk_first.call(null,inst_13577);var inst_13582 = cljs.core.chunk_rest.call(null,inst_13577);var inst_13583 = cljs.core.count.call(null,inst_13581);var inst_13563 = inst_13582;var inst_13564 = inst_13581;var inst_13565 = inst_13583;var inst_13566 = 0;var state_13624__$1 = (function (){var statearr_13652 = state_13624;(statearr_13652[8] = inst_13566);
(statearr_13652[9] = inst_13565);
(statearr_13652[10] = inst_13564);
(statearr_13652[11] = inst_13563);
return statearr_13652;
})();var statearr_13653_13691 = state_13624__$1;(statearr_13653_13691[2] = null);
(statearr_13653_13691[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 17))
{var inst_13577 = (state_13624[15]);var inst_13586 = cljs.core.first.call(null,inst_13577);var inst_13587 = cljs.core.async.muxch_STAR_.call(null,inst_13586);var inst_13588 = cljs.core.async.close_BANG_.call(null,inst_13587);var inst_13589 = cljs.core.next.call(null,inst_13577);var inst_13563 = inst_13589;var inst_13564 = null;var inst_13565 = 0;var inst_13566 = 0;var state_13624__$1 = (function (){var statearr_13654 = state_13624;(statearr_13654[8] = inst_13566);
(statearr_13654[9] = inst_13565);
(statearr_13654[10] = inst_13564);
(statearr_13654[11] = inst_13563);
(statearr_13654[16] = inst_13588);
return statearr_13654;
})();var statearr_13655_13692 = state_13624__$1;(statearr_13655_13692[2] = null);
(statearr_13655_13692[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 18))
{var inst_13592 = (state_13624[2]);var state_13624__$1 = state_13624;var statearr_13656_13693 = state_13624__$1;(statearr_13656_13693[2] = inst_13592);
(statearr_13656_13693[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 19))
{var state_13624__$1 = state_13624;var statearr_13657_13694 = state_13624__$1;(statearr_13657_13694[2] = null);
(statearr_13657_13694[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 20))
{var state_13624__$1 = state_13624;var statearr_13658_13695 = state_13624__$1;(statearr_13658_13695[2] = null);
(statearr_13658_13695[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 21))
{var inst_13617 = (state_13624[2]);var state_13624__$1 = (function (){var statearr_13659 = state_13624;(statearr_13659[17] = inst_13617);
return statearr_13659;
})();var statearr_13660_13696 = state_13624__$1;(statearr_13660_13696[2] = null);
(statearr_13660_13696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 22))
{var inst_13614 = (state_13624[2]);var state_13624__$1 = state_13624;var statearr_13661_13697 = state_13624__$1;(statearr_13661_13697[2] = inst_13614);
(statearr_13661_13697[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 23))
{var inst_13601 = (state_13624[12]);var inst_13605 = (state_13624[2]);var inst_13606 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13601);var state_13624__$1 = (function (){var statearr_13662 = state_13624;(statearr_13662[18] = inst_13605);
return statearr_13662;
})();var statearr_13663_13698 = state_13624__$1;(statearr_13663_13698[2] = inst_13606);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13624__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13625 === 24))
{var inst_13553 = (state_13624[7]);var inst_13603 = (state_13624[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13624,23,Object,null,22);var inst_13610 = cljs.core.async.muxch_STAR_.call(null,inst_13603);var state_13624__$1 = state_13624;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13624__$1,25,inst_13610,inst_13553);
} else
{if((state_val_13625 === 25))
{var inst_13612 = (state_13624[2]);var state_13624__$1 = state_13624;var statearr_13664_13699 = state_13624__$1;(statearr_13664_13699[2] = inst_13612);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13624__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13668[0] = state_machine__5507__auto__);
(statearr_13668[1] = 1);
return statearr_13668;
});
var state_machine__5507__auto____1 = (function (state_13624){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13624);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13669){if((e13669 instanceof Object))
{var ex__5510__auto__ = e13669;var statearr_13670_13700 = state_13624;(statearr_13670_13700[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13624);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13701 = state_13624;
state_13624 = G__13701;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13624){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13671 = f__5522__auto__.call(null);(statearr_13671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13672);
return statearr_13671;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13838 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13808){var state_val_13809 = (state_13808[1]);if((state_val_13809 === 1))
{var state_13808__$1 = state_13808;var statearr_13810_13839 = state_13808__$1;(statearr_13810_13839[2] = null);
(statearr_13810_13839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 2))
{var inst_13771 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13772 = 0;var state_13808__$1 = (function (){var statearr_13811 = state_13808;(statearr_13811[7] = inst_13771);
(statearr_13811[8] = inst_13772);
return statearr_13811;
})();var statearr_13812_13840 = state_13808__$1;(statearr_13812_13840[2] = null);
(statearr_13812_13840[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 3))
{var inst_13806 = (state_13808[2]);var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13808__$1,inst_13806);
} else
{if((state_val_13809 === 4))
{var inst_13772 = (state_13808[8]);var inst_13774 = (inst_13772 < cnt);var state_13808__$1 = state_13808;if(cljs.core.truth_(inst_13774))
{var statearr_13813_13841 = state_13808__$1;(statearr_13813_13841[1] = 6);
} else
{var statearr_13814_13842 = state_13808__$1;(statearr_13814_13842[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 5))
{var inst_13792 = (state_13808[2]);var state_13808__$1 = (function (){var statearr_13815 = state_13808;(statearr_13815[9] = inst_13792);
return statearr_13815;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13808__$1,12,dchan);
} else
{if((state_val_13809 === 6))
{var state_13808__$1 = state_13808;var statearr_13816_13843 = state_13808__$1;(statearr_13816_13843[2] = null);
(statearr_13816_13843[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 7))
{var state_13808__$1 = state_13808;var statearr_13817_13844 = state_13808__$1;(statearr_13817_13844[2] = null);
(statearr_13817_13844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 8))
{var inst_13790 = (state_13808[2]);var state_13808__$1 = state_13808;var statearr_13818_13845 = state_13808__$1;(statearr_13818_13845[2] = inst_13790);
(statearr_13818_13845[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 9))
{var inst_13772 = (state_13808[8]);var inst_13785 = (state_13808[2]);var inst_13786 = (inst_13772 + 1);var inst_13772__$1 = inst_13786;var state_13808__$1 = (function (){var statearr_13819 = state_13808;(statearr_13819[8] = inst_13772__$1);
(statearr_13819[10] = inst_13785);
return statearr_13819;
})();var statearr_13820_13846 = state_13808__$1;(statearr_13820_13846[2] = null);
(statearr_13820_13846[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 10))
{var inst_13776 = (state_13808[2]);var inst_13777 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13808__$1 = (function (){var statearr_13821 = state_13808;(statearr_13821[11] = inst_13776);
return statearr_13821;
})();var statearr_13822_13847 = state_13808__$1;(statearr_13822_13847[2] = inst_13777);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 11))
{var inst_13772 = (state_13808[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13808,10,Object,null,9);var inst_13781 = chs__$1.call(null,inst_13772);var inst_13782 = done.call(null,inst_13772);var inst_13783 = cljs.core.async.take_BANG_.call(null,inst_13781,inst_13782);var state_13808__$1 = state_13808;var statearr_13823_13848 = state_13808__$1;(statearr_13823_13848[2] = inst_13783);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 12))
{var inst_13794 = (state_13808[12]);var inst_13794__$1 = (state_13808[2]);var inst_13795 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13794__$1);var state_13808__$1 = (function (){var statearr_13824 = state_13808;(statearr_13824[12] = inst_13794__$1);
return statearr_13824;
})();if(cljs.core.truth_(inst_13795))
{var statearr_13825_13849 = state_13808__$1;(statearr_13825_13849[1] = 13);
} else
{var statearr_13826_13850 = state_13808__$1;(statearr_13826_13850[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 13))
{var inst_13797 = cljs.core.async.close_BANG_.call(null,out);var state_13808__$1 = state_13808;var statearr_13827_13851 = state_13808__$1;(statearr_13827_13851[2] = inst_13797);
(statearr_13827_13851[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 14))
{var inst_13794 = (state_13808[12]);var inst_13799 = cljs.core.apply.call(null,f,inst_13794);var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13808__$1,16,out,inst_13799);
} else
{if((state_val_13809 === 15))
{var inst_13804 = (state_13808[2]);var state_13808__$1 = state_13808;var statearr_13828_13852 = state_13808__$1;(statearr_13828_13852[2] = inst_13804);
(statearr_13828_13852[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 16))
{var inst_13801 = (state_13808[2]);var state_13808__$1 = (function (){var statearr_13829 = state_13808;(statearr_13829[13] = inst_13801);
return statearr_13829;
})();var statearr_13830_13853 = state_13808__$1;(statearr_13830_13853[2] = null);
(statearr_13830_13853[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13834[0] = state_machine__5507__auto__);
(statearr_13834[1] = 1);
return statearr_13834;
});
var state_machine__5507__auto____1 = (function (state_13808){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13835){if((e13835 instanceof Object))
{var ex__5510__auto__ = e13835;var statearr_13836_13854 = state_13808;(statearr_13836_13854[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13855 = state_13808;
state_13808 = G__13855;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13808){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13837 = f__5522__auto__.call(null);(statearr_13837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13838);
return statearr_13837;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13963 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13939){var state_val_13940 = (state_13939[1]);if((state_val_13940 === 1))
{var inst_13910 = cljs.core.vec.call(null,chs);var inst_13911 = inst_13910;var state_13939__$1 = (function (){var statearr_13941 = state_13939;(statearr_13941[7] = inst_13911);
return statearr_13941;
})();var statearr_13942_13964 = state_13939__$1;(statearr_13942_13964[2] = null);
(statearr_13942_13964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 2))
{var inst_13911 = (state_13939[7]);var inst_13913 = cljs.core.count.call(null,inst_13911);var inst_13914 = (inst_13913 > 0);var state_13939__$1 = state_13939;if(cljs.core.truth_(inst_13914))
{var statearr_13943_13965 = state_13939__$1;(statearr_13943_13965[1] = 4);
} else
{var statearr_13944_13966 = state_13939__$1;(statearr_13944_13966[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 3))
{var inst_13937 = (state_13939[2]);var state_13939__$1 = state_13939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13939__$1,inst_13937);
} else
{if((state_val_13940 === 4))
{var inst_13911 = (state_13939[7]);var state_13939__$1 = state_13939;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13939__$1,7,inst_13911);
} else
{if((state_val_13940 === 5))
{var inst_13933 = cljs.core.async.close_BANG_.call(null,out);var state_13939__$1 = state_13939;var statearr_13945_13967 = state_13939__$1;(statearr_13945_13967[2] = inst_13933);
(statearr_13945_13967[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 6))
{var inst_13935 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13946_13968 = state_13939__$1;(statearr_13946_13968[2] = inst_13935);
(statearr_13946_13968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 7))
{var inst_13919 = (state_13939[8]);var inst_13918 = (state_13939[9]);var inst_13918__$1 = (state_13939[2]);var inst_13919__$1 = cljs.core.nth.call(null,inst_13918__$1,0,null);var inst_13920 = cljs.core.nth.call(null,inst_13918__$1,1,null);var inst_13921 = (inst_13919__$1 == null);var state_13939__$1 = (function (){var statearr_13947 = state_13939;(statearr_13947[10] = inst_13920);
(statearr_13947[8] = inst_13919__$1);
(statearr_13947[9] = inst_13918__$1);
return statearr_13947;
})();if(cljs.core.truth_(inst_13921))
{var statearr_13948_13969 = state_13939__$1;(statearr_13948_13969[1] = 8);
} else
{var statearr_13949_13970 = state_13939__$1;(statearr_13949_13970[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 8))
{var inst_13911 = (state_13939[7]);var inst_13920 = (state_13939[10]);var inst_13919 = (state_13939[8]);var inst_13918 = (state_13939[9]);var inst_13923 = (function (){var c = inst_13920;var v = inst_13919;var vec__13916 = inst_13918;var cs = inst_13911;return ((function (c,v,vec__13916,cs,inst_13911,inst_13920,inst_13919,inst_13918,state_val_13940){
return (function (p1__13856_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13856_SHARP_);
});
;})(c,v,vec__13916,cs,inst_13911,inst_13920,inst_13919,inst_13918,state_val_13940))
})();var inst_13924 = cljs.core.filterv.call(null,inst_13923,inst_13911);var inst_13911__$1 = inst_13924;var state_13939__$1 = (function (){var statearr_13950 = state_13939;(statearr_13950[7] = inst_13911__$1);
return statearr_13950;
})();var statearr_13951_13971 = state_13939__$1;(statearr_13951_13971[2] = null);
(statearr_13951_13971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 9))
{var inst_13919 = (state_13939[8]);var state_13939__$1 = state_13939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13939__$1,11,out,inst_13919);
} else
{if((state_val_13940 === 10))
{var inst_13931 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13953_13972 = state_13939__$1;(statearr_13953_13972[2] = inst_13931);
(statearr_13953_13972[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 11))
{var inst_13911 = (state_13939[7]);var inst_13928 = (state_13939[2]);var tmp13952 = inst_13911;var inst_13911__$1 = tmp13952;var state_13939__$1 = (function (){var statearr_13954 = state_13939;(statearr_13954[7] = inst_13911__$1);
(statearr_13954[11] = inst_13928);
return statearr_13954;
})();var statearr_13955_13973 = state_13939__$1;(statearr_13955_13973[2] = null);
(statearr_13955_13973[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13959 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13959[0] = state_machine__5507__auto__);
(statearr_13959[1] = 1);
return statearr_13959;
});
var state_machine__5507__auto____1 = (function (state_13939){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13939);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13960){if((e13960 instanceof Object))
{var ex__5510__auto__ = e13960;var statearr_13961_13974 = state_13939;(statearr_13961_13974[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13975 = state_13939;
state_13939 = G__13975;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13939){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13962 = f__5522__auto__.call(null);(statearr_13962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13963);
return statearr_13962;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14045){var state_val_14046 = (state_14045[1]);if((state_val_14046 === 1))
{var inst_14022 = 0;var state_14045__$1 = (function (){var statearr_14047 = state_14045;(statearr_14047[7] = inst_14022);
return statearr_14047;
})();var statearr_14048_14069 = state_14045__$1;(statearr_14048_14069[2] = null);
(statearr_14048_14069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 2))
{var inst_14022 = (state_14045[7]);var inst_14024 = (inst_14022 < n);var state_14045__$1 = state_14045;if(cljs.core.truth_(inst_14024))
{var statearr_14049_14070 = state_14045__$1;(statearr_14049_14070[1] = 4);
} else
{var statearr_14050_14071 = state_14045__$1;(statearr_14050_14071[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 3))
{var inst_14042 = (state_14045[2]);var inst_14043 = cljs.core.async.close_BANG_.call(null,out);var state_14045__$1 = (function (){var statearr_14051 = state_14045;(statearr_14051[8] = inst_14042);
return statearr_14051;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14045__$1,inst_14043);
} else
{if((state_val_14046 === 4))
{var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14045__$1,7,ch);
} else
{if((state_val_14046 === 5))
{var state_14045__$1 = state_14045;var statearr_14052_14072 = state_14045__$1;(statearr_14052_14072[2] = null);
(statearr_14052_14072[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 6))
{var inst_14040 = (state_14045[2]);var state_14045__$1 = state_14045;var statearr_14053_14073 = state_14045__$1;(statearr_14053_14073[2] = inst_14040);
(statearr_14053_14073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 7))
{var inst_14027 = (state_14045[9]);var inst_14027__$1 = (state_14045[2]);var inst_14028 = (inst_14027__$1 == null);var inst_14029 = cljs.core.not.call(null,inst_14028);var state_14045__$1 = (function (){var statearr_14054 = state_14045;(statearr_14054[9] = inst_14027__$1);
return statearr_14054;
})();if(inst_14029)
{var statearr_14055_14074 = state_14045__$1;(statearr_14055_14074[1] = 8);
} else
{var statearr_14056_14075 = state_14045__$1;(statearr_14056_14075[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 8))
{var inst_14027 = (state_14045[9]);var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14045__$1,11,out,inst_14027);
} else
{if((state_val_14046 === 9))
{var state_14045__$1 = state_14045;var statearr_14057_14076 = state_14045__$1;(statearr_14057_14076[2] = null);
(statearr_14057_14076[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 10))
{var inst_14037 = (state_14045[2]);var state_14045__$1 = state_14045;var statearr_14058_14077 = state_14045__$1;(statearr_14058_14077[2] = inst_14037);
(statearr_14058_14077[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 11))
{var inst_14022 = (state_14045[7]);var inst_14032 = (state_14045[2]);var inst_14033 = (inst_14022 + 1);var inst_14022__$1 = inst_14033;var state_14045__$1 = (function (){var statearr_14059 = state_14045;(statearr_14059[7] = inst_14022__$1);
(statearr_14059[10] = inst_14032);
return statearr_14059;
})();var statearr_14060_14078 = state_14045__$1;(statearr_14060_14078[2] = null);
(statearr_14060_14078[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14064 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14064[0] = state_machine__5507__auto__);
(statearr_14064[1] = 1);
return statearr_14064;
});
var state_machine__5507__auto____1 = (function (state_14045){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14045);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14065){if((e14065 instanceof Object))
{var ex__5510__auto__ = e14065;var statearr_14066_14079 = state_14045;(statearr_14066_14079[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14080 = state_14045;
state_14045 = G__14080;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14045){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14067 = f__5522__auto__.call(null);(statearr_14067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14068);
return statearr_14067;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14177 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14152){var state_val_14153 = (state_14152[1]);if((state_val_14153 === 1))
{var inst_14129 = null;var state_14152__$1 = (function (){var statearr_14154 = state_14152;(statearr_14154[7] = inst_14129);
return statearr_14154;
})();var statearr_14155_14178 = state_14152__$1;(statearr_14155_14178[2] = null);
(statearr_14155_14178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14153 === 2))
{var state_14152__$1 = state_14152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14152__$1,4,ch);
} else
{if((state_val_14153 === 3))
{var inst_14149 = (state_14152[2]);var inst_14150 = cljs.core.async.close_BANG_.call(null,out);var state_14152__$1 = (function (){var statearr_14156 = state_14152;(statearr_14156[8] = inst_14149);
return statearr_14156;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14152__$1,inst_14150);
} else
{if((state_val_14153 === 4))
{var inst_14132 = (state_14152[9]);var inst_14132__$1 = (state_14152[2]);var inst_14133 = (inst_14132__$1 == null);var inst_14134 = cljs.core.not.call(null,inst_14133);var state_14152__$1 = (function (){var statearr_14157 = state_14152;(statearr_14157[9] = inst_14132__$1);
return statearr_14157;
})();if(inst_14134)
{var statearr_14158_14179 = state_14152__$1;(statearr_14158_14179[1] = 5);
} else
{var statearr_14159_14180 = state_14152__$1;(statearr_14159_14180[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14153 === 5))
{var inst_14129 = (state_14152[7]);var inst_14132 = (state_14152[9]);var inst_14136 = cljs.core._EQ_.call(null,inst_14132,inst_14129);var state_14152__$1 = state_14152;if(inst_14136)
{var statearr_14160_14181 = state_14152__$1;(statearr_14160_14181[1] = 8);
} else
{var statearr_14161_14182 = state_14152__$1;(statearr_14161_14182[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14153 === 6))
{var state_14152__$1 = state_14152;var statearr_14163_14183 = state_14152__$1;(statearr_14163_14183[2] = null);
(statearr_14163_14183[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14153 === 7))
{var inst_14147 = (state_14152[2]);var state_14152__$1 = state_14152;var statearr_14164_14184 = state_14152__$1;(statearr_14164_14184[2] = inst_14147);
(statearr_14164_14184[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14153 === 8))
{var inst_14129 = (state_14152[7]);var tmp14162 = inst_14129;var inst_14129__$1 = tmp14162;var state_14152__$1 = (function (){var statearr_14165 = state_14152;(statearr_14165[7] = inst_14129__$1);
return statearr_14165;
})();var statearr_14166_14185 = state_14152__$1;(statearr_14166_14185[2] = null);
(statearr_14166_14185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14153 === 9))
{var inst_14132 = (state_14152[9]);var state_14152__$1 = state_14152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14152__$1,11,out,inst_14132);
} else
{if((state_val_14153 === 10))
{var inst_14144 = (state_14152[2]);var state_14152__$1 = state_14152;var statearr_14167_14186 = state_14152__$1;(statearr_14167_14186[2] = inst_14144);
(statearr_14167_14186[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14153 === 11))
{var inst_14132 = (state_14152[9]);var inst_14141 = (state_14152[2]);var inst_14129 = inst_14132;var state_14152__$1 = (function (){var statearr_14168 = state_14152;(statearr_14168[7] = inst_14129);
(statearr_14168[10] = inst_14141);
return statearr_14168;
})();var statearr_14169_14187 = state_14152__$1;(statearr_14169_14187[2] = null);
(statearr_14169_14187[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14173 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14173[0] = state_machine__5507__auto__);
(statearr_14173[1] = 1);
return statearr_14173;
});
var state_machine__5507__auto____1 = (function (state_14152){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14152);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14174){if((e14174 instanceof Object))
{var ex__5510__auto__ = e14174;var statearr_14175_14188 = state_14152;(statearr_14175_14188[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14189 = state_14152;
state_14152 = G__14189;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14152){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14176 = f__5522__auto__.call(null);(statearr_14176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14177);
return statearr_14176;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14324 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14294){var state_val_14295 = (state_14294[1]);if((state_val_14295 === 1))
{var inst_14257 = (new Array(n));var inst_14258 = inst_14257;var inst_14259 = 0;var state_14294__$1 = (function (){var statearr_14296 = state_14294;(statearr_14296[7] = inst_14259);
(statearr_14296[8] = inst_14258);
return statearr_14296;
})();var statearr_14297_14325 = state_14294__$1;(statearr_14297_14325[2] = null);
(statearr_14297_14325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 2))
{var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14294__$1,4,ch);
} else
{if((state_val_14295 === 3))
{var inst_14292 = (state_14294[2]);var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14294__$1,inst_14292);
} else
{if((state_val_14295 === 4))
{var inst_14262 = (state_14294[9]);var inst_14262__$1 = (state_14294[2]);var inst_14263 = (inst_14262__$1 == null);var inst_14264 = cljs.core.not.call(null,inst_14263);var state_14294__$1 = (function (){var statearr_14298 = state_14294;(statearr_14298[9] = inst_14262__$1);
return statearr_14298;
})();if(inst_14264)
{var statearr_14299_14326 = state_14294__$1;(statearr_14299_14326[1] = 5);
} else
{var statearr_14300_14327 = state_14294__$1;(statearr_14300_14327[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 5))
{var inst_14259 = (state_14294[7]);var inst_14258 = (state_14294[8]);var inst_14267 = (state_14294[10]);var inst_14262 = (state_14294[9]);var inst_14266 = (inst_14258[inst_14259] = inst_14262);var inst_14267__$1 = (inst_14259 + 1);var inst_14268 = (inst_14267__$1 < n);var state_14294__$1 = (function (){var statearr_14301 = state_14294;(statearr_14301[11] = inst_14266);
(statearr_14301[10] = inst_14267__$1);
return statearr_14301;
})();if(cljs.core.truth_(inst_14268))
{var statearr_14302_14328 = state_14294__$1;(statearr_14302_14328[1] = 8);
} else
{var statearr_14303_14329 = state_14294__$1;(statearr_14303_14329[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 6))
{var inst_14259 = (state_14294[7]);var inst_14280 = (inst_14259 > 0);var state_14294__$1 = state_14294;if(cljs.core.truth_(inst_14280))
{var statearr_14305_14330 = state_14294__$1;(statearr_14305_14330[1] = 12);
} else
{var statearr_14306_14331 = state_14294__$1;(statearr_14306_14331[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 7))
{var inst_14290 = (state_14294[2]);var state_14294__$1 = state_14294;var statearr_14307_14332 = state_14294__$1;(statearr_14307_14332[2] = inst_14290);
(statearr_14307_14332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 8))
{var inst_14258 = (state_14294[8]);var inst_14267 = (state_14294[10]);var tmp14304 = inst_14258;var inst_14258__$1 = tmp14304;var inst_14259 = inst_14267;var state_14294__$1 = (function (){var statearr_14308 = state_14294;(statearr_14308[7] = inst_14259);
(statearr_14308[8] = inst_14258__$1);
return statearr_14308;
})();var statearr_14309_14333 = state_14294__$1;(statearr_14309_14333[2] = null);
(statearr_14309_14333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 9))
{var inst_14258 = (state_14294[8]);var inst_14272 = cljs.core.vec.call(null,inst_14258);var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14294__$1,11,out,inst_14272);
} else
{if((state_val_14295 === 10))
{var inst_14278 = (state_14294[2]);var state_14294__$1 = state_14294;var statearr_14310_14334 = state_14294__$1;(statearr_14310_14334[2] = inst_14278);
(statearr_14310_14334[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 11))
{var inst_14274 = (state_14294[2]);var inst_14275 = (new Array(n));var inst_14258 = inst_14275;var inst_14259 = 0;var state_14294__$1 = (function (){var statearr_14311 = state_14294;(statearr_14311[7] = inst_14259);
(statearr_14311[8] = inst_14258);
(statearr_14311[12] = inst_14274);
return statearr_14311;
})();var statearr_14312_14335 = state_14294__$1;(statearr_14312_14335[2] = null);
(statearr_14312_14335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 12))
{var inst_14258 = (state_14294[8]);var inst_14282 = cljs.core.vec.call(null,inst_14258);var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14294__$1,15,out,inst_14282);
} else
{if((state_val_14295 === 13))
{var state_14294__$1 = state_14294;var statearr_14313_14336 = state_14294__$1;(statearr_14313_14336[2] = null);
(statearr_14313_14336[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 14))
{var inst_14287 = (state_14294[2]);var inst_14288 = cljs.core.async.close_BANG_.call(null,out);var state_14294__$1 = (function (){var statearr_14314 = state_14294;(statearr_14314[13] = inst_14287);
return statearr_14314;
})();var statearr_14315_14337 = state_14294__$1;(statearr_14315_14337[2] = inst_14288);
(statearr_14315_14337[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 15))
{var inst_14284 = (state_14294[2]);var state_14294__$1 = state_14294;var statearr_14316_14338 = state_14294__$1;(statearr_14316_14338[2] = inst_14284);
(statearr_14316_14338[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14320[0] = state_machine__5507__auto__);
(statearr_14320[1] = 1);
return statearr_14320;
});
var state_machine__5507__auto____1 = (function (state_14294){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14294);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14321){if((e14321 instanceof Object))
{var ex__5510__auto__ = e14321;var statearr_14322_14339 = state_14294;(statearr_14322_14339[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14340 = state_14294;
state_14294 = G__14340;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14323 = f__5522__auto__.call(null);(statearr_14323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14324);
return statearr_14323;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14453){var state_val_14454 = (state_14453[1]);if((state_val_14454 === 1))
{var inst_14412 = [];var inst_14413 = inst_14412;var inst_14414 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14453__$1 = (function (){var statearr_14455 = state_14453;(statearr_14455[7] = inst_14414);
(statearr_14455[8] = inst_14413);
return statearr_14455;
})();var statearr_14456_14484 = state_14453__$1;(statearr_14456_14484[2] = null);
(statearr_14456_14484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 2))
{var state_14453__$1 = state_14453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14453__$1,4,ch);
} else
{if((state_val_14454 === 3))
{var inst_14451 = (state_14453[2]);var state_14453__$1 = state_14453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14453__$1,inst_14451);
} else
{if((state_val_14454 === 4))
{var inst_14417 = (state_14453[9]);var inst_14417__$1 = (state_14453[2]);var inst_14418 = (inst_14417__$1 == null);var inst_14419 = cljs.core.not.call(null,inst_14418);var state_14453__$1 = (function (){var statearr_14457 = state_14453;(statearr_14457[9] = inst_14417__$1);
return statearr_14457;
})();if(inst_14419)
{var statearr_14458_14485 = state_14453__$1;(statearr_14458_14485[1] = 5);
} else
{var statearr_14459_14486 = state_14453__$1;(statearr_14459_14486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 5))
{var inst_14414 = (state_14453[7]);var inst_14421 = (state_14453[10]);var inst_14417 = (state_14453[9]);var inst_14421__$1 = f.call(null,inst_14417);var inst_14422 = cljs.core._EQ_.call(null,inst_14421__$1,inst_14414);var inst_14423 = cljs.core.keyword_identical_QMARK_.call(null,inst_14414,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14424 = (inst_14422) || (inst_14423);var state_14453__$1 = (function (){var statearr_14460 = state_14453;(statearr_14460[10] = inst_14421__$1);
return statearr_14460;
})();if(cljs.core.truth_(inst_14424))
{var statearr_14461_14487 = state_14453__$1;(statearr_14461_14487[1] = 8);
} else
{var statearr_14462_14488 = state_14453__$1;(statearr_14462_14488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 6))
{var inst_14413 = (state_14453[8]);var inst_14438 = inst_14413.length;var inst_14439 = (inst_14438 > 0);var state_14453__$1 = state_14453;if(cljs.core.truth_(inst_14439))
{var statearr_14464_14489 = state_14453__$1;(statearr_14464_14489[1] = 12);
} else
{var statearr_14465_14490 = state_14453__$1;(statearr_14465_14490[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 7))
{var inst_14449 = (state_14453[2]);var state_14453__$1 = state_14453;var statearr_14466_14491 = state_14453__$1;(statearr_14466_14491[2] = inst_14449);
(statearr_14466_14491[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 8))
{var inst_14413 = (state_14453[8]);var inst_14421 = (state_14453[10]);var inst_14417 = (state_14453[9]);var inst_14426 = inst_14413.push(inst_14417);var tmp14463 = inst_14413;var inst_14413__$1 = tmp14463;var inst_14414 = inst_14421;var state_14453__$1 = (function (){var statearr_14467 = state_14453;(statearr_14467[7] = inst_14414);
(statearr_14467[8] = inst_14413__$1);
(statearr_14467[11] = inst_14426);
return statearr_14467;
})();var statearr_14468_14492 = state_14453__$1;(statearr_14468_14492[2] = null);
(statearr_14468_14492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 9))
{var inst_14413 = (state_14453[8]);var inst_14429 = cljs.core.vec.call(null,inst_14413);var state_14453__$1 = state_14453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14453__$1,11,out,inst_14429);
} else
{if((state_val_14454 === 10))
{var inst_14436 = (state_14453[2]);var state_14453__$1 = state_14453;var statearr_14469_14493 = state_14453__$1;(statearr_14469_14493[2] = inst_14436);
(statearr_14469_14493[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 11))
{var inst_14421 = (state_14453[10]);var inst_14417 = (state_14453[9]);var inst_14431 = (state_14453[2]);var inst_14432 = [];var inst_14433 = inst_14432.push(inst_14417);var inst_14413 = inst_14432;var inst_14414 = inst_14421;var state_14453__$1 = (function (){var statearr_14470 = state_14453;(statearr_14470[7] = inst_14414);
(statearr_14470[8] = inst_14413);
(statearr_14470[12] = inst_14433);
(statearr_14470[13] = inst_14431);
return statearr_14470;
})();var statearr_14471_14494 = state_14453__$1;(statearr_14471_14494[2] = null);
(statearr_14471_14494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 12))
{var inst_14413 = (state_14453[8]);var inst_14441 = cljs.core.vec.call(null,inst_14413);var state_14453__$1 = state_14453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14453__$1,15,out,inst_14441);
} else
{if((state_val_14454 === 13))
{var state_14453__$1 = state_14453;var statearr_14472_14495 = state_14453__$1;(statearr_14472_14495[2] = null);
(statearr_14472_14495[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 14))
{var inst_14446 = (state_14453[2]);var inst_14447 = cljs.core.async.close_BANG_.call(null,out);var state_14453__$1 = (function (){var statearr_14473 = state_14453;(statearr_14473[14] = inst_14446);
return statearr_14473;
})();var statearr_14474_14496 = state_14453__$1;(statearr_14474_14496[2] = inst_14447);
(statearr_14474_14496[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14454 === 15))
{var inst_14443 = (state_14453[2]);var state_14453__$1 = state_14453;var statearr_14475_14497 = state_14453__$1;(statearr_14475_14497[2] = inst_14443);
(statearr_14475_14497[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14479[0] = state_machine__5507__auto__);
(statearr_14479[1] = 1);
return statearr_14479;
});
var state_machine__5507__auto____1 = (function (state_14453){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14480){if((e14480 instanceof Object))
{var ex__5510__auto__ = e14480;var statearr_14481_14498 = state_14453;(statearr_14481_14498[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14499 = state_14453;
state_14453 = G__14499;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14453){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14482 = f__5522__auto__.call(null);(statearr_14482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14483);
return statearr_14482;
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

//# sourceMappingURL=async.js.map