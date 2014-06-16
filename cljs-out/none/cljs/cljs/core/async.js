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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24914 = (function (f,fn_handler,meta24915){
this.f = f;
this.fn_handler = fn_handler;
this.meta24915 = meta24915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24914.cljs$lang$type = true;
cljs.core.async.t24914.cljs$lang$ctorStr = "cljs.core.async/t24914";
cljs.core.async.t24914.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24914");
});
cljs.core.async.t24914.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24916){var self__ = this;
var _24916__$1 = this;return self__.meta24915;
});
cljs.core.async.t24914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24916,meta24915__$1){var self__ = this;
var _24916__$1 = this;return (new cljs.core.async.t24914(self__.f,self__.fn_handler,meta24915__$1));
});
cljs.core.async.__GT_t24914 = (function __GT_t24914(f__$1,fn_handler__$1,meta24915){return (new cljs.core.async.t24914(f__$1,fn_handler__$1,meta24915));
});
}
return (new cljs.core.async.t24914(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24918 = buff;if(G__24918)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__24918.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24918.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24918);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24918);
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
{var val_24919 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24919);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_24919);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___24920 = n;var x_24921 = 0;while(true){
if((x_24921 < n__4289__auto___24920))
{(a[x_24921] = 0);
{
var G__24922 = (x_24921 + 1);
x_24921 = G__24922;
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
var G__24923 = (i + 1);
i = G__24923;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24927 = (function (flag,alt_flag,meta24928){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24928 = meta24928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24927.cljs$lang$type = true;
cljs.core.async.t24927.cljs$lang$ctorStr = "cljs.core.async/t24927";
cljs.core.async.t24927.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24927");
});
cljs.core.async.t24927.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t24927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t24927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24929){var self__ = this;
var _24929__$1 = this;return self__.meta24928;
});
cljs.core.async.t24927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24929,meta24928__$1){var self__ = this;
var _24929__$1 = this;return (new cljs.core.async.t24927(self__.flag,self__.alt_flag,meta24928__$1));
});
cljs.core.async.__GT_t24927 = (function __GT_t24927(flag__$1,alt_flag__$1,meta24928){return (new cljs.core.async.t24927(flag__$1,alt_flag__$1,meta24928));
});
}
return (new cljs.core.async.t24927(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24933 = (function (cb,flag,alt_handler,meta24934){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24934 = meta24934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24933.cljs$lang$type = true;
cljs.core.async.t24933.cljs$lang$ctorStr = "cljs.core.async/t24933";
cljs.core.async.t24933.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24933");
});
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24935){var self__ = this;
var _24935__$1 = this;return self__.meta24934;
});
cljs.core.async.t24933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24935,meta24934__$1){var self__ = this;
var _24935__$1 = this;return (new cljs.core.async.t24933(self__.cb,self__.flag,self__.alt_handler,meta24934__$1));
});
cljs.core.async.__GT_t24933 = (function __GT_t24933(cb__$1,flag__$1,alt_handler__$1,meta24934){return (new cljs.core.async.t24933(cb__$1,flag__$1,alt_handler__$1,meta24934));
});
}
return (new cljs.core.async.t24933(cb,flag,alt_handler,null));
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
return (function (p1__24936_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24936_SHARP_,port], null));
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
var G__24937 = (i + 1);
i = G__24937;
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
var alts_BANG___delegate = function (ports,p__24938){var map__24940 = p__24938;var map__24940__$1 = ((cljs.core.seq_QMARK_.call(null,map__24940))?cljs.core.apply.call(null,cljs.core.hash_map,map__24940):map__24940);var opts = map__24940__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24938 = null;if (arguments.length > 1) {
  p__24938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24938);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24941){
var ports = cljs.core.first(arglist__24941);
var p__24938 = cljs.core.rest(arglist__24941);
return alts_BANG___delegate(ports,p__24938);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24949 = (function (ch,f,map_LT_,meta24950){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24950 = meta24950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24949.cljs$lang$type = true;
cljs.core.async.t24949.cljs$lang$ctorStr = "cljs.core.async/t24949";
cljs.core.async.t24949.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24949");
});
cljs.core.async.t24949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t24949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24952 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24952 = (function (fn1,_,meta24950,ch,f,map_LT_,meta24953){
this.fn1 = fn1;
this._ = _;
this.meta24950 = meta24950;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24953 = meta24953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24952.cljs$lang$type = true;
cljs.core.async.t24952.cljs$lang$ctorStr = "cljs.core.async/t24952";
cljs.core.async.t24952.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24952");
});
cljs.core.async.t24952.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t24952.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t24952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__24942_SHARP_){return f1.call(null,(((p1__24942_SHARP_ == null))?null:self__.f.call(null,p1__24942_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t24952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24954){var self__ = this;
var _24954__$1 = this;return self__.meta24953;
});
cljs.core.async.t24952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24954,meta24953__$1){var self__ = this;
var _24954__$1 = this;return (new cljs.core.async.t24952(self__.fn1,self__._,self__.meta24950,self__.ch,self__.f,self__.map_LT_,meta24953__$1));
});
cljs.core.async.__GT_t24952 = (function __GT_t24952(fn1__$1,___$2,meta24950__$1,ch__$2,f__$2,map_LT___$2,meta24953){return (new cljs.core.async.t24952(fn1__$1,___$2,meta24950__$1,ch__$2,f__$2,map_LT___$2,meta24953));
});
}
return (new cljs.core.async.t24952(fn1,___$1,self__.meta24950,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24949.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24951){var self__ = this;
var _24951__$1 = this;return self__.meta24950;
});
cljs.core.async.t24949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24951,meta24950__$1){var self__ = this;
var _24951__$1 = this;return (new cljs.core.async.t24949(self__.ch,self__.f,self__.map_LT_,meta24950__$1));
});
cljs.core.async.__GT_t24949 = (function __GT_t24949(ch__$1,f__$1,map_LT___$1,meta24950){return (new cljs.core.async.t24949(ch__$1,f__$1,map_LT___$1,meta24950));
});
}
return (new cljs.core.async.t24949(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24958 = (function (ch,f,map_GT_,meta24959){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24959 = meta24959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24958.cljs$lang$type = true;
cljs.core.async.t24958.cljs$lang$ctorStr = "cljs.core.async/t24958";
cljs.core.async.t24958.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24958");
});
cljs.core.async.t24958.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t24958.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24958.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24960){var self__ = this;
var _24960__$1 = this;return self__.meta24959;
});
cljs.core.async.t24958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24960,meta24959__$1){var self__ = this;
var _24960__$1 = this;return (new cljs.core.async.t24958(self__.ch,self__.f,self__.map_GT_,meta24959__$1));
});
cljs.core.async.__GT_t24958 = (function __GT_t24958(ch__$1,f__$1,map_GT___$1,meta24959){return (new cljs.core.async.t24958(ch__$1,f__$1,map_GT___$1,meta24959));
});
}
return (new cljs.core.async.t24958(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24964 = (function (ch,p,filter_GT_,meta24965){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24965 = meta24965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24964.cljs$lang$type = true;
cljs.core.async.t24964.cljs$lang$ctorStr = "cljs.core.async/t24964";
cljs.core.async.t24964.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24964");
});
cljs.core.async.t24964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t24964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24964.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24966){var self__ = this;
var _24966__$1 = this;return self__.meta24965;
});
cljs.core.async.t24964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24966,meta24965__$1){var self__ = this;
var _24966__$1 = this;return (new cljs.core.async.t24964(self__.ch,self__.p,self__.filter_GT_,meta24965__$1));
});
cljs.core.async.__GT_t24964 = (function __GT_t24964(ch__$1,p__$1,filter_GT___$1,meta24965){return (new cljs.core.async.t24964(ch__$1,p__$1,filter_GT___$1,meta24965));
});
}
return (new cljs.core.async.t24964(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___25049 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25028){var state_val_25029 = (state_25028[1]);if((state_val_25029 === 1))
{var state_25028__$1 = state_25028;var statearr_25030_25050 = state_25028__$1;(statearr_25030_25050[2] = null);
(statearr_25030_25050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25029 === 2))
{var state_25028__$1 = state_25028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25028__$1,4,ch);
} else
{if((state_val_25029 === 3))
{var inst_25026 = (state_25028[2]);var state_25028__$1 = state_25028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25028__$1,inst_25026);
} else
{if((state_val_25029 === 4))
{var inst_25010 = (state_25028[7]);var inst_25010__$1 = (state_25028[2]);var inst_25011 = (inst_25010__$1 == null);var state_25028__$1 = (function (){var statearr_25031 = state_25028;(statearr_25031[7] = inst_25010__$1);
return statearr_25031;
})();if(cljs.core.truth_(inst_25011))
{var statearr_25032_25051 = state_25028__$1;(statearr_25032_25051[1] = 5);
} else
{var statearr_25033_25052 = state_25028__$1;(statearr_25033_25052[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25029 === 5))
{var inst_25013 = cljs.core.async.close_BANG_.call(null,out);var state_25028__$1 = state_25028;var statearr_25034_25053 = state_25028__$1;(statearr_25034_25053[2] = inst_25013);
(statearr_25034_25053[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25029 === 6))
{var inst_25010 = (state_25028[7]);var inst_25015 = p.call(null,inst_25010);var state_25028__$1 = state_25028;if(cljs.core.truth_(inst_25015))
{var statearr_25035_25054 = state_25028__$1;(statearr_25035_25054[1] = 8);
} else
{var statearr_25036_25055 = state_25028__$1;(statearr_25036_25055[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25029 === 7))
{var inst_25024 = (state_25028[2]);var state_25028__$1 = state_25028;var statearr_25037_25056 = state_25028__$1;(statearr_25037_25056[2] = inst_25024);
(statearr_25037_25056[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25029 === 8))
{var inst_25010 = (state_25028[7]);var state_25028__$1 = state_25028;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25028__$1,11,out,inst_25010);
} else
{if((state_val_25029 === 9))
{var state_25028__$1 = state_25028;var statearr_25038_25057 = state_25028__$1;(statearr_25038_25057[2] = null);
(statearr_25038_25057[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25029 === 10))
{var inst_25021 = (state_25028[2]);var state_25028__$1 = (function (){var statearr_25039 = state_25028;(statearr_25039[8] = inst_25021);
return statearr_25039;
})();var statearr_25040_25058 = state_25028__$1;(statearr_25040_25058[2] = null);
(statearr_25040_25058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25029 === 11))
{var inst_25018 = (state_25028[2]);var state_25028__$1 = state_25028;var statearr_25041_25059 = state_25028__$1;(statearr_25041_25059[2] = inst_25018);
(statearr_25041_25059[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_25045 = [null,null,null,null,null,null,null,null,null];(statearr_25045[0] = state_machine__5548__auto__);
(statearr_25045[1] = 1);
return statearr_25045;
});
var state_machine__5548__auto____1 = (function (state_25028){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25028);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25046){if((e25046 instanceof Object))
{var ex__5551__auto__ = e25046;var statearr_25047_25060 = state_25028;(statearr_25047_25060[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25061 = state_25028;
state_25028 = G__25061;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25028){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25048 = f__5563__auto__.call(null);(statearr_25048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25049);
return statearr_25048;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25213){var state_val_25214 = (state_25213[1]);if((state_val_25214 === 1))
{var state_25213__$1 = state_25213;var statearr_25215_25252 = state_25213__$1;(statearr_25215_25252[2] = null);
(statearr_25215_25252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 2))
{var state_25213__$1 = state_25213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25213__$1,4,in$);
} else
{if((state_val_25214 === 3))
{var inst_25211 = (state_25213[2]);var state_25213__$1 = state_25213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25213__$1,inst_25211);
} else
{if((state_val_25214 === 4))
{var inst_25159 = (state_25213[7]);var inst_25159__$1 = (state_25213[2]);var inst_25160 = (inst_25159__$1 == null);var state_25213__$1 = (function (){var statearr_25216 = state_25213;(statearr_25216[7] = inst_25159__$1);
return statearr_25216;
})();if(cljs.core.truth_(inst_25160))
{var statearr_25217_25253 = state_25213__$1;(statearr_25217_25253[1] = 5);
} else
{var statearr_25218_25254 = state_25213__$1;(statearr_25218_25254[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 5))
{var inst_25162 = cljs.core.async.close_BANG_.call(null,out);var state_25213__$1 = state_25213;var statearr_25219_25255 = state_25213__$1;(statearr_25219_25255[2] = inst_25162);
(statearr_25219_25255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 6))
{var inst_25159 = (state_25213[7]);var inst_25164 = f.call(null,inst_25159);var inst_25169 = cljs.core.seq.call(null,inst_25164);var inst_25170 = inst_25169;var inst_25171 = null;var inst_25172 = 0;var inst_25173 = 0;var state_25213__$1 = (function (){var statearr_25220 = state_25213;(statearr_25220[8] = inst_25173);
(statearr_25220[9] = inst_25172);
(statearr_25220[10] = inst_25170);
(statearr_25220[11] = inst_25171);
return statearr_25220;
})();var statearr_25221_25256 = state_25213__$1;(statearr_25221_25256[2] = null);
(statearr_25221_25256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 7))
{var inst_25209 = (state_25213[2]);var state_25213__$1 = state_25213;var statearr_25222_25257 = state_25213__$1;(statearr_25222_25257[2] = inst_25209);
(statearr_25222_25257[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 8))
{var inst_25173 = (state_25213[8]);var inst_25172 = (state_25213[9]);var inst_25175 = (inst_25173 < inst_25172);var inst_25176 = inst_25175;var state_25213__$1 = state_25213;if(cljs.core.truth_(inst_25176))
{var statearr_25223_25258 = state_25213__$1;(statearr_25223_25258[1] = 10);
} else
{var statearr_25224_25259 = state_25213__$1;(statearr_25224_25259[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 9))
{var inst_25206 = (state_25213[2]);var state_25213__$1 = (function (){var statearr_25225 = state_25213;(statearr_25225[12] = inst_25206);
return statearr_25225;
})();var statearr_25226_25260 = state_25213__$1;(statearr_25226_25260[2] = null);
(statearr_25226_25260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 10))
{var inst_25173 = (state_25213[8]);var inst_25171 = (state_25213[11]);var inst_25178 = cljs.core._nth.call(null,inst_25171,inst_25173);var state_25213__$1 = state_25213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25213__$1,13,out,inst_25178);
} else
{if((state_val_25214 === 11))
{var inst_25184 = (state_25213[13]);var inst_25170 = (state_25213[10]);var inst_25184__$1 = cljs.core.seq.call(null,inst_25170);var state_25213__$1 = (function (){var statearr_25230 = state_25213;(statearr_25230[13] = inst_25184__$1);
return statearr_25230;
})();if(inst_25184__$1)
{var statearr_25231_25261 = state_25213__$1;(statearr_25231_25261[1] = 14);
} else
{var statearr_25232_25262 = state_25213__$1;(statearr_25232_25262[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 12))
{var inst_25204 = (state_25213[2]);var state_25213__$1 = state_25213;var statearr_25233_25263 = state_25213__$1;(statearr_25233_25263[2] = inst_25204);
(statearr_25233_25263[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 13))
{var inst_25173 = (state_25213[8]);var inst_25172 = (state_25213[9]);var inst_25170 = (state_25213[10]);var inst_25171 = (state_25213[11]);var inst_25180 = (state_25213[2]);var inst_25181 = (inst_25173 + 1);var tmp25227 = inst_25172;var tmp25228 = inst_25170;var tmp25229 = inst_25171;var inst_25170__$1 = tmp25228;var inst_25171__$1 = tmp25229;var inst_25172__$1 = tmp25227;var inst_25173__$1 = inst_25181;var state_25213__$1 = (function (){var statearr_25234 = state_25213;(statearr_25234[8] = inst_25173__$1);
(statearr_25234[9] = inst_25172__$1);
(statearr_25234[14] = inst_25180);
(statearr_25234[10] = inst_25170__$1);
(statearr_25234[11] = inst_25171__$1);
return statearr_25234;
})();var statearr_25235_25264 = state_25213__$1;(statearr_25235_25264[2] = null);
(statearr_25235_25264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 14))
{var inst_25184 = (state_25213[13]);var inst_25186 = cljs.core.chunked_seq_QMARK_.call(null,inst_25184);var state_25213__$1 = state_25213;if(inst_25186)
{var statearr_25236_25265 = state_25213__$1;(statearr_25236_25265[1] = 17);
} else
{var statearr_25237_25266 = state_25213__$1;(statearr_25237_25266[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 15))
{var state_25213__$1 = state_25213;var statearr_25238_25267 = state_25213__$1;(statearr_25238_25267[2] = null);
(statearr_25238_25267[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 16))
{var inst_25202 = (state_25213[2]);var state_25213__$1 = state_25213;var statearr_25239_25268 = state_25213__$1;(statearr_25239_25268[2] = inst_25202);
(statearr_25239_25268[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 17))
{var inst_25184 = (state_25213[13]);var inst_25188 = cljs.core.chunk_first.call(null,inst_25184);var inst_25189 = cljs.core.chunk_rest.call(null,inst_25184);var inst_25190 = cljs.core.count.call(null,inst_25188);var inst_25170 = inst_25189;var inst_25171 = inst_25188;var inst_25172 = inst_25190;var inst_25173 = 0;var state_25213__$1 = (function (){var statearr_25240 = state_25213;(statearr_25240[8] = inst_25173);
(statearr_25240[9] = inst_25172);
(statearr_25240[10] = inst_25170);
(statearr_25240[11] = inst_25171);
return statearr_25240;
})();var statearr_25241_25269 = state_25213__$1;(statearr_25241_25269[2] = null);
(statearr_25241_25269[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 18))
{var inst_25184 = (state_25213[13]);var inst_25193 = cljs.core.first.call(null,inst_25184);var state_25213__$1 = state_25213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25213__$1,20,out,inst_25193);
} else
{if((state_val_25214 === 19))
{var inst_25199 = (state_25213[2]);var state_25213__$1 = state_25213;var statearr_25242_25270 = state_25213__$1;(statearr_25242_25270[2] = inst_25199);
(statearr_25242_25270[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25214 === 20))
{var inst_25184 = (state_25213[13]);var inst_25195 = (state_25213[2]);var inst_25196 = cljs.core.next.call(null,inst_25184);var inst_25170 = inst_25196;var inst_25171 = null;var inst_25172 = 0;var inst_25173 = 0;var state_25213__$1 = (function (){var statearr_25243 = state_25213;(statearr_25243[8] = inst_25173);
(statearr_25243[9] = inst_25172);
(statearr_25243[15] = inst_25195);
(statearr_25243[10] = inst_25170);
(statearr_25243[11] = inst_25171);
return statearr_25243;
})();var statearr_25244_25271 = state_25213__$1;(statearr_25244_25271[2] = null);
(statearr_25244_25271[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_25248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25248[0] = state_machine__5548__auto__);
(statearr_25248[1] = 1);
return statearr_25248;
});
var state_machine__5548__auto____1 = (function (state_25213){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25249){if((e25249 instanceof Object))
{var ex__5551__auto__ = e25249;var statearr_25250_25272 = state_25213;(statearr_25250_25272[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25273 = state_25213;
state_25213 = G__25273;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25213){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25251 = f__5563__auto__.call(null);(statearr_25251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25251;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___25354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25333){var state_val_25334 = (state_25333[1]);if((state_val_25334 === 1))
{var state_25333__$1 = state_25333;var statearr_25335_25355 = state_25333__$1;(statearr_25335_25355[2] = null);
(statearr_25335_25355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 2))
{var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,4,from);
} else
{if((state_val_25334 === 3))
{var inst_25331 = (state_25333[2]);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else
{if((state_val_25334 === 4))
{var inst_25316 = (state_25333[7]);var inst_25316__$1 = (state_25333[2]);var inst_25317 = (inst_25316__$1 == null);var state_25333__$1 = (function (){var statearr_25336 = state_25333;(statearr_25336[7] = inst_25316__$1);
return statearr_25336;
})();if(cljs.core.truth_(inst_25317))
{var statearr_25337_25356 = state_25333__$1;(statearr_25337_25356[1] = 5);
} else
{var statearr_25338_25357 = state_25333__$1;(statearr_25338_25357[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 5))
{var state_25333__$1 = state_25333;if(cljs.core.truth_(close_QMARK_))
{var statearr_25339_25358 = state_25333__$1;(statearr_25339_25358[1] = 8);
} else
{var statearr_25340_25359 = state_25333__$1;(statearr_25340_25359[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 6))
{var inst_25316 = (state_25333[7]);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,11,to,inst_25316);
} else
{if((state_val_25334 === 7))
{var inst_25329 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25341_25360 = state_25333__$1;(statearr_25341_25360[2] = inst_25329);
(statearr_25341_25360[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 8))
{var inst_25320 = cljs.core.async.close_BANG_.call(null,to);var state_25333__$1 = state_25333;var statearr_25342_25361 = state_25333__$1;(statearr_25342_25361[2] = inst_25320);
(statearr_25342_25361[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 9))
{var state_25333__$1 = state_25333;var statearr_25343_25362 = state_25333__$1;(statearr_25343_25362[2] = null);
(statearr_25343_25362[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 10))
{var inst_25323 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25344_25363 = state_25333__$1;(statearr_25344_25363[2] = inst_25323);
(statearr_25344_25363[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 11))
{var inst_25326 = (state_25333[2]);var state_25333__$1 = (function (){var statearr_25345 = state_25333;(statearr_25345[8] = inst_25326);
return statearr_25345;
})();var statearr_25346_25364 = state_25333__$1;(statearr_25346_25364[2] = null);
(statearr_25346_25364[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_25350 = [null,null,null,null,null,null,null,null,null];(statearr_25350[0] = state_machine__5548__auto__);
(statearr_25350[1] = 1);
return statearr_25350;
});
var state_machine__5548__auto____1 = (function (state_25333){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25333);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25351){if((e25351 instanceof Object))
{var ex__5551__auto__ = e25351;var statearr_25352_25365 = state_25333;(statearr_25352_25365[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25366 = state_25333;
state_25333 = G__25366;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25353 = f__5563__auto__.call(null);(statearr_25353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25354);
return statearr_25353;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___25453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25431){var state_val_25432 = (state_25431[1]);if((state_val_25432 === 1))
{var state_25431__$1 = state_25431;var statearr_25433_25454 = state_25431__$1;(statearr_25433_25454[2] = null);
(statearr_25433_25454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 2))
{var state_25431__$1 = state_25431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,4,ch);
} else
{if((state_val_25432 === 3))
{var inst_25429 = (state_25431[2]);var state_25431__$1 = state_25431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else
{if((state_val_25432 === 4))
{var inst_25412 = (state_25431[7]);var inst_25412__$1 = (state_25431[2]);var inst_25413 = (inst_25412__$1 == null);var state_25431__$1 = (function (){var statearr_25434 = state_25431;(statearr_25434[7] = inst_25412__$1);
return statearr_25434;
})();if(cljs.core.truth_(inst_25413))
{var statearr_25435_25455 = state_25431__$1;(statearr_25435_25455[1] = 5);
} else
{var statearr_25436_25456 = state_25431__$1;(statearr_25436_25456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 5))
{var inst_25415 = cljs.core.async.close_BANG_.call(null,tc);var inst_25416 = cljs.core.async.close_BANG_.call(null,fc);var state_25431__$1 = (function (){var statearr_25437 = state_25431;(statearr_25437[8] = inst_25415);
return statearr_25437;
})();var statearr_25438_25457 = state_25431__$1;(statearr_25438_25457[2] = inst_25416);
(statearr_25438_25457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 6))
{var inst_25412 = (state_25431[7]);var inst_25418 = p.call(null,inst_25412);var state_25431__$1 = state_25431;if(cljs.core.truth_(inst_25418))
{var statearr_25439_25458 = state_25431__$1;(statearr_25439_25458[1] = 9);
} else
{var statearr_25440_25459 = state_25431__$1;(statearr_25440_25459[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 7))
{var inst_25427 = (state_25431[2]);var state_25431__$1 = state_25431;var statearr_25441_25460 = state_25431__$1;(statearr_25441_25460[2] = inst_25427);
(statearr_25441_25460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 8))
{var inst_25424 = (state_25431[2]);var state_25431__$1 = (function (){var statearr_25442 = state_25431;(statearr_25442[9] = inst_25424);
return statearr_25442;
})();var statearr_25443_25461 = state_25431__$1;(statearr_25443_25461[2] = null);
(statearr_25443_25461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 9))
{var state_25431__$1 = state_25431;var statearr_25444_25462 = state_25431__$1;(statearr_25444_25462[2] = tc);
(statearr_25444_25462[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 10))
{var state_25431__$1 = state_25431;var statearr_25445_25463 = state_25431__$1;(statearr_25445_25463[2] = fc);
(statearr_25445_25463[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25432 === 11))
{var inst_25412 = (state_25431[7]);var inst_25422 = (state_25431[2]);var state_25431__$1 = state_25431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25431__$1,8,inst_25422,inst_25412);
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
var state_machine__5548__auto____0 = (function (){var statearr_25449 = [null,null,null,null,null,null,null,null,null,null];(statearr_25449[0] = state_machine__5548__auto__);
(statearr_25449[1] = 1);
return statearr_25449;
});
var state_machine__5548__auto____1 = (function (state_25431){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25431);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25450){if((e25450 instanceof Object))
{var ex__5551__auto__ = e25450;var statearr_25451_25464 = state_25431;(statearr_25451_25464[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25465 = state_25431;
state_25431 = G__25465;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25452 = f__5563__auto__.call(null);(statearr_25452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25453);
return statearr_25452;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25512){var state_val_25513 = (state_25512[1]);if((state_val_25513 === 7))
{var inst_25508 = (state_25512[2]);var state_25512__$1 = state_25512;var statearr_25514_25530 = state_25512__$1;(statearr_25514_25530[2] = inst_25508);
(statearr_25514_25530[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25513 === 6))
{var inst_25498 = (state_25512[7]);var inst_25501 = (state_25512[8]);var inst_25505 = f.call(null,inst_25498,inst_25501);var inst_25498__$1 = inst_25505;var state_25512__$1 = (function (){var statearr_25515 = state_25512;(statearr_25515[7] = inst_25498__$1);
return statearr_25515;
})();var statearr_25516_25531 = state_25512__$1;(statearr_25516_25531[2] = null);
(statearr_25516_25531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25513 === 5))
{var inst_25498 = (state_25512[7]);var state_25512__$1 = state_25512;var statearr_25517_25532 = state_25512__$1;(statearr_25517_25532[2] = inst_25498);
(statearr_25517_25532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25513 === 4))
{var inst_25501 = (state_25512[8]);var inst_25501__$1 = (state_25512[2]);var inst_25502 = (inst_25501__$1 == null);var state_25512__$1 = (function (){var statearr_25518 = state_25512;(statearr_25518[8] = inst_25501__$1);
return statearr_25518;
})();if(cljs.core.truth_(inst_25502))
{var statearr_25519_25533 = state_25512__$1;(statearr_25519_25533[1] = 5);
} else
{var statearr_25520_25534 = state_25512__$1;(statearr_25520_25534[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25513 === 3))
{var inst_25510 = (state_25512[2]);var state_25512__$1 = state_25512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25512__$1,inst_25510);
} else
{if((state_val_25513 === 2))
{var state_25512__$1 = state_25512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25512__$1,4,ch);
} else
{if((state_val_25513 === 1))
{var inst_25498 = init;var state_25512__$1 = (function (){var statearr_25521 = state_25512;(statearr_25521[7] = inst_25498);
return statearr_25521;
})();var statearr_25522_25535 = state_25512__$1;(statearr_25522_25535[2] = null);
(statearr_25522_25535[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_25526 = [null,null,null,null,null,null,null,null,null];(statearr_25526[0] = state_machine__5548__auto__);
(statearr_25526[1] = 1);
return statearr_25526;
});
var state_machine__5548__auto____1 = (function (state_25512){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25512);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25527){if((e25527 instanceof Object))
{var ex__5551__auto__ = e25527;var statearr_25528_25536 = state_25512;(statearr_25528_25536[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25537 = state_25512;
state_25512 = G__25537;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25512){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25529 = f__5563__auto__.call(null);(statearr_25529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25529;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25599){var state_val_25600 = (state_25599[1]);if((state_val_25600 === 1))
{var inst_25579 = cljs.core.seq.call(null,coll);var inst_25580 = inst_25579;var state_25599__$1 = (function (){var statearr_25601 = state_25599;(statearr_25601[7] = inst_25580);
return statearr_25601;
})();var statearr_25602_25620 = state_25599__$1;(statearr_25602_25620[2] = null);
(statearr_25602_25620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 2))
{var inst_25580 = (state_25599[7]);var state_25599__$1 = state_25599;if(cljs.core.truth_(inst_25580))
{var statearr_25603_25621 = state_25599__$1;(statearr_25603_25621[1] = 4);
} else
{var statearr_25604_25622 = state_25599__$1;(statearr_25604_25622[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 3))
{var inst_25597 = (state_25599[2]);var state_25599__$1 = state_25599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25599__$1,inst_25597);
} else
{if((state_val_25600 === 4))
{var inst_25580 = (state_25599[7]);var inst_25583 = cljs.core.first.call(null,inst_25580);var state_25599__$1 = state_25599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25599__$1,7,ch,inst_25583);
} else
{if((state_val_25600 === 5))
{var state_25599__$1 = state_25599;if(cljs.core.truth_(close_QMARK_))
{var statearr_25605_25623 = state_25599__$1;(statearr_25605_25623[1] = 8);
} else
{var statearr_25606_25624 = state_25599__$1;(statearr_25606_25624[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 6))
{var inst_25595 = (state_25599[2]);var state_25599__$1 = state_25599;var statearr_25607_25625 = state_25599__$1;(statearr_25607_25625[2] = inst_25595);
(statearr_25607_25625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 7))
{var inst_25580 = (state_25599[7]);var inst_25585 = (state_25599[2]);var inst_25586 = cljs.core.next.call(null,inst_25580);var inst_25580__$1 = inst_25586;var state_25599__$1 = (function (){var statearr_25608 = state_25599;(statearr_25608[8] = inst_25585);
(statearr_25608[7] = inst_25580__$1);
return statearr_25608;
})();var statearr_25609_25626 = state_25599__$1;(statearr_25609_25626[2] = null);
(statearr_25609_25626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 8))
{var inst_25590 = cljs.core.async.close_BANG_.call(null,ch);var state_25599__$1 = state_25599;var statearr_25610_25627 = state_25599__$1;(statearr_25610_25627[2] = inst_25590);
(statearr_25610_25627[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 9))
{var state_25599__$1 = state_25599;var statearr_25611_25628 = state_25599__$1;(statearr_25611_25628[2] = null);
(statearr_25611_25628[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25600 === 10))
{var inst_25593 = (state_25599[2]);var state_25599__$1 = state_25599;var statearr_25612_25629 = state_25599__$1;(statearr_25612_25629[2] = inst_25593);
(statearr_25612_25629[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_25616 = [null,null,null,null,null,null,null,null,null];(statearr_25616[0] = state_machine__5548__auto__);
(statearr_25616[1] = 1);
return statearr_25616;
});
var state_machine__5548__auto____1 = (function (state_25599){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25617){if((e25617 instanceof Object))
{var ex__5551__auto__ = e25617;var statearr_25618_25630 = state_25599;(statearr_25618_25630[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25631 = state_25599;
state_25599 = G__25631;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25599){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25619 = f__5563__auto__.call(null);(statearr_25619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25619;
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
cljs.core.async.Mux = (function (){var obj25633 = {};return obj25633;
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
cljs.core.async.Mult = (function (){var obj25635 = {};return obj25635;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25859 = (function (cs,ch,mult,meta25860){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25860 = meta25860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25859.cljs$lang$type = true;
cljs.core.async.t25859.cljs$lang$ctorStr = "cljs.core.async/t25859";
cljs.core.async.t25859.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25859");
});})(cs))
;
cljs.core.async.t25859.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25859.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25859.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25859.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25859.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25861){var self__ = this;
var _25861__$1 = this;return self__.meta25860;
});})(cs))
;
cljs.core.async.t25859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25861,meta25860__$1){var self__ = this;
var _25861__$1 = this;return (new cljs.core.async.t25859(self__.cs,self__.ch,self__.mult,meta25860__$1));
});})(cs))
;
cljs.core.async.__GT_t25859 = ((function (cs){
return (function __GT_t25859(cs__$1,ch__$1,mult__$1,meta25860){return (new cljs.core.async.t25859(cs__$1,ch__$1,mult__$1,meta25860));
});})(cs))
;
}
return (new cljs.core.async.t25859(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___26082 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25996){var state_val_25997 = (state_25996[1]);if((state_val_25997 === 32))
{var inst_25864 = (state_25996[7]);var inst_25940 = (state_25996[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25996,31,Object,null,30);var inst_25947 = cljs.core.async.put_BANG_.call(null,inst_25940,inst_25864,done);var state_25996__$1 = state_25996;var statearr_25998_26083 = state_25996__$1;(statearr_25998_26083[2] = inst_25947);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 1))
{var state_25996__$1 = state_25996;var statearr_25999_26084 = state_25996__$1;(statearr_25999_26084[2] = null);
(statearr_25999_26084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 33))
{var inst_25953 = (state_25996[9]);var inst_25955 = cljs.core.chunked_seq_QMARK_.call(null,inst_25953);var state_25996__$1 = state_25996;if(inst_25955)
{var statearr_26000_26085 = state_25996__$1;(statearr_26000_26085[1] = 36);
} else
{var statearr_26001_26086 = state_25996__$1;(statearr_26001_26086[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 2))
{var state_25996__$1 = state_25996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25996__$1,4,ch);
} else
{if((state_val_25997 === 34))
{var state_25996__$1 = state_25996;var statearr_26002_26087 = state_25996__$1;(statearr_26002_26087[2] = null);
(statearr_26002_26087[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 3))
{var inst_25994 = (state_25996[2]);var state_25996__$1 = state_25996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25996__$1,inst_25994);
} else
{if((state_val_25997 === 35))
{var inst_25978 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26003_26088 = state_25996__$1;(statearr_26003_26088[2] = inst_25978);
(statearr_26003_26088[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 4))
{var inst_25864 = (state_25996[7]);var inst_25864__$1 = (state_25996[2]);var inst_25865 = (inst_25864__$1 == null);var state_25996__$1 = (function (){var statearr_26004 = state_25996;(statearr_26004[7] = inst_25864__$1);
return statearr_26004;
})();if(cljs.core.truth_(inst_25865))
{var statearr_26005_26089 = state_25996__$1;(statearr_26005_26089[1] = 5);
} else
{var statearr_26006_26090 = state_25996__$1;(statearr_26006_26090[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 36))
{var inst_25953 = (state_25996[9]);var inst_25957 = cljs.core.chunk_first.call(null,inst_25953);var inst_25958 = cljs.core.chunk_rest.call(null,inst_25953);var inst_25959 = cljs.core.count.call(null,inst_25957);var inst_25932 = inst_25958;var inst_25933 = inst_25957;var inst_25934 = inst_25959;var inst_25935 = 0;var state_25996__$1 = (function (){var statearr_26007 = state_25996;(statearr_26007[10] = inst_25932);
(statearr_26007[11] = inst_25933);
(statearr_26007[12] = inst_25934);
(statearr_26007[13] = inst_25935);
return statearr_26007;
})();var statearr_26008_26091 = state_25996__$1;(statearr_26008_26091[2] = null);
(statearr_26008_26091[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 5))
{var inst_25871 = cljs.core.deref.call(null,cs);var inst_25872 = cljs.core.seq.call(null,inst_25871);var inst_25873 = inst_25872;var inst_25874 = null;var inst_25875 = 0;var inst_25876 = 0;var state_25996__$1 = (function (){var statearr_26009 = state_25996;(statearr_26009[14] = inst_25876);
(statearr_26009[15] = inst_25875);
(statearr_26009[16] = inst_25874);
(statearr_26009[17] = inst_25873);
return statearr_26009;
})();var statearr_26010_26092 = state_25996__$1;(statearr_26010_26092[2] = null);
(statearr_26010_26092[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 37))
{var inst_25953 = (state_25996[9]);var inst_25962 = cljs.core.first.call(null,inst_25953);var state_25996__$1 = (function (){var statearr_26011 = state_25996;(statearr_26011[18] = inst_25962);
return statearr_26011;
})();var statearr_26012_26093 = state_25996__$1;(statearr_26012_26093[2] = null);
(statearr_26012_26093[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 6))
{var inst_25924 = (state_25996[19]);var inst_25923 = cljs.core.deref.call(null,cs);var inst_25924__$1 = cljs.core.keys.call(null,inst_25923);var inst_25925 = cljs.core.count.call(null,inst_25924__$1);var inst_25926 = cljs.core.reset_BANG_.call(null,dctr,inst_25925);var inst_25931 = cljs.core.seq.call(null,inst_25924__$1);var inst_25932 = inst_25931;var inst_25933 = null;var inst_25934 = 0;var inst_25935 = 0;var state_25996__$1 = (function (){var statearr_26013 = state_25996;(statearr_26013[10] = inst_25932);
(statearr_26013[11] = inst_25933);
(statearr_26013[12] = inst_25934);
(statearr_26013[13] = inst_25935);
(statearr_26013[19] = inst_25924__$1);
(statearr_26013[20] = inst_25926);
return statearr_26013;
})();var statearr_26014_26094 = state_25996__$1;(statearr_26014_26094[2] = null);
(statearr_26014_26094[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 38))
{var inst_25975 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26015_26095 = state_25996__$1;(statearr_26015_26095[2] = inst_25975);
(statearr_26015_26095[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 7))
{var inst_25992 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26016_26096 = state_25996__$1;(statearr_26016_26096[2] = inst_25992);
(statearr_26016_26096[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 39))
{var inst_25953 = (state_25996[9]);var inst_25971 = (state_25996[2]);var inst_25972 = cljs.core.next.call(null,inst_25953);var inst_25932 = inst_25972;var inst_25933 = null;var inst_25934 = 0;var inst_25935 = 0;var state_25996__$1 = (function (){var statearr_26017 = state_25996;(statearr_26017[21] = inst_25971);
(statearr_26017[10] = inst_25932);
(statearr_26017[11] = inst_25933);
(statearr_26017[12] = inst_25934);
(statearr_26017[13] = inst_25935);
return statearr_26017;
})();var statearr_26018_26097 = state_25996__$1;(statearr_26018_26097[2] = null);
(statearr_26018_26097[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 8))
{var inst_25876 = (state_25996[14]);var inst_25875 = (state_25996[15]);var inst_25878 = (inst_25876 < inst_25875);var inst_25879 = inst_25878;var state_25996__$1 = state_25996;if(cljs.core.truth_(inst_25879))
{var statearr_26019_26098 = state_25996__$1;(statearr_26019_26098[1] = 10);
} else
{var statearr_26020_26099 = state_25996__$1;(statearr_26020_26099[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 40))
{var inst_25962 = (state_25996[18]);var inst_25963 = (state_25996[2]);var inst_25964 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25965 = cljs.core.async.untap_STAR_.call(null,m,inst_25962);var state_25996__$1 = (function (){var statearr_26021 = state_25996;(statearr_26021[22] = inst_25964);
(statearr_26021[23] = inst_25963);
return statearr_26021;
})();var statearr_26022_26100 = state_25996__$1;(statearr_26022_26100[2] = inst_25965);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 9))
{var inst_25921 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26023_26101 = state_25996__$1;(statearr_26023_26101[2] = inst_25921);
(statearr_26023_26101[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 41))
{var inst_25864 = (state_25996[7]);var inst_25962 = (state_25996[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25996,40,Object,null,39);var inst_25969 = cljs.core.async.put_BANG_.call(null,inst_25962,inst_25864,done);var state_25996__$1 = state_25996;var statearr_26024_26102 = state_25996__$1;(statearr_26024_26102[2] = inst_25969);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 10))
{var inst_25876 = (state_25996[14]);var inst_25874 = (state_25996[16]);var inst_25882 = cljs.core._nth.call(null,inst_25874,inst_25876);var inst_25883 = cljs.core.nth.call(null,inst_25882,0,null);var inst_25884 = cljs.core.nth.call(null,inst_25882,1,null);var state_25996__$1 = (function (){var statearr_26025 = state_25996;(statearr_26025[24] = inst_25883);
return statearr_26025;
})();if(cljs.core.truth_(inst_25884))
{var statearr_26026_26103 = state_25996__$1;(statearr_26026_26103[1] = 13);
} else
{var statearr_26027_26104 = state_25996__$1;(statearr_26027_26104[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 42))
{var state_25996__$1 = state_25996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25996__$1,45,dchan);
} else
{if((state_val_25997 === 11))
{var inst_25893 = (state_25996[25]);var inst_25873 = (state_25996[17]);var inst_25893__$1 = cljs.core.seq.call(null,inst_25873);var state_25996__$1 = (function (){var statearr_26028 = state_25996;(statearr_26028[25] = inst_25893__$1);
return statearr_26028;
})();if(inst_25893__$1)
{var statearr_26029_26105 = state_25996__$1;(statearr_26029_26105[1] = 16);
} else
{var statearr_26030_26106 = state_25996__$1;(statearr_26030_26106[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 43))
{var state_25996__$1 = state_25996;var statearr_26031_26107 = state_25996__$1;(statearr_26031_26107[2] = null);
(statearr_26031_26107[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 12))
{var inst_25919 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26032_26108 = state_25996__$1;(statearr_26032_26108[2] = inst_25919);
(statearr_26032_26108[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 44))
{var inst_25989 = (state_25996[2]);var state_25996__$1 = (function (){var statearr_26033 = state_25996;(statearr_26033[26] = inst_25989);
return statearr_26033;
})();var statearr_26034_26109 = state_25996__$1;(statearr_26034_26109[2] = null);
(statearr_26034_26109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 13))
{var inst_25883 = (state_25996[24]);var inst_25886 = cljs.core.async.close_BANG_.call(null,inst_25883);var state_25996__$1 = state_25996;var statearr_26035_26110 = state_25996__$1;(statearr_26035_26110[2] = inst_25886);
(statearr_26035_26110[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 45))
{var inst_25986 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26039_26111 = state_25996__$1;(statearr_26039_26111[2] = inst_25986);
(statearr_26039_26111[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 14))
{var state_25996__$1 = state_25996;var statearr_26040_26112 = state_25996__$1;(statearr_26040_26112[2] = null);
(statearr_26040_26112[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 15))
{var inst_25876 = (state_25996[14]);var inst_25875 = (state_25996[15]);var inst_25874 = (state_25996[16]);var inst_25873 = (state_25996[17]);var inst_25889 = (state_25996[2]);var inst_25890 = (inst_25876 + 1);var tmp26036 = inst_25875;var tmp26037 = inst_25874;var tmp26038 = inst_25873;var inst_25873__$1 = tmp26038;var inst_25874__$1 = tmp26037;var inst_25875__$1 = tmp26036;var inst_25876__$1 = inst_25890;var state_25996__$1 = (function (){var statearr_26041 = state_25996;(statearr_26041[27] = inst_25889);
(statearr_26041[14] = inst_25876__$1);
(statearr_26041[15] = inst_25875__$1);
(statearr_26041[16] = inst_25874__$1);
(statearr_26041[17] = inst_25873__$1);
return statearr_26041;
})();var statearr_26042_26113 = state_25996__$1;(statearr_26042_26113[2] = null);
(statearr_26042_26113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 16))
{var inst_25893 = (state_25996[25]);var inst_25895 = cljs.core.chunked_seq_QMARK_.call(null,inst_25893);var state_25996__$1 = state_25996;if(inst_25895)
{var statearr_26043_26114 = state_25996__$1;(statearr_26043_26114[1] = 19);
} else
{var statearr_26044_26115 = state_25996__$1;(statearr_26044_26115[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 17))
{var state_25996__$1 = state_25996;var statearr_26045_26116 = state_25996__$1;(statearr_26045_26116[2] = null);
(statearr_26045_26116[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 18))
{var inst_25917 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26046_26117 = state_25996__$1;(statearr_26046_26117[2] = inst_25917);
(statearr_26046_26117[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 19))
{var inst_25893 = (state_25996[25]);var inst_25897 = cljs.core.chunk_first.call(null,inst_25893);var inst_25898 = cljs.core.chunk_rest.call(null,inst_25893);var inst_25899 = cljs.core.count.call(null,inst_25897);var inst_25873 = inst_25898;var inst_25874 = inst_25897;var inst_25875 = inst_25899;var inst_25876 = 0;var state_25996__$1 = (function (){var statearr_26047 = state_25996;(statearr_26047[14] = inst_25876);
(statearr_26047[15] = inst_25875);
(statearr_26047[16] = inst_25874);
(statearr_26047[17] = inst_25873);
return statearr_26047;
})();var statearr_26048_26118 = state_25996__$1;(statearr_26048_26118[2] = null);
(statearr_26048_26118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 20))
{var inst_25893 = (state_25996[25]);var inst_25903 = cljs.core.first.call(null,inst_25893);var inst_25904 = cljs.core.nth.call(null,inst_25903,0,null);var inst_25905 = cljs.core.nth.call(null,inst_25903,1,null);var state_25996__$1 = (function (){var statearr_26049 = state_25996;(statearr_26049[28] = inst_25904);
return statearr_26049;
})();if(cljs.core.truth_(inst_25905))
{var statearr_26050_26119 = state_25996__$1;(statearr_26050_26119[1] = 22);
} else
{var statearr_26051_26120 = state_25996__$1;(statearr_26051_26120[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 21))
{var inst_25914 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26052_26121 = state_25996__$1;(statearr_26052_26121[2] = inst_25914);
(statearr_26052_26121[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 22))
{var inst_25904 = (state_25996[28]);var inst_25907 = cljs.core.async.close_BANG_.call(null,inst_25904);var state_25996__$1 = state_25996;var statearr_26053_26122 = state_25996__$1;(statearr_26053_26122[2] = inst_25907);
(statearr_26053_26122[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 23))
{var state_25996__$1 = state_25996;var statearr_26054_26123 = state_25996__$1;(statearr_26054_26123[2] = null);
(statearr_26054_26123[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 24))
{var inst_25893 = (state_25996[25]);var inst_25910 = (state_25996[2]);var inst_25911 = cljs.core.next.call(null,inst_25893);var inst_25873 = inst_25911;var inst_25874 = null;var inst_25875 = 0;var inst_25876 = 0;var state_25996__$1 = (function (){var statearr_26055 = state_25996;(statearr_26055[29] = inst_25910);
(statearr_26055[14] = inst_25876);
(statearr_26055[15] = inst_25875);
(statearr_26055[16] = inst_25874);
(statearr_26055[17] = inst_25873);
return statearr_26055;
})();var statearr_26056_26124 = state_25996__$1;(statearr_26056_26124[2] = null);
(statearr_26056_26124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 25))
{var inst_25934 = (state_25996[12]);var inst_25935 = (state_25996[13]);var inst_25937 = (inst_25935 < inst_25934);var inst_25938 = inst_25937;var state_25996__$1 = state_25996;if(cljs.core.truth_(inst_25938))
{var statearr_26057_26125 = state_25996__$1;(statearr_26057_26125[1] = 27);
} else
{var statearr_26058_26126 = state_25996__$1;(statearr_26058_26126[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 26))
{var inst_25924 = (state_25996[19]);var inst_25982 = (state_25996[2]);var inst_25983 = cljs.core.seq.call(null,inst_25924);var state_25996__$1 = (function (){var statearr_26059 = state_25996;(statearr_26059[30] = inst_25982);
return statearr_26059;
})();if(inst_25983)
{var statearr_26060_26127 = state_25996__$1;(statearr_26060_26127[1] = 42);
} else
{var statearr_26061_26128 = state_25996__$1;(statearr_26061_26128[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 27))
{var inst_25933 = (state_25996[11]);var inst_25935 = (state_25996[13]);var inst_25940 = cljs.core._nth.call(null,inst_25933,inst_25935);var state_25996__$1 = (function (){var statearr_26062 = state_25996;(statearr_26062[8] = inst_25940);
return statearr_26062;
})();var statearr_26063_26129 = state_25996__$1;(statearr_26063_26129[2] = null);
(statearr_26063_26129[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 28))
{var inst_25932 = (state_25996[10]);var inst_25953 = (state_25996[9]);var inst_25953__$1 = cljs.core.seq.call(null,inst_25932);var state_25996__$1 = (function (){var statearr_26067 = state_25996;(statearr_26067[9] = inst_25953__$1);
return statearr_26067;
})();if(inst_25953__$1)
{var statearr_26068_26130 = state_25996__$1;(statearr_26068_26130[1] = 33);
} else
{var statearr_26069_26131 = state_25996__$1;(statearr_26069_26131[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 29))
{var inst_25980 = (state_25996[2]);var state_25996__$1 = state_25996;var statearr_26070_26132 = state_25996__$1;(statearr_26070_26132[2] = inst_25980);
(statearr_26070_26132[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 30))
{var inst_25932 = (state_25996[10]);var inst_25933 = (state_25996[11]);var inst_25934 = (state_25996[12]);var inst_25935 = (state_25996[13]);var inst_25949 = (state_25996[2]);var inst_25950 = (inst_25935 + 1);var tmp26064 = inst_25932;var tmp26065 = inst_25933;var tmp26066 = inst_25934;var inst_25932__$1 = tmp26064;var inst_25933__$1 = tmp26065;var inst_25934__$1 = tmp26066;var inst_25935__$1 = inst_25950;var state_25996__$1 = (function (){var statearr_26071 = state_25996;(statearr_26071[31] = inst_25949);
(statearr_26071[10] = inst_25932__$1);
(statearr_26071[11] = inst_25933__$1);
(statearr_26071[12] = inst_25934__$1);
(statearr_26071[13] = inst_25935__$1);
return statearr_26071;
})();var statearr_26072_26133 = state_25996__$1;(statearr_26072_26133[2] = null);
(statearr_26072_26133[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25997 === 31))
{var inst_25940 = (state_25996[8]);var inst_25941 = (state_25996[2]);var inst_25942 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25943 = cljs.core.async.untap_STAR_.call(null,m,inst_25940);var state_25996__$1 = (function (){var statearr_26073 = state_25996;(statearr_26073[32] = inst_25942);
(statearr_26073[33] = inst_25941);
return statearr_26073;
})();var statearr_26074_26134 = state_25996__$1;(statearr_26074_26134[2] = inst_25943);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_26078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26078[0] = state_machine__5548__auto__);
(statearr_26078[1] = 1);
return statearr_26078;
});
var state_machine__5548__auto____1 = (function (state_25996){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26079){if((e26079 instanceof Object))
{var ex__5551__auto__ = e26079;var statearr_26080_26135 = state_25996;(statearr_26080_26135[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26136 = state_25996;
state_25996 = G__26136;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25996){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26081 = f__5563__auto__.call(null);(statearr_26081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26082);
return statearr_26081;
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
cljs.core.async.Mix = (function (){var obj26138 = {};return obj26138;
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
;var m = (function (){if(typeof cljs.core.async.t26248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26248 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26249){
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
this.meta26249 = meta26249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26248.cljs$lang$type = true;
cljs.core.async.t26248.cljs$lang$ctorStr = "cljs.core.async/t26248";
cljs.core.async.t26248.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26248");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26248.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26250){var self__ = this;
var _26250__$1 = this;return self__.meta26249;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26250,meta26249__$1){var self__ = this;
var _26250__$1 = this;return (new cljs.core.async.t26248(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26249__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26248 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26248(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26249){return (new cljs.core.async.t26248(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26249));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26248(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___26357 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26315){var state_val_26316 = (state_26315[1]);if((state_val_26316 === 1))
{var inst_26254 = (state_26315[7]);var inst_26254__$1 = calc_state.call(null);var inst_26255 = cljs.core.seq_QMARK_.call(null,inst_26254__$1);var state_26315__$1 = (function (){var statearr_26317 = state_26315;(statearr_26317[7] = inst_26254__$1);
return statearr_26317;
})();if(inst_26255)
{var statearr_26318_26358 = state_26315__$1;(statearr_26318_26358[1] = 2);
} else
{var statearr_26319_26359 = state_26315__$1;(statearr_26319_26359[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 2))
{var inst_26254 = (state_26315[7]);var inst_26257 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26254);var state_26315__$1 = state_26315;var statearr_26320_26360 = state_26315__$1;(statearr_26320_26360[2] = inst_26257);
(statearr_26320_26360[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 3))
{var inst_26254 = (state_26315[7]);var state_26315__$1 = state_26315;var statearr_26321_26361 = state_26315__$1;(statearr_26321_26361[2] = inst_26254);
(statearr_26321_26361[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 4))
{var inst_26254 = (state_26315[7]);var inst_26260 = (state_26315[2]);var inst_26261 = cljs.core.get.call(null,inst_26260,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26262 = cljs.core.get.call(null,inst_26260,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26263 = cljs.core.get.call(null,inst_26260,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26264 = inst_26254;var state_26315__$1 = (function (){var statearr_26322 = state_26315;(statearr_26322[8] = inst_26262);
(statearr_26322[9] = inst_26261);
(statearr_26322[10] = inst_26264);
(statearr_26322[11] = inst_26263);
return statearr_26322;
})();var statearr_26323_26362 = state_26315__$1;(statearr_26323_26362[2] = null);
(statearr_26323_26362[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 5))
{var inst_26264 = (state_26315[10]);var inst_26267 = cljs.core.seq_QMARK_.call(null,inst_26264);var state_26315__$1 = state_26315;if(inst_26267)
{var statearr_26324_26363 = state_26315__$1;(statearr_26324_26363[1] = 7);
} else
{var statearr_26325_26364 = state_26315__$1;(statearr_26325_26364[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 6))
{var inst_26313 = (state_26315[2]);var state_26315__$1 = state_26315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26315__$1,inst_26313);
} else
{if((state_val_26316 === 7))
{var inst_26264 = (state_26315[10]);var inst_26269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26264);var state_26315__$1 = state_26315;var statearr_26326_26365 = state_26315__$1;(statearr_26326_26365[2] = inst_26269);
(statearr_26326_26365[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 8))
{var inst_26264 = (state_26315[10]);var state_26315__$1 = state_26315;var statearr_26327_26366 = state_26315__$1;(statearr_26327_26366[2] = inst_26264);
(statearr_26327_26366[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 9))
{var inst_26272 = (state_26315[12]);var inst_26272__$1 = (state_26315[2]);var inst_26273 = cljs.core.get.call(null,inst_26272__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26274 = cljs.core.get.call(null,inst_26272__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26275 = cljs.core.get.call(null,inst_26272__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26315__$1 = (function (){var statearr_26328 = state_26315;(statearr_26328[12] = inst_26272__$1);
(statearr_26328[13] = inst_26275);
(statearr_26328[14] = inst_26274);
return statearr_26328;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26315__$1,10,inst_26273);
} else
{if((state_val_26316 === 10))
{var inst_26279 = (state_26315[15]);var inst_26280 = (state_26315[16]);var inst_26278 = (state_26315[2]);var inst_26279__$1 = cljs.core.nth.call(null,inst_26278,0,null);var inst_26280__$1 = cljs.core.nth.call(null,inst_26278,1,null);var inst_26281 = (inst_26279__$1 == null);var inst_26282 = cljs.core._EQ_.call(null,inst_26280__$1,change);var inst_26283 = (inst_26281) || (inst_26282);var state_26315__$1 = (function (){var statearr_26329 = state_26315;(statearr_26329[15] = inst_26279__$1);
(statearr_26329[16] = inst_26280__$1);
return statearr_26329;
})();if(cljs.core.truth_(inst_26283))
{var statearr_26330_26367 = state_26315__$1;(statearr_26330_26367[1] = 11);
} else
{var statearr_26331_26368 = state_26315__$1;(statearr_26331_26368[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 11))
{var inst_26279 = (state_26315[15]);var inst_26285 = (inst_26279 == null);var state_26315__$1 = state_26315;if(cljs.core.truth_(inst_26285))
{var statearr_26332_26369 = state_26315__$1;(statearr_26332_26369[1] = 14);
} else
{var statearr_26333_26370 = state_26315__$1;(statearr_26333_26370[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 12))
{var inst_26280 = (state_26315[16]);var inst_26275 = (state_26315[13]);var inst_26294 = (state_26315[17]);var inst_26294__$1 = inst_26275.call(null,inst_26280);var state_26315__$1 = (function (){var statearr_26334 = state_26315;(statearr_26334[17] = inst_26294__$1);
return statearr_26334;
})();if(cljs.core.truth_(inst_26294__$1))
{var statearr_26335_26371 = state_26315__$1;(statearr_26335_26371[1] = 17);
} else
{var statearr_26336_26372 = state_26315__$1;(statearr_26336_26372[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 13))
{var inst_26311 = (state_26315[2]);var state_26315__$1 = state_26315;var statearr_26337_26373 = state_26315__$1;(statearr_26337_26373[2] = inst_26311);
(statearr_26337_26373[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 14))
{var inst_26280 = (state_26315[16]);var inst_26287 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26280);var state_26315__$1 = state_26315;var statearr_26338_26374 = state_26315__$1;(statearr_26338_26374[2] = inst_26287);
(statearr_26338_26374[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 15))
{var state_26315__$1 = state_26315;var statearr_26339_26375 = state_26315__$1;(statearr_26339_26375[2] = null);
(statearr_26339_26375[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 16))
{var inst_26290 = (state_26315[2]);var inst_26291 = calc_state.call(null);var inst_26264 = inst_26291;var state_26315__$1 = (function (){var statearr_26340 = state_26315;(statearr_26340[18] = inst_26290);
(statearr_26340[10] = inst_26264);
return statearr_26340;
})();var statearr_26341_26376 = state_26315__$1;(statearr_26341_26376[2] = null);
(statearr_26341_26376[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 17))
{var inst_26294 = (state_26315[17]);var state_26315__$1 = state_26315;var statearr_26342_26377 = state_26315__$1;(statearr_26342_26377[2] = inst_26294);
(statearr_26342_26377[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 18))
{var inst_26280 = (state_26315[16]);var inst_26275 = (state_26315[13]);var inst_26274 = (state_26315[14]);var inst_26297 = cljs.core.empty_QMARK_.call(null,inst_26275);var inst_26298 = inst_26274.call(null,inst_26280);var inst_26299 = cljs.core.not.call(null,inst_26298);var inst_26300 = (inst_26297) && (inst_26299);var state_26315__$1 = state_26315;var statearr_26343_26378 = state_26315__$1;(statearr_26343_26378[2] = inst_26300);
(statearr_26343_26378[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 19))
{var inst_26302 = (state_26315[2]);var state_26315__$1 = state_26315;if(cljs.core.truth_(inst_26302))
{var statearr_26344_26379 = state_26315__$1;(statearr_26344_26379[1] = 20);
} else
{var statearr_26345_26380 = state_26315__$1;(statearr_26345_26380[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 20))
{var inst_26279 = (state_26315[15]);var state_26315__$1 = state_26315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26315__$1,23,out,inst_26279);
} else
{if((state_val_26316 === 21))
{var state_26315__$1 = state_26315;var statearr_26346_26381 = state_26315__$1;(statearr_26346_26381[2] = null);
(statearr_26346_26381[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 22))
{var inst_26272 = (state_26315[12]);var inst_26308 = (state_26315[2]);var inst_26264 = inst_26272;var state_26315__$1 = (function (){var statearr_26347 = state_26315;(statearr_26347[10] = inst_26264);
(statearr_26347[19] = inst_26308);
return statearr_26347;
})();var statearr_26348_26382 = state_26315__$1;(statearr_26348_26382[2] = null);
(statearr_26348_26382[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26316 === 23))
{var inst_26305 = (state_26315[2]);var state_26315__$1 = state_26315;var statearr_26349_26383 = state_26315__$1;(statearr_26349_26383[2] = inst_26305);
(statearr_26349_26383[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_26353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26353[0] = state_machine__5548__auto__);
(statearr_26353[1] = 1);
return statearr_26353;
});
var state_machine__5548__auto____1 = (function (state_26315){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26315);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26354){if((e26354 instanceof Object))
{var ex__5551__auto__ = e26354;var statearr_26355_26384 = state_26315;(statearr_26355_26384[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26385 = state_26315;
state_26315 = G__26385;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26315){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26356 = f__5563__auto__.call(null);(statearr_26356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26357);
return statearr_26356;
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
cljs.core.async.Pub = (function (){var obj26387 = {};return obj26387;
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
return (function (p1__26388_SHARP_){if(cljs.core.truth_(p1__26388_SHARP_.call(null,topic)))
{return p1__26388_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26388_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26513 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26514){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26514 = meta26514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26513.cljs$lang$type = true;
cljs.core.async.t26513.cljs$lang$ctorStr = "cljs.core.async/t26513";
cljs.core.async.t26513.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26513");
});})(mults,ensure_mult))
;
cljs.core.async.t26513.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26513.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26513.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26513.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26513.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26513.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26515){var self__ = this;
var _26515__$1 = this;return self__.meta26514;
});})(mults,ensure_mult))
;
cljs.core.async.t26513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26515,meta26514__$1){var self__ = this;
var _26515__$1 = this;return (new cljs.core.async.t26513(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26514__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26513 = ((function (mults,ensure_mult){
return (function __GT_t26513(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26514){return (new cljs.core.async.t26513(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26514));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26513(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___26637 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26589){var state_val_26590 = (state_26589[1]);if((state_val_26590 === 1))
{var state_26589__$1 = state_26589;var statearr_26591_26638 = state_26589__$1;(statearr_26591_26638[2] = null);
(statearr_26591_26638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 2))
{var state_26589__$1 = state_26589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26589__$1,4,ch);
} else
{if((state_val_26590 === 3))
{var inst_26587 = (state_26589[2]);var state_26589__$1 = state_26589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26589__$1,inst_26587);
} else
{if((state_val_26590 === 4))
{var inst_26518 = (state_26589[7]);var inst_26518__$1 = (state_26589[2]);var inst_26519 = (inst_26518__$1 == null);var state_26589__$1 = (function (){var statearr_26592 = state_26589;(statearr_26592[7] = inst_26518__$1);
return statearr_26592;
})();if(cljs.core.truth_(inst_26519))
{var statearr_26593_26639 = state_26589__$1;(statearr_26593_26639[1] = 5);
} else
{var statearr_26594_26640 = state_26589__$1;(statearr_26594_26640[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 5))
{var inst_26525 = cljs.core.deref.call(null,mults);var inst_26526 = cljs.core.vals.call(null,inst_26525);var inst_26527 = cljs.core.seq.call(null,inst_26526);var inst_26528 = inst_26527;var inst_26529 = null;var inst_26530 = 0;var inst_26531 = 0;var state_26589__$1 = (function (){var statearr_26595 = state_26589;(statearr_26595[8] = inst_26528);
(statearr_26595[9] = inst_26529);
(statearr_26595[10] = inst_26531);
(statearr_26595[11] = inst_26530);
return statearr_26595;
})();var statearr_26596_26641 = state_26589__$1;(statearr_26596_26641[2] = null);
(statearr_26596_26641[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 6))
{var inst_26568 = (state_26589[12]);var inst_26518 = (state_26589[7]);var inst_26566 = (state_26589[13]);var inst_26566__$1 = topic_fn.call(null,inst_26518);var inst_26567 = cljs.core.deref.call(null,mults);var inst_26568__$1 = cljs.core.get.call(null,inst_26567,inst_26566__$1);var state_26589__$1 = (function (){var statearr_26597 = state_26589;(statearr_26597[12] = inst_26568__$1);
(statearr_26597[13] = inst_26566__$1);
return statearr_26597;
})();if(cljs.core.truth_(inst_26568__$1))
{var statearr_26598_26642 = state_26589__$1;(statearr_26598_26642[1] = 19);
} else
{var statearr_26599_26643 = state_26589__$1;(statearr_26599_26643[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 7))
{var inst_26585 = (state_26589[2]);var state_26589__$1 = state_26589;var statearr_26600_26644 = state_26589__$1;(statearr_26600_26644[2] = inst_26585);
(statearr_26600_26644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 8))
{var inst_26531 = (state_26589[10]);var inst_26530 = (state_26589[11]);var inst_26533 = (inst_26531 < inst_26530);var inst_26534 = inst_26533;var state_26589__$1 = state_26589;if(cljs.core.truth_(inst_26534))
{var statearr_26604_26645 = state_26589__$1;(statearr_26604_26645[1] = 10);
} else
{var statearr_26605_26646 = state_26589__$1;(statearr_26605_26646[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 9))
{var inst_26564 = (state_26589[2]);var state_26589__$1 = state_26589;var statearr_26606_26647 = state_26589__$1;(statearr_26606_26647[2] = inst_26564);
(statearr_26606_26647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 10))
{var inst_26528 = (state_26589[8]);var inst_26529 = (state_26589[9]);var inst_26531 = (state_26589[10]);var inst_26530 = (state_26589[11]);var inst_26536 = cljs.core._nth.call(null,inst_26529,inst_26531);var inst_26537 = cljs.core.async.muxch_STAR_.call(null,inst_26536);var inst_26538 = cljs.core.async.close_BANG_.call(null,inst_26537);var inst_26539 = (inst_26531 + 1);var tmp26601 = inst_26528;var tmp26602 = inst_26529;var tmp26603 = inst_26530;var inst_26528__$1 = tmp26601;var inst_26529__$1 = tmp26602;var inst_26530__$1 = tmp26603;var inst_26531__$1 = inst_26539;var state_26589__$1 = (function (){var statearr_26607 = state_26589;(statearr_26607[14] = inst_26538);
(statearr_26607[8] = inst_26528__$1);
(statearr_26607[9] = inst_26529__$1);
(statearr_26607[10] = inst_26531__$1);
(statearr_26607[11] = inst_26530__$1);
return statearr_26607;
})();var statearr_26608_26648 = state_26589__$1;(statearr_26608_26648[2] = null);
(statearr_26608_26648[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 11))
{var inst_26542 = (state_26589[15]);var inst_26528 = (state_26589[8]);var inst_26542__$1 = cljs.core.seq.call(null,inst_26528);var state_26589__$1 = (function (){var statearr_26609 = state_26589;(statearr_26609[15] = inst_26542__$1);
return statearr_26609;
})();if(inst_26542__$1)
{var statearr_26610_26649 = state_26589__$1;(statearr_26610_26649[1] = 13);
} else
{var statearr_26611_26650 = state_26589__$1;(statearr_26611_26650[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 12))
{var inst_26562 = (state_26589[2]);var state_26589__$1 = state_26589;var statearr_26612_26651 = state_26589__$1;(statearr_26612_26651[2] = inst_26562);
(statearr_26612_26651[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 13))
{var inst_26542 = (state_26589[15]);var inst_26544 = cljs.core.chunked_seq_QMARK_.call(null,inst_26542);var state_26589__$1 = state_26589;if(inst_26544)
{var statearr_26613_26652 = state_26589__$1;(statearr_26613_26652[1] = 16);
} else
{var statearr_26614_26653 = state_26589__$1;(statearr_26614_26653[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 14))
{var state_26589__$1 = state_26589;var statearr_26615_26654 = state_26589__$1;(statearr_26615_26654[2] = null);
(statearr_26615_26654[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 15))
{var inst_26560 = (state_26589[2]);var state_26589__$1 = state_26589;var statearr_26616_26655 = state_26589__$1;(statearr_26616_26655[2] = inst_26560);
(statearr_26616_26655[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 16))
{var inst_26542 = (state_26589[15]);var inst_26546 = cljs.core.chunk_first.call(null,inst_26542);var inst_26547 = cljs.core.chunk_rest.call(null,inst_26542);var inst_26548 = cljs.core.count.call(null,inst_26546);var inst_26528 = inst_26547;var inst_26529 = inst_26546;var inst_26530 = inst_26548;var inst_26531 = 0;var state_26589__$1 = (function (){var statearr_26617 = state_26589;(statearr_26617[8] = inst_26528);
(statearr_26617[9] = inst_26529);
(statearr_26617[10] = inst_26531);
(statearr_26617[11] = inst_26530);
return statearr_26617;
})();var statearr_26618_26656 = state_26589__$1;(statearr_26618_26656[2] = null);
(statearr_26618_26656[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 17))
{var inst_26542 = (state_26589[15]);var inst_26551 = cljs.core.first.call(null,inst_26542);var inst_26552 = cljs.core.async.muxch_STAR_.call(null,inst_26551);var inst_26553 = cljs.core.async.close_BANG_.call(null,inst_26552);var inst_26554 = cljs.core.next.call(null,inst_26542);var inst_26528 = inst_26554;var inst_26529 = null;var inst_26530 = 0;var inst_26531 = 0;var state_26589__$1 = (function (){var statearr_26619 = state_26589;(statearr_26619[16] = inst_26553);
(statearr_26619[8] = inst_26528);
(statearr_26619[9] = inst_26529);
(statearr_26619[10] = inst_26531);
(statearr_26619[11] = inst_26530);
return statearr_26619;
})();var statearr_26620_26657 = state_26589__$1;(statearr_26620_26657[2] = null);
(statearr_26620_26657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 18))
{var inst_26557 = (state_26589[2]);var state_26589__$1 = state_26589;var statearr_26621_26658 = state_26589__$1;(statearr_26621_26658[2] = inst_26557);
(statearr_26621_26658[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 19))
{var state_26589__$1 = state_26589;var statearr_26622_26659 = state_26589__$1;(statearr_26622_26659[2] = null);
(statearr_26622_26659[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 20))
{var state_26589__$1 = state_26589;var statearr_26623_26660 = state_26589__$1;(statearr_26623_26660[2] = null);
(statearr_26623_26660[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 21))
{var inst_26582 = (state_26589[2]);var state_26589__$1 = (function (){var statearr_26624 = state_26589;(statearr_26624[17] = inst_26582);
return statearr_26624;
})();var statearr_26625_26661 = state_26589__$1;(statearr_26625_26661[2] = null);
(statearr_26625_26661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 22))
{var inst_26579 = (state_26589[2]);var state_26589__$1 = state_26589;var statearr_26626_26662 = state_26589__$1;(statearr_26626_26662[2] = inst_26579);
(statearr_26626_26662[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 23))
{var inst_26566 = (state_26589[13]);var inst_26570 = (state_26589[2]);var inst_26571 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26566);var state_26589__$1 = (function (){var statearr_26627 = state_26589;(statearr_26627[18] = inst_26570);
return statearr_26627;
})();var statearr_26628_26663 = state_26589__$1;(statearr_26628_26663[2] = inst_26571);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26589__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26590 === 24))
{var inst_26568 = (state_26589[12]);var inst_26518 = (state_26589[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26589,23,Object,null,22);var inst_26575 = cljs.core.async.muxch_STAR_.call(null,inst_26568);var state_26589__$1 = state_26589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26589__$1,25,inst_26575,inst_26518);
} else
{if((state_val_26590 === 25))
{var inst_26577 = (state_26589[2]);var state_26589__$1 = state_26589;var statearr_26629_26664 = state_26589__$1;(statearr_26629_26664[2] = inst_26577);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26589__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_26633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26633[0] = state_machine__5548__auto__);
(statearr_26633[1] = 1);
return statearr_26633;
});
var state_machine__5548__auto____1 = (function (state_26589){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26589);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26634){if((e26634 instanceof Object))
{var ex__5551__auto__ = e26634;var statearr_26635_26665 = state_26589;(statearr_26635_26665[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26666 = state_26589;
state_26589 = G__26666;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26589){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26636 = f__5563__auto__.call(null);(statearr_26636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26637);
return statearr_26636;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___26803 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26773){var state_val_26774 = (state_26773[1]);if((state_val_26774 === 1))
{var state_26773__$1 = state_26773;var statearr_26775_26804 = state_26773__$1;(statearr_26775_26804[2] = null);
(statearr_26775_26804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 2))
{var inst_26736 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26737 = 0;var state_26773__$1 = (function (){var statearr_26776 = state_26773;(statearr_26776[7] = inst_26736);
(statearr_26776[8] = inst_26737);
return statearr_26776;
})();var statearr_26777_26805 = state_26773__$1;(statearr_26777_26805[2] = null);
(statearr_26777_26805[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 3))
{var inst_26771 = (state_26773[2]);var state_26773__$1 = state_26773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else
{if((state_val_26774 === 4))
{var inst_26737 = (state_26773[8]);var inst_26739 = (inst_26737 < cnt);var state_26773__$1 = state_26773;if(cljs.core.truth_(inst_26739))
{var statearr_26778_26806 = state_26773__$1;(statearr_26778_26806[1] = 6);
} else
{var statearr_26779_26807 = state_26773__$1;(statearr_26779_26807[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 5))
{var inst_26757 = (state_26773[2]);var state_26773__$1 = (function (){var statearr_26780 = state_26773;(statearr_26780[9] = inst_26757);
return statearr_26780;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,12,dchan);
} else
{if((state_val_26774 === 6))
{var state_26773__$1 = state_26773;var statearr_26781_26808 = state_26773__$1;(statearr_26781_26808[2] = null);
(statearr_26781_26808[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 7))
{var state_26773__$1 = state_26773;var statearr_26782_26809 = state_26773__$1;(statearr_26782_26809[2] = null);
(statearr_26782_26809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 8))
{var inst_26755 = (state_26773[2]);var state_26773__$1 = state_26773;var statearr_26783_26810 = state_26773__$1;(statearr_26783_26810[2] = inst_26755);
(statearr_26783_26810[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 9))
{var inst_26737 = (state_26773[8]);var inst_26750 = (state_26773[2]);var inst_26751 = (inst_26737 + 1);var inst_26737__$1 = inst_26751;var state_26773__$1 = (function (){var statearr_26784 = state_26773;(statearr_26784[10] = inst_26750);
(statearr_26784[8] = inst_26737__$1);
return statearr_26784;
})();var statearr_26785_26811 = state_26773__$1;(statearr_26785_26811[2] = null);
(statearr_26785_26811[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 10))
{var inst_26741 = (state_26773[2]);var inst_26742 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26773__$1 = (function (){var statearr_26786 = state_26773;(statearr_26786[11] = inst_26741);
return statearr_26786;
})();var statearr_26787_26812 = state_26773__$1;(statearr_26787_26812[2] = inst_26742);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 11))
{var inst_26737 = (state_26773[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26773,10,Object,null,9);var inst_26746 = chs__$1.call(null,inst_26737);var inst_26747 = done.call(null,inst_26737);var inst_26748 = cljs.core.async.take_BANG_.call(null,inst_26746,inst_26747);var state_26773__$1 = state_26773;var statearr_26788_26813 = state_26773__$1;(statearr_26788_26813[2] = inst_26748);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 12))
{var inst_26759 = (state_26773[12]);var inst_26759__$1 = (state_26773[2]);var inst_26760 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26759__$1);var state_26773__$1 = (function (){var statearr_26789 = state_26773;(statearr_26789[12] = inst_26759__$1);
return statearr_26789;
})();if(cljs.core.truth_(inst_26760))
{var statearr_26790_26814 = state_26773__$1;(statearr_26790_26814[1] = 13);
} else
{var statearr_26791_26815 = state_26773__$1;(statearr_26791_26815[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 13))
{var inst_26762 = cljs.core.async.close_BANG_.call(null,out);var state_26773__$1 = state_26773;var statearr_26792_26816 = state_26773__$1;(statearr_26792_26816[2] = inst_26762);
(statearr_26792_26816[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 14))
{var inst_26759 = (state_26773[12]);var inst_26764 = cljs.core.apply.call(null,f,inst_26759);var state_26773__$1 = state_26773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26773__$1,16,out,inst_26764);
} else
{if((state_val_26774 === 15))
{var inst_26769 = (state_26773[2]);var state_26773__$1 = state_26773;var statearr_26793_26817 = state_26773__$1;(statearr_26793_26817[2] = inst_26769);
(statearr_26793_26817[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26774 === 16))
{var inst_26766 = (state_26773[2]);var state_26773__$1 = (function (){var statearr_26794 = state_26773;(statearr_26794[13] = inst_26766);
return statearr_26794;
})();var statearr_26795_26818 = state_26773__$1;(statearr_26795_26818[2] = null);
(statearr_26795_26818[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_26799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26799[0] = state_machine__5548__auto__);
(statearr_26799[1] = 1);
return statearr_26799;
});
var state_machine__5548__auto____1 = (function (state_26773){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26800){if((e26800 instanceof Object))
{var ex__5551__auto__ = e26800;var statearr_26801_26819 = state_26773;(statearr_26801_26819[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26820 = state_26773;
state_26773 = G__26820;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26802 = f__5563__auto__.call(null);(statearr_26802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26803);
return statearr_26802;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___26928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26904){var state_val_26905 = (state_26904[1]);if((state_val_26905 === 1))
{var inst_26875 = cljs.core.vec.call(null,chs);var inst_26876 = inst_26875;var state_26904__$1 = (function (){var statearr_26906 = state_26904;(statearr_26906[7] = inst_26876);
return statearr_26906;
})();var statearr_26907_26929 = state_26904__$1;(statearr_26907_26929[2] = null);
(statearr_26907_26929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26905 === 2))
{var inst_26876 = (state_26904[7]);var inst_26878 = cljs.core.count.call(null,inst_26876);var inst_26879 = (inst_26878 > 0);var state_26904__$1 = state_26904;if(cljs.core.truth_(inst_26879))
{var statearr_26908_26930 = state_26904__$1;(statearr_26908_26930[1] = 4);
} else
{var statearr_26909_26931 = state_26904__$1;(statearr_26909_26931[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26905 === 3))
{var inst_26902 = (state_26904[2]);var state_26904__$1 = state_26904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26904__$1,inst_26902);
} else
{if((state_val_26905 === 4))
{var inst_26876 = (state_26904[7]);var state_26904__$1 = state_26904;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26904__$1,7,inst_26876);
} else
{if((state_val_26905 === 5))
{var inst_26898 = cljs.core.async.close_BANG_.call(null,out);var state_26904__$1 = state_26904;var statearr_26910_26932 = state_26904__$1;(statearr_26910_26932[2] = inst_26898);
(statearr_26910_26932[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26905 === 6))
{var inst_26900 = (state_26904[2]);var state_26904__$1 = state_26904;var statearr_26911_26933 = state_26904__$1;(statearr_26911_26933[2] = inst_26900);
(statearr_26911_26933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26905 === 7))
{var inst_26883 = (state_26904[8]);var inst_26884 = (state_26904[9]);var inst_26883__$1 = (state_26904[2]);var inst_26884__$1 = cljs.core.nth.call(null,inst_26883__$1,0,null);var inst_26885 = cljs.core.nth.call(null,inst_26883__$1,1,null);var inst_26886 = (inst_26884__$1 == null);var state_26904__$1 = (function (){var statearr_26912 = state_26904;(statearr_26912[8] = inst_26883__$1);
(statearr_26912[9] = inst_26884__$1);
(statearr_26912[10] = inst_26885);
return statearr_26912;
})();if(cljs.core.truth_(inst_26886))
{var statearr_26913_26934 = state_26904__$1;(statearr_26913_26934[1] = 8);
} else
{var statearr_26914_26935 = state_26904__$1;(statearr_26914_26935[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26905 === 8))
{var inst_26876 = (state_26904[7]);var inst_26883 = (state_26904[8]);var inst_26884 = (state_26904[9]);var inst_26885 = (state_26904[10]);var inst_26888 = (function (){var c = inst_26885;var v = inst_26884;var vec__26881 = inst_26883;var cs = inst_26876;return ((function (c,v,vec__26881,cs,inst_26876,inst_26883,inst_26884,inst_26885,state_val_26905){
return (function (p1__26821_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26821_SHARP_);
});
;})(c,v,vec__26881,cs,inst_26876,inst_26883,inst_26884,inst_26885,state_val_26905))
})();var inst_26889 = cljs.core.filterv.call(null,inst_26888,inst_26876);var inst_26876__$1 = inst_26889;var state_26904__$1 = (function (){var statearr_26915 = state_26904;(statearr_26915[7] = inst_26876__$1);
return statearr_26915;
})();var statearr_26916_26936 = state_26904__$1;(statearr_26916_26936[2] = null);
(statearr_26916_26936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26905 === 9))
{var inst_26884 = (state_26904[9]);var state_26904__$1 = state_26904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26904__$1,11,out,inst_26884);
} else
{if((state_val_26905 === 10))
{var inst_26896 = (state_26904[2]);var state_26904__$1 = state_26904;var statearr_26918_26937 = state_26904__$1;(statearr_26918_26937[2] = inst_26896);
(statearr_26918_26937[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26905 === 11))
{var inst_26876 = (state_26904[7]);var inst_26893 = (state_26904[2]);var tmp26917 = inst_26876;var inst_26876__$1 = tmp26917;var state_26904__$1 = (function (){var statearr_26919 = state_26904;(statearr_26919[7] = inst_26876__$1);
(statearr_26919[11] = inst_26893);
return statearr_26919;
})();var statearr_26920_26938 = state_26904__$1;(statearr_26920_26938[2] = null);
(statearr_26920_26938[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_26924 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26924[0] = state_machine__5548__auto__);
(statearr_26924[1] = 1);
return statearr_26924;
});
var state_machine__5548__auto____1 = (function (state_26904){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26904);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26925){if((e26925 instanceof Object))
{var ex__5551__auto__ = e26925;var statearr_26926_26939 = state_26904;(statearr_26926_26939[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26904);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26940 = state_26904;
state_26904 = G__26940;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26904){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26927 = f__5563__auto__.call(null);(statearr_26927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26928);
return statearr_26927;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27010){var state_val_27011 = (state_27010[1]);if((state_val_27011 === 1))
{var inst_26987 = 0;var state_27010__$1 = (function (){var statearr_27012 = state_27010;(statearr_27012[7] = inst_26987);
return statearr_27012;
})();var statearr_27013_27034 = state_27010__$1;(statearr_27013_27034[2] = null);
(statearr_27013_27034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27011 === 2))
{var inst_26987 = (state_27010[7]);var inst_26989 = (inst_26987 < n);var state_27010__$1 = state_27010;if(cljs.core.truth_(inst_26989))
{var statearr_27014_27035 = state_27010__$1;(statearr_27014_27035[1] = 4);
} else
{var statearr_27015_27036 = state_27010__$1;(statearr_27015_27036[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27011 === 3))
{var inst_27007 = (state_27010[2]);var inst_27008 = cljs.core.async.close_BANG_.call(null,out);var state_27010__$1 = (function (){var statearr_27016 = state_27010;(statearr_27016[8] = inst_27007);
return statearr_27016;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27010__$1,inst_27008);
} else
{if((state_val_27011 === 4))
{var state_27010__$1 = state_27010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27010__$1,7,ch);
} else
{if((state_val_27011 === 5))
{var state_27010__$1 = state_27010;var statearr_27017_27037 = state_27010__$1;(statearr_27017_27037[2] = null);
(statearr_27017_27037[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27011 === 6))
{var inst_27005 = (state_27010[2]);var state_27010__$1 = state_27010;var statearr_27018_27038 = state_27010__$1;(statearr_27018_27038[2] = inst_27005);
(statearr_27018_27038[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27011 === 7))
{var inst_26992 = (state_27010[9]);var inst_26992__$1 = (state_27010[2]);var inst_26993 = (inst_26992__$1 == null);var inst_26994 = cljs.core.not.call(null,inst_26993);var state_27010__$1 = (function (){var statearr_27019 = state_27010;(statearr_27019[9] = inst_26992__$1);
return statearr_27019;
})();if(inst_26994)
{var statearr_27020_27039 = state_27010__$1;(statearr_27020_27039[1] = 8);
} else
{var statearr_27021_27040 = state_27010__$1;(statearr_27021_27040[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27011 === 8))
{var inst_26992 = (state_27010[9]);var state_27010__$1 = state_27010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27010__$1,11,out,inst_26992);
} else
{if((state_val_27011 === 9))
{var state_27010__$1 = state_27010;var statearr_27022_27041 = state_27010__$1;(statearr_27022_27041[2] = null);
(statearr_27022_27041[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27011 === 10))
{var inst_27002 = (state_27010[2]);var state_27010__$1 = state_27010;var statearr_27023_27042 = state_27010__$1;(statearr_27023_27042[2] = inst_27002);
(statearr_27023_27042[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27011 === 11))
{var inst_26987 = (state_27010[7]);var inst_26997 = (state_27010[2]);var inst_26998 = (inst_26987 + 1);var inst_26987__$1 = inst_26998;var state_27010__$1 = (function (){var statearr_27024 = state_27010;(statearr_27024[10] = inst_26997);
(statearr_27024[7] = inst_26987__$1);
return statearr_27024;
})();var statearr_27025_27043 = state_27010__$1;(statearr_27025_27043[2] = null);
(statearr_27025_27043[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27029 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27029[0] = state_machine__5548__auto__);
(statearr_27029[1] = 1);
return statearr_27029;
});
var state_machine__5548__auto____1 = (function (state_27010){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27010);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27030){if((e27030 instanceof Object))
{var ex__5551__auto__ = e27030;var statearr_27031_27044 = state_27010;(statearr_27031_27044[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27045 = state_27010;
state_27010 = G__27045;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27010){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27032 = f__5563__auto__.call(null);(statearr_27032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27033);
return statearr_27032;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27117){var state_val_27118 = (state_27117[1]);if((state_val_27118 === 1))
{var inst_27094 = null;var state_27117__$1 = (function (){var statearr_27119 = state_27117;(statearr_27119[7] = inst_27094);
return statearr_27119;
})();var statearr_27120_27143 = state_27117__$1;(statearr_27120_27143[2] = null);
(statearr_27120_27143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 2))
{var state_27117__$1 = state_27117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27117__$1,4,ch);
} else
{if((state_val_27118 === 3))
{var inst_27114 = (state_27117[2]);var inst_27115 = cljs.core.async.close_BANG_.call(null,out);var state_27117__$1 = (function (){var statearr_27121 = state_27117;(statearr_27121[8] = inst_27114);
return statearr_27121;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27117__$1,inst_27115);
} else
{if((state_val_27118 === 4))
{var inst_27097 = (state_27117[9]);var inst_27097__$1 = (state_27117[2]);var inst_27098 = (inst_27097__$1 == null);var inst_27099 = cljs.core.not.call(null,inst_27098);var state_27117__$1 = (function (){var statearr_27122 = state_27117;(statearr_27122[9] = inst_27097__$1);
return statearr_27122;
})();if(inst_27099)
{var statearr_27123_27144 = state_27117__$1;(statearr_27123_27144[1] = 5);
} else
{var statearr_27124_27145 = state_27117__$1;(statearr_27124_27145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 5))
{var inst_27094 = (state_27117[7]);var inst_27097 = (state_27117[9]);var inst_27101 = cljs.core._EQ_.call(null,inst_27097,inst_27094);var state_27117__$1 = state_27117;if(inst_27101)
{var statearr_27125_27146 = state_27117__$1;(statearr_27125_27146[1] = 8);
} else
{var statearr_27126_27147 = state_27117__$1;(statearr_27126_27147[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 6))
{var state_27117__$1 = state_27117;var statearr_27128_27148 = state_27117__$1;(statearr_27128_27148[2] = null);
(statearr_27128_27148[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 7))
{var inst_27112 = (state_27117[2]);var state_27117__$1 = state_27117;var statearr_27129_27149 = state_27117__$1;(statearr_27129_27149[2] = inst_27112);
(statearr_27129_27149[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 8))
{var inst_27094 = (state_27117[7]);var tmp27127 = inst_27094;var inst_27094__$1 = tmp27127;var state_27117__$1 = (function (){var statearr_27130 = state_27117;(statearr_27130[7] = inst_27094__$1);
return statearr_27130;
})();var statearr_27131_27150 = state_27117__$1;(statearr_27131_27150[2] = null);
(statearr_27131_27150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 9))
{var inst_27097 = (state_27117[9]);var state_27117__$1 = state_27117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27117__$1,11,out,inst_27097);
} else
{if((state_val_27118 === 10))
{var inst_27109 = (state_27117[2]);var state_27117__$1 = state_27117;var statearr_27132_27151 = state_27117__$1;(statearr_27132_27151[2] = inst_27109);
(statearr_27132_27151[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 11))
{var inst_27097 = (state_27117[9]);var inst_27106 = (state_27117[2]);var inst_27094 = inst_27097;var state_27117__$1 = (function (){var statearr_27133 = state_27117;(statearr_27133[7] = inst_27094);
(statearr_27133[10] = inst_27106);
return statearr_27133;
})();var statearr_27134_27152 = state_27117__$1;(statearr_27134_27152[2] = null);
(statearr_27134_27152[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27138 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27138[0] = state_machine__5548__auto__);
(statearr_27138[1] = 1);
return statearr_27138;
});
var state_machine__5548__auto____1 = (function (state_27117){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27117);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27139){if((e27139 instanceof Object))
{var ex__5551__auto__ = e27139;var statearr_27140_27153 = state_27117;(statearr_27140_27153[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27154 = state_27117;
state_27117 = G__27154;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27117){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27141 = f__5563__auto__.call(null);(statearr_27141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27142);
return statearr_27141;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27259){var state_val_27260 = (state_27259[1]);if((state_val_27260 === 1))
{var inst_27222 = (new Array(n));var inst_27223 = inst_27222;var inst_27224 = 0;var state_27259__$1 = (function (){var statearr_27261 = state_27259;(statearr_27261[7] = inst_27224);
(statearr_27261[8] = inst_27223);
return statearr_27261;
})();var statearr_27262_27290 = state_27259__$1;(statearr_27262_27290[2] = null);
(statearr_27262_27290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 2))
{var state_27259__$1 = state_27259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27259__$1,4,ch);
} else
{if((state_val_27260 === 3))
{var inst_27257 = (state_27259[2]);var state_27259__$1 = state_27259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27259__$1,inst_27257);
} else
{if((state_val_27260 === 4))
{var inst_27227 = (state_27259[9]);var inst_27227__$1 = (state_27259[2]);var inst_27228 = (inst_27227__$1 == null);var inst_27229 = cljs.core.not.call(null,inst_27228);var state_27259__$1 = (function (){var statearr_27263 = state_27259;(statearr_27263[9] = inst_27227__$1);
return statearr_27263;
})();if(inst_27229)
{var statearr_27264_27291 = state_27259__$1;(statearr_27264_27291[1] = 5);
} else
{var statearr_27265_27292 = state_27259__$1;(statearr_27265_27292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 5))
{var inst_27232 = (state_27259[10]);var inst_27227 = (state_27259[9]);var inst_27224 = (state_27259[7]);var inst_27223 = (state_27259[8]);var inst_27231 = (inst_27223[inst_27224] = inst_27227);var inst_27232__$1 = (inst_27224 + 1);var inst_27233 = (inst_27232__$1 < n);var state_27259__$1 = (function (){var statearr_27266 = state_27259;(statearr_27266[10] = inst_27232__$1);
(statearr_27266[11] = inst_27231);
return statearr_27266;
})();if(cljs.core.truth_(inst_27233))
{var statearr_27267_27293 = state_27259__$1;(statearr_27267_27293[1] = 8);
} else
{var statearr_27268_27294 = state_27259__$1;(statearr_27268_27294[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 6))
{var inst_27224 = (state_27259[7]);var inst_27245 = (inst_27224 > 0);var state_27259__$1 = state_27259;if(cljs.core.truth_(inst_27245))
{var statearr_27270_27295 = state_27259__$1;(statearr_27270_27295[1] = 12);
} else
{var statearr_27271_27296 = state_27259__$1;(statearr_27271_27296[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 7))
{var inst_27255 = (state_27259[2]);var state_27259__$1 = state_27259;var statearr_27272_27297 = state_27259__$1;(statearr_27272_27297[2] = inst_27255);
(statearr_27272_27297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 8))
{var inst_27232 = (state_27259[10]);var inst_27223 = (state_27259[8]);var tmp27269 = inst_27223;var inst_27223__$1 = tmp27269;var inst_27224 = inst_27232;var state_27259__$1 = (function (){var statearr_27273 = state_27259;(statearr_27273[7] = inst_27224);
(statearr_27273[8] = inst_27223__$1);
return statearr_27273;
})();var statearr_27274_27298 = state_27259__$1;(statearr_27274_27298[2] = null);
(statearr_27274_27298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 9))
{var inst_27223 = (state_27259[8]);var inst_27237 = cljs.core.vec.call(null,inst_27223);var state_27259__$1 = state_27259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27259__$1,11,out,inst_27237);
} else
{if((state_val_27260 === 10))
{var inst_27243 = (state_27259[2]);var state_27259__$1 = state_27259;var statearr_27275_27299 = state_27259__$1;(statearr_27275_27299[2] = inst_27243);
(statearr_27275_27299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 11))
{var inst_27239 = (state_27259[2]);var inst_27240 = (new Array(n));var inst_27223 = inst_27240;var inst_27224 = 0;var state_27259__$1 = (function (){var statearr_27276 = state_27259;(statearr_27276[12] = inst_27239);
(statearr_27276[7] = inst_27224);
(statearr_27276[8] = inst_27223);
return statearr_27276;
})();var statearr_27277_27300 = state_27259__$1;(statearr_27277_27300[2] = null);
(statearr_27277_27300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 12))
{var inst_27223 = (state_27259[8]);var inst_27247 = cljs.core.vec.call(null,inst_27223);var state_27259__$1 = state_27259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27259__$1,15,out,inst_27247);
} else
{if((state_val_27260 === 13))
{var state_27259__$1 = state_27259;var statearr_27278_27301 = state_27259__$1;(statearr_27278_27301[2] = null);
(statearr_27278_27301[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 14))
{var inst_27252 = (state_27259[2]);var inst_27253 = cljs.core.async.close_BANG_.call(null,out);var state_27259__$1 = (function (){var statearr_27279 = state_27259;(statearr_27279[13] = inst_27252);
return statearr_27279;
})();var statearr_27280_27302 = state_27259__$1;(statearr_27280_27302[2] = inst_27253);
(statearr_27280_27302[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27260 === 15))
{var inst_27249 = (state_27259[2]);var state_27259__$1 = state_27259;var statearr_27281_27303 = state_27259__$1;(statearr_27281_27303[2] = inst_27249);
(statearr_27281_27303[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_27285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27285[0] = state_machine__5548__auto__);
(statearr_27285[1] = 1);
return statearr_27285;
});
var state_machine__5548__auto____1 = (function (state_27259){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27259);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27286){if((e27286 instanceof Object))
{var ex__5551__auto__ = e27286;var statearr_27287_27304 = state_27259;(statearr_27287_27304[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27259);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27305 = state_27259;
state_27259 = G__27305;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27259){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27288 = f__5563__auto__.call(null);(statearr_27288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27289);
return statearr_27288;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27448 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27418){var state_val_27419 = (state_27418[1]);if((state_val_27419 === 1))
{var inst_27377 = [];var inst_27378 = inst_27377;var inst_27379 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27418__$1 = (function (){var statearr_27420 = state_27418;(statearr_27420[7] = inst_27378);
(statearr_27420[8] = inst_27379);
return statearr_27420;
})();var statearr_27421_27449 = state_27418__$1;(statearr_27421_27449[2] = null);
(statearr_27421_27449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 2))
{var state_27418__$1 = state_27418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27418__$1,4,ch);
} else
{if((state_val_27419 === 3))
{var inst_27416 = (state_27418[2]);var state_27418__$1 = state_27418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27418__$1,inst_27416);
} else
{if((state_val_27419 === 4))
{var inst_27382 = (state_27418[9]);var inst_27382__$1 = (state_27418[2]);var inst_27383 = (inst_27382__$1 == null);var inst_27384 = cljs.core.not.call(null,inst_27383);var state_27418__$1 = (function (){var statearr_27422 = state_27418;(statearr_27422[9] = inst_27382__$1);
return statearr_27422;
})();if(inst_27384)
{var statearr_27423_27450 = state_27418__$1;(statearr_27423_27450[1] = 5);
} else
{var statearr_27424_27451 = state_27418__$1;(statearr_27424_27451[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 5))
{var inst_27382 = (state_27418[9]);var inst_27379 = (state_27418[8]);var inst_27386 = (state_27418[10]);var inst_27386__$1 = f.call(null,inst_27382);var inst_27387 = cljs.core._EQ_.call(null,inst_27386__$1,inst_27379);var inst_27388 = cljs.core.keyword_identical_QMARK_.call(null,inst_27379,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27389 = (inst_27387) || (inst_27388);var state_27418__$1 = (function (){var statearr_27425 = state_27418;(statearr_27425[10] = inst_27386__$1);
return statearr_27425;
})();if(cljs.core.truth_(inst_27389))
{var statearr_27426_27452 = state_27418__$1;(statearr_27426_27452[1] = 8);
} else
{var statearr_27427_27453 = state_27418__$1;(statearr_27427_27453[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 6))
{var inst_27378 = (state_27418[7]);var inst_27403 = inst_27378.length;var inst_27404 = (inst_27403 > 0);var state_27418__$1 = state_27418;if(cljs.core.truth_(inst_27404))
{var statearr_27429_27454 = state_27418__$1;(statearr_27429_27454[1] = 12);
} else
{var statearr_27430_27455 = state_27418__$1;(statearr_27430_27455[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 7))
{var inst_27414 = (state_27418[2]);var state_27418__$1 = state_27418;var statearr_27431_27456 = state_27418__$1;(statearr_27431_27456[2] = inst_27414);
(statearr_27431_27456[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 8))
{var inst_27382 = (state_27418[9]);var inst_27378 = (state_27418[7]);var inst_27386 = (state_27418[10]);var inst_27391 = inst_27378.push(inst_27382);var tmp27428 = inst_27378;var inst_27378__$1 = tmp27428;var inst_27379 = inst_27386;var state_27418__$1 = (function (){var statearr_27432 = state_27418;(statearr_27432[7] = inst_27378__$1);
(statearr_27432[8] = inst_27379);
(statearr_27432[11] = inst_27391);
return statearr_27432;
})();var statearr_27433_27457 = state_27418__$1;(statearr_27433_27457[2] = null);
(statearr_27433_27457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 9))
{var inst_27378 = (state_27418[7]);var inst_27394 = cljs.core.vec.call(null,inst_27378);var state_27418__$1 = state_27418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27418__$1,11,out,inst_27394);
} else
{if((state_val_27419 === 10))
{var inst_27401 = (state_27418[2]);var state_27418__$1 = state_27418;var statearr_27434_27458 = state_27418__$1;(statearr_27434_27458[2] = inst_27401);
(statearr_27434_27458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 11))
{var inst_27382 = (state_27418[9]);var inst_27386 = (state_27418[10]);var inst_27396 = (state_27418[2]);var inst_27397 = [];var inst_27398 = inst_27397.push(inst_27382);var inst_27378 = inst_27397;var inst_27379 = inst_27386;var state_27418__$1 = (function (){var statearr_27435 = state_27418;(statearr_27435[12] = inst_27398);
(statearr_27435[13] = inst_27396);
(statearr_27435[7] = inst_27378);
(statearr_27435[8] = inst_27379);
return statearr_27435;
})();var statearr_27436_27459 = state_27418__$1;(statearr_27436_27459[2] = null);
(statearr_27436_27459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 12))
{var inst_27378 = (state_27418[7]);var inst_27406 = cljs.core.vec.call(null,inst_27378);var state_27418__$1 = state_27418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27418__$1,15,out,inst_27406);
} else
{if((state_val_27419 === 13))
{var state_27418__$1 = state_27418;var statearr_27437_27460 = state_27418__$1;(statearr_27437_27460[2] = null);
(statearr_27437_27460[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 14))
{var inst_27411 = (state_27418[2]);var inst_27412 = cljs.core.async.close_BANG_.call(null,out);var state_27418__$1 = (function (){var statearr_27438 = state_27418;(statearr_27438[14] = inst_27411);
return statearr_27438;
})();var statearr_27439_27461 = state_27418__$1;(statearr_27439_27461[2] = inst_27412);
(statearr_27439_27461[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27419 === 15))
{var inst_27408 = (state_27418[2]);var state_27418__$1 = state_27418;var statearr_27440_27462 = state_27418__$1;(statearr_27440_27462[2] = inst_27408);
(statearr_27440_27462[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_27444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27444[0] = state_machine__5548__auto__);
(statearr_27444[1] = 1);
return statearr_27444;
});
var state_machine__5548__auto____1 = (function (state_27418){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27445){if((e27445 instanceof Object))
{var ex__5551__auto__ = e27445;var statearr_27446_27463 = state_27418;(statearr_27446_27463[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27464 = state_27418;
state_27418 = G__27464;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27418){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27447 = f__5563__auto__.call(null);(statearr_27447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27448);
return statearr_27447;
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