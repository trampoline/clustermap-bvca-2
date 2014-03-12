// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25074 = (function (f,fn_handler,meta25075){
this.f = f;
this.fn_handler = fn_handler;
this.meta25075 = meta25075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25074.cljs$lang$type = true;
cljs.core.async.t25074.cljs$lang$ctorStr = "cljs.core.async/t25074";
cljs.core.async.t25074.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25074");
});
cljs.core.async.t25074.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25076){var self__ = this;
var _25076__$1 = this;return self__.meta25075;
});
cljs.core.async.t25074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25076,meta25075__$1){var self__ = this;
var _25076__$1 = this;return (new cljs.core.async.t25074(self__.f,self__.fn_handler,meta25075__$1));
});
cljs.core.async.__GT_t25074 = (function __GT_t25074(f__$1,fn_handler__$1,meta25075){return (new cljs.core.async.t25074(f__$1,fn_handler__$1,meta25075));
});
}
return (new cljs.core.async.t25074(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25078 = buff;if(G__25078)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__25078.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25078);
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
{var val_25079 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25079);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25079);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___25080 = n;var x_25081 = 0;while(true){
if((x_25081 < n__4289__auto___25080))
{(a[x_25081] = 0);
{
var G__25082 = (x_25081 + 1);
x_25081 = G__25082;
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
var G__25083 = (i + 1);
i = G__25083;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25087 = (function (flag,alt_flag,meta25088){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25088 = meta25088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25087.cljs$lang$type = true;
cljs.core.async.t25087.cljs$lang$ctorStr = "cljs.core.async/t25087";
cljs.core.async.t25087.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25087");
});
cljs.core.async.t25087.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25089){var self__ = this;
var _25089__$1 = this;return self__.meta25088;
});
cljs.core.async.t25087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25089,meta25088__$1){var self__ = this;
var _25089__$1 = this;return (new cljs.core.async.t25087(self__.flag,self__.alt_flag,meta25088__$1));
});
cljs.core.async.__GT_t25087 = (function __GT_t25087(flag__$1,alt_flag__$1,meta25088){return (new cljs.core.async.t25087(flag__$1,alt_flag__$1,meta25088));
});
}
return (new cljs.core.async.t25087(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25093 = (function (cb,flag,alt_handler,meta25094){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25094 = meta25094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25093.cljs$lang$type = true;
cljs.core.async.t25093.cljs$lang$ctorStr = "cljs.core.async/t25093";
cljs.core.async.t25093.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25093");
});
cljs.core.async.t25093.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25095){var self__ = this;
var _25095__$1 = this;return self__.meta25094;
});
cljs.core.async.t25093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25095,meta25094__$1){var self__ = this;
var _25095__$1 = this;return (new cljs.core.async.t25093(self__.cb,self__.flag,self__.alt_handler,meta25094__$1));
});
cljs.core.async.__GT_t25093 = (function __GT_t25093(cb__$1,flag__$1,alt_handler__$1,meta25094){return (new cljs.core.async.t25093(cb__$1,flag__$1,alt_handler__$1,meta25094));
});
}
return (new cljs.core.async.t25093(cb,flag,alt_handler,null));
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
return (function (p1__25096_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25096_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25097 = (i + 1);
i = G__25097;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
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
var alts_BANG___delegate = function (ports,p__25098){var map__25100 = p__25098;var map__25100__$1 = ((cljs.core.seq_QMARK_.call(null,map__25100))?cljs.core.apply.call(null,cljs.core.hash_map,map__25100):map__25100);var opts = map__25100__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25098 = null;if (arguments.length > 1) {
  p__25098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25098);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25101){
var ports = cljs.core.first(arglist__25101);
var p__25098 = cljs.core.rest(arglist__25101);
return alts_BANG___delegate(ports,p__25098);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25109 = (function (ch,f,map_LT_,meta25110){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25110 = meta25110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25109.cljs$lang$type = true;
cljs.core.async.t25109.cljs$lang$ctorStr = "cljs.core.async/t25109";
cljs.core.async.t25109.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25109");
});
cljs.core.async.t25109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25112 = (function (fn1,_,meta25110,ch,f,map_LT_,meta25113){
this.fn1 = fn1;
this._ = _;
this.meta25110 = meta25110;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25113 = meta25113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25112.cljs$lang$type = true;
cljs.core.async.t25112.cljs$lang$ctorStr = "cljs.core.async/t25112";
cljs.core.async.t25112.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25112");
});
cljs.core.async.t25112.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25112.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25102_SHARP_){return f1.call(null,(((p1__25102_SHARP_ == null))?null:self__.f.call(null,p1__25102_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25114){var self__ = this;
var _25114__$1 = this;return self__.meta25113;
});
cljs.core.async.t25112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25114,meta25113__$1){var self__ = this;
var _25114__$1 = this;return (new cljs.core.async.t25112(self__.fn1,self__._,self__.meta25110,self__.ch,self__.f,self__.map_LT_,meta25113__$1));
});
cljs.core.async.__GT_t25112 = (function __GT_t25112(fn1__$1,___$2,meta25110__$1,ch__$2,f__$2,map_LT___$2,meta25113){return (new cljs.core.async.t25112(fn1__$1,___$2,meta25110__$1,ch__$2,f__$2,map_LT___$2,meta25113));
});
}
return (new cljs.core.async.t25112(fn1,___$1,self__.meta25110,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25109.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25111){var self__ = this;
var _25111__$1 = this;return self__.meta25110;
});
cljs.core.async.t25109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25111,meta25110__$1){var self__ = this;
var _25111__$1 = this;return (new cljs.core.async.t25109(self__.ch,self__.f,self__.map_LT_,meta25110__$1));
});
cljs.core.async.__GT_t25109 = (function __GT_t25109(ch__$1,f__$1,map_LT___$1,meta25110){return (new cljs.core.async.t25109(ch__$1,f__$1,map_LT___$1,meta25110));
});
}
return (new cljs.core.async.t25109(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25118 = (function (ch,f,map_GT_,meta25119){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25119 = meta25119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25118.cljs$lang$type = true;
cljs.core.async.t25118.cljs$lang$ctorStr = "cljs.core.async/t25118";
cljs.core.async.t25118.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25118");
});
cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25120){var self__ = this;
var _25120__$1 = this;return self__.meta25119;
});
cljs.core.async.t25118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25120,meta25119__$1){var self__ = this;
var _25120__$1 = this;return (new cljs.core.async.t25118(self__.ch,self__.f,self__.map_GT_,meta25119__$1));
});
cljs.core.async.__GT_t25118 = (function __GT_t25118(ch__$1,f__$1,map_GT___$1,meta25119){return (new cljs.core.async.t25118(ch__$1,f__$1,map_GT___$1,meta25119));
});
}
return (new cljs.core.async.t25118(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25124 = (function (ch,p,filter_GT_,meta25125){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25125 = meta25125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25124.cljs$lang$type = true;
cljs.core.async.t25124.cljs$lang$ctorStr = "cljs.core.async/t25124";
cljs.core.async.t25124.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25124");
});
cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25126){var self__ = this;
var _25126__$1 = this;return self__.meta25125;
});
cljs.core.async.t25124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25126,meta25125__$1){var self__ = this;
var _25126__$1 = this;return (new cljs.core.async.t25124(self__.ch,self__.p,self__.filter_GT_,meta25125__$1));
});
cljs.core.async.__GT_t25124 = (function __GT_t25124(ch__$1,p__$1,filter_GT___$1,meta25125){return (new cljs.core.async.t25124(ch__$1,p__$1,filter_GT___$1,meta25125));
});
}
return (new cljs.core.async.t25124(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___25209 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25188){var state_val_25189 = (state_25188[1]);if((state_val_25189 === 1))
{var state_25188__$1 = state_25188;var statearr_25190_25210 = state_25188__$1;(statearr_25190_25210[2] = null);
(statearr_25190_25210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25189 === 2))
{var state_25188__$1 = state_25188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25188__$1,4,ch);
} else
{if((state_val_25189 === 3))
{var inst_25186 = (state_25188[2]);var state_25188__$1 = state_25188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else
{if((state_val_25189 === 4))
{var inst_25170 = (state_25188[7]);var inst_25170__$1 = (state_25188[2]);var inst_25171 = (inst_25170__$1 == null);var state_25188__$1 = (function (){var statearr_25191 = state_25188;(statearr_25191[7] = inst_25170__$1);
return statearr_25191;
})();if(cljs.core.truth_(inst_25171))
{var statearr_25192_25211 = state_25188__$1;(statearr_25192_25211[1] = 5);
} else
{var statearr_25193_25212 = state_25188__$1;(statearr_25193_25212[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25189 === 5))
{var inst_25173 = cljs.core.async.close_BANG_.call(null,out);var state_25188__$1 = state_25188;var statearr_25194_25213 = state_25188__$1;(statearr_25194_25213[2] = inst_25173);
(statearr_25194_25213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25189 === 6))
{var inst_25170 = (state_25188[7]);var inst_25175 = p.call(null,inst_25170);var state_25188__$1 = state_25188;if(cljs.core.truth_(inst_25175))
{var statearr_25195_25214 = state_25188__$1;(statearr_25195_25214[1] = 8);
} else
{var statearr_25196_25215 = state_25188__$1;(statearr_25196_25215[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25189 === 7))
{var inst_25184 = (state_25188[2]);var state_25188__$1 = state_25188;var statearr_25197_25216 = state_25188__$1;(statearr_25197_25216[2] = inst_25184);
(statearr_25197_25216[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25189 === 8))
{var inst_25170 = (state_25188[7]);var state_25188__$1 = state_25188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25188__$1,11,out,inst_25170);
} else
{if((state_val_25189 === 9))
{var state_25188__$1 = state_25188;var statearr_25198_25217 = state_25188__$1;(statearr_25198_25217[2] = null);
(statearr_25198_25217[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25189 === 10))
{var inst_25181 = (state_25188[2]);var state_25188__$1 = (function (){var statearr_25199 = state_25188;(statearr_25199[8] = inst_25181);
return statearr_25199;
})();var statearr_25200_25218 = state_25188__$1;(statearr_25200_25218[2] = null);
(statearr_25200_25218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25189 === 11))
{var inst_25178 = (state_25188[2]);var state_25188__$1 = state_25188;var statearr_25201_25219 = state_25188__$1;(statearr_25201_25219[2] = inst_25178);
(statearr_25201_25219[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25205 = [null,null,null,null,null,null,null,null,null];(statearr_25205[0] = state_machine__5548__auto__);
(statearr_25205[1] = 1);
return statearr_25205;
});
var state_machine__5548__auto____1 = (function (state_25188){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25188);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25206){if((e25206 instanceof Object))
{var ex__5551__auto__ = e25206;var statearr_25207_25220 = state_25188;(statearr_25207_25220[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25221 = state_25188;
state_25188 = G__25221;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25208 = f__5563__auto__.call(null);(statearr_25208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25209);
return statearr_25208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25373){var state_val_25374 = (state_25373[1]);if((state_val_25374 === 1))
{var state_25373__$1 = state_25373;var statearr_25375_25412 = state_25373__$1;(statearr_25375_25412[2] = null);
(statearr_25375_25412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 2))
{var state_25373__$1 = state_25373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25373__$1,4,in$);
} else
{if((state_val_25374 === 3))
{var inst_25371 = (state_25373[2]);var state_25373__$1 = state_25373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25373__$1,inst_25371);
} else
{if((state_val_25374 === 4))
{var inst_25319 = (state_25373[7]);var inst_25319__$1 = (state_25373[2]);var inst_25320 = (inst_25319__$1 == null);var state_25373__$1 = (function (){var statearr_25376 = state_25373;(statearr_25376[7] = inst_25319__$1);
return statearr_25376;
})();if(cljs.core.truth_(inst_25320))
{var statearr_25377_25413 = state_25373__$1;(statearr_25377_25413[1] = 5);
} else
{var statearr_25378_25414 = state_25373__$1;(statearr_25378_25414[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 5))
{var inst_25322 = cljs.core.async.close_BANG_.call(null,out);var state_25373__$1 = state_25373;var statearr_25379_25415 = state_25373__$1;(statearr_25379_25415[2] = inst_25322);
(statearr_25379_25415[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 6))
{var inst_25319 = (state_25373[7]);var inst_25324 = f.call(null,inst_25319);var inst_25329 = cljs.core.seq.call(null,inst_25324);var inst_25330 = inst_25329;var inst_25331 = null;var inst_25332 = 0;var inst_25333 = 0;var state_25373__$1 = (function (){var statearr_25380 = state_25373;(statearr_25380[8] = inst_25332);
(statearr_25380[9] = inst_25333);
(statearr_25380[10] = inst_25330);
(statearr_25380[11] = inst_25331);
return statearr_25380;
})();var statearr_25381_25416 = state_25373__$1;(statearr_25381_25416[2] = null);
(statearr_25381_25416[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 7))
{var inst_25369 = (state_25373[2]);var state_25373__$1 = state_25373;var statearr_25382_25417 = state_25373__$1;(statearr_25382_25417[2] = inst_25369);
(statearr_25382_25417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 8))
{var inst_25332 = (state_25373[8]);var inst_25333 = (state_25373[9]);var inst_25335 = (inst_25333 < inst_25332);var inst_25336 = inst_25335;var state_25373__$1 = state_25373;if(cljs.core.truth_(inst_25336))
{var statearr_25383_25418 = state_25373__$1;(statearr_25383_25418[1] = 10);
} else
{var statearr_25384_25419 = state_25373__$1;(statearr_25384_25419[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 9))
{var inst_25366 = (state_25373[2]);var state_25373__$1 = (function (){var statearr_25385 = state_25373;(statearr_25385[12] = inst_25366);
return statearr_25385;
})();var statearr_25386_25420 = state_25373__$1;(statearr_25386_25420[2] = null);
(statearr_25386_25420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 10))
{var inst_25333 = (state_25373[9]);var inst_25331 = (state_25373[11]);var inst_25338 = cljs.core._nth.call(null,inst_25331,inst_25333);var state_25373__$1 = state_25373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25373__$1,13,out,inst_25338);
} else
{if((state_val_25374 === 11))
{var inst_25330 = (state_25373[10]);var inst_25344 = (state_25373[13]);var inst_25344__$1 = cljs.core.seq.call(null,inst_25330);var state_25373__$1 = (function (){var statearr_25390 = state_25373;(statearr_25390[13] = inst_25344__$1);
return statearr_25390;
})();if(inst_25344__$1)
{var statearr_25391_25421 = state_25373__$1;(statearr_25391_25421[1] = 14);
} else
{var statearr_25392_25422 = state_25373__$1;(statearr_25392_25422[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 12))
{var inst_25364 = (state_25373[2]);var state_25373__$1 = state_25373;var statearr_25393_25423 = state_25373__$1;(statearr_25393_25423[2] = inst_25364);
(statearr_25393_25423[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 13))
{var inst_25332 = (state_25373[8]);var inst_25333 = (state_25373[9]);var inst_25330 = (state_25373[10]);var inst_25331 = (state_25373[11]);var inst_25340 = (state_25373[2]);var inst_25341 = (inst_25333 + 1);var tmp25387 = inst_25332;var tmp25388 = inst_25330;var tmp25389 = inst_25331;var inst_25330__$1 = tmp25388;var inst_25331__$1 = tmp25389;var inst_25332__$1 = tmp25387;var inst_25333__$1 = inst_25341;var state_25373__$1 = (function (){var statearr_25394 = state_25373;(statearr_25394[8] = inst_25332__$1);
(statearr_25394[9] = inst_25333__$1);
(statearr_25394[10] = inst_25330__$1);
(statearr_25394[11] = inst_25331__$1);
(statearr_25394[14] = inst_25340);
return statearr_25394;
})();var statearr_25395_25424 = state_25373__$1;(statearr_25395_25424[2] = null);
(statearr_25395_25424[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 14))
{var inst_25344 = (state_25373[13]);var inst_25346 = cljs.core.chunked_seq_QMARK_.call(null,inst_25344);var state_25373__$1 = state_25373;if(inst_25346)
{var statearr_25396_25425 = state_25373__$1;(statearr_25396_25425[1] = 17);
} else
{var statearr_25397_25426 = state_25373__$1;(statearr_25397_25426[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 15))
{var state_25373__$1 = state_25373;var statearr_25398_25427 = state_25373__$1;(statearr_25398_25427[2] = null);
(statearr_25398_25427[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 16))
{var inst_25362 = (state_25373[2]);var state_25373__$1 = state_25373;var statearr_25399_25428 = state_25373__$1;(statearr_25399_25428[2] = inst_25362);
(statearr_25399_25428[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 17))
{var inst_25344 = (state_25373[13]);var inst_25348 = cljs.core.chunk_first.call(null,inst_25344);var inst_25349 = cljs.core.chunk_rest.call(null,inst_25344);var inst_25350 = cljs.core.count.call(null,inst_25348);var inst_25330 = inst_25349;var inst_25331 = inst_25348;var inst_25332 = inst_25350;var inst_25333 = 0;var state_25373__$1 = (function (){var statearr_25400 = state_25373;(statearr_25400[8] = inst_25332);
(statearr_25400[9] = inst_25333);
(statearr_25400[10] = inst_25330);
(statearr_25400[11] = inst_25331);
return statearr_25400;
})();var statearr_25401_25429 = state_25373__$1;(statearr_25401_25429[2] = null);
(statearr_25401_25429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 18))
{var inst_25344 = (state_25373[13]);var inst_25353 = cljs.core.first.call(null,inst_25344);var state_25373__$1 = state_25373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25373__$1,20,out,inst_25353);
} else
{if((state_val_25374 === 19))
{var inst_25359 = (state_25373[2]);var state_25373__$1 = state_25373;var statearr_25402_25430 = state_25373__$1;(statearr_25402_25430[2] = inst_25359);
(statearr_25402_25430[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25374 === 20))
{var inst_25344 = (state_25373[13]);var inst_25355 = (state_25373[2]);var inst_25356 = cljs.core.next.call(null,inst_25344);var inst_25330 = inst_25356;var inst_25331 = null;var inst_25332 = 0;var inst_25333 = 0;var state_25373__$1 = (function (){var statearr_25403 = state_25373;(statearr_25403[8] = inst_25332);
(statearr_25403[9] = inst_25333);
(statearr_25403[10] = inst_25330);
(statearr_25403[11] = inst_25331);
(statearr_25403[15] = inst_25355);
return statearr_25403;
})();var statearr_25404_25431 = state_25373__$1;(statearr_25404_25431[2] = null);
(statearr_25404_25431[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25408[0] = state_machine__5548__auto__);
(statearr_25408[1] = 1);
return statearr_25408;
});
var state_machine__5548__auto____1 = (function (state_25373){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25373);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25409){if((e25409 instanceof Object))
{var ex__5551__auto__ = e25409;var statearr_25410_25432 = state_25373;(statearr_25410_25432[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25433 = state_25373;
state_25373 = G__25433;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25373){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25411 = f__5563__auto__.call(null);(statearr_25411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___25514 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25493){var state_val_25494 = (state_25493[1]);if((state_val_25494 === 1))
{var state_25493__$1 = state_25493;var statearr_25495_25515 = state_25493__$1;(statearr_25495_25515[2] = null);
(statearr_25495_25515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25494 === 2))
{var state_25493__$1 = state_25493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25493__$1,4,from);
} else
{if((state_val_25494 === 3))
{var inst_25491 = (state_25493[2]);var state_25493__$1 = state_25493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25493__$1,inst_25491);
} else
{if((state_val_25494 === 4))
{var inst_25476 = (state_25493[7]);var inst_25476__$1 = (state_25493[2]);var inst_25477 = (inst_25476__$1 == null);var state_25493__$1 = (function (){var statearr_25496 = state_25493;(statearr_25496[7] = inst_25476__$1);
return statearr_25496;
})();if(cljs.core.truth_(inst_25477))
{var statearr_25497_25516 = state_25493__$1;(statearr_25497_25516[1] = 5);
} else
{var statearr_25498_25517 = state_25493__$1;(statearr_25498_25517[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25494 === 5))
{var state_25493__$1 = state_25493;if(cljs.core.truth_(close_QMARK_))
{var statearr_25499_25518 = state_25493__$1;(statearr_25499_25518[1] = 8);
} else
{var statearr_25500_25519 = state_25493__$1;(statearr_25500_25519[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25494 === 6))
{var inst_25476 = (state_25493[7]);var state_25493__$1 = state_25493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25493__$1,11,to,inst_25476);
} else
{if((state_val_25494 === 7))
{var inst_25489 = (state_25493[2]);var state_25493__$1 = state_25493;var statearr_25501_25520 = state_25493__$1;(statearr_25501_25520[2] = inst_25489);
(statearr_25501_25520[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25494 === 8))
{var inst_25480 = cljs.core.async.close_BANG_.call(null,to);var state_25493__$1 = state_25493;var statearr_25502_25521 = state_25493__$1;(statearr_25502_25521[2] = inst_25480);
(statearr_25502_25521[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25494 === 9))
{var state_25493__$1 = state_25493;var statearr_25503_25522 = state_25493__$1;(statearr_25503_25522[2] = null);
(statearr_25503_25522[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25494 === 10))
{var inst_25483 = (state_25493[2]);var state_25493__$1 = state_25493;var statearr_25504_25523 = state_25493__$1;(statearr_25504_25523[2] = inst_25483);
(statearr_25504_25523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25494 === 11))
{var inst_25486 = (state_25493[2]);var state_25493__$1 = (function (){var statearr_25505 = state_25493;(statearr_25505[8] = inst_25486);
return statearr_25505;
})();var statearr_25506_25524 = state_25493__$1;(statearr_25506_25524[2] = null);
(statearr_25506_25524[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25510 = [null,null,null,null,null,null,null,null,null];(statearr_25510[0] = state_machine__5548__auto__);
(statearr_25510[1] = 1);
return statearr_25510;
});
var state_machine__5548__auto____1 = (function (state_25493){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25493);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25511){if((e25511 instanceof Object))
{var ex__5551__auto__ = e25511;var statearr_25512_25525 = state_25493;(statearr_25512_25525[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25493);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25526 = state_25493;
state_25493 = G__25526;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25493){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25513 = f__5563__auto__.call(null);(statearr_25513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25514);
return statearr_25513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___25613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25591){var state_val_25592 = (state_25591[1]);if((state_val_25592 === 1))
{var state_25591__$1 = state_25591;var statearr_25593_25614 = state_25591__$1;(statearr_25593_25614[2] = null);
(statearr_25593_25614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 2))
{var state_25591__$1 = state_25591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25591__$1,4,ch);
} else
{if((state_val_25592 === 3))
{var inst_25589 = (state_25591[2]);var state_25591__$1 = state_25591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25591__$1,inst_25589);
} else
{if((state_val_25592 === 4))
{var inst_25572 = (state_25591[7]);var inst_25572__$1 = (state_25591[2]);var inst_25573 = (inst_25572__$1 == null);var state_25591__$1 = (function (){var statearr_25594 = state_25591;(statearr_25594[7] = inst_25572__$1);
return statearr_25594;
})();if(cljs.core.truth_(inst_25573))
{var statearr_25595_25615 = state_25591__$1;(statearr_25595_25615[1] = 5);
} else
{var statearr_25596_25616 = state_25591__$1;(statearr_25596_25616[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 5))
{var inst_25575 = cljs.core.async.close_BANG_.call(null,tc);var inst_25576 = cljs.core.async.close_BANG_.call(null,fc);var state_25591__$1 = (function (){var statearr_25597 = state_25591;(statearr_25597[8] = inst_25575);
return statearr_25597;
})();var statearr_25598_25617 = state_25591__$1;(statearr_25598_25617[2] = inst_25576);
(statearr_25598_25617[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 6))
{var inst_25572 = (state_25591[7]);var inst_25578 = p.call(null,inst_25572);var state_25591__$1 = state_25591;if(cljs.core.truth_(inst_25578))
{var statearr_25599_25618 = state_25591__$1;(statearr_25599_25618[1] = 9);
} else
{var statearr_25600_25619 = state_25591__$1;(statearr_25600_25619[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 7))
{var inst_25587 = (state_25591[2]);var state_25591__$1 = state_25591;var statearr_25601_25620 = state_25591__$1;(statearr_25601_25620[2] = inst_25587);
(statearr_25601_25620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 8))
{var inst_25584 = (state_25591[2]);var state_25591__$1 = (function (){var statearr_25602 = state_25591;(statearr_25602[9] = inst_25584);
return statearr_25602;
})();var statearr_25603_25621 = state_25591__$1;(statearr_25603_25621[2] = null);
(statearr_25603_25621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 9))
{var state_25591__$1 = state_25591;var statearr_25604_25622 = state_25591__$1;(statearr_25604_25622[2] = tc);
(statearr_25604_25622[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 10))
{var state_25591__$1 = state_25591;var statearr_25605_25623 = state_25591__$1;(statearr_25605_25623[2] = fc);
(statearr_25605_25623[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25592 === 11))
{var inst_25572 = (state_25591[7]);var inst_25582 = (state_25591[2]);var state_25591__$1 = state_25591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25591__$1,8,inst_25582,inst_25572);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25609 = [null,null,null,null,null,null,null,null,null,null];(statearr_25609[0] = state_machine__5548__auto__);
(statearr_25609[1] = 1);
return statearr_25609;
});
var state_machine__5548__auto____1 = (function (state_25591){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25610){if((e25610 instanceof Object))
{var ex__5551__auto__ = e25610;var statearr_25611_25624 = state_25591;(statearr_25611_25624[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25625 = state_25591;
state_25591 = G__25625;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25591){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25612 = f__5563__auto__.call(null);(statearr_25612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25613);
return statearr_25612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25672){var state_val_25673 = (state_25672[1]);if((state_val_25673 === 7))
{var inst_25668 = (state_25672[2]);var state_25672__$1 = state_25672;var statearr_25674_25690 = state_25672__$1;(statearr_25674_25690[2] = inst_25668);
(statearr_25674_25690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25673 === 6))
{var inst_25658 = (state_25672[7]);var inst_25661 = (state_25672[8]);var inst_25665 = f.call(null,inst_25658,inst_25661);var inst_25658__$1 = inst_25665;var state_25672__$1 = (function (){var statearr_25675 = state_25672;(statearr_25675[7] = inst_25658__$1);
return statearr_25675;
})();var statearr_25676_25691 = state_25672__$1;(statearr_25676_25691[2] = null);
(statearr_25676_25691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25673 === 5))
{var inst_25658 = (state_25672[7]);var state_25672__$1 = state_25672;var statearr_25677_25692 = state_25672__$1;(statearr_25677_25692[2] = inst_25658);
(statearr_25677_25692[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25673 === 4))
{var inst_25661 = (state_25672[8]);var inst_25661__$1 = (state_25672[2]);var inst_25662 = (inst_25661__$1 == null);var state_25672__$1 = (function (){var statearr_25678 = state_25672;(statearr_25678[8] = inst_25661__$1);
return statearr_25678;
})();if(cljs.core.truth_(inst_25662))
{var statearr_25679_25693 = state_25672__$1;(statearr_25679_25693[1] = 5);
} else
{var statearr_25680_25694 = state_25672__$1;(statearr_25680_25694[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25673 === 3))
{var inst_25670 = (state_25672[2]);var state_25672__$1 = state_25672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25672__$1,inst_25670);
} else
{if((state_val_25673 === 2))
{var state_25672__$1 = state_25672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25672__$1,4,ch);
} else
{if((state_val_25673 === 1))
{var inst_25658 = init;var state_25672__$1 = (function (){var statearr_25681 = state_25672;(statearr_25681[7] = inst_25658);
return statearr_25681;
})();var statearr_25682_25695 = state_25672__$1;(statearr_25682_25695[2] = null);
(statearr_25682_25695[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25686 = [null,null,null,null,null,null,null,null,null];(statearr_25686[0] = state_machine__5548__auto__);
(statearr_25686[1] = 1);
return statearr_25686;
});
var state_machine__5548__auto____1 = (function (state_25672){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25672);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25687){if((e25687 instanceof Object))
{var ex__5551__auto__ = e25687;var statearr_25688_25696 = state_25672;(statearr_25688_25696[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25697 = state_25672;
state_25672 = G__25697;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25672){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25689 = f__5563__auto__.call(null);(statearr_25689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25759){var state_val_25760 = (state_25759[1]);if((state_val_25760 === 1))
{var inst_25739 = cljs.core.seq.call(null,coll);var inst_25740 = inst_25739;var state_25759__$1 = (function (){var statearr_25761 = state_25759;(statearr_25761[7] = inst_25740);
return statearr_25761;
})();var statearr_25762_25780 = state_25759__$1;(statearr_25762_25780[2] = null);
(statearr_25762_25780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25760 === 2))
{var inst_25740 = (state_25759[7]);var state_25759__$1 = state_25759;if(cljs.core.truth_(inst_25740))
{var statearr_25763_25781 = state_25759__$1;(statearr_25763_25781[1] = 4);
} else
{var statearr_25764_25782 = state_25759__$1;(statearr_25764_25782[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25760 === 3))
{var inst_25757 = (state_25759[2]);var state_25759__$1 = state_25759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25759__$1,inst_25757);
} else
{if((state_val_25760 === 4))
{var inst_25740 = (state_25759[7]);var inst_25743 = cljs.core.first.call(null,inst_25740);var state_25759__$1 = state_25759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25759__$1,7,ch,inst_25743);
} else
{if((state_val_25760 === 5))
{var state_25759__$1 = state_25759;if(cljs.core.truth_(close_QMARK_))
{var statearr_25765_25783 = state_25759__$1;(statearr_25765_25783[1] = 8);
} else
{var statearr_25766_25784 = state_25759__$1;(statearr_25766_25784[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25760 === 6))
{var inst_25755 = (state_25759[2]);var state_25759__$1 = state_25759;var statearr_25767_25785 = state_25759__$1;(statearr_25767_25785[2] = inst_25755);
(statearr_25767_25785[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25760 === 7))
{var inst_25740 = (state_25759[7]);var inst_25745 = (state_25759[2]);var inst_25746 = cljs.core.next.call(null,inst_25740);var inst_25740__$1 = inst_25746;var state_25759__$1 = (function (){var statearr_25768 = state_25759;(statearr_25768[7] = inst_25740__$1);
(statearr_25768[8] = inst_25745);
return statearr_25768;
})();var statearr_25769_25786 = state_25759__$1;(statearr_25769_25786[2] = null);
(statearr_25769_25786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25760 === 8))
{var inst_25750 = cljs.core.async.close_BANG_.call(null,ch);var state_25759__$1 = state_25759;var statearr_25770_25787 = state_25759__$1;(statearr_25770_25787[2] = inst_25750);
(statearr_25770_25787[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25760 === 9))
{var state_25759__$1 = state_25759;var statearr_25771_25788 = state_25759__$1;(statearr_25771_25788[2] = null);
(statearr_25771_25788[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25760 === 10))
{var inst_25753 = (state_25759[2]);var state_25759__$1 = state_25759;var statearr_25772_25789 = state_25759__$1;(statearr_25772_25789[2] = inst_25753);
(statearr_25772_25789[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25776 = [null,null,null,null,null,null,null,null,null];(statearr_25776[0] = state_machine__5548__auto__);
(statearr_25776[1] = 1);
return statearr_25776;
});
var state_machine__5548__auto____1 = (function (state_25759){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25777){if((e25777 instanceof Object))
{var ex__5551__auto__ = e25777;var statearr_25778_25790 = state_25759;(statearr_25778_25790[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25791 = state_25759;
state_25759 = G__25791;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25759){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25779 = f__5563__auto__.call(null);(statearr_25779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj25793 = {};return obj25793;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25795 = {};return obj25795;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26019 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26019 = (function (cs,ch,mult,meta26020){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26020 = meta26020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26019.cljs$lang$type = true;
cljs.core.async.t26019.cljs$lang$ctorStr = "cljs.core.async/t26019";
cljs.core.async.t26019.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26019");
});})(cs))
;
cljs.core.async.t26019.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26019.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26019.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26019.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26019.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26019.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26021){var self__ = this;
var _26021__$1 = this;return self__.meta26020;
});})(cs))
;
cljs.core.async.t26019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26021,meta26020__$1){var self__ = this;
var _26021__$1 = this;return (new cljs.core.async.t26019(self__.cs,self__.ch,self__.mult,meta26020__$1));
});})(cs))
;
cljs.core.async.__GT_t26019 = ((function (cs){
return (function __GT_t26019(cs__$1,ch__$1,mult__$1,meta26020){return (new cljs.core.async.t26019(cs__$1,ch__$1,mult__$1,meta26020));
});})(cs))
;
}
return (new cljs.core.async.t26019(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___26242 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26156){var state_val_26157 = (state_26156[1]);if((state_val_26157 === 32))
{var inst_26100 = (state_26156[7]);var inst_26024 = (state_26156[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26156,31,Object,null,30);var inst_26107 = cljs.core.async.put_BANG_.call(null,inst_26100,inst_26024,done);var state_26156__$1 = state_26156;var statearr_26158_26243 = state_26156__$1;(statearr_26158_26243[2] = inst_26107);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 1))
{var state_26156__$1 = state_26156;var statearr_26159_26244 = state_26156__$1;(statearr_26159_26244[2] = null);
(statearr_26159_26244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 33))
{var inst_26113 = (state_26156[9]);var inst_26115 = cljs.core.chunked_seq_QMARK_.call(null,inst_26113);var state_26156__$1 = state_26156;if(inst_26115)
{var statearr_26160_26245 = state_26156__$1;(statearr_26160_26245[1] = 36);
} else
{var statearr_26161_26246 = state_26156__$1;(statearr_26161_26246[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 2))
{var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,4,ch);
} else
{if((state_val_26157 === 34))
{var state_26156__$1 = state_26156;var statearr_26162_26247 = state_26156__$1;(statearr_26162_26247[2] = null);
(statearr_26162_26247[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 3))
{var inst_26154 = (state_26156[2]);var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26156__$1,inst_26154);
} else
{if((state_val_26157 === 35))
{var inst_26138 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26163_26248 = state_26156__$1;(statearr_26163_26248[2] = inst_26138);
(statearr_26163_26248[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 4))
{var inst_26024 = (state_26156[8]);var inst_26024__$1 = (state_26156[2]);var inst_26025 = (inst_26024__$1 == null);var state_26156__$1 = (function (){var statearr_26164 = state_26156;(statearr_26164[8] = inst_26024__$1);
return statearr_26164;
})();if(cljs.core.truth_(inst_26025))
{var statearr_26165_26249 = state_26156__$1;(statearr_26165_26249[1] = 5);
} else
{var statearr_26166_26250 = state_26156__$1;(statearr_26166_26250[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 36))
{var inst_26113 = (state_26156[9]);var inst_26117 = cljs.core.chunk_first.call(null,inst_26113);var inst_26118 = cljs.core.chunk_rest.call(null,inst_26113);var inst_26119 = cljs.core.count.call(null,inst_26117);var inst_26092 = inst_26118;var inst_26093 = inst_26117;var inst_26094 = inst_26119;var inst_26095 = 0;var state_26156__$1 = (function (){var statearr_26167 = state_26156;(statearr_26167[10] = inst_26092);
(statearr_26167[11] = inst_26093);
(statearr_26167[12] = inst_26094);
(statearr_26167[13] = inst_26095);
return statearr_26167;
})();var statearr_26168_26251 = state_26156__$1;(statearr_26168_26251[2] = null);
(statearr_26168_26251[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 5))
{var inst_26031 = cljs.core.deref.call(null,cs);var inst_26032 = cljs.core.seq.call(null,inst_26031);var inst_26033 = inst_26032;var inst_26034 = null;var inst_26035 = 0;var inst_26036 = 0;var state_26156__$1 = (function (){var statearr_26169 = state_26156;(statearr_26169[14] = inst_26036);
(statearr_26169[15] = inst_26034);
(statearr_26169[16] = inst_26035);
(statearr_26169[17] = inst_26033);
return statearr_26169;
})();var statearr_26170_26252 = state_26156__$1;(statearr_26170_26252[2] = null);
(statearr_26170_26252[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 37))
{var inst_26113 = (state_26156[9]);var inst_26122 = cljs.core.first.call(null,inst_26113);var state_26156__$1 = (function (){var statearr_26171 = state_26156;(statearr_26171[18] = inst_26122);
return statearr_26171;
})();var statearr_26172_26253 = state_26156__$1;(statearr_26172_26253[2] = null);
(statearr_26172_26253[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 6))
{var inst_26084 = (state_26156[19]);var inst_26083 = cljs.core.deref.call(null,cs);var inst_26084__$1 = cljs.core.keys.call(null,inst_26083);var inst_26085 = cljs.core.count.call(null,inst_26084__$1);var inst_26086 = cljs.core.reset_BANG_.call(null,dctr,inst_26085);var inst_26091 = cljs.core.seq.call(null,inst_26084__$1);var inst_26092 = inst_26091;var inst_26093 = null;var inst_26094 = 0;var inst_26095 = 0;var state_26156__$1 = (function (){var statearr_26173 = state_26156;(statearr_26173[10] = inst_26092);
(statearr_26173[11] = inst_26093);
(statearr_26173[12] = inst_26094);
(statearr_26173[13] = inst_26095);
(statearr_26173[19] = inst_26084__$1);
(statearr_26173[20] = inst_26086);
return statearr_26173;
})();var statearr_26174_26254 = state_26156__$1;(statearr_26174_26254[2] = null);
(statearr_26174_26254[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 38))
{var inst_26135 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26175_26255 = state_26156__$1;(statearr_26175_26255[2] = inst_26135);
(statearr_26175_26255[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 7))
{var inst_26152 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26176_26256 = state_26156__$1;(statearr_26176_26256[2] = inst_26152);
(statearr_26176_26256[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 39))
{var inst_26113 = (state_26156[9]);var inst_26131 = (state_26156[2]);var inst_26132 = cljs.core.next.call(null,inst_26113);var inst_26092 = inst_26132;var inst_26093 = null;var inst_26094 = 0;var inst_26095 = 0;var state_26156__$1 = (function (){var statearr_26177 = state_26156;(statearr_26177[10] = inst_26092);
(statearr_26177[11] = inst_26093);
(statearr_26177[12] = inst_26094);
(statearr_26177[13] = inst_26095);
(statearr_26177[21] = inst_26131);
return statearr_26177;
})();var statearr_26178_26257 = state_26156__$1;(statearr_26178_26257[2] = null);
(statearr_26178_26257[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 8))
{var inst_26036 = (state_26156[14]);var inst_26035 = (state_26156[16]);var inst_26038 = (inst_26036 < inst_26035);var inst_26039 = inst_26038;var state_26156__$1 = state_26156;if(cljs.core.truth_(inst_26039))
{var statearr_26179_26258 = state_26156__$1;(statearr_26179_26258[1] = 10);
} else
{var statearr_26180_26259 = state_26156__$1;(statearr_26180_26259[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 40))
{var inst_26122 = (state_26156[18]);var inst_26123 = (state_26156[2]);var inst_26124 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26125 = cljs.core.async.untap_STAR_.call(null,m,inst_26122);var state_26156__$1 = (function (){var statearr_26181 = state_26156;(statearr_26181[22] = inst_26124);
(statearr_26181[23] = inst_26123);
return statearr_26181;
})();var statearr_26182_26260 = state_26156__$1;(statearr_26182_26260[2] = inst_26125);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 9))
{var inst_26081 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26183_26261 = state_26156__$1;(statearr_26183_26261[2] = inst_26081);
(statearr_26183_26261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 41))
{var inst_26024 = (state_26156[8]);var inst_26122 = (state_26156[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26156,40,Object,null,39);var inst_26129 = cljs.core.async.put_BANG_.call(null,inst_26122,inst_26024,done);var state_26156__$1 = state_26156;var statearr_26184_26262 = state_26156__$1;(statearr_26184_26262[2] = inst_26129);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 10))
{var inst_26036 = (state_26156[14]);var inst_26034 = (state_26156[15]);var inst_26042 = cljs.core._nth.call(null,inst_26034,inst_26036);var inst_26043 = cljs.core.nth.call(null,inst_26042,0,null);var inst_26044 = cljs.core.nth.call(null,inst_26042,1,null);var state_26156__$1 = (function (){var statearr_26185 = state_26156;(statearr_26185[24] = inst_26043);
return statearr_26185;
})();if(cljs.core.truth_(inst_26044))
{var statearr_26186_26263 = state_26156__$1;(statearr_26186_26263[1] = 13);
} else
{var statearr_26187_26264 = state_26156__$1;(statearr_26187_26264[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 42))
{var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,45,dchan);
} else
{if((state_val_26157 === 11))
{var inst_26033 = (state_26156[17]);var inst_26053 = (state_26156[25]);var inst_26053__$1 = cljs.core.seq.call(null,inst_26033);var state_26156__$1 = (function (){var statearr_26188 = state_26156;(statearr_26188[25] = inst_26053__$1);
return statearr_26188;
})();if(inst_26053__$1)
{var statearr_26189_26265 = state_26156__$1;(statearr_26189_26265[1] = 16);
} else
{var statearr_26190_26266 = state_26156__$1;(statearr_26190_26266[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 43))
{var state_26156__$1 = state_26156;var statearr_26191_26267 = state_26156__$1;(statearr_26191_26267[2] = null);
(statearr_26191_26267[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 12))
{var inst_26079 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26192_26268 = state_26156__$1;(statearr_26192_26268[2] = inst_26079);
(statearr_26192_26268[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 44))
{var inst_26149 = (state_26156[2]);var state_26156__$1 = (function (){var statearr_26193 = state_26156;(statearr_26193[26] = inst_26149);
return statearr_26193;
})();var statearr_26194_26269 = state_26156__$1;(statearr_26194_26269[2] = null);
(statearr_26194_26269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 13))
{var inst_26043 = (state_26156[24]);var inst_26046 = cljs.core.async.close_BANG_.call(null,inst_26043);var state_26156__$1 = state_26156;var statearr_26195_26270 = state_26156__$1;(statearr_26195_26270[2] = inst_26046);
(statearr_26195_26270[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 45))
{var inst_26146 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26199_26271 = state_26156__$1;(statearr_26199_26271[2] = inst_26146);
(statearr_26199_26271[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 14))
{var state_26156__$1 = state_26156;var statearr_26200_26272 = state_26156__$1;(statearr_26200_26272[2] = null);
(statearr_26200_26272[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 15))
{var inst_26036 = (state_26156[14]);var inst_26034 = (state_26156[15]);var inst_26035 = (state_26156[16]);var inst_26033 = (state_26156[17]);var inst_26049 = (state_26156[2]);var inst_26050 = (inst_26036 + 1);var tmp26196 = inst_26034;var tmp26197 = inst_26035;var tmp26198 = inst_26033;var inst_26033__$1 = tmp26198;var inst_26034__$1 = tmp26196;var inst_26035__$1 = tmp26197;var inst_26036__$1 = inst_26050;var state_26156__$1 = (function (){var statearr_26201 = state_26156;(statearr_26201[14] = inst_26036__$1);
(statearr_26201[15] = inst_26034__$1);
(statearr_26201[16] = inst_26035__$1);
(statearr_26201[17] = inst_26033__$1);
(statearr_26201[27] = inst_26049);
return statearr_26201;
})();var statearr_26202_26273 = state_26156__$1;(statearr_26202_26273[2] = null);
(statearr_26202_26273[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 16))
{var inst_26053 = (state_26156[25]);var inst_26055 = cljs.core.chunked_seq_QMARK_.call(null,inst_26053);var state_26156__$1 = state_26156;if(inst_26055)
{var statearr_26203_26274 = state_26156__$1;(statearr_26203_26274[1] = 19);
} else
{var statearr_26204_26275 = state_26156__$1;(statearr_26204_26275[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 17))
{var state_26156__$1 = state_26156;var statearr_26205_26276 = state_26156__$1;(statearr_26205_26276[2] = null);
(statearr_26205_26276[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 18))
{var inst_26077 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26206_26277 = state_26156__$1;(statearr_26206_26277[2] = inst_26077);
(statearr_26206_26277[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 19))
{var inst_26053 = (state_26156[25]);var inst_26057 = cljs.core.chunk_first.call(null,inst_26053);var inst_26058 = cljs.core.chunk_rest.call(null,inst_26053);var inst_26059 = cljs.core.count.call(null,inst_26057);var inst_26033 = inst_26058;var inst_26034 = inst_26057;var inst_26035 = inst_26059;var inst_26036 = 0;var state_26156__$1 = (function (){var statearr_26207 = state_26156;(statearr_26207[14] = inst_26036);
(statearr_26207[15] = inst_26034);
(statearr_26207[16] = inst_26035);
(statearr_26207[17] = inst_26033);
return statearr_26207;
})();var statearr_26208_26278 = state_26156__$1;(statearr_26208_26278[2] = null);
(statearr_26208_26278[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 20))
{var inst_26053 = (state_26156[25]);var inst_26063 = cljs.core.first.call(null,inst_26053);var inst_26064 = cljs.core.nth.call(null,inst_26063,0,null);var inst_26065 = cljs.core.nth.call(null,inst_26063,1,null);var state_26156__$1 = (function (){var statearr_26209 = state_26156;(statearr_26209[28] = inst_26064);
return statearr_26209;
})();if(cljs.core.truth_(inst_26065))
{var statearr_26210_26279 = state_26156__$1;(statearr_26210_26279[1] = 22);
} else
{var statearr_26211_26280 = state_26156__$1;(statearr_26211_26280[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 21))
{var inst_26074 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26212_26281 = state_26156__$1;(statearr_26212_26281[2] = inst_26074);
(statearr_26212_26281[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 22))
{var inst_26064 = (state_26156[28]);var inst_26067 = cljs.core.async.close_BANG_.call(null,inst_26064);var state_26156__$1 = state_26156;var statearr_26213_26282 = state_26156__$1;(statearr_26213_26282[2] = inst_26067);
(statearr_26213_26282[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 23))
{var state_26156__$1 = state_26156;var statearr_26214_26283 = state_26156__$1;(statearr_26214_26283[2] = null);
(statearr_26214_26283[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 24))
{var inst_26053 = (state_26156[25]);var inst_26070 = (state_26156[2]);var inst_26071 = cljs.core.next.call(null,inst_26053);var inst_26033 = inst_26071;var inst_26034 = null;var inst_26035 = 0;var inst_26036 = 0;var state_26156__$1 = (function (){var statearr_26215 = state_26156;(statearr_26215[14] = inst_26036);
(statearr_26215[15] = inst_26034);
(statearr_26215[16] = inst_26035);
(statearr_26215[17] = inst_26033);
(statearr_26215[29] = inst_26070);
return statearr_26215;
})();var statearr_26216_26284 = state_26156__$1;(statearr_26216_26284[2] = null);
(statearr_26216_26284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 25))
{var inst_26094 = (state_26156[12]);var inst_26095 = (state_26156[13]);var inst_26097 = (inst_26095 < inst_26094);var inst_26098 = inst_26097;var state_26156__$1 = state_26156;if(cljs.core.truth_(inst_26098))
{var statearr_26217_26285 = state_26156__$1;(statearr_26217_26285[1] = 27);
} else
{var statearr_26218_26286 = state_26156__$1;(statearr_26218_26286[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 26))
{var inst_26084 = (state_26156[19]);var inst_26142 = (state_26156[2]);var inst_26143 = cljs.core.seq.call(null,inst_26084);var state_26156__$1 = (function (){var statearr_26219 = state_26156;(statearr_26219[30] = inst_26142);
return statearr_26219;
})();if(inst_26143)
{var statearr_26220_26287 = state_26156__$1;(statearr_26220_26287[1] = 42);
} else
{var statearr_26221_26288 = state_26156__$1;(statearr_26221_26288[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 27))
{var inst_26093 = (state_26156[11]);var inst_26095 = (state_26156[13]);var inst_26100 = cljs.core._nth.call(null,inst_26093,inst_26095);var state_26156__$1 = (function (){var statearr_26222 = state_26156;(statearr_26222[7] = inst_26100);
return statearr_26222;
})();var statearr_26223_26289 = state_26156__$1;(statearr_26223_26289[2] = null);
(statearr_26223_26289[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 28))
{var inst_26092 = (state_26156[10]);var inst_26113 = (state_26156[9]);var inst_26113__$1 = cljs.core.seq.call(null,inst_26092);var state_26156__$1 = (function (){var statearr_26227 = state_26156;(statearr_26227[9] = inst_26113__$1);
return statearr_26227;
})();if(inst_26113__$1)
{var statearr_26228_26290 = state_26156__$1;(statearr_26228_26290[1] = 33);
} else
{var statearr_26229_26291 = state_26156__$1;(statearr_26229_26291[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 29))
{var inst_26140 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26230_26292 = state_26156__$1;(statearr_26230_26292[2] = inst_26140);
(statearr_26230_26292[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 30))
{var inst_26092 = (state_26156[10]);var inst_26093 = (state_26156[11]);var inst_26094 = (state_26156[12]);var inst_26095 = (state_26156[13]);var inst_26109 = (state_26156[2]);var inst_26110 = (inst_26095 + 1);var tmp26224 = inst_26092;var tmp26225 = inst_26093;var tmp26226 = inst_26094;var inst_26092__$1 = tmp26224;var inst_26093__$1 = tmp26225;var inst_26094__$1 = tmp26226;var inst_26095__$1 = inst_26110;var state_26156__$1 = (function (){var statearr_26231 = state_26156;(statearr_26231[10] = inst_26092__$1);
(statearr_26231[11] = inst_26093__$1);
(statearr_26231[12] = inst_26094__$1);
(statearr_26231[13] = inst_26095__$1);
(statearr_26231[31] = inst_26109);
return statearr_26231;
})();var statearr_26232_26293 = state_26156__$1;(statearr_26232_26293[2] = null);
(statearr_26232_26293[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 31))
{var inst_26100 = (state_26156[7]);var inst_26101 = (state_26156[2]);var inst_26102 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26103 = cljs.core.async.untap_STAR_.call(null,m,inst_26100);var state_26156__$1 = (function (){var statearr_26233 = state_26156;(statearr_26233[32] = inst_26102);
(statearr_26233[33] = inst_26101);
return statearr_26233;
})();var statearr_26234_26294 = state_26156__$1;(statearr_26234_26294[2] = inst_26103);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26238[0] = state_machine__5548__auto__);
(statearr_26238[1] = 1);
return statearr_26238;
});
var state_machine__5548__auto____1 = (function (state_26156){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26156);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26239){if((e26239 instanceof Object))
{var ex__5551__auto__ = e26239;var statearr_26240_26295 = state_26156;(statearr_26240_26295[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26296 = state_26156;
state_26156 = G__26296;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26156){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26241 = f__5563__auto__.call(null);(statearr_26241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26242);
return statearr_26241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj26298 = {};return obj26298;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t26408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26408 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26409){
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
this.meta26409 = meta26409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26408.cljs$lang$type = true;
cljs.core.async.t26408.cljs$lang$ctorStr = "cljs.core.async/t26408";
cljs.core.async.t26408.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26408");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26408.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26410){var self__ = this;
var _26410__$1 = this;return self__.meta26409;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26410,meta26409__$1){var self__ = this;
var _26410__$1 = this;return (new cljs.core.async.t26408(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26409__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26408 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26408(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26409){return (new cljs.core.async.t26408(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26409));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26408(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___26517 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26475){var state_val_26476 = (state_26475[1]);if((state_val_26476 === 1))
{var inst_26414 = (state_26475[7]);var inst_26414__$1 = calc_state.call(null);var inst_26415 = cljs.core.seq_QMARK_.call(null,inst_26414__$1);var state_26475__$1 = (function (){var statearr_26477 = state_26475;(statearr_26477[7] = inst_26414__$1);
return statearr_26477;
})();if(inst_26415)
{var statearr_26478_26518 = state_26475__$1;(statearr_26478_26518[1] = 2);
} else
{var statearr_26479_26519 = state_26475__$1;(statearr_26479_26519[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 2))
{var inst_26414 = (state_26475[7]);var inst_26417 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26414);var state_26475__$1 = state_26475;var statearr_26480_26520 = state_26475__$1;(statearr_26480_26520[2] = inst_26417);
(statearr_26480_26520[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 3))
{var inst_26414 = (state_26475[7]);var state_26475__$1 = state_26475;var statearr_26481_26521 = state_26475__$1;(statearr_26481_26521[2] = inst_26414);
(statearr_26481_26521[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 4))
{var inst_26414 = (state_26475[7]);var inst_26420 = (state_26475[2]);var inst_26421 = cljs.core.get.call(null,inst_26420,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26422 = cljs.core.get.call(null,inst_26420,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26423 = cljs.core.get.call(null,inst_26420,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26424 = inst_26414;var state_26475__$1 = (function (){var statearr_26482 = state_26475;(statearr_26482[8] = inst_26421);
(statearr_26482[9] = inst_26422);
(statearr_26482[10] = inst_26424);
(statearr_26482[11] = inst_26423);
return statearr_26482;
})();var statearr_26483_26522 = state_26475__$1;(statearr_26483_26522[2] = null);
(statearr_26483_26522[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 5))
{var inst_26424 = (state_26475[10]);var inst_26427 = cljs.core.seq_QMARK_.call(null,inst_26424);var state_26475__$1 = state_26475;if(inst_26427)
{var statearr_26484_26523 = state_26475__$1;(statearr_26484_26523[1] = 7);
} else
{var statearr_26485_26524 = state_26475__$1;(statearr_26485_26524[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 6))
{var inst_26473 = (state_26475[2]);var state_26475__$1 = state_26475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26475__$1,inst_26473);
} else
{if((state_val_26476 === 7))
{var inst_26424 = (state_26475[10]);var inst_26429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26424);var state_26475__$1 = state_26475;var statearr_26486_26525 = state_26475__$1;(statearr_26486_26525[2] = inst_26429);
(statearr_26486_26525[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 8))
{var inst_26424 = (state_26475[10]);var state_26475__$1 = state_26475;var statearr_26487_26526 = state_26475__$1;(statearr_26487_26526[2] = inst_26424);
(statearr_26487_26526[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 9))
{var inst_26432 = (state_26475[12]);var inst_26432__$1 = (state_26475[2]);var inst_26433 = cljs.core.get.call(null,inst_26432__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26434 = cljs.core.get.call(null,inst_26432__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26435 = cljs.core.get.call(null,inst_26432__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26475__$1 = (function (){var statearr_26488 = state_26475;(statearr_26488[13] = inst_26435);
(statearr_26488[14] = inst_26434);
(statearr_26488[12] = inst_26432__$1);
return statearr_26488;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26475__$1,10,inst_26433);
} else
{if((state_val_26476 === 10))
{var inst_26440 = (state_26475[15]);var inst_26439 = (state_26475[16]);var inst_26438 = (state_26475[2]);var inst_26439__$1 = cljs.core.nth.call(null,inst_26438,0,null);var inst_26440__$1 = cljs.core.nth.call(null,inst_26438,1,null);var inst_26441 = (inst_26439__$1 == null);var inst_26442 = cljs.core._EQ_.call(null,inst_26440__$1,change);var inst_26443 = (inst_26441) || (inst_26442);var state_26475__$1 = (function (){var statearr_26489 = state_26475;(statearr_26489[15] = inst_26440__$1);
(statearr_26489[16] = inst_26439__$1);
return statearr_26489;
})();if(cljs.core.truth_(inst_26443))
{var statearr_26490_26527 = state_26475__$1;(statearr_26490_26527[1] = 11);
} else
{var statearr_26491_26528 = state_26475__$1;(statearr_26491_26528[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 11))
{var inst_26439 = (state_26475[16]);var inst_26445 = (inst_26439 == null);var state_26475__$1 = state_26475;if(cljs.core.truth_(inst_26445))
{var statearr_26492_26529 = state_26475__$1;(statearr_26492_26529[1] = 14);
} else
{var statearr_26493_26530 = state_26475__$1;(statearr_26493_26530[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 12))
{var inst_26435 = (state_26475[13]);var inst_26440 = (state_26475[15]);var inst_26454 = (state_26475[17]);var inst_26454__$1 = inst_26435.call(null,inst_26440);var state_26475__$1 = (function (){var statearr_26494 = state_26475;(statearr_26494[17] = inst_26454__$1);
return statearr_26494;
})();if(cljs.core.truth_(inst_26454__$1))
{var statearr_26495_26531 = state_26475__$1;(statearr_26495_26531[1] = 17);
} else
{var statearr_26496_26532 = state_26475__$1;(statearr_26496_26532[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 13))
{var inst_26471 = (state_26475[2]);var state_26475__$1 = state_26475;var statearr_26497_26533 = state_26475__$1;(statearr_26497_26533[2] = inst_26471);
(statearr_26497_26533[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 14))
{var inst_26440 = (state_26475[15]);var inst_26447 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26440);var state_26475__$1 = state_26475;var statearr_26498_26534 = state_26475__$1;(statearr_26498_26534[2] = inst_26447);
(statearr_26498_26534[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 15))
{var state_26475__$1 = state_26475;var statearr_26499_26535 = state_26475__$1;(statearr_26499_26535[2] = null);
(statearr_26499_26535[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 16))
{var inst_26450 = (state_26475[2]);var inst_26451 = calc_state.call(null);var inst_26424 = inst_26451;var state_26475__$1 = (function (){var statearr_26500 = state_26475;(statearr_26500[10] = inst_26424);
(statearr_26500[18] = inst_26450);
return statearr_26500;
})();var statearr_26501_26536 = state_26475__$1;(statearr_26501_26536[2] = null);
(statearr_26501_26536[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 17))
{var inst_26454 = (state_26475[17]);var state_26475__$1 = state_26475;var statearr_26502_26537 = state_26475__$1;(statearr_26502_26537[2] = inst_26454);
(statearr_26502_26537[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 18))
{var inst_26435 = (state_26475[13]);var inst_26434 = (state_26475[14]);var inst_26440 = (state_26475[15]);var inst_26457 = cljs.core.empty_QMARK_.call(null,inst_26435);var inst_26458 = inst_26434.call(null,inst_26440);var inst_26459 = cljs.core.not.call(null,inst_26458);var inst_26460 = (inst_26457) && (inst_26459);var state_26475__$1 = state_26475;var statearr_26503_26538 = state_26475__$1;(statearr_26503_26538[2] = inst_26460);
(statearr_26503_26538[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 19))
{var inst_26462 = (state_26475[2]);var state_26475__$1 = state_26475;if(cljs.core.truth_(inst_26462))
{var statearr_26504_26539 = state_26475__$1;(statearr_26504_26539[1] = 20);
} else
{var statearr_26505_26540 = state_26475__$1;(statearr_26505_26540[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 20))
{var inst_26439 = (state_26475[16]);var state_26475__$1 = state_26475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26475__$1,23,out,inst_26439);
} else
{if((state_val_26476 === 21))
{var state_26475__$1 = state_26475;var statearr_26506_26541 = state_26475__$1;(statearr_26506_26541[2] = null);
(statearr_26506_26541[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 22))
{var inst_26432 = (state_26475[12]);var inst_26468 = (state_26475[2]);var inst_26424 = inst_26432;var state_26475__$1 = (function (){var statearr_26507 = state_26475;(statearr_26507[10] = inst_26424);
(statearr_26507[19] = inst_26468);
return statearr_26507;
})();var statearr_26508_26542 = state_26475__$1;(statearr_26508_26542[2] = null);
(statearr_26508_26542[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26476 === 23))
{var inst_26465 = (state_26475[2]);var state_26475__$1 = state_26475;var statearr_26509_26543 = state_26475__$1;(statearr_26509_26543[2] = inst_26465);
(statearr_26509_26543[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26513[0] = state_machine__5548__auto__);
(statearr_26513[1] = 1);
return statearr_26513;
});
var state_machine__5548__auto____1 = (function (state_26475){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26475);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26514){if((e26514 instanceof Object))
{var ex__5551__auto__ = e26514;var statearr_26515_26544 = state_26475;(statearr_26515_26544[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26545 = state_26475;
state_26475 = G__26545;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26475){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26516 = f__5563__auto__.call(null);(statearr_26516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26517);
return statearr_26516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj26547 = {};return obj26547;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__26548_SHARP_){if(cljs.core.truth_(p1__26548_SHARP_.call(null,topic)))
{return p1__26548_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26548_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26673 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26674){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26674 = meta26674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26673.cljs$lang$type = true;
cljs.core.async.t26673.cljs$lang$ctorStr = "cljs.core.async/t26673";
cljs.core.async.t26673.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26673");
});})(mults,ensure_mult))
;
cljs.core.async.t26673.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26673.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26673.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26673.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26673.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26673.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26675){var self__ = this;
var _26675__$1 = this;return self__.meta26674;
});})(mults,ensure_mult))
;
cljs.core.async.t26673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26675,meta26674__$1){var self__ = this;
var _26675__$1 = this;return (new cljs.core.async.t26673(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26674__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26673 = ((function (mults,ensure_mult){
return (function __GT_t26673(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26674){return (new cljs.core.async.t26673(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26674));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26673(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___26797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26749){var state_val_26750 = (state_26749[1]);if((state_val_26750 === 1))
{var state_26749__$1 = state_26749;var statearr_26751_26798 = state_26749__$1;(statearr_26751_26798[2] = null);
(statearr_26751_26798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 2))
{var state_26749__$1 = state_26749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26749__$1,4,ch);
} else
{if((state_val_26750 === 3))
{var inst_26747 = (state_26749[2]);var state_26749__$1 = state_26749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26749__$1,inst_26747);
} else
{if((state_val_26750 === 4))
{var inst_26678 = (state_26749[7]);var inst_26678__$1 = (state_26749[2]);var inst_26679 = (inst_26678__$1 == null);var state_26749__$1 = (function (){var statearr_26752 = state_26749;(statearr_26752[7] = inst_26678__$1);
return statearr_26752;
})();if(cljs.core.truth_(inst_26679))
{var statearr_26753_26799 = state_26749__$1;(statearr_26753_26799[1] = 5);
} else
{var statearr_26754_26800 = state_26749__$1;(statearr_26754_26800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 5))
{var inst_26685 = cljs.core.deref.call(null,mults);var inst_26686 = cljs.core.vals.call(null,inst_26685);var inst_26687 = cljs.core.seq.call(null,inst_26686);var inst_26688 = inst_26687;var inst_26689 = null;var inst_26690 = 0;var inst_26691 = 0;var state_26749__$1 = (function (){var statearr_26755 = state_26749;(statearr_26755[8] = inst_26691);
(statearr_26755[9] = inst_26689);
(statearr_26755[10] = inst_26690);
(statearr_26755[11] = inst_26688);
return statearr_26755;
})();var statearr_26756_26801 = state_26749__$1;(statearr_26756_26801[2] = null);
(statearr_26756_26801[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 6))
{var inst_26678 = (state_26749[7]);var inst_26728 = (state_26749[12]);var inst_26726 = (state_26749[13]);var inst_26726__$1 = topic_fn.call(null,inst_26678);var inst_26727 = cljs.core.deref.call(null,mults);var inst_26728__$1 = cljs.core.get.call(null,inst_26727,inst_26726__$1);var state_26749__$1 = (function (){var statearr_26757 = state_26749;(statearr_26757[12] = inst_26728__$1);
(statearr_26757[13] = inst_26726__$1);
return statearr_26757;
})();if(cljs.core.truth_(inst_26728__$1))
{var statearr_26758_26802 = state_26749__$1;(statearr_26758_26802[1] = 19);
} else
{var statearr_26759_26803 = state_26749__$1;(statearr_26759_26803[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 7))
{var inst_26745 = (state_26749[2]);var state_26749__$1 = state_26749;var statearr_26760_26804 = state_26749__$1;(statearr_26760_26804[2] = inst_26745);
(statearr_26760_26804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 8))
{var inst_26691 = (state_26749[8]);var inst_26690 = (state_26749[10]);var inst_26693 = (inst_26691 < inst_26690);var inst_26694 = inst_26693;var state_26749__$1 = state_26749;if(cljs.core.truth_(inst_26694))
{var statearr_26764_26805 = state_26749__$1;(statearr_26764_26805[1] = 10);
} else
{var statearr_26765_26806 = state_26749__$1;(statearr_26765_26806[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 9))
{var inst_26724 = (state_26749[2]);var state_26749__$1 = state_26749;var statearr_26766_26807 = state_26749__$1;(statearr_26766_26807[2] = inst_26724);
(statearr_26766_26807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 10))
{var inst_26691 = (state_26749[8]);var inst_26689 = (state_26749[9]);var inst_26690 = (state_26749[10]);var inst_26688 = (state_26749[11]);var inst_26696 = cljs.core._nth.call(null,inst_26689,inst_26691);var inst_26697 = cljs.core.async.muxch_STAR_.call(null,inst_26696);var inst_26698 = cljs.core.async.close_BANG_.call(null,inst_26697);var inst_26699 = (inst_26691 + 1);var tmp26761 = inst_26689;var tmp26762 = inst_26690;var tmp26763 = inst_26688;var inst_26688__$1 = tmp26763;var inst_26689__$1 = tmp26761;var inst_26690__$1 = tmp26762;var inst_26691__$1 = inst_26699;var state_26749__$1 = (function (){var statearr_26767 = state_26749;(statearr_26767[14] = inst_26698);
(statearr_26767[8] = inst_26691__$1);
(statearr_26767[9] = inst_26689__$1);
(statearr_26767[10] = inst_26690__$1);
(statearr_26767[11] = inst_26688__$1);
return statearr_26767;
})();var statearr_26768_26808 = state_26749__$1;(statearr_26768_26808[2] = null);
(statearr_26768_26808[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 11))
{var inst_26702 = (state_26749[15]);var inst_26688 = (state_26749[11]);var inst_26702__$1 = cljs.core.seq.call(null,inst_26688);var state_26749__$1 = (function (){var statearr_26769 = state_26749;(statearr_26769[15] = inst_26702__$1);
return statearr_26769;
})();if(inst_26702__$1)
{var statearr_26770_26809 = state_26749__$1;(statearr_26770_26809[1] = 13);
} else
{var statearr_26771_26810 = state_26749__$1;(statearr_26771_26810[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 12))
{var inst_26722 = (state_26749[2]);var state_26749__$1 = state_26749;var statearr_26772_26811 = state_26749__$1;(statearr_26772_26811[2] = inst_26722);
(statearr_26772_26811[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 13))
{var inst_26702 = (state_26749[15]);var inst_26704 = cljs.core.chunked_seq_QMARK_.call(null,inst_26702);var state_26749__$1 = state_26749;if(inst_26704)
{var statearr_26773_26812 = state_26749__$1;(statearr_26773_26812[1] = 16);
} else
{var statearr_26774_26813 = state_26749__$1;(statearr_26774_26813[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 14))
{var state_26749__$1 = state_26749;var statearr_26775_26814 = state_26749__$1;(statearr_26775_26814[2] = null);
(statearr_26775_26814[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 15))
{var inst_26720 = (state_26749[2]);var state_26749__$1 = state_26749;var statearr_26776_26815 = state_26749__$1;(statearr_26776_26815[2] = inst_26720);
(statearr_26776_26815[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 16))
{var inst_26702 = (state_26749[15]);var inst_26706 = cljs.core.chunk_first.call(null,inst_26702);var inst_26707 = cljs.core.chunk_rest.call(null,inst_26702);var inst_26708 = cljs.core.count.call(null,inst_26706);var inst_26688 = inst_26707;var inst_26689 = inst_26706;var inst_26690 = inst_26708;var inst_26691 = 0;var state_26749__$1 = (function (){var statearr_26777 = state_26749;(statearr_26777[8] = inst_26691);
(statearr_26777[9] = inst_26689);
(statearr_26777[10] = inst_26690);
(statearr_26777[11] = inst_26688);
return statearr_26777;
})();var statearr_26778_26816 = state_26749__$1;(statearr_26778_26816[2] = null);
(statearr_26778_26816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 17))
{var inst_26702 = (state_26749[15]);var inst_26711 = cljs.core.first.call(null,inst_26702);var inst_26712 = cljs.core.async.muxch_STAR_.call(null,inst_26711);var inst_26713 = cljs.core.async.close_BANG_.call(null,inst_26712);var inst_26714 = cljs.core.next.call(null,inst_26702);var inst_26688 = inst_26714;var inst_26689 = null;var inst_26690 = 0;var inst_26691 = 0;var state_26749__$1 = (function (){var statearr_26779 = state_26749;(statearr_26779[16] = inst_26713);
(statearr_26779[8] = inst_26691);
(statearr_26779[9] = inst_26689);
(statearr_26779[10] = inst_26690);
(statearr_26779[11] = inst_26688);
return statearr_26779;
})();var statearr_26780_26817 = state_26749__$1;(statearr_26780_26817[2] = null);
(statearr_26780_26817[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 18))
{var inst_26717 = (state_26749[2]);var state_26749__$1 = state_26749;var statearr_26781_26818 = state_26749__$1;(statearr_26781_26818[2] = inst_26717);
(statearr_26781_26818[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 19))
{var state_26749__$1 = state_26749;var statearr_26782_26819 = state_26749__$1;(statearr_26782_26819[2] = null);
(statearr_26782_26819[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 20))
{var state_26749__$1 = state_26749;var statearr_26783_26820 = state_26749__$1;(statearr_26783_26820[2] = null);
(statearr_26783_26820[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 21))
{var inst_26742 = (state_26749[2]);var state_26749__$1 = (function (){var statearr_26784 = state_26749;(statearr_26784[17] = inst_26742);
return statearr_26784;
})();var statearr_26785_26821 = state_26749__$1;(statearr_26785_26821[2] = null);
(statearr_26785_26821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 22))
{var inst_26739 = (state_26749[2]);var state_26749__$1 = state_26749;var statearr_26786_26822 = state_26749__$1;(statearr_26786_26822[2] = inst_26739);
(statearr_26786_26822[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 23))
{var inst_26726 = (state_26749[13]);var inst_26730 = (state_26749[2]);var inst_26731 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26726);var state_26749__$1 = (function (){var statearr_26787 = state_26749;(statearr_26787[18] = inst_26730);
return statearr_26787;
})();var statearr_26788_26823 = state_26749__$1;(statearr_26788_26823[2] = inst_26731);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26749__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26750 === 24))
{var inst_26678 = (state_26749[7]);var inst_26728 = (state_26749[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26749,23,Object,null,22);var inst_26735 = cljs.core.async.muxch_STAR_.call(null,inst_26728);var state_26749__$1 = state_26749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26749__$1,25,inst_26735,inst_26678);
} else
{if((state_val_26750 === 25))
{var inst_26737 = (state_26749[2]);var state_26749__$1 = state_26749;var statearr_26789_26824 = state_26749__$1;(statearr_26789_26824[2] = inst_26737);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26749__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26793[0] = state_machine__5548__auto__);
(statearr_26793[1] = 1);
return statearr_26793;
});
var state_machine__5548__auto____1 = (function (state_26749){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26794){if((e26794 instanceof Object))
{var ex__5551__auto__ = e26794;var statearr_26795_26825 = state_26749;(statearr_26795_26825[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26826 = state_26749;
state_26749 = G__26826;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26749){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26796 = f__5563__auto__.call(null);(statearr_26796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26797);
return statearr_26796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
,cljs.core.range.call(null,cnt));var c__5562__auto___26963 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26933){var state_val_26934 = (state_26933[1]);if((state_val_26934 === 1))
{var state_26933__$1 = state_26933;var statearr_26935_26964 = state_26933__$1;(statearr_26935_26964[2] = null);
(statearr_26935_26964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 2))
{var inst_26896 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26897 = 0;var state_26933__$1 = (function (){var statearr_26936 = state_26933;(statearr_26936[7] = inst_26897);
(statearr_26936[8] = inst_26896);
return statearr_26936;
})();var statearr_26937_26965 = state_26933__$1;(statearr_26937_26965[2] = null);
(statearr_26937_26965[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 3))
{var inst_26931 = (state_26933[2]);var state_26933__$1 = state_26933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26933__$1,inst_26931);
} else
{if((state_val_26934 === 4))
{var inst_26897 = (state_26933[7]);var inst_26899 = (inst_26897 < cnt);var state_26933__$1 = state_26933;if(cljs.core.truth_(inst_26899))
{var statearr_26938_26966 = state_26933__$1;(statearr_26938_26966[1] = 6);
} else
{var statearr_26939_26967 = state_26933__$1;(statearr_26939_26967[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 5))
{var inst_26917 = (state_26933[2]);var state_26933__$1 = (function (){var statearr_26940 = state_26933;(statearr_26940[9] = inst_26917);
return statearr_26940;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26933__$1,12,dchan);
} else
{if((state_val_26934 === 6))
{var state_26933__$1 = state_26933;var statearr_26941_26968 = state_26933__$1;(statearr_26941_26968[2] = null);
(statearr_26941_26968[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 7))
{var state_26933__$1 = state_26933;var statearr_26942_26969 = state_26933__$1;(statearr_26942_26969[2] = null);
(statearr_26942_26969[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 8))
{var inst_26915 = (state_26933[2]);var state_26933__$1 = state_26933;var statearr_26943_26970 = state_26933__$1;(statearr_26943_26970[2] = inst_26915);
(statearr_26943_26970[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 9))
{var inst_26897 = (state_26933[7]);var inst_26910 = (state_26933[2]);var inst_26911 = (inst_26897 + 1);var inst_26897__$1 = inst_26911;var state_26933__$1 = (function (){var statearr_26944 = state_26933;(statearr_26944[10] = inst_26910);
(statearr_26944[7] = inst_26897__$1);
return statearr_26944;
})();var statearr_26945_26971 = state_26933__$1;(statearr_26945_26971[2] = null);
(statearr_26945_26971[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 10))
{var inst_26901 = (state_26933[2]);var inst_26902 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26933__$1 = (function (){var statearr_26946 = state_26933;(statearr_26946[11] = inst_26901);
return statearr_26946;
})();var statearr_26947_26972 = state_26933__$1;(statearr_26947_26972[2] = inst_26902);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26933__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 11))
{var inst_26897 = (state_26933[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26933,10,Object,null,9);var inst_26906 = chs__$1.call(null,inst_26897);var inst_26907 = done.call(null,inst_26897);var inst_26908 = cljs.core.async.take_BANG_.call(null,inst_26906,inst_26907);var state_26933__$1 = state_26933;var statearr_26948_26973 = state_26933__$1;(statearr_26948_26973[2] = inst_26908);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26933__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 12))
{var inst_26919 = (state_26933[12]);var inst_26919__$1 = (state_26933[2]);var inst_26920 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26919__$1);var state_26933__$1 = (function (){var statearr_26949 = state_26933;(statearr_26949[12] = inst_26919__$1);
return statearr_26949;
})();if(cljs.core.truth_(inst_26920))
{var statearr_26950_26974 = state_26933__$1;(statearr_26950_26974[1] = 13);
} else
{var statearr_26951_26975 = state_26933__$1;(statearr_26951_26975[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 13))
{var inst_26922 = cljs.core.async.close_BANG_.call(null,out);var state_26933__$1 = state_26933;var statearr_26952_26976 = state_26933__$1;(statearr_26952_26976[2] = inst_26922);
(statearr_26952_26976[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 14))
{var inst_26919 = (state_26933[12]);var inst_26924 = cljs.core.apply.call(null,f,inst_26919);var state_26933__$1 = state_26933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26933__$1,16,out,inst_26924);
} else
{if((state_val_26934 === 15))
{var inst_26929 = (state_26933[2]);var state_26933__$1 = state_26933;var statearr_26953_26977 = state_26933__$1;(statearr_26953_26977[2] = inst_26929);
(statearr_26953_26977[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26934 === 16))
{var inst_26926 = (state_26933[2]);var state_26933__$1 = (function (){var statearr_26954 = state_26933;(statearr_26954[13] = inst_26926);
return statearr_26954;
})();var statearr_26955_26978 = state_26933__$1;(statearr_26955_26978[2] = null);
(statearr_26955_26978[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26959[0] = state_machine__5548__auto__);
(statearr_26959[1] = 1);
return statearr_26959;
});
var state_machine__5548__auto____1 = (function (state_26933){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26960){if((e26960 instanceof Object))
{var ex__5551__auto__ = e26960;var statearr_26961_26979 = state_26933;(statearr_26961_26979[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26980 = state_26933;
state_26933 = G__26980;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26933){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26962 = f__5563__auto__.call(null);(statearr_26962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26963);
return statearr_26962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27088 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27064){var state_val_27065 = (state_27064[1]);if((state_val_27065 === 1))
{var inst_27035 = cljs.core.vec.call(null,chs);var inst_27036 = inst_27035;var state_27064__$1 = (function (){var statearr_27066 = state_27064;(statearr_27066[7] = inst_27036);
return statearr_27066;
})();var statearr_27067_27089 = state_27064__$1;(statearr_27067_27089[2] = null);
(statearr_27067_27089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27065 === 2))
{var inst_27036 = (state_27064[7]);var inst_27038 = cljs.core.count.call(null,inst_27036);var inst_27039 = (inst_27038 > 0);var state_27064__$1 = state_27064;if(cljs.core.truth_(inst_27039))
{var statearr_27068_27090 = state_27064__$1;(statearr_27068_27090[1] = 4);
} else
{var statearr_27069_27091 = state_27064__$1;(statearr_27069_27091[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27065 === 3))
{var inst_27062 = (state_27064[2]);var state_27064__$1 = state_27064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27064__$1,inst_27062);
} else
{if((state_val_27065 === 4))
{var inst_27036 = (state_27064[7]);var state_27064__$1 = state_27064;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27064__$1,7,inst_27036);
} else
{if((state_val_27065 === 5))
{var inst_27058 = cljs.core.async.close_BANG_.call(null,out);var state_27064__$1 = state_27064;var statearr_27070_27092 = state_27064__$1;(statearr_27070_27092[2] = inst_27058);
(statearr_27070_27092[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27065 === 6))
{var inst_27060 = (state_27064[2]);var state_27064__$1 = state_27064;var statearr_27071_27093 = state_27064__$1;(statearr_27071_27093[2] = inst_27060);
(statearr_27071_27093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27065 === 7))
{var inst_27043 = (state_27064[8]);var inst_27044 = (state_27064[9]);var inst_27043__$1 = (state_27064[2]);var inst_27044__$1 = cljs.core.nth.call(null,inst_27043__$1,0,null);var inst_27045 = cljs.core.nth.call(null,inst_27043__$1,1,null);var inst_27046 = (inst_27044__$1 == null);var state_27064__$1 = (function (){var statearr_27072 = state_27064;(statearr_27072[8] = inst_27043__$1);
(statearr_27072[10] = inst_27045);
(statearr_27072[9] = inst_27044__$1);
return statearr_27072;
})();if(cljs.core.truth_(inst_27046))
{var statearr_27073_27094 = state_27064__$1;(statearr_27073_27094[1] = 8);
} else
{var statearr_27074_27095 = state_27064__$1;(statearr_27074_27095[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27065 === 8))
{var inst_27036 = (state_27064[7]);var inst_27043 = (state_27064[8]);var inst_27045 = (state_27064[10]);var inst_27044 = (state_27064[9]);var inst_27048 = (function (){var c = inst_27045;var v = inst_27044;var vec__27041 = inst_27043;var cs = inst_27036;return ((function (c,v,vec__27041,cs,inst_27036,inst_27043,inst_27045,inst_27044,state_val_27065){
return (function (p1__26981_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26981_SHARP_);
});
;})(c,v,vec__27041,cs,inst_27036,inst_27043,inst_27045,inst_27044,state_val_27065))
})();var inst_27049 = cljs.core.filterv.call(null,inst_27048,inst_27036);var inst_27036__$1 = inst_27049;var state_27064__$1 = (function (){var statearr_27075 = state_27064;(statearr_27075[7] = inst_27036__$1);
return statearr_27075;
})();var statearr_27076_27096 = state_27064__$1;(statearr_27076_27096[2] = null);
(statearr_27076_27096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27065 === 9))
{var inst_27044 = (state_27064[9]);var state_27064__$1 = state_27064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27064__$1,11,out,inst_27044);
} else
{if((state_val_27065 === 10))
{var inst_27056 = (state_27064[2]);var state_27064__$1 = state_27064;var statearr_27078_27097 = state_27064__$1;(statearr_27078_27097[2] = inst_27056);
(statearr_27078_27097[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27065 === 11))
{var inst_27036 = (state_27064[7]);var inst_27053 = (state_27064[2]);var tmp27077 = inst_27036;var inst_27036__$1 = tmp27077;var state_27064__$1 = (function (){var statearr_27079 = state_27064;(statearr_27079[7] = inst_27036__$1);
(statearr_27079[11] = inst_27053);
return statearr_27079;
})();var statearr_27080_27098 = state_27064__$1;(statearr_27080_27098[2] = null);
(statearr_27080_27098[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27084 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27084[0] = state_machine__5548__auto__);
(statearr_27084[1] = 1);
return statearr_27084;
});
var state_machine__5548__auto____1 = (function (state_27064){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27064);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27085){if((e27085 instanceof Object))
{var ex__5551__auto__ = e27085;var statearr_27086_27099 = state_27064;(statearr_27086_27099[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27064);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27100 = state_27064;
state_27064 = G__27100;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27064){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27087 = f__5563__auto__.call(null);(statearr_27087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27088);
return statearr_27087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27170){var state_val_27171 = (state_27170[1]);if((state_val_27171 === 1))
{var inst_27147 = 0;var state_27170__$1 = (function (){var statearr_27172 = state_27170;(statearr_27172[7] = inst_27147);
return statearr_27172;
})();var statearr_27173_27194 = state_27170__$1;(statearr_27173_27194[2] = null);
(statearr_27173_27194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27171 === 2))
{var inst_27147 = (state_27170[7]);var inst_27149 = (inst_27147 < n);var state_27170__$1 = state_27170;if(cljs.core.truth_(inst_27149))
{var statearr_27174_27195 = state_27170__$1;(statearr_27174_27195[1] = 4);
} else
{var statearr_27175_27196 = state_27170__$1;(statearr_27175_27196[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27171 === 3))
{var inst_27167 = (state_27170[2]);var inst_27168 = cljs.core.async.close_BANG_.call(null,out);var state_27170__$1 = (function (){var statearr_27176 = state_27170;(statearr_27176[8] = inst_27167);
return statearr_27176;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27170__$1,inst_27168);
} else
{if((state_val_27171 === 4))
{var state_27170__$1 = state_27170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27170__$1,7,ch);
} else
{if((state_val_27171 === 5))
{var state_27170__$1 = state_27170;var statearr_27177_27197 = state_27170__$1;(statearr_27177_27197[2] = null);
(statearr_27177_27197[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27171 === 6))
{var inst_27165 = (state_27170[2]);var state_27170__$1 = state_27170;var statearr_27178_27198 = state_27170__$1;(statearr_27178_27198[2] = inst_27165);
(statearr_27178_27198[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27171 === 7))
{var inst_27152 = (state_27170[9]);var inst_27152__$1 = (state_27170[2]);var inst_27153 = (inst_27152__$1 == null);var inst_27154 = cljs.core.not.call(null,inst_27153);var state_27170__$1 = (function (){var statearr_27179 = state_27170;(statearr_27179[9] = inst_27152__$1);
return statearr_27179;
})();if(inst_27154)
{var statearr_27180_27199 = state_27170__$1;(statearr_27180_27199[1] = 8);
} else
{var statearr_27181_27200 = state_27170__$1;(statearr_27181_27200[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27171 === 8))
{var inst_27152 = (state_27170[9]);var state_27170__$1 = state_27170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27170__$1,11,out,inst_27152);
} else
{if((state_val_27171 === 9))
{var state_27170__$1 = state_27170;var statearr_27182_27201 = state_27170__$1;(statearr_27182_27201[2] = null);
(statearr_27182_27201[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27171 === 10))
{var inst_27162 = (state_27170[2]);var state_27170__$1 = state_27170;var statearr_27183_27202 = state_27170__$1;(statearr_27183_27202[2] = inst_27162);
(statearr_27183_27202[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27171 === 11))
{var inst_27147 = (state_27170[7]);var inst_27157 = (state_27170[2]);var inst_27158 = (inst_27147 + 1);var inst_27147__$1 = inst_27158;var state_27170__$1 = (function (){var statearr_27184 = state_27170;(statearr_27184[10] = inst_27157);
(statearr_27184[7] = inst_27147__$1);
return statearr_27184;
})();var statearr_27185_27203 = state_27170__$1;(statearr_27185_27203[2] = null);
(statearr_27185_27203[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27189 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27189[0] = state_machine__5548__auto__);
(statearr_27189[1] = 1);
return statearr_27189;
});
var state_machine__5548__auto____1 = (function (state_27170){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27170);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27190){if((e27190 instanceof Object))
{var ex__5551__auto__ = e27190;var statearr_27191_27204 = state_27170;(statearr_27191_27204[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27205 = state_27170;
state_27170 = G__27205;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27170){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27192 = f__5563__auto__.call(null);(statearr_27192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27193);
return statearr_27192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27302 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27277){var state_val_27278 = (state_27277[1]);if((state_val_27278 === 1))
{var inst_27254 = null;var state_27277__$1 = (function (){var statearr_27279 = state_27277;(statearr_27279[7] = inst_27254);
return statearr_27279;
})();var statearr_27280_27303 = state_27277__$1;(statearr_27280_27303[2] = null);
(statearr_27280_27303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27278 === 2))
{var state_27277__$1 = state_27277;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27277__$1,4,ch);
} else
{if((state_val_27278 === 3))
{var inst_27274 = (state_27277[2]);var inst_27275 = cljs.core.async.close_BANG_.call(null,out);var state_27277__$1 = (function (){var statearr_27281 = state_27277;(statearr_27281[8] = inst_27274);
return statearr_27281;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27277__$1,inst_27275);
} else
{if((state_val_27278 === 4))
{var inst_27257 = (state_27277[9]);var inst_27257__$1 = (state_27277[2]);var inst_27258 = (inst_27257__$1 == null);var inst_27259 = cljs.core.not.call(null,inst_27258);var state_27277__$1 = (function (){var statearr_27282 = state_27277;(statearr_27282[9] = inst_27257__$1);
return statearr_27282;
})();if(inst_27259)
{var statearr_27283_27304 = state_27277__$1;(statearr_27283_27304[1] = 5);
} else
{var statearr_27284_27305 = state_27277__$1;(statearr_27284_27305[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27278 === 5))
{var inst_27257 = (state_27277[9]);var inst_27254 = (state_27277[7]);var inst_27261 = cljs.core._EQ_.call(null,inst_27257,inst_27254);var state_27277__$1 = state_27277;if(inst_27261)
{var statearr_27285_27306 = state_27277__$1;(statearr_27285_27306[1] = 8);
} else
{var statearr_27286_27307 = state_27277__$1;(statearr_27286_27307[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27278 === 6))
{var state_27277__$1 = state_27277;var statearr_27288_27308 = state_27277__$1;(statearr_27288_27308[2] = null);
(statearr_27288_27308[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27278 === 7))
{var inst_27272 = (state_27277[2]);var state_27277__$1 = state_27277;var statearr_27289_27309 = state_27277__$1;(statearr_27289_27309[2] = inst_27272);
(statearr_27289_27309[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27278 === 8))
{var inst_27254 = (state_27277[7]);var tmp27287 = inst_27254;var inst_27254__$1 = tmp27287;var state_27277__$1 = (function (){var statearr_27290 = state_27277;(statearr_27290[7] = inst_27254__$1);
return statearr_27290;
})();var statearr_27291_27310 = state_27277__$1;(statearr_27291_27310[2] = null);
(statearr_27291_27310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27278 === 9))
{var inst_27257 = (state_27277[9]);var state_27277__$1 = state_27277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27277__$1,11,out,inst_27257);
} else
{if((state_val_27278 === 10))
{var inst_27269 = (state_27277[2]);var state_27277__$1 = state_27277;var statearr_27292_27311 = state_27277__$1;(statearr_27292_27311[2] = inst_27269);
(statearr_27292_27311[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27278 === 11))
{var inst_27257 = (state_27277[9]);var inst_27266 = (state_27277[2]);var inst_27254 = inst_27257;var state_27277__$1 = (function (){var statearr_27293 = state_27277;(statearr_27293[7] = inst_27254);
(statearr_27293[10] = inst_27266);
return statearr_27293;
})();var statearr_27294_27312 = state_27277__$1;(statearr_27294_27312[2] = null);
(statearr_27294_27312[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27298 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27298[0] = state_machine__5548__auto__);
(statearr_27298[1] = 1);
return statearr_27298;
});
var state_machine__5548__auto____1 = (function (state_27277){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27277);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27299){if((e27299 instanceof Object))
{var ex__5551__auto__ = e27299;var statearr_27300_27313 = state_27277;(statearr_27300_27313[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27277);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27314 = state_27277;
state_27277 = G__27314;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27277){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27301 = f__5563__auto__.call(null);(statearr_27301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27302);
return statearr_27301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27419){var state_val_27420 = (state_27419[1]);if((state_val_27420 === 1))
{var inst_27382 = (new Array(n));var inst_27383 = inst_27382;var inst_27384 = 0;var state_27419__$1 = (function (){var statearr_27421 = state_27419;(statearr_27421[7] = inst_27384);
(statearr_27421[8] = inst_27383);
return statearr_27421;
})();var statearr_27422_27450 = state_27419__$1;(statearr_27422_27450[2] = null);
(statearr_27422_27450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 2))
{var state_27419__$1 = state_27419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27419__$1,4,ch);
} else
{if((state_val_27420 === 3))
{var inst_27417 = (state_27419[2]);var state_27419__$1 = state_27419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27419__$1,inst_27417);
} else
{if((state_val_27420 === 4))
{var inst_27387 = (state_27419[9]);var inst_27387__$1 = (state_27419[2]);var inst_27388 = (inst_27387__$1 == null);var inst_27389 = cljs.core.not.call(null,inst_27388);var state_27419__$1 = (function (){var statearr_27423 = state_27419;(statearr_27423[9] = inst_27387__$1);
return statearr_27423;
})();if(inst_27389)
{var statearr_27424_27451 = state_27419__$1;(statearr_27424_27451[1] = 5);
} else
{var statearr_27425_27452 = state_27419__$1;(statearr_27425_27452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 5))
{var inst_27392 = (state_27419[10]);var inst_27387 = (state_27419[9]);var inst_27384 = (state_27419[7]);var inst_27383 = (state_27419[8]);var inst_27391 = (inst_27383[inst_27384] = inst_27387);var inst_27392__$1 = (inst_27384 + 1);var inst_27393 = (inst_27392__$1 < n);var state_27419__$1 = (function (){var statearr_27426 = state_27419;(statearr_27426[11] = inst_27391);
(statearr_27426[10] = inst_27392__$1);
return statearr_27426;
})();if(cljs.core.truth_(inst_27393))
{var statearr_27427_27453 = state_27419__$1;(statearr_27427_27453[1] = 8);
} else
{var statearr_27428_27454 = state_27419__$1;(statearr_27428_27454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 6))
{var inst_27384 = (state_27419[7]);var inst_27405 = (inst_27384 > 0);var state_27419__$1 = state_27419;if(cljs.core.truth_(inst_27405))
{var statearr_27430_27455 = state_27419__$1;(statearr_27430_27455[1] = 12);
} else
{var statearr_27431_27456 = state_27419__$1;(statearr_27431_27456[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 7))
{var inst_27415 = (state_27419[2]);var state_27419__$1 = state_27419;var statearr_27432_27457 = state_27419__$1;(statearr_27432_27457[2] = inst_27415);
(statearr_27432_27457[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 8))
{var inst_27392 = (state_27419[10]);var inst_27383 = (state_27419[8]);var tmp27429 = inst_27383;var inst_27383__$1 = tmp27429;var inst_27384 = inst_27392;var state_27419__$1 = (function (){var statearr_27433 = state_27419;(statearr_27433[7] = inst_27384);
(statearr_27433[8] = inst_27383__$1);
return statearr_27433;
})();var statearr_27434_27458 = state_27419__$1;(statearr_27434_27458[2] = null);
(statearr_27434_27458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 9))
{var inst_27383 = (state_27419[8]);var inst_27397 = cljs.core.vec.call(null,inst_27383);var state_27419__$1 = state_27419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27419__$1,11,out,inst_27397);
} else
{if((state_val_27420 === 10))
{var inst_27403 = (state_27419[2]);var state_27419__$1 = state_27419;var statearr_27435_27459 = state_27419__$1;(statearr_27435_27459[2] = inst_27403);
(statearr_27435_27459[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 11))
{var inst_27399 = (state_27419[2]);var inst_27400 = (new Array(n));var inst_27383 = inst_27400;var inst_27384 = 0;var state_27419__$1 = (function (){var statearr_27436 = state_27419;(statearr_27436[12] = inst_27399);
(statearr_27436[7] = inst_27384);
(statearr_27436[8] = inst_27383);
return statearr_27436;
})();var statearr_27437_27460 = state_27419__$1;(statearr_27437_27460[2] = null);
(statearr_27437_27460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 12))
{var inst_27383 = (state_27419[8]);var inst_27407 = cljs.core.vec.call(null,inst_27383);var state_27419__$1 = state_27419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27419__$1,15,out,inst_27407);
} else
{if((state_val_27420 === 13))
{var state_27419__$1 = state_27419;var statearr_27438_27461 = state_27419__$1;(statearr_27438_27461[2] = null);
(statearr_27438_27461[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 14))
{var inst_27412 = (state_27419[2]);var inst_27413 = cljs.core.async.close_BANG_.call(null,out);var state_27419__$1 = (function (){var statearr_27439 = state_27419;(statearr_27439[13] = inst_27412);
return statearr_27439;
})();var statearr_27440_27462 = state_27419__$1;(statearr_27440_27462[2] = inst_27413);
(statearr_27440_27462[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27420 === 15))
{var inst_27409 = (state_27419[2]);var state_27419__$1 = state_27419;var statearr_27441_27463 = state_27419__$1;(statearr_27441_27463[2] = inst_27409);
(statearr_27441_27463[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27445[0] = state_machine__5548__auto__);
(statearr_27445[1] = 1);
return statearr_27445;
});
var state_machine__5548__auto____1 = (function (state_27419){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27419);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27446){if((e27446 instanceof Object))
{var ex__5551__auto__ = e27446;var statearr_27447_27464 = state_27419;(statearr_27447_27464[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27465 = state_27419;
state_27419 = G__27465;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27419){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27448 = f__5563__auto__.call(null);(statearr_27448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27449);
return statearr_27448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27608 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27578){var state_val_27579 = (state_27578[1]);if((state_val_27579 === 1))
{var inst_27537 = [];var inst_27538 = inst_27537;var inst_27539 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27578__$1 = (function (){var statearr_27580 = state_27578;(statearr_27580[7] = inst_27538);
(statearr_27580[8] = inst_27539);
return statearr_27580;
})();var statearr_27581_27609 = state_27578__$1;(statearr_27581_27609[2] = null);
(statearr_27581_27609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 2))
{var state_27578__$1 = state_27578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27578__$1,4,ch);
} else
{if((state_val_27579 === 3))
{var inst_27576 = (state_27578[2]);var state_27578__$1 = state_27578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27578__$1,inst_27576);
} else
{if((state_val_27579 === 4))
{var inst_27542 = (state_27578[9]);var inst_27542__$1 = (state_27578[2]);var inst_27543 = (inst_27542__$1 == null);var inst_27544 = cljs.core.not.call(null,inst_27543);var state_27578__$1 = (function (){var statearr_27582 = state_27578;(statearr_27582[9] = inst_27542__$1);
return statearr_27582;
})();if(inst_27544)
{var statearr_27583_27610 = state_27578__$1;(statearr_27583_27610[1] = 5);
} else
{var statearr_27584_27611 = state_27578__$1;(statearr_27584_27611[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 5))
{var inst_27539 = (state_27578[8]);var inst_27546 = (state_27578[10]);var inst_27542 = (state_27578[9]);var inst_27546__$1 = f.call(null,inst_27542);var inst_27547 = cljs.core._EQ_.call(null,inst_27546__$1,inst_27539);var inst_27548 = cljs.core.keyword_identical_QMARK_.call(null,inst_27539,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27549 = (inst_27547) || (inst_27548);var state_27578__$1 = (function (){var statearr_27585 = state_27578;(statearr_27585[10] = inst_27546__$1);
return statearr_27585;
})();if(cljs.core.truth_(inst_27549))
{var statearr_27586_27612 = state_27578__$1;(statearr_27586_27612[1] = 8);
} else
{var statearr_27587_27613 = state_27578__$1;(statearr_27587_27613[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 6))
{var inst_27538 = (state_27578[7]);var inst_27563 = inst_27538.length;var inst_27564 = (inst_27563 > 0);var state_27578__$1 = state_27578;if(cljs.core.truth_(inst_27564))
{var statearr_27589_27614 = state_27578__$1;(statearr_27589_27614[1] = 12);
} else
{var statearr_27590_27615 = state_27578__$1;(statearr_27590_27615[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 7))
{var inst_27574 = (state_27578[2]);var state_27578__$1 = state_27578;var statearr_27591_27616 = state_27578__$1;(statearr_27591_27616[2] = inst_27574);
(statearr_27591_27616[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 8))
{var inst_27538 = (state_27578[7]);var inst_27546 = (state_27578[10]);var inst_27542 = (state_27578[9]);var inst_27551 = inst_27538.push(inst_27542);var tmp27588 = inst_27538;var inst_27538__$1 = tmp27588;var inst_27539 = inst_27546;var state_27578__$1 = (function (){var statearr_27592 = state_27578;(statearr_27592[11] = inst_27551);
(statearr_27592[7] = inst_27538__$1);
(statearr_27592[8] = inst_27539);
return statearr_27592;
})();var statearr_27593_27617 = state_27578__$1;(statearr_27593_27617[2] = null);
(statearr_27593_27617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 9))
{var inst_27538 = (state_27578[7]);var inst_27554 = cljs.core.vec.call(null,inst_27538);var state_27578__$1 = state_27578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27578__$1,11,out,inst_27554);
} else
{if((state_val_27579 === 10))
{var inst_27561 = (state_27578[2]);var state_27578__$1 = state_27578;var statearr_27594_27618 = state_27578__$1;(statearr_27594_27618[2] = inst_27561);
(statearr_27594_27618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 11))
{var inst_27546 = (state_27578[10]);var inst_27542 = (state_27578[9]);var inst_27556 = (state_27578[2]);var inst_27557 = [];var inst_27558 = inst_27557.push(inst_27542);var inst_27538 = inst_27557;var inst_27539 = inst_27546;var state_27578__$1 = (function (){var statearr_27595 = state_27578;(statearr_27595[12] = inst_27558);
(statearr_27595[13] = inst_27556);
(statearr_27595[7] = inst_27538);
(statearr_27595[8] = inst_27539);
return statearr_27595;
})();var statearr_27596_27619 = state_27578__$1;(statearr_27596_27619[2] = null);
(statearr_27596_27619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 12))
{var inst_27538 = (state_27578[7]);var inst_27566 = cljs.core.vec.call(null,inst_27538);var state_27578__$1 = state_27578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27578__$1,15,out,inst_27566);
} else
{if((state_val_27579 === 13))
{var state_27578__$1 = state_27578;var statearr_27597_27620 = state_27578__$1;(statearr_27597_27620[2] = null);
(statearr_27597_27620[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 14))
{var inst_27571 = (state_27578[2]);var inst_27572 = cljs.core.async.close_BANG_.call(null,out);var state_27578__$1 = (function (){var statearr_27598 = state_27578;(statearr_27598[14] = inst_27571);
return statearr_27598;
})();var statearr_27599_27621 = state_27578__$1;(statearr_27599_27621[2] = inst_27572);
(statearr_27599_27621[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27579 === 15))
{var inst_27568 = (state_27578[2]);var state_27578__$1 = state_27578;var statearr_27600_27622 = state_27578__$1;(statearr_27600_27622[2] = inst_27568);
(statearr_27600_27622[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27604[0] = state_machine__5548__auto__);
(statearr_27604[1] = 1);
return statearr_27604;
});
var state_machine__5548__auto____1 = (function (state_27578){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27578);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27605){if((e27605 instanceof Object))
{var ex__5551__auto__ = e27605;var statearr_27606_27623 = state_27578;(statearr_27606_27623[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27624 = state_27578;
state_27578 = G__27624;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27578){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27607 = f__5563__auto__.call(null);(statearr_27607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27608);
return statearr_27607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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