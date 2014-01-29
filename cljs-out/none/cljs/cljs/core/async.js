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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13086 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13086 = (function (f,fn_handler,meta13087){
this.f = f;
this.fn_handler = fn_handler;
this.meta13087 = meta13087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13086.cljs$lang$type = true;
cljs.core.async.t13086.cljs$lang$ctorStr = "cljs.core.async/t13086";
cljs.core.async.t13086.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13086");
});
cljs.core.async.t13086.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13088){var self__ = this;
var _13088__$1 = this;return self__.meta13087;
});
cljs.core.async.t13086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13088,meta13087__$1){var self__ = this;
var _13088__$1 = this;return (new cljs.core.async.t13086(self__.f,self__.fn_handler,meta13087__$1));
});
cljs.core.async.__GT_t13086 = (function __GT_t13086(f__$1,fn_handler__$1,meta13087){return (new cljs.core.async.t13086(f__$1,fn_handler__$1,meta13087));
});
}
return (new cljs.core.async.t13086(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13090 = buff;if(G__13090)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13090.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13090.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13090);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13090);
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
{var val_13091 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13091);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13091);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13092 = n;var x_13093 = 0;while(true){
if((x_13093 < n__4248__auto___13092))
{(a[x_13093] = 0);
{
var G__13094 = (x_13093 + 1);
x_13093 = G__13094;
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
var G__13095 = (i + 1);
i = G__13095;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13099 = (function (flag,alt_flag,meta13100){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13100 = meta13100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13099.cljs$lang$type = true;
cljs.core.async.t13099.cljs$lang$ctorStr = "cljs.core.async/t13099";
cljs.core.async.t13099.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13099");
});
cljs.core.async.t13099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13101){var self__ = this;
var _13101__$1 = this;return self__.meta13100;
});
cljs.core.async.t13099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13101,meta13100__$1){var self__ = this;
var _13101__$1 = this;return (new cljs.core.async.t13099(self__.flag,self__.alt_flag,meta13100__$1));
});
cljs.core.async.__GT_t13099 = (function __GT_t13099(flag__$1,alt_flag__$1,meta13100){return (new cljs.core.async.t13099(flag__$1,alt_flag__$1,meta13100));
});
}
return (new cljs.core.async.t13099(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13105 = (function (cb,flag,alt_handler,meta13106){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13106 = meta13106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13105.cljs$lang$type = true;
cljs.core.async.t13105.cljs$lang$ctorStr = "cljs.core.async/t13105";
cljs.core.async.t13105.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13105");
});
cljs.core.async.t13105.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13107){var self__ = this;
var _13107__$1 = this;return self__.meta13106;
});
cljs.core.async.t13105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13107,meta13106__$1){var self__ = this;
var _13107__$1 = this;return (new cljs.core.async.t13105(self__.cb,self__.flag,self__.alt_handler,meta13106__$1));
});
cljs.core.async.__GT_t13105 = (function __GT_t13105(cb__$1,flag__$1,alt_handler__$1,meta13106){return (new cljs.core.async.t13105(cb__$1,flag__$1,alt_handler__$1,meta13106));
});
}
return (new cljs.core.async.t13105(cb,flag,alt_handler,null));
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
return (function (p1__13108_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13108_SHARP_,port], null));
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
var G__13109 = (i + 1);
i = G__13109;
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
var alts_BANG___delegate = function (ports,p__13110){var map__13112 = p__13110;var map__13112__$1 = ((cljs.core.seq_QMARK_.call(null,map__13112))?cljs.core.apply.call(null,cljs.core.hash_map,map__13112):map__13112);var opts = map__13112__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13110 = null;if (arguments.length > 1) {
  p__13110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13110);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13113){
var ports = cljs.core.first(arglist__13113);
var p__13110 = cljs.core.rest(arglist__13113);
return alts_BANG___delegate(ports,p__13110);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13121 = (function (ch,f,map_LT_,meta13122){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13122 = meta13122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13121.cljs$lang$type = true;
cljs.core.async.t13121.cljs$lang$ctorStr = "cljs.core.async/t13121";
cljs.core.async.t13121.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13121");
});
cljs.core.async.t13121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13124 = (function (fn1,_,meta13122,ch,f,map_LT_,meta13125){
this.fn1 = fn1;
this._ = _;
this.meta13122 = meta13122;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13125 = meta13125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13124.cljs$lang$type = true;
cljs.core.async.t13124.cljs$lang$ctorStr = "cljs.core.async/t13124";
cljs.core.async.t13124.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13124");
});
cljs.core.async.t13124.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13124.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13114_SHARP_){return f1.call(null,(((p1__13114_SHARP_ == null))?null:self__.f.call(null,p1__13114_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13126){var self__ = this;
var _13126__$1 = this;return self__.meta13125;
});
cljs.core.async.t13124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13126,meta13125__$1){var self__ = this;
var _13126__$1 = this;return (new cljs.core.async.t13124(self__.fn1,self__._,self__.meta13122,self__.ch,self__.f,self__.map_LT_,meta13125__$1));
});
cljs.core.async.__GT_t13124 = (function __GT_t13124(fn1__$1,___$2,meta13122__$1,ch__$2,f__$2,map_LT___$2,meta13125){return (new cljs.core.async.t13124(fn1__$1,___$2,meta13122__$1,ch__$2,f__$2,map_LT___$2,meta13125));
});
}
return (new cljs.core.async.t13124(fn1,___$1,self__.meta13122,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13121.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13123){var self__ = this;
var _13123__$1 = this;return self__.meta13122;
});
cljs.core.async.t13121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13123,meta13122__$1){var self__ = this;
var _13123__$1 = this;return (new cljs.core.async.t13121(self__.ch,self__.f,self__.map_LT_,meta13122__$1));
});
cljs.core.async.__GT_t13121 = (function __GT_t13121(ch__$1,f__$1,map_LT___$1,meta13122){return (new cljs.core.async.t13121(ch__$1,f__$1,map_LT___$1,meta13122));
});
}
return (new cljs.core.async.t13121(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13130 = (function (ch,f,map_GT_,meta13131){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13131 = meta13131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13130.cljs$lang$type = true;
cljs.core.async.t13130.cljs$lang$ctorStr = "cljs.core.async/t13130";
cljs.core.async.t13130.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13130");
});
cljs.core.async.t13130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13130.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13132){var self__ = this;
var _13132__$1 = this;return self__.meta13131;
});
cljs.core.async.t13130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13132,meta13131__$1){var self__ = this;
var _13132__$1 = this;return (new cljs.core.async.t13130(self__.ch,self__.f,self__.map_GT_,meta13131__$1));
});
cljs.core.async.__GT_t13130 = (function __GT_t13130(ch__$1,f__$1,map_GT___$1,meta13131){return (new cljs.core.async.t13130(ch__$1,f__$1,map_GT___$1,meta13131));
});
}
return (new cljs.core.async.t13130(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13136 = (function (ch,p,filter_GT_,meta13137){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13137 = meta13137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13136.cljs$lang$type = true;
cljs.core.async.t13136.cljs$lang$ctorStr = "cljs.core.async/t13136";
cljs.core.async.t13136.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13136");
});
cljs.core.async.t13136.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13136.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13136.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13138){var self__ = this;
var _13138__$1 = this;return self__.meta13137;
});
cljs.core.async.t13136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13138,meta13137__$1){var self__ = this;
var _13138__$1 = this;return (new cljs.core.async.t13136(self__.ch,self__.p,self__.filter_GT_,meta13137__$1));
});
cljs.core.async.__GT_t13136 = (function __GT_t13136(ch__$1,p__$1,filter_GT___$1,meta13137){return (new cljs.core.async.t13136(ch__$1,p__$1,filter_GT___$1,meta13137));
});
}
return (new cljs.core.async.t13136(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13221 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13200){var state_val_13201 = (state_13200[1]);if((state_val_13201 === 1))
{var state_13200__$1 = state_13200;var statearr_13202_13222 = state_13200__$1;(statearr_13202_13222[2] = null);
(statearr_13202_13222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 2))
{var state_13200__$1 = state_13200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13200__$1,4,ch);
} else
{if((state_val_13201 === 3))
{var inst_13198 = (state_13200[2]);var state_13200__$1 = state_13200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13200__$1,inst_13198);
} else
{if((state_val_13201 === 4))
{var inst_13182 = (state_13200[7]);var inst_13182__$1 = (state_13200[2]);var inst_13183 = (inst_13182__$1 == null);var state_13200__$1 = (function (){var statearr_13203 = state_13200;(statearr_13203[7] = inst_13182__$1);
return statearr_13203;
})();if(cljs.core.truth_(inst_13183))
{var statearr_13204_13223 = state_13200__$1;(statearr_13204_13223[1] = 5);
} else
{var statearr_13205_13224 = state_13200__$1;(statearr_13205_13224[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 5))
{var inst_13185 = cljs.core.async.close_BANG_.call(null,out);var state_13200__$1 = state_13200;var statearr_13206_13225 = state_13200__$1;(statearr_13206_13225[2] = inst_13185);
(statearr_13206_13225[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 6))
{var inst_13182 = (state_13200[7]);var inst_13187 = p.call(null,inst_13182);var state_13200__$1 = state_13200;if(cljs.core.truth_(inst_13187))
{var statearr_13207_13226 = state_13200__$1;(statearr_13207_13226[1] = 8);
} else
{var statearr_13208_13227 = state_13200__$1;(statearr_13208_13227[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 7))
{var inst_13196 = (state_13200[2]);var state_13200__$1 = state_13200;var statearr_13209_13228 = state_13200__$1;(statearr_13209_13228[2] = inst_13196);
(statearr_13209_13228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 8))
{var inst_13182 = (state_13200[7]);var state_13200__$1 = state_13200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13200__$1,11,out,inst_13182);
} else
{if((state_val_13201 === 9))
{var state_13200__$1 = state_13200;var statearr_13210_13229 = state_13200__$1;(statearr_13210_13229[2] = null);
(statearr_13210_13229[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 10))
{var inst_13193 = (state_13200[2]);var state_13200__$1 = (function (){var statearr_13211 = state_13200;(statearr_13211[8] = inst_13193);
return statearr_13211;
})();var statearr_13212_13230 = state_13200__$1;(statearr_13212_13230[2] = null);
(statearr_13212_13230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 11))
{var inst_13190 = (state_13200[2]);var state_13200__$1 = state_13200;var statearr_13213_13231 = state_13200__$1;(statearr_13213_13231[2] = inst_13190);
(statearr_13213_13231[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13217 = [null,null,null,null,null,null,null,null,null];(statearr_13217[0] = state_machine__5507__auto__);
(statearr_13217[1] = 1);
return statearr_13217;
});
var state_machine__5507__auto____1 = (function (state_13200){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13200);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13218){if((e13218 instanceof Object))
{var ex__5510__auto__ = e13218;var statearr_13219_13232 = state_13200;(statearr_13219_13232[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13233 = state_13200;
state_13200 = G__13233;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13200){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13220 = f__5522__auto__.call(null);(statearr_13220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13221);
return statearr_13220;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13385){var state_val_13386 = (state_13385[1]);if((state_val_13386 === 1))
{var state_13385__$1 = state_13385;var statearr_13387_13424 = state_13385__$1;(statearr_13387_13424[2] = null);
(statearr_13387_13424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 2))
{var state_13385__$1 = state_13385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,4,in$);
} else
{if((state_val_13386 === 3))
{var inst_13383 = (state_13385[2]);var state_13385__$1 = state_13385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13385__$1,inst_13383);
} else
{if((state_val_13386 === 4))
{var inst_13331 = (state_13385[7]);var inst_13331__$1 = (state_13385[2]);var inst_13332 = (inst_13331__$1 == null);var state_13385__$1 = (function (){var statearr_13388 = state_13385;(statearr_13388[7] = inst_13331__$1);
return statearr_13388;
})();if(cljs.core.truth_(inst_13332))
{var statearr_13389_13425 = state_13385__$1;(statearr_13389_13425[1] = 5);
} else
{var statearr_13390_13426 = state_13385__$1;(statearr_13390_13426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 5))
{var inst_13334 = cljs.core.async.close_BANG_.call(null,out);var state_13385__$1 = state_13385;var statearr_13391_13427 = state_13385__$1;(statearr_13391_13427[2] = inst_13334);
(statearr_13391_13427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 6))
{var inst_13331 = (state_13385[7]);var inst_13336 = f.call(null,inst_13331);var inst_13341 = cljs.core.seq.call(null,inst_13336);var inst_13342 = inst_13341;var inst_13343 = null;var inst_13344 = 0;var inst_13345 = 0;var state_13385__$1 = (function (){var statearr_13392 = state_13385;(statearr_13392[8] = inst_13345);
(statearr_13392[9] = inst_13344);
(statearr_13392[10] = inst_13342);
(statearr_13392[11] = inst_13343);
return statearr_13392;
})();var statearr_13393_13428 = state_13385__$1;(statearr_13393_13428[2] = null);
(statearr_13393_13428[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 7))
{var inst_13381 = (state_13385[2]);var state_13385__$1 = state_13385;var statearr_13394_13429 = state_13385__$1;(statearr_13394_13429[2] = inst_13381);
(statearr_13394_13429[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 8))
{var inst_13345 = (state_13385[8]);var inst_13344 = (state_13385[9]);var inst_13347 = (inst_13345 < inst_13344);var inst_13348 = inst_13347;var state_13385__$1 = state_13385;if(cljs.core.truth_(inst_13348))
{var statearr_13395_13430 = state_13385__$1;(statearr_13395_13430[1] = 10);
} else
{var statearr_13396_13431 = state_13385__$1;(statearr_13396_13431[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 9))
{var inst_13378 = (state_13385[2]);var state_13385__$1 = (function (){var statearr_13397 = state_13385;(statearr_13397[12] = inst_13378);
return statearr_13397;
})();var statearr_13398_13432 = state_13385__$1;(statearr_13398_13432[2] = null);
(statearr_13398_13432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 10))
{var inst_13345 = (state_13385[8]);var inst_13343 = (state_13385[11]);var inst_13350 = cljs.core._nth.call(null,inst_13343,inst_13345);var state_13385__$1 = state_13385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13385__$1,13,out,inst_13350);
} else
{if((state_val_13386 === 11))
{var inst_13356 = (state_13385[13]);var inst_13342 = (state_13385[10]);var inst_13356__$1 = cljs.core.seq.call(null,inst_13342);var state_13385__$1 = (function (){var statearr_13402 = state_13385;(statearr_13402[13] = inst_13356__$1);
return statearr_13402;
})();if(inst_13356__$1)
{var statearr_13403_13433 = state_13385__$1;(statearr_13403_13433[1] = 14);
} else
{var statearr_13404_13434 = state_13385__$1;(statearr_13404_13434[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 12))
{var inst_13376 = (state_13385[2]);var state_13385__$1 = state_13385;var statearr_13405_13435 = state_13385__$1;(statearr_13405_13435[2] = inst_13376);
(statearr_13405_13435[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 13))
{var inst_13345 = (state_13385[8]);var inst_13344 = (state_13385[9]);var inst_13342 = (state_13385[10]);var inst_13343 = (state_13385[11]);var inst_13352 = (state_13385[2]);var inst_13353 = (inst_13345 + 1);var tmp13399 = inst_13344;var tmp13400 = inst_13342;var tmp13401 = inst_13343;var inst_13342__$1 = tmp13400;var inst_13343__$1 = tmp13401;var inst_13344__$1 = tmp13399;var inst_13345__$1 = inst_13353;var state_13385__$1 = (function (){var statearr_13406 = state_13385;(statearr_13406[14] = inst_13352);
(statearr_13406[8] = inst_13345__$1);
(statearr_13406[9] = inst_13344__$1);
(statearr_13406[10] = inst_13342__$1);
(statearr_13406[11] = inst_13343__$1);
return statearr_13406;
})();var statearr_13407_13436 = state_13385__$1;(statearr_13407_13436[2] = null);
(statearr_13407_13436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 14))
{var inst_13356 = (state_13385[13]);var inst_13358 = cljs.core.chunked_seq_QMARK_.call(null,inst_13356);var state_13385__$1 = state_13385;if(inst_13358)
{var statearr_13408_13437 = state_13385__$1;(statearr_13408_13437[1] = 17);
} else
{var statearr_13409_13438 = state_13385__$1;(statearr_13409_13438[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 15))
{var state_13385__$1 = state_13385;var statearr_13410_13439 = state_13385__$1;(statearr_13410_13439[2] = null);
(statearr_13410_13439[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 16))
{var inst_13374 = (state_13385[2]);var state_13385__$1 = state_13385;var statearr_13411_13440 = state_13385__$1;(statearr_13411_13440[2] = inst_13374);
(statearr_13411_13440[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 17))
{var inst_13356 = (state_13385[13]);var inst_13360 = cljs.core.chunk_first.call(null,inst_13356);var inst_13361 = cljs.core.chunk_rest.call(null,inst_13356);var inst_13362 = cljs.core.count.call(null,inst_13360);var inst_13342 = inst_13361;var inst_13343 = inst_13360;var inst_13344 = inst_13362;var inst_13345 = 0;var state_13385__$1 = (function (){var statearr_13412 = state_13385;(statearr_13412[8] = inst_13345);
(statearr_13412[9] = inst_13344);
(statearr_13412[10] = inst_13342);
(statearr_13412[11] = inst_13343);
return statearr_13412;
})();var statearr_13413_13441 = state_13385__$1;(statearr_13413_13441[2] = null);
(statearr_13413_13441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 18))
{var inst_13356 = (state_13385[13]);var inst_13365 = cljs.core.first.call(null,inst_13356);var state_13385__$1 = state_13385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13385__$1,20,out,inst_13365);
} else
{if((state_val_13386 === 19))
{var inst_13371 = (state_13385[2]);var state_13385__$1 = state_13385;var statearr_13414_13442 = state_13385__$1;(statearr_13414_13442[2] = inst_13371);
(statearr_13414_13442[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 20))
{var inst_13356 = (state_13385[13]);var inst_13367 = (state_13385[2]);var inst_13368 = cljs.core.next.call(null,inst_13356);var inst_13342 = inst_13368;var inst_13343 = null;var inst_13344 = 0;var inst_13345 = 0;var state_13385__$1 = (function (){var statearr_13415 = state_13385;(statearr_13415[15] = inst_13367);
(statearr_13415[8] = inst_13345);
(statearr_13415[9] = inst_13344);
(statearr_13415[10] = inst_13342);
(statearr_13415[11] = inst_13343);
return statearr_13415;
})();var statearr_13416_13443 = state_13385__$1;(statearr_13416_13443[2] = null);
(statearr_13416_13443[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13420[0] = state_machine__5507__auto__);
(statearr_13420[1] = 1);
return statearr_13420;
});
var state_machine__5507__auto____1 = (function (state_13385){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13385);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13421){if((e13421 instanceof Object))
{var ex__5510__auto__ = e13421;var statearr_13422_13444 = state_13385;(statearr_13422_13444[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13385);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13445 = state_13385;
state_13385 = G__13445;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13385){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13423 = f__5522__auto__.call(null);(statearr_13423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13423;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13505){var state_val_13506 = (state_13505[1]);if((state_val_13506 === 1))
{var state_13505__$1 = state_13505;var statearr_13507_13527 = state_13505__$1;(statearr_13507_13527[2] = null);
(statearr_13507_13527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 2))
{var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13505__$1,4,from);
} else
{if((state_val_13506 === 3))
{var inst_13503 = (state_13505[2]);var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13505__$1,inst_13503);
} else
{if((state_val_13506 === 4))
{var inst_13488 = (state_13505[7]);var inst_13488__$1 = (state_13505[2]);var inst_13489 = (inst_13488__$1 == null);var state_13505__$1 = (function (){var statearr_13508 = state_13505;(statearr_13508[7] = inst_13488__$1);
return statearr_13508;
})();if(cljs.core.truth_(inst_13489))
{var statearr_13509_13528 = state_13505__$1;(statearr_13509_13528[1] = 5);
} else
{var statearr_13510_13529 = state_13505__$1;(statearr_13510_13529[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 5))
{var state_13505__$1 = state_13505;if(cljs.core.truth_(close_QMARK_))
{var statearr_13511_13530 = state_13505__$1;(statearr_13511_13530[1] = 8);
} else
{var statearr_13512_13531 = state_13505__$1;(statearr_13512_13531[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 6))
{var inst_13488 = (state_13505[7]);var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13505__$1,11,to,inst_13488);
} else
{if((state_val_13506 === 7))
{var inst_13501 = (state_13505[2]);var state_13505__$1 = state_13505;var statearr_13513_13532 = state_13505__$1;(statearr_13513_13532[2] = inst_13501);
(statearr_13513_13532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 8))
{var inst_13492 = cljs.core.async.close_BANG_.call(null,to);var state_13505__$1 = state_13505;var statearr_13514_13533 = state_13505__$1;(statearr_13514_13533[2] = inst_13492);
(statearr_13514_13533[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 9))
{var state_13505__$1 = state_13505;var statearr_13515_13534 = state_13505__$1;(statearr_13515_13534[2] = null);
(statearr_13515_13534[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 10))
{var inst_13495 = (state_13505[2]);var state_13505__$1 = state_13505;var statearr_13516_13535 = state_13505__$1;(statearr_13516_13535[2] = inst_13495);
(statearr_13516_13535[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 11))
{var inst_13498 = (state_13505[2]);var state_13505__$1 = (function (){var statearr_13517 = state_13505;(statearr_13517[8] = inst_13498);
return statearr_13517;
})();var statearr_13518_13536 = state_13505__$1;(statearr_13518_13536[2] = null);
(statearr_13518_13536[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13522 = [null,null,null,null,null,null,null,null,null];(statearr_13522[0] = state_machine__5507__auto__);
(statearr_13522[1] = 1);
return statearr_13522;
});
var state_machine__5507__auto____1 = (function (state_13505){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13505);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13523){if((e13523 instanceof Object))
{var ex__5510__auto__ = e13523;var statearr_13524_13537 = state_13505;(statearr_13524_13537[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13505);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13538 = state_13505;
state_13505 = G__13538;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13505){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13525 = f__5522__auto__.call(null);(statearr_13525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13526);
return statearr_13525;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13625 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13603){var state_val_13604 = (state_13603[1]);if((state_val_13604 === 1))
{var state_13603__$1 = state_13603;var statearr_13605_13626 = state_13603__$1;(statearr_13605_13626[2] = null);
(statearr_13605_13626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 2))
{var state_13603__$1 = state_13603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13603__$1,4,ch);
} else
{if((state_val_13604 === 3))
{var inst_13601 = (state_13603[2]);var state_13603__$1 = state_13603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13603__$1,inst_13601);
} else
{if((state_val_13604 === 4))
{var inst_13584 = (state_13603[7]);var inst_13584__$1 = (state_13603[2]);var inst_13585 = (inst_13584__$1 == null);var state_13603__$1 = (function (){var statearr_13606 = state_13603;(statearr_13606[7] = inst_13584__$1);
return statearr_13606;
})();if(cljs.core.truth_(inst_13585))
{var statearr_13607_13627 = state_13603__$1;(statearr_13607_13627[1] = 5);
} else
{var statearr_13608_13628 = state_13603__$1;(statearr_13608_13628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 5))
{var inst_13587 = cljs.core.async.close_BANG_.call(null,tc);var inst_13588 = cljs.core.async.close_BANG_.call(null,fc);var state_13603__$1 = (function (){var statearr_13609 = state_13603;(statearr_13609[8] = inst_13587);
return statearr_13609;
})();var statearr_13610_13629 = state_13603__$1;(statearr_13610_13629[2] = inst_13588);
(statearr_13610_13629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 6))
{var inst_13584 = (state_13603[7]);var inst_13590 = p.call(null,inst_13584);var state_13603__$1 = state_13603;if(cljs.core.truth_(inst_13590))
{var statearr_13611_13630 = state_13603__$1;(statearr_13611_13630[1] = 9);
} else
{var statearr_13612_13631 = state_13603__$1;(statearr_13612_13631[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 7))
{var inst_13599 = (state_13603[2]);var state_13603__$1 = state_13603;var statearr_13613_13632 = state_13603__$1;(statearr_13613_13632[2] = inst_13599);
(statearr_13613_13632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 8))
{var inst_13596 = (state_13603[2]);var state_13603__$1 = (function (){var statearr_13614 = state_13603;(statearr_13614[9] = inst_13596);
return statearr_13614;
})();var statearr_13615_13633 = state_13603__$1;(statearr_13615_13633[2] = null);
(statearr_13615_13633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 9))
{var state_13603__$1 = state_13603;var statearr_13616_13634 = state_13603__$1;(statearr_13616_13634[2] = tc);
(statearr_13616_13634[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 10))
{var state_13603__$1 = state_13603;var statearr_13617_13635 = state_13603__$1;(statearr_13617_13635[2] = fc);
(statearr_13617_13635[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 11))
{var inst_13584 = (state_13603[7]);var inst_13594 = (state_13603[2]);var state_13603__$1 = state_13603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13603__$1,8,inst_13594,inst_13584);
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
var state_machine__5507__auto____0 = (function (){var statearr_13621 = [null,null,null,null,null,null,null,null,null,null];(statearr_13621[0] = state_machine__5507__auto__);
(statearr_13621[1] = 1);
return statearr_13621;
});
var state_machine__5507__auto____1 = (function (state_13603){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13622){if((e13622 instanceof Object))
{var ex__5510__auto__ = e13622;var statearr_13623_13636 = state_13603;(statearr_13623_13636[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13637 = state_13603;
state_13603 = G__13637;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13603){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13624 = f__5522__auto__.call(null);(statearr_13624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13625);
return statearr_13624;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13684){var state_val_13685 = (state_13684[1]);if((state_val_13685 === 7))
{var inst_13680 = (state_13684[2]);var state_13684__$1 = state_13684;var statearr_13686_13702 = state_13684__$1;(statearr_13686_13702[2] = inst_13680);
(statearr_13686_13702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 6))
{var inst_13673 = (state_13684[7]);var inst_13670 = (state_13684[8]);var inst_13677 = f.call(null,inst_13670,inst_13673);var inst_13670__$1 = inst_13677;var state_13684__$1 = (function (){var statearr_13687 = state_13684;(statearr_13687[8] = inst_13670__$1);
return statearr_13687;
})();var statearr_13688_13703 = state_13684__$1;(statearr_13688_13703[2] = null);
(statearr_13688_13703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 5))
{var inst_13670 = (state_13684[8]);var state_13684__$1 = state_13684;var statearr_13689_13704 = state_13684__$1;(statearr_13689_13704[2] = inst_13670);
(statearr_13689_13704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 4))
{var inst_13673 = (state_13684[7]);var inst_13673__$1 = (state_13684[2]);var inst_13674 = (inst_13673__$1 == null);var state_13684__$1 = (function (){var statearr_13690 = state_13684;(statearr_13690[7] = inst_13673__$1);
return statearr_13690;
})();if(cljs.core.truth_(inst_13674))
{var statearr_13691_13705 = state_13684__$1;(statearr_13691_13705[1] = 5);
} else
{var statearr_13692_13706 = state_13684__$1;(statearr_13692_13706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 3))
{var inst_13682 = (state_13684[2]);var state_13684__$1 = state_13684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13684__$1,inst_13682);
} else
{if((state_val_13685 === 2))
{var state_13684__$1 = state_13684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13684__$1,4,ch);
} else
{if((state_val_13685 === 1))
{var inst_13670 = init;var state_13684__$1 = (function (){var statearr_13693 = state_13684;(statearr_13693[8] = inst_13670);
return statearr_13693;
})();var statearr_13694_13707 = state_13684__$1;(statearr_13694_13707[2] = null);
(statearr_13694_13707[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13698 = [null,null,null,null,null,null,null,null,null];(statearr_13698[0] = state_machine__5507__auto__);
(statearr_13698[1] = 1);
return statearr_13698;
});
var state_machine__5507__auto____1 = (function (state_13684){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13699){if((e13699 instanceof Object))
{var ex__5510__auto__ = e13699;var statearr_13700_13708 = state_13684;(statearr_13700_13708[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13684);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13709 = state_13684;
state_13684 = G__13709;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13684){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13701 = f__5522__auto__.call(null);(statearr_13701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13701;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13771){var state_val_13772 = (state_13771[1]);if((state_val_13772 === 1))
{var inst_13751 = cljs.core.seq.call(null,coll);var inst_13752 = inst_13751;var state_13771__$1 = (function (){var statearr_13773 = state_13771;(statearr_13773[7] = inst_13752);
return statearr_13773;
})();var statearr_13774_13792 = state_13771__$1;(statearr_13774_13792[2] = null);
(statearr_13774_13792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13772 === 2))
{var inst_13752 = (state_13771[7]);var state_13771__$1 = state_13771;if(cljs.core.truth_(inst_13752))
{var statearr_13775_13793 = state_13771__$1;(statearr_13775_13793[1] = 4);
} else
{var statearr_13776_13794 = state_13771__$1;(statearr_13776_13794[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13772 === 3))
{var inst_13769 = (state_13771[2]);var state_13771__$1 = state_13771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13771__$1,inst_13769);
} else
{if((state_val_13772 === 4))
{var inst_13752 = (state_13771[7]);var inst_13755 = cljs.core.first.call(null,inst_13752);var state_13771__$1 = state_13771;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13771__$1,7,ch,inst_13755);
} else
{if((state_val_13772 === 5))
{var state_13771__$1 = state_13771;if(cljs.core.truth_(close_QMARK_))
{var statearr_13777_13795 = state_13771__$1;(statearr_13777_13795[1] = 8);
} else
{var statearr_13778_13796 = state_13771__$1;(statearr_13778_13796[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13772 === 6))
{var inst_13767 = (state_13771[2]);var state_13771__$1 = state_13771;var statearr_13779_13797 = state_13771__$1;(statearr_13779_13797[2] = inst_13767);
(statearr_13779_13797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13772 === 7))
{var inst_13752 = (state_13771[7]);var inst_13757 = (state_13771[2]);var inst_13758 = cljs.core.next.call(null,inst_13752);var inst_13752__$1 = inst_13758;var state_13771__$1 = (function (){var statearr_13780 = state_13771;(statearr_13780[8] = inst_13757);
(statearr_13780[7] = inst_13752__$1);
return statearr_13780;
})();var statearr_13781_13798 = state_13771__$1;(statearr_13781_13798[2] = null);
(statearr_13781_13798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13772 === 8))
{var inst_13762 = cljs.core.async.close_BANG_.call(null,ch);var state_13771__$1 = state_13771;var statearr_13782_13799 = state_13771__$1;(statearr_13782_13799[2] = inst_13762);
(statearr_13782_13799[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13772 === 9))
{var state_13771__$1 = state_13771;var statearr_13783_13800 = state_13771__$1;(statearr_13783_13800[2] = null);
(statearr_13783_13800[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13772 === 10))
{var inst_13765 = (state_13771[2]);var state_13771__$1 = state_13771;var statearr_13784_13801 = state_13771__$1;(statearr_13784_13801[2] = inst_13765);
(statearr_13784_13801[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13788 = [null,null,null,null,null,null,null,null,null];(statearr_13788[0] = state_machine__5507__auto__);
(statearr_13788[1] = 1);
return statearr_13788;
});
var state_machine__5507__auto____1 = (function (state_13771){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13771);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13789){if((e13789 instanceof Object))
{var ex__5510__auto__ = e13789;var statearr_13790_13802 = state_13771;(statearr_13790_13802[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13803 = state_13771;
state_13771 = G__13803;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13771){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13791 = f__5522__auto__.call(null);(statearr_13791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13791;
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
cljs.core.async.Mux = (function (){var obj13805 = {};return obj13805;
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
cljs.core.async.Mult = (function (){var obj13807 = {};return obj13807;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14031 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14031 = (function (cs,ch,mult,meta14032){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14032 = meta14032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14031.cljs$lang$type = true;
cljs.core.async.t14031.cljs$lang$ctorStr = "cljs.core.async/t14031";
cljs.core.async.t14031.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14031");
});})(cs))
;
cljs.core.async.t14031.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14031.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14031.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14031.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14031.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14033){var self__ = this;
var _14033__$1 = this;return self__.meta14032;
});})(cs))
;
cljs.core.async.t14031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14033,meta14032__$1){var self__ = this;
var _14033__$1 = this;return (new cljs.core.async.t14031(self__.cs,self__.ch,self__.mult,meta14032__$1));
});})(cs))
;
cljs.core.async.__GT_t14031 = ((function (cs){
return (function __GT_t14031(cs__$1,ch__$1,mult__$1,meta14032){return (new cljs.core.async.t14031(cs__$1,ch__$1,mult__$1,meta14032));
});})(cs))
;
}
return (new cljs.core.async.t14031(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14254 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14168){var state_val_14169 = (state_14168[1]);if((state_val_14169 === 32))
{var inst_14112 = (state_14168[7]);var inst_14036 = (state_14168[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14168,31,Object,null,30);var inst_14119 = cljs.core.async.put_BANG_.call(null,inst_14112,inst_14036,done);var state_14168__$1 = state_14168;var statearr_14170_14255 = state_14168__$1;(statearr_14170_14255[2] = inst_14119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14168__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 1))
{var state_14168__$1 = state_14168;var statearr_14171_14256 = state_14168__$1;(statearr_14171_14256[2] = null);
(statearr_14171_14256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 33))
{var inst_14125 = (state_14168[9]);var inst_14127 = cljs.core.chunked_seq_QMARK_.call(null,inst_14125);var state_14168__$1 = state_14168;if(inst_14127)
{var statearr_14172_14257 = state_14168__$1;(statearr_14172_14257[1] = 36);
} else
{var statearr_14173_14258 = state_14168__$1;(statearr_14173_14258[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 2))
{var state_14168__$1 = state_14168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14168__$1,4,ch);
} else
{if((state_val_14169 === 34))
{var state_14168__$1 = state_14168;var statearr_14174_14259 = state_14168__$1;(statearr_14174_14259[2] = null);
(statearr_14174_14259[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 3))
{var inst_14166 = (state_14168[2]);var state_14168__$1 = state_14168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14168__$1,inst_14166);
} else
{if((state_val_14169 === 35))
{var inst_14150 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14175_14260 = state_14168__$1;(statearr_14175_14260[2] = inst_14150);
(statearr_14175_14260[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 4))
{var inst_14036 = (state_14168[8]);var inst_14036__$1 = (state_14168[2]);var inst_14037 = (inst_14036__$1 == null);var state_14168__$1 = (function (){var statearr_14176 = state_14168;(statearr_14176[8] = inst_14036__$1);
return statearr_14176;
})();if(cljs.core.truth_(inst_14037))
{var statearr_14177_14261 = state_14168__$1;(statearr_14177_14261[1] = 5);
} else
{var statearr_14178_14262 = state_14168__$1;(statearr_14178_14262[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 36))
{var inst_14125 = (state_14168[9]);var inst_14129 = cljs.core.chunk_first.call(null,inst_14125);var inst_14130 = cljs.core.chunk_rest.call(null,inst_14125);var inst_14131 = cljs.core.count.call(null,inst_14129);var inst_14104 = inst_14130;var inst_14105 = inst_14129;var inst_14106 = inst_14131;var inst_14107 = 0;var state_14168__$1 = (function (){var statearr_14179 = state_14168;(statearr_14179[10] = inst_14107);
(statearr_14179[11] = inst_14106);
(statearr_14179[12] = inst_14105);
(statearr_14179[13] = inst_14104);
return statearr_14179;
})();var statearr_14180_14263 = state_14168__$1;(statearr_14180_14263[2] = null);
(statearr_14180_14263[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 5))
{var inst_14043 = cljs.core.deref.call(null,cs);var inst_14044 = cljs.core.seq.call(null,inst_14043);var inst_14045 = inst_14044;var inst_14046 = null;var inst_14047 = 0;var inst_14048 = 0;var state_14168__$1 = (function (){var statearr_14181 = state_14168;(statearr_14181[14] = inst_14046);
(statearr_14181[15] = inst_14047);
(statearr_14181[16] = inst_14045);
(statearr_14181[17] = inst_14048);
return statearr_14181;
})();var statearr_14182_14264 = state_14168__$1;(statearr_14182_14264[2] = null);
(statearr_14182_14264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 37))
{var inst_14125 = (state_14168[9]);var inst_14134 = cljs.core.first.call(null,inst_14125);var state_14168__$1 = (function (){var statearr_14183 = state_14168;(statearr_14183[18] = inst_14134);
return statearr_14183;
})();var statearr_14184_14265 = state_14168__$1;(statearr_14184_14265[2] = null);
(statearr_14184_14265[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 6))
{var inst_14096 = (state_14168[19]);var inst_14095 = cljs.core.deref.call(null,cs);var inst_14096__$1 = cljs.core.keys.call(null,inst_14095);var inst_14097 = cljs.core.count.call(null,inst_14096__$1);var inst_14098 = cljs.core.reset_BANG_.call(null,dctr,inst_14097);var inst_14103 = cljs.core.seq.call(null,inst_14096__$1);var inst_14104 = inst_14103;var inst_14105 = null;var inst_14106 = 0;var inst_14107 = 0;var state_14168__$1 = (function (){var statearr_14185 = state_14168;(statearr_14185[19] = inst_14096__$1);
(statearr_14185[20] = inst_14098);
(statearr_14185[10] = inst_14107);
(statearr_14185[11] = inst_14106);
(statearr_14185[12] = inst_14105);
(statearr_14185[13] = inst_14104);
return statearr_14185;
})();var statearr_14186_14266 = state_14168__$1;(statearr_14186_14266[2] = null);
(statearr_14186_14266[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 38))
{var inst_14147 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14187_14267 = state_14168__$1;(statearr_14187_14267[2] = inst_14147);
(statearr_14187_14267[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 7))
{var inst_14164 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14188_14268 = state_14168__$1;(statearr_14188_14268[2] = inst_14164);
(statearr_14188_14268[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 39))
{var inst_14125 = (state_14168[9]);var inst_14143 = (state_14168[2]);var inst_14144 = cljs.core.next.call(null,inst_14125);var inst_14104 = inst_14144;var inst_14105 = null;var inst_14106 = 0;var inst_14107 = 0;var state_14168__$1 = (function (){var statearr_14189 = state_14168;(statearr_14189[21] = inst_14143);
(statearr_14189[10] = inst_14107);
(statearr_14189[11] = inst_14106);
(statearr_14189[12] = inst_14105);
(statearr_14189[13] = inst_14104);
return statearr_14189;
})();var statearr_14190_14269 = state_14168__$1;(statearr_14190_14269[2] = null);
(statearr_14190_14269[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 8))
{var inst_14047 = (state_14168[15]);var inst_14048 = (state_14168[17]);var inst_14050 = (inst_14048 < inst_14047);var inst_14051 = inst_14050;var state_14168__$1 = state_14168;if(cljs.core.truth_(inst_14051))
{var statearr_14191_14270 = state_14168__$1;(statearr_14191_14270[1] = 10);
} else
{var statearr_14192_14271 = state_14168__$1;(statearr_14192_14271[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 40))
{var inst_14134 = (state_14168[18]);var inst_14135 = (state_14168[2]);var inst_14136 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14137 = cljs.core.async.untap_STAR_.call(null,m,inst_14134);var state_14168__$1 = (function (){var statearr_14193 = state_14168;(statearr_14193[22] = inst_14136);
(statearr_14193[23] = inst_14135);
return statearr_14193;
})();var statearr_14194_14272 = state_14168__$1;(statearr_14194_14272[2] = inst_14137);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14168__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 9))
{var inst_14093 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14195_14273 = state_14168__$1;(statearr_14195_14273[2] = inst_14093);
(statearr_14195_14273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 41))
{var inst_14134 = (state_14168[18]);var inst_14036 = (state_14168[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14168,40,Object,null,39);var inst_14141 = cljs.core.async.put_BANG_.call(null,inst_14134,inst_14036,done);var state_14168__$1 = state_14168;var statearr_14196_14274 = state_14168__$1;(statearr_14196_14274[2] = inst_14141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14168__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 10))
{var inst_14046 = (state_14168[14]);var inst_14048 = (state_14168[17]);var inst_14054 = cljs.core._nth.call(null,inst_14046,inst_14048);var inst_14055 = cljs.core.nth.call(null,inst_14054,0,null);var inst_14056 = cljs.core.nth.call(null,inst_14054,1,null);var state_14168__$1 = (function (){var statearr_14197 = state_14168;(statearr_14197[24] = inst_14055);
return statearr_14197;
})();if(cljs.core.truth_(inst_14056))
{var statearr_14198_14275 = state_14168__$1;(statearr_14198_14275[1] = 13);
} else
{var statearr_14199_14276 = state_14168__$1;(statearr_14199_14276[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 42))
{var state_14168__$1 = state_14168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14168__$1,45,dchan);
} else
{if((state_val_14169 === 11))
{var inst_14045 = (state_14168[16]);var inst_14065 = (state_14168[25]);var inst_14065__$1 = cljs.core.seq.call(null,inst_14045);var state_14168__$1 = (function (){var statearr_14200 = state_14168;(statearr_14200[25] = inst_14065__$1);
return statearr_14200;
})();if(inst_14065__$1)
{var statearr_14201_14277 = state_14168__$1;(statearr_14201_14277[1] = 16);
} else
{var statearr_14202_14278 = state_14168__$1;(statearr_14202_14278[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 43))
{var state_14168__$1 = state_14168;var statearr_14203_14279 = state_14168__$1;(statearr_14203_14279[2] = null);
(statearr_14203_14279[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 12))
{var inst_14091 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14204_14280 = state_14168__$1;(statearr_14204_14280[2] = inst_14091);
(statearr_14204_14280[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 44))
{var inst_14161 = (state_14168[2]);var state_14168__$1 = (function (){var statearr_14205 = state_14168;(statearr_14205[26] = inst_14161);
return statearr_14205;
})();var statearr_14206_14281 = state_14168__$1;(statearr_14206_14281[2] = null);
(statearr_14206_14281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 13))
{var inst_14055 = (state_14168[24]);var inst_14058 = cljs.core.async.close_BANG_.call(null,inst_14055);var state_14168__$1 = state_14168;var statearr_14207_14282 = state_14168__$1;(statearr_14207_14282[2] = inst_14058);
(statearr_14207_14282[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 45))
{var inst_14158 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14211_14283 = state_14168__$1;(statearr_14211_14283[2] = inst_14158);
(statearr_14211_14283[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 14))
{var state_14168__$1 = state_14168;var statearr_14212_14284 = state_14168__$1;(statearr_14212_14284[2] = null);
(statearr_14212_14284[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 15))
{var inst_14046 = (state_14168[14]);var inst_14047 = (state_14168[15]);var inst_14045 = (state_14168[16]);var inst_14048 = (state_14168[17]);var inst_14061 = (state_14168[2]);var inst_14062 = (inst_14048 + 1);var tmp14208 = inst_14046;var tmp14209 = inst_14047;var tmp14210 = inst_14045;var inst_14045__$1 = tmp14210;var inst_14046__$1 = tmp14208;var inst_14047__$1 = tmp14209;var inst_14048__$1 = inst_14062;var state_14168__$1 = (function (){var statearr_14213 = state_14168;(statearr_14213[14] = inst_14046__$1);
(statearr_14213[15] = inst_14047__$1);
(statearr_14213[16] = inst_14045__$1);
(statearr_14213[27] = inst_14061);
(statearr_14213[17] = inst_14048__$1);
return statearr_14213;
})();var statearr_14214_14285 = state_14168__$1;(statearr_14214_14285[2] = null);
(statearr_14214_14285[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 16))
{var inst_14065 = (state_14168[25]);var inst_14067 = cljs.core.chunked_seq_QMARK_.call(null,inst_14065);var state_14168__$1 = state_14168;if(inst_14067)
{var statearr_14215_14286 = state_14168__$1;(statearr_14215_14286[1] = 19);
} else
{var statearr_14216_14287 = state_14168__$1;(statearr_14216_14287[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 17))
{var state_14168__$1 = state_14168;var statearr_14217_14288 = state_14168__$1;(statearr_14217_14288[2] = null);
(statearr_14217_14288[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 18))
{var inst_14089 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14218_14289 = state_14168__$1;(statearr_14218_14289[2] = inst_14089);
(statearr_14218_14289[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 19))
{var inst_14065 = (state_14168[25]);var inst_14069 = cljs.core.chunk_first.call(null,inst_14065);var inst_14070 = cljs.core.chunk_rest.call(null,inst_14065);var inst_14071 = cljs.core.count.call(null,inst_14069);var inst_14045 = inst_14070;var inst_14046 = inst_14069;var inst_14047 = inst_14071;var inst_14048 = 0;var state_14168__$1 = (function (){var statearr_14219 = state_14168;(statearr_14219[14] = inst_14046);
(statearr_14219[15] = inst_14047);
(statearr_14219[16] = inst_14045);
(statearr_14219[17] = inst_14048);
return statearr_14219;
})();var statearr_14220_14290 = state_14168__$1;(statearr_14220_14290[2] = null);
(statearr_14220_14290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 20))
{var inst_14065 = (state_14168[25]);var inst_14075 = cljs.core.first.call(null,inst_14065);var inst_14076 = cljs.core.nth.call(null,inst_14075,0,null);var inst_14077 = cljs.core.nth.call(null,inst_14075,1,null);var state_14168__$1 = (function (){var statearr_14221 = state_14168;(statearr_14221[28] = inst_14076);
return statearr_14221;
})();if(cljs.core.truth_(inst_14077))
{var statearr_14222_14291 = state_14168__$1;(statearr_14222_14291[1] = 22);
} else
{var statearr_14223_14292 = state_14168__$1;(statearr_14223_14292[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 21))
{var inst_14086 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14224_14293 = state_14168__$1;(statearr_14224_14293[2] = inst_14086);
(statearr_14224_14293[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 22))
{var inst_14076 = (state_14168[28]);var inst_14079 = cljs.core.async.close_BANG_.call(null,inst_14076);var state_14168__$1 = state_14168;var statearr_14225_14294 = state_14168__$1;(statearr_14225_14294[2] = inst_14079);
(statearr_14225_14294[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 23))
{var state_14168__$1 = state_14168;var statearr_14226_14295 = state_14168__$1;(statearr_14226_14295[2] = null);
(statearr_14226_14295[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 24))
{var inst_14065 = (state_14168[25]);var inst_14082 = (state_14168[2]);var inst_14083 = cljs.core.next.call(null,inst_14065);var inst_14045 = inst_14083;var inst_14046 = null;var inst_14047 = 0;var inst_14048 = 0;var state_14168__$1 = (function (){var statearr_14227 = state_14168;(statearr_14227[14] = inst_14046);
(statearr_14227[15] = inst_14047);
(statearr_14227[16] = inst_14045);
(statearr_14227[17] = inst_14048);
(statearr_14227[29] = inst_14082);
return statearr_14227;
})();var statearr_14228_14296 = state_14168__$1;(statearr_14228_14296[2] = null);
(statearr_14228_14296[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 25))
{var inst_14107 = (state_14168[10]);var inst_14106 = (state_14168[11]);var inst_14109 = (inst_14107 < inst_14106);var inst_14110 = inst_14109;var state_14168__$1 = state_14168;if(cljs.core.truth_(inst_14110))
{var statearr_14229_14297 = state_14168__$1;(statearr_14229_14297[1] = 27);
} else
{var statearr_14230_14298 = state_14168__$1;(statearr_14230_14298[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 26))
{var inst_14096 = (state_14168[19]);var inst_14154 = (state_14168[2]);var inst_14155 = cljs.core.seq.call(null,inst_14096);var state_14168__$1 = (function (){var statearr_14231 = state_14168;(statearr_14231[30] = inst_14154);
return statearr_14231;
})();if(inst_14155)
{var statearr_14232_14299 = state_14168__$1;(statearr_14232_14299[1] = 42);
} else
{var statearr_14233_14300 = state_14168__$1;(statearr_14233_14300[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 27))
{var inst_14107 = (state_14168[10]);var inst_14105 = (state_14168[12]);var inst_14112 = cljs.core._nth.call(null,inst_14105,inst_14107);var state_14168__$1 = (function (){var statearr_14234 = state_14168;(statearr_14234[7] = inst_14112);
return statearr_14234;
})();var statearr_14235_14301 = state_14168__$1;(statearr_14235_14301[2] = null);
(statearr_14235_14301[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 28))
{var inst_14125 = (state_14168[9]);var inst_14104 = (state_14168[13]);var inst_14125__$1 = cljs.core.seq.call(null,inst_14104);var state_14168__$1 = (function (){var statearr_14239 = state_14168;(statearr_14239[9] = inst_14125__$1);
return statearr_14239;
})();if(inst_14125__$1)
{var statearr_14240_14302 = state_14168__$1;(statearr_14240_14302[1] = 33);
} else
{var statearr_14241_14303 = state_14168__$1;(statearr_14241_14303[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 29))
{var inst_14152 = (state_14168[2]);var state_14168__$1 = state_14168;var statearr_14242_14304 = state_14168__$1;(statearr_14242_14304[2] = inst_14152);
(statearr_14242_14304[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 30))
{var inst_14107 = (state_14168[10]);var inst_14106 = (state_14168[11]);var inst_14105 = (state_14168[12]);var inst_14104 = (state_14168[13]);var inst_14121 = (state_14168[2]);var inst_14122 = (inst_14107 + 1);var tmp14236 = inst_14106;var tmp14237 = inst_14105;var tmp14238 = inst_14104;var inst_14104__$1 = tmp14238;var inst_14105__$1 = tmp14237;var inst_14106__$1 = tmp14236;var inst_14107__$1 = inst_14122;var state_14168__$1 = (function (){var statearr_14243 = state_14168;(statearr_14243[31] = inst_14121);
(statearr_14243[10] = inst_14107__$1);
(statearr_14243[11] = inst_14106__$1);
(statearr_14243[12] = inst_14105__$1);
(statearr_14243[13] = inst_14104__$1);
return statearr_14243;
})();var statearr_14244_14305 = state_14168__$1;(statearr_14244_14305[2] = null);
(statearr_14244_14305[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14169 === 31))
{var inst_14112 = (state_14168[7]);var inst_14113 = (state_14168[2]);var inst_14114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14115 = cljs.core.async.untap_STAR_.call(null,m,inst_14112);var state_14168__$1 = (function (){var statearr_14245 = state_14168;(statearr_14245[32] = inst_14114);
(statearr_14245[33] = inst_14113);
return statearr_14245;
})();var statearr_14246_14306 = state_14168__$1;(statearr_14246_14306[2] = inst_14115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14168__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14250[0] = state_machine__5507__auto__);
(statearr_14250[1] = 1);
return statearr_14250;
});
var state_machine__5507__auto____1 = (function (state_14168){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14168);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14251){if((e14251 instanceof Object))
{var ex__5510__auto__ = e14251;var statearr_14252_14307 = state_14168;(statearr_14252_14307[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14308 = state_14168;
state_14168 = G__14308;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14168){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14253 = f__5522__auto__.call(null);(statearr_14253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14254);
return statearr_14253;
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
cljs.core.async.Mix = (function (){var obj14310 = {};return obj14310;
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
;var m = (function (){if(typeof cljs.core.async.t14420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14420 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14421){
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
this.meta14421 = meta14421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14420.cljs$lang$type = true;
cljs.core.async.t14420.cljs$lang$ctorStr = "cljs.core.async/t14420";
cljs.core.async.t14420.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14420");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14420.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14422){var self__ = this;
var _14422__$1 = this;return self__.meta14421;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14422,meta14421__$1){var self__ = this;
var _14422__$1 = this;return (new cljs.core.async.t14420(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14421__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14420 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14420(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14421){return (new cljs.core.async.t14420(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14421));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14420(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14487){var state_val_14488 = (state_14487[1]);if((state_val_14488 === 1))
{var inst_14426 = (state_14487[7]);var inst_14426__$1 = calc_state.call(null);var inst_14427 = cljs.core.seq_QMARK_.call(null,inst_14426__$1);var state_14487__$1 = (function (){var statearr_14489 = state_14487;(statearr_14489[7] = inst_14426__$1);
return statearr_14489;
})();if(inst_14427)
{var statearr_14490_14530 = state_14487__$1;(statearr_14490_14530[1] = 2);
} else
{var statearr_14491_14531 = state_14487__$1;(statearr_14491_14531[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 2))
{var inst_14426 = (state_14487[7]);var inst_14429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14426);var state_14487__$1 = state_14487;var statearr_14492_14532 = state_14487__$1;(statearr_14492_14532[2] = inst_14429);
(statearr_14492_14532[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 3))
{var inst_14426 = (state_14487[7]);var state_14487__$1 = state_14487;var statearr_14493_14533 = state_14487__$1;(statearr_14493_14533[2] = inst_14426);
(statearr_14493_14533[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 4))
{var inst_14426 = (state_14487[7]);var inst_14432 = (state_14487[2]);var inst_14433 = cljs.core.get.call(null,inst_14432,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14434 = cljs.core.get.call(null,inst_14432,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14435 = cljs.core.get.call(null,inst_14432,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14436 = inst_14426;var state_14487__$1 = (function (){var statearr_14494 = state_14487;(statearr_14494[8] = inst_14436);
(statearr_14494[9] = inst_14435);
(statearr_14494[10] = inst_14434);
(statearr_14494[11] = inst_14433);
return statearr_14494;
})();var statearr_14495_14534 = state_14487__$1;(statearr_14495_14534[2] = null);
(statearr_14495_14534[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 5))
{var inst_14436 = (state_14487[8]);var inst_14439 = cljs.core.seq_QMARK_.call(null,inst_14436);var state_14487__$1 = state_14487;if(inst_14439)
{var statearr_14496_14535 = state_14487__$1;(statearr_14496_14535[1] = 7);
} else
{var statearr_14497_14536 = state_14487__$1;(statearr_14497_14536[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 6))
{var inst_14485 = (state_14487[2]);var state_14487__$1 = state_14487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14487__$1,inst_14485);
} else
{if((state_val_14488 === 7))
{var inst_14436 = (state_14487[8]);var inst_14441 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14436);var state_14487__$1 = state_14487;var statearr_14498_14537 = state_14487__$1;(statearr_14498_14537[2] = inst_14441);
(statearr_14498_14537[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 8))
{var inst_14436 = (state_14487[8]);var state_14487__$1 = state_14487;var statearr_14499_14538 = state_14487__$1;(statearr_14499_14538[2] = inst_14436);
(statearr_14499_14538[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 9))
{var inst_14444 = (state_14487[12]);var inst_14444__$1 = (state_14487[2]);var inst_14445 = cljs.core.get.call(null,inst_14444__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14446 = cljs.core.get.call(null,inst_14444__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14447 = cljs.core.get.call(null,inst_14444__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14487__$1 = (function (){var statearr_14500 = state_14487;(statearr_14500[13] = inst_14447);
(statearr_14500[14] = inst_14446);
(statearr_14500[12] = inst_14444__$1);
return statearr_14500;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14487__$1,10,inst_14445);
} else
{if((state_val_14488 === 10))
{var inst_14451 = (state_14487[15]);var inst_14452 = (state_14487[16]);var inst_14450 = (state_14487[2]);var inst_14451__$1 = cljs.core.nth.call(null,inst_14450,0,null);var inst_14452__$1 = cljs.core.nth.call(null,inst_14450,1,null);var inst_14453 = (inst_14451__$1 == null);var inst_14454 = cljs.core._EQ_.call(null,inst_14452__$1,change);var inst_14455 = (inst_14453) || (inst_14454);var state_14487__$1 = (function (){var statearr_14501 = state_14487;(statearr_14501[15] = inst_14451__$1);
(statearr_14501[16] = inst_14452__$1);
return statearr_14501;
})();if(cljs.core.truth_(inst_14455))
{var statearr_14502_14539 = state_14487__$1;(statearr_14502_14539[1] = 11);
} else
{var statearr_14503_14540 = state_14487__$1;(statearr_14503_14540[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 11))
{var inst_14451 = (state_14487[15]);var inst_14457 = (inst_14451 == null);var state_14487__$1 = state_14487;if(cljs.core.truth_(inst_14457))
{var statearr_14504_14541 = state_14487__$1;(statearr_14504_14541[1] = 14);
} else
{var statearr_14505_14542 = state_14487__$1;(statearr_14505_14542[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 12))
{var inst_14452 = (state_14487[16]);var inst_14447 = (state_14487[13]);var inst_14466 = (state_14487[17]);var inst_14466__$1 = inst_14447.call(null,inst_14452);var state_14487__$1 = (function (){var statearr_14506 = state_14487;(statearr_14506[17] = inst_14466__$1);
return statearr_14506;
})();if(cljs.core.truth_(inst_14466__$1))
{var statearr_14507_14543 = state_14487__$1;(statearr_14507_14543[1] = 17);
} else
{var statearr_14508_14544 = state_14487__$1;(statearr_14508_14544[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 13))
{var inst_14483 = (state_14487[2]);var state_14487__$1 = state_14487;var statearr_14509_14545 = state_14487__$1;(statearr_14509_14545[2] = inst_14483);
(statearr_14509_14545[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 14))
{var inst_14452 = (state_14487[16]);var inst_14459 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14452);var state_14487__$1 = state_14487;var statearr_14510_14546 = state_14487__$1;(statearr_14510_14546[2] = inst_14459);
(statearr_14510_14546[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 15))
{var state_14487__$1 = state_14487;var statearr_14511_14547 = state_14487__$1;(statearr_14511_14547[2] = null);
(statearr_14511_14547[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 16))
{var inst_14462 = (state_14487[2]);var inst_14463 = calc_state.call(null);var inst_14436 = inst_14463;var state_14487__$1 = (function (){var statearr_14512 = state_14487;(statearr_14512[18] = inst_14462);
(statearr_14512[8] = inst_14436);
return statearr_14512;
})();var statearr_14513_14548 = state_14487__$1;(statearr_14513_14548[2] = null);
(statearr_14513_14548[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 17))
{var inst_14466 = (state_14487[17]);var state_14487__$1 = state_14487;var statearr_14514_14549 = state_14487__$1;(statearr_14514_14549[2] = inst_14466);
(statearr_14514_14549[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 18))
{var inst_14452 = (state_14487[16]);var inst_14447 = (state_14487[13]);var inst_14446 = (state_14487[14]);var inst_14469 = cljs.core.empty_QMARK_.call(null,inst_14447);var inst_14470 = inst_14446.call(null,inst_14452);var inst_14471 = cljs.core.not.call(null,inst_14470);var inst_14472 = (inst_14469) && (inst_14471);var state_14487__$1 = state_14487;var statearr_14515_14550 = state_14487__$1;(statearr_14515_14550[2] = inst_14472);
(statearr_14515_14550[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 19))
{var inst_14474 = (state_14487[2]);var state_14487__$1 = state_14487;if(cljs.core.truth_(inst_14474))
{var statearr_14516_14551 = state_14487__$1;(statearr_14516_14551[1] = 20);
} else
{var statearr_14517_14552 = state_14487__$1;(statearr_14517_14552[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 20))
{var inst_14451 = (state_14487[15]);var state_14487__$1 = state_14487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14487__$1,23,out,inst_14451);
} else
{if((state_val_14488 === 21))
{var state_14487__$1 = state_14487;var statearr_14518_14553 = state_14487__$1;(statearr_14518_14553[2] = null);
(statearr_14518_14553[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 22))
{var inst_14444 = (state_14487[12]);var inst_14480 = (state_14487[2]);var inst_14436 = inst_14444;var state_14487__$1 = (function (){var statearr_14519 = state_14487;(statearr_14519[19] = inst_14480);
(statearr_14519[8] = inst_14436);
return statearr_14519;
})();var statearr_14520_14554 = state_14487__$1;(statearr_14520_14554[2] = null);
(statearr_14520_14554[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 23))
{var inst_14477 = (state_14487[2]);var state_14487__$1 = state_14487;var statearr_14521_14555 = state_14487__$1;(statearr_14521_14555[2] = inst_14477);
(statearr_14521_14555[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14525[0] = state_machine__5507__auto__);
(statearr_14525[1] = 1);
return statearr_14525;
});
var state_machine__5507__auto____1 = (function (state_14487){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14487);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14526){if((e14526 instanceof Object))
{var ex__5510__auto__ = e14526;var statearr_14527_14556 = state_14487;(statearr_14527_14556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14557 = state_14487;
state_14487 = G__14557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14487){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14528 = f__5522__auto__.call(null);(statearr_14528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14529);
return statearr_14528;
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
cljs.core.async.Pub = (function (){var obj14559 = {};return obj14559;
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
return (function (p1__14560_SHARP_){if(cljs.core.truth_(p1__14560_SHARP_.call(null,topic)))
{return p1__14560_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14560_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14685 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14686){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14686 = meta14686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14685.cljs$lang$type = true;
cljs.core.async.t14685.cljs$lang$ctorStr = "cljs.core.async/t14685";
cljs.core.async.t14685.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14685");
});})(mults,ensure_mult))
;
cljs.core.async.t14685.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14685.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14685.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14685.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14687){var self__ = this;
var _14687__$1 = this;return self__.meta14686;
});})(mults,ensure_mult))
;
cljs.core.async.t14685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14687,meta14686__$1){var self__ = this;
var _14687__$1 = this;return (new cljs.core.async.t14685(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14686__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14685 = ((function (mults,ensure_mult){
return (function __GT_t14685(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14686){return (new cljs.core.async.t14685(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14686));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14685(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14761){var state_val_14762 = (state_14761[1]);if((state_val_14762 === 1))
{var state_14761__$1 = state_14761;var statearr_14763_14810 = state_14761__$1;(statearr_14763_14810[2] = null);
(statearr_14763_14810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 2))
{var state_14761__$1 = state_14761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14761__$1,4,ch);
} else
{if((state_val_14762 === 3))
{var inst_14759 = (state_14761[2]);var state_14761__$1 = state_14761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14761__$1,inst_14759);
} else
{if((state_val_14762 === 4))
{var inst_14690 = (state_14761[7]);var inst_14690__$1 = (state_14761[2]);var inst_14691 = (inst_14690__$1 == null);var state_14761__$1 = (function (){var statearr_14764 = state_14761;(statearr_14764[7] = inst_14690__$1);
return statearr_14764;
})();if(cljs.core.truth_(inst_14691))
{var statearr_14765_14811 = state_14761__$1;(statearr_14765_14811[1] = 5);
} else
{var statearr_14766_14812 = state_14761__$1;(statearr_14766_14812[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 5))
{var inst_14697 = cljs.core.deref.call(null,mults);var inst_14698 = cljs.core.vals.call(null,inst_14697);var inst_14699 = cljs.core.seq.call(null,inst_14698);var inst_14700 = inst_14699;var inst_14701 = null;var inst_14702 = 0;var inst_14703 = 0;var state_14761__$1 = (function (){var statearr_14767 = state_14761;(statearr_14767[8] = inst_14701);
(statearr_14767[9] = inst_14702);
(statearr_14767[10] = inst_14703);
(statearr_14767[11] = inst_14700);
return statearr_14767;
})();var statearr_14768_14813 = state_14761__$1;(statearr_14768_14813[2] = null);
(statearr_14768_14813[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 6))
{var inst_14738 = (state_14761[12]);var inst_14690 = (state_14761[7]);var inst_14740 = (state_14761[13]);var inst_14738__$1 = topic_fn.call(null,inst_14690);var inst_14739 = cljs.core.deref.call(null,mults);var inst_14740__$1 = cljs.core.get.call(null,inst_14739,inst_14738__$1);var state_14761__$1 = (function (){var statearr_14769 = state_14761;(statearr_14769[12] = inst_14738__$1);
(statearr_14769[13] = inst_14740__$1);
return statearr_14769;
})();if(cljs.core.truth_(inst_14740__$1))
{var statearr_14770_14814 = state_14761__$1;(statearr_14770_14814[1] = 19);
} else
{var statearr_14771_14815 = state_14761__$1;(statearr_14771_14815[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 7))
{var inst_14757 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14772_14816 = state_14761__$1;(statearr_14772_14816[2] = inst_14757);
(statearr_14772_14816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 8))
{var inst_14702 = (state_14761[9]);var inst_14703 = (state_14761[10]);var inst_14705 = (inst_14703 < inst_14702);var inst_14706 = inst_14705;var state_14761__$1 = state_14761;if(cljs.core.truth_(inst_14706))
{var statearr_14776_14817 = state_14761__$1;(statearr_14776_14817[1] = 10);
} else
{var statearr_14777_14818 = state_14761__$1;(statearr_14777_14818[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 9))
{var inst_14736 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14778_14819 = state_14761__$1;(statearr_14778_14819[2] = inst_14736);
(statearr_14778_14819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 10))
{var inst_14701 = (state_14761[8]);var inst_14702 = (state_14761[9]);var inst_14703 = (state_14761[10]);var inst_14700 = (state_14761[11]);var inst_14708 = cljs.core._nth.call(null,inst_14701,inst_14703);var inst_14709 = cljs.core.async.muxch_STAR_.call(null,inst_14708);var inst_14710 = cljs.core.async.close_BANG_.call(null,inst_14709);var inst_14711 = (inst_14703 + 1);var tmp14773 = inst_14701;var tmp14774 = inst_14702;var tmp14775 = inst_14700;var inst_14700__$1 = tmp14775;var inst_14701__$1 = tmp14773;var inst_14702__$1 = tmp14774;var inst_14703__$1 = inst_14711;var state_14761__$1 = (function (){var statearr_14779 = state_14761;(statearr_14779[8] = inst_14701__$1);
(statearr_14779[14] = inst_14710);
(statearr_14779[9] = inst_14702__$1);
(statearr_14779[10] = inst_14703__$1);
(statearr_14779[11] = inst_14700__$1);
return statearr_14779;
})();var statearr_14780_14820 = state_14761__$1;(statearr_14780_14820[2] = null);
(statearr_14780_14820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 11))
{var inst_14714 = (state_14761[15]);var inst_14700 = (state_14761[11]);var inst_14714__$1 = cljs.core.seq.call(null,inst_14700);var state_14761__$1 = (function (){var statearr_14781 = state_14761;(statearr_14781[15] = inst_14714__$1);
return statearr_14781;
})();if(inst_14714__$1)
{var statearr_14782_14821 = state_14761__$1;(statearr_14782_14821[1] = 13);
} else
{var statearr_14783_14822 = state_14761__$1;(statearr_14783_14822[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 12))
{var inst_14734 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14784_14823 = state_14761__$1;(statearr_14784_14823[2] = inst_14734);
(statearr_14784_14823[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 13))
{var inst_14714 = (state_14761[15]);var inst_14716 = cljs.core.chunked_seq_QMARK_.call(null,inst_14714);var state_14761__$1 = state_14761;if(inst_14716)
{var statearr_14785_14824 = state_14761__$1;(statearr_14785_14824[1] = 16);
} else
{var statearr_14786_14825 = state_14761__$1;(statearr_14786_14825[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 14))
{var state_14761__$1 = state_14761;var statearr_14787_14826 = state_14761__$1;(statearr_14787_14826[2] = null);
(statearr_14787_14826[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 15))
{var inst_14732 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14788_14827 = state_14761__$1;(statearr_14788_14827[2] = inst_14732);
(statearr_14788_14827[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 16))
{var inst_14714 = (state_14761[15]);var inst_14718 = cljs.core.chunk_first.call(null,inst_14714);var inst_14719 = cljs.core.chunk_rest.call(null,inst_14714);var inst_14720 = cljs.core.count.call(null,inst_14718);var inst_14700 = inst_14719;var inst_14701 = inst_14718;var inst_14702 = inst_14720;var inst_14703 = 0;var state_14761__$1 = (function (){var statearr_14789 = state_14761;(statearr_14789[8] = inst_14701);
(statearr_14789[9] = inst_14702);
(statearr_14789[10] = inst_14703);
(statearr_14789[11] = inst_14700);
return statearr_14789;
})();var statearr_14790_14828 = state_14761__$1;(statearr_14790_14828[2] = null);
(statearr_14790_14828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 17))
{var inst_14714 = (state_14761[15]);var inst_14723 = cljs.core.first.call(null,inst_14714);var inst_14724 = cljs.core.async.muxch_STAR_.call(null,inst_14723);var inst_14725 = cljs.core.async.close_BANG_.call(null,inst_14724);var inst_14726 = cljs.core.next.call(null,inst_14714);var inst_14700 = inst_14726;var inst_14701 = null;var inst_14702 = 0;var inst_14703 = 0;var state_14761__$1 = (function (){var statearr_14791 = state_14761;(statearr_14791[16] = inst_14725);
(statearr_14791[8] = inst_14701);
(statearr_14791[9] = inst_14702);
(statearr_14791[10] = inst_14703);
(statearr_14791[11] = inst_14700);
return statearr_14791;
})();var statearr_14792_14829 = state_14761__$1;(statearr_14792_14829[2] = null);
(statearr_14792_14829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 18))
{var inst_14729 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14793_14830 = state_14761__$1;(statearr_14793_14830[2] = inst_14729);
(statearr_14793_14830[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 19))
{var state_14761__$1 = state_14761;var statearr_14794_14831 = state_14761__$1;(statearr_14794_14831[2] = null);
(statearr_14794_14831[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 20))
{var state_14761__$1 = state_14761;var statearr_14795_14832 = state_14761__$1;(statearr_14795_14832[2] = null);
(statearr_14795_14832[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 21))
{var inst_14754 = (state_14761[2]);var state_14761__$1 = (function (){var statearr_14796 = state_14761;(statearr_14796[17] = inst_14754);
return statearr_14796;
})();var statearr_14797_14833 = state_14761__$1;(statearr_14797_14833[2] = null);
(statearr_14797_14833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 22))
{var inst_14751 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14798_14834 = state_14761__$1;(statearr_14798_14834[2] = inst_14751);
(statearr_14798_14834[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 23))
{var inst_14738 = (state_14761[12]);var inst_14742 = (state_14761[2]);var inst_14743 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14738);var state_14761__$1 = (function (){var statearr_14799 = state_14761;(statearr_14799[18] = inst_14742);
return statearr_14799;
})();var statearr_14800_14835 = state_14761__$1;(statearr_14800_14835[2] = inst_14743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14761__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 24))
{var inst_14690 = (state_14761[7]);var inst_14740 = (state_14761[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14761,23,Object,null,22);var inst_14747 = cljs.core.async.muxch_STAR_.call(null,inst_14740);var state_14761__$1 = state_14761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14761__$1,25,inst_14747,inst_14690);
} else
{if((state_val_14762 === 25))
{var inst_14749 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14801_14836 = state_14761__$1;(statearr_14801_14836[2] = inst_14749);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14761__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14805[0] = state_machine__5507__auto__);
(statearr_14805[1] = 1);
return statearr_14805;
});
var state_machine__5507__auto____1 = (function (state_14761){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14761);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14806){if((e14806 instanceof Object))
{var ex__5510__auto__ = e14806;var statearr_14807_14837 = state_14761;(statearr_14807_14837[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14838 = state_14761;
state_14761 = G__14838;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14761){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14808 = f__5522__auto__.call(null);(statearr_14808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14809);
return statearr_14808;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14945){var state_val_14946 = (state_14945[1]);if((state_val_14946 === 1))
{var state_14945__$1 = state_14945;var statearr_14947_14976 = state_14945__$1;(statearr_14947_14976[2] = null);
(statearr_14947_14976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 2))
{var inst_14908 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14909 = 0;var state_14945__$1 = (function (){var statearr_14948 = state_14945;(statearr_14948[7] = inst_14909);
(statearr_14948[8] = inst_14908);
return statearr_14948;
})();var statearr_14949_14977 = state_14945__$1;(statearr_14949_14977[2] = null);
(statearr_14949_14977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 3))
{var inst_14943 = (state_14945[2]);var state_14945__$1 = state_14945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14945__$1,inst_14943);
} else
{if((state_val_14946 === 4))
{var inst_14909 = (state_14945[7]);var inst_14911 = (inst_14909 < cnt);var state_14945__$1 = state_14945;if(cljs.core.truth_(inst_14911))
{var statearr_14950_14978 = state_14945__$1;(statearr_14950_14978[1] = 6);
} else
{var statearr_14951_14979 = state_14945__$1;(statearr_14951_14979[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 5))
{var inst_14929 = (state_14945[2]);var state_14945__$1 = (function (){var statearr_14952 = state_14945;(statearr_14952[9] = inst_14929);
return statearr_14952;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14945__$1,12,dchan);
} else
{if((state_val_14946 === 6))
{var state_14945__$1 = state_14945;var statearr_14953_14980 = state_14945__$1;(statearr_14953_14980[2] = null);
(statearr_14953_14980[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 7))
{var state_14945__$1 = state_14945;var statearr_14954_14981 = state_14945__$1;(statearr_14954_14981[2] = null);
(statearr_14954_14981[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 8))
{var inst_14927 = (state_14945[2]);var state_14945__$1 = state_14945;var statearr_14955_14982 = state_14945__$1;(statearr_14955_14982[2] = inst_14927);
(statearr_14955_14982[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 9))
{var inst_14909 = (state_14945[7]);var inst_14922 = (state_14945[2]);var inst_14923 = (inst_14909 + 1);var inst_14909__$1 = inst_14923;var state_14945__$1 = (function (){var statearr_14956 = state_14945;(statearr_14956[10] = inst_14922);
(statearr_14956[7] = inst_14909__$1);
return statearr_14956;
})();var statearr_14957_14983 = state_14945__$1;(statearr_14957_14983[2] = null);
(statearr_14957_14983[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 10))
{var inst_14913 = (state_14945[2]);var inst_14914 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14945__$1 = (function (){var statearr_14958 = state_14945;(statearr_14958[11] = inst_14913);
return statearr_14958;
})();var statearr_14959_14984 = state_14945__$1;(statearr_14959_14984[2] = inst_14914);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 11))
{var inst_14909 = (state_14945[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14945,10,Object,null,9);var inst_14918 = chs__$1.call(null,inst_14909);var inst_14919 = done.call(null,inst_14909);var inst_14920 = cljs.core.async.take_BANG_.call(null,inst_14918,inst_14919);var state_14945__$1 = state_14945;var statearr_14960_14985 = state_14945__$1;(statearr_14960_14985[2] = inst_14920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 12))
{var inst_14931 = (state_14945[12]);var inst_14931__$1 = (state_14945[2]);var inst_14932 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14931__$1);var state_14945__$1 = (function (){var statearr_14961 = state_14945;(statearr_14961[12] = inst_14931__$1);
return statearr_14961;
})();if(cljs.core.truth_(inst_14932))
{var statearr_14962_14986 = state_14945__$1;(statearr_14962_14986[1] = 13);
} else
{var statearr_14963_14987 = state_14945__$1;(statearr_14963_14987[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 13))
{var inst_14934 = cljs.core.async.close_BANG_.call(null,out);var state_14945__$1 = state_14945;var statearr_14964_14988 = state_14945__$1;(statearr_14964_14988[2] = inst_14934);
(statearr_14964_14988[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 14))
{var inst_14931 = (state_14945[12]);var inst_14936 = cljs.core.apply.call(null,f,inst_14931);var state_14945__$1 = state_14945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14945__$1,16,out,inst_14936);
} else
{if((state_val_14946 === 15))
{var inst_14941 = (state_14945[2]);var state_14945__$1 = state_14945;var statearr_14965_14989 = state_14945__$1;(statearr_14965_14989[2] = inst_14941);
(statearr_14965_14989[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14946 === 16))
{var inst_14938 = (state_14945[2]);var state_14945__$1 = (function (){var statearr_14966 = state_14945;(statearr_14966[13] = inst_14938);
return statearr_14966;
})();var statearr_14967_14990 = state_14945__$1;(statearr_14967_14990[2] = null);
(statearr_14967_14990[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14971[0] = state_machine__5507__auto__);
(statearr_14971[1] = 1);
return statearr_14971;
});
var state_machine__5507__auto____1 = (function (state_14945){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14945);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14972){if((e14972 instanceof Object))
{var ex__5510__auto__ = e14972;var statearr_14973_14991 = state_14945;(statearr_14973_14991[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14992 = state_14945;
state_14945 = G__14992;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14945){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14974 = f__5522__auto__.call(null);(statearr_14974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14975);
return statearr_14974;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15076){var state_val_15077 = (state_15076[1]);if((state_val_15077 === 1))
{var inst_15047 = cljs.core.vec.call(null,chs);var inst_15048 = inst_15047;var state_15076__$1 = (function (){var statearr_15078 = state_15076;(statearr_15078[7] = inst_15048);
return statearr_15078;
})();var statearr_15079_15101 = state_15076__$1;(statearr_15079_15101[2] = null);
(statearr_15079_15101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15077 === 2))
{var inst_15048 = (state_15076[7]);var inst_15050 = cljs.core.count.call(null,inst_15048);var inst_15051 = (inst_15050 > 0);var state_15076__$1 = state_15076;if(cljs.core.truth_(inst_15051))
{var statearr_15080_15102 = state_15076__$1;(statearr_15080_15102[1] = 4);
} else
{var statearr_15081_15103 = state_15076__$1;(statearr_15081_15103[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15077 === 3))
{var inst_15074 = (state_15076[2]);var state_15076__$1 = state_15076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15076__$1,inst_15074);
} else
{if((state_val_15077 === 4))
{var inst_15048 = (state_15076[7]);var state_15076__$1 = state_15076;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15076__$1,7,inst_15048);
} else
{if((state_val_15077 === 5))
{var inst_15070 = cljs.core.async.close_BANG_.call(null,out);var state_15076__$1 = state_15076;var statearr_15082_15104 = state_15076__$1;(statearr_15082_15104[2] = inst_15070);
(statearr_15082_15104[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15077 === 6))
{var inst_15072 = (state_15076[2]);var state_15076__$1 = state_15076;var statearr_15083_15105 = state_15076__$1;(statearr_15083_15105[2] = inst_15072);
(statearr_15083_15105[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15077 === 7))
{var inst_15056 = (state_15076[8]);var inst_15055 = (state_15076[9]);var inst_15055__$1 = (state_15076[2]);var inst_15056__$1 = cljs.core.nth.call(null,inst_15055__$1,0,null);var inst_15057 = cljs.core.nth.call(null,inst_15055__$1,1,null);var inst_15058 = (inst_15056__$1 == null);var state_15076__$1 = (function (){var statearr_15084 = state_15076;(statearr_15084[8] = inst_15056__$1);
(statearr_15084[10] = inst_15057);
(statearr_15084[9] = inst_15055__$1);
return statearr_15084;
})();if(cljs.core.truth_(inst_15058))
{var statearr_15085_15106 = state_15076__$1;(statearr_15085_15106[1] = 8);
} else
{var statearr_15086_15107 = state_15076__$1;(statearr_15086_15107[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15077 === 8))
{var inst_15056 = (state_15076[8]);var inst_15057 = (state_15076[10]);var inst_15055 = (state_15076[9]);var inst_15048 = (state_15076[7]);var inst_15060 = (function (){var c = inst_15057;var v = inst_15056;var vec__15053 = inst_15055;var cs = inst_15048;return ((function (c,v,vec__15053,cs,inst_15056,inst_15057,inst_15055,inst_15048,state_val_15077){
return (function (p1__14993_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14993_SHARP_);
});
;})(c,v,vec__15053,cs,inst_15056,inst_15057,inst_15055,inst_15048,state_val_15077))
})();var inst_15061 = cljs.core.filterv.call(null,inst_15060,inst_15048);var inst_15048__$1 = inst_15061;var state_15076__$1 = (function (){var statearr_15087 = state_15076;(statearr_15087[7] = inst_15048__$1);
return statearr_15087;
})();var statearr_15088_15108 = state_15076__$1;(statearr_15088_15108[2] = null);
(statearr_15088_15108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15077 === 9))
{var inst_15056 = (state_15076[8]);var state_15076__$1 = state_15076;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15076__$1,11,out,inst_15056);
} else
{if((state_val_15077 === 10))
{var inst_15068 = (state_15076[2]);var state_15076__$1 = state_15076;var statearr_15090_15109 = state_15076__$1;(statearr_15090_15109[2] = inst_15068);
(statearr_15090_15109[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15077 === 11))
{var inst_15048 = (state_15076[7]);var inst_15065 = (state_15076[2]);var tmp15089 = inst_15048;var inst_15048__$1 = tmp15089;var state_15076__$1 = (function (){var statearr_15091 = state_15076;(statearr_15091[11] = inst_15065);
(statearr_15091[7] = inst_15048__$1);
return statearr_15091;
})();var statearr_15092_15110 = state_15076__$1;(statearr_15092_15110[2] = null);
(statearr_15092_15110[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15096 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15096[0] = state_machine__5507__auto__);
(statearr_15096[1] = 1);
return statearr_15096;
});
var state_machine__5507__auto____1 = (function (state_15076){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15097){if((e15097 instanceof Object))
{var ex__5510__auto__ = e15097;var statearr_15098_15111 = state_15076;(statearr_15098_15111[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15076);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15112 = state_15076;
state_15076 = G__15112;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15076){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15099 = f__5522__auto__.call(null);(statearr_15099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15100);
return statearr_15099;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15205 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15182){var state_val_15183 = (state_15182[1]);if((state_val_15183 === 1))
{var inst_15159 = 0;var state_15182__$1 = (function (){var statearr_15184 = state_15182;(statearr_15184[7] = inst_15159);
return statearr_15184;
})();var statearr_15185_15206 = state_15182__$1;(statearr_15185_15206[2] = null);
(statearr_15185_15206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15183 === 2))
{var inst_15159 = (state_15182[7]);var inst_15161 = (inst_15159 < n);var state_15182__$1 = state_15182;if(cljs.core.truth_(inst_15161))
{var statearr_15186_15207 = state_15182__$1;(statearr_15186_15207[1] = 4);
} else
{var statearr_15187_15208 = state_15182__$1;(statearr_15187_15208[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15183 === 3))
{var inst_15179 = (state_15182[2]);var inst_15180 = cljs.core.async.close_BANG_.call(null,out);var state_15182__$1 = (function (){var statearr_15188 = state_15182;(statearr_15188[8] = inst_15179);
return statearr_15188;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15182__$1,inst_15180);
} else
{if((state_val_15183 === 4))
{var state_15182__$1 = state_15182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15182__$1,7,ch);
} else
{if((state_val_15183 === 5))
{var state_15182__$1 = state_15182;var statearr_15189_15209 = state_15182__$1;(statearr_15189_15209[2] = null);
(statearr_15189_15209[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15183 === 6))
{var inst_15177 = (state_15182[2]);var state_15182__$1 = state_15182;var statearr_15190_15210 = state_15182__$1;(statearr_15190_15210[2] = inst_15177);
(statearr_15190_15210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15183 === 7))
{var inst_15164 = (state_15182[9]);var inst_15164__$1 = (state_15182[2]);var inst_15165 = (inst_15164__$1 == null);var inst_15166 = cljs.core.not.call(null,inst_15165);var state_15182__$1 = (function (){var statearr_15191 = state_15182;(statearr_15191[9] = inst_15164__$1);
return statearr_15191;
})();if(inst_15166)
{var statearr_15192_15211 = state_15182__$1;(statearr_15192_15211[1] = 8);
} else
{var statearr_15193_15212 = state_15182__$1;(statearr_15193_15212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15183 === 8))
{var inst_15164 = (state_15182[9]);var state_15182__$1 = state_15182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15182__$1,11,out,inst_15164);
} else
{if((state_val_15183 === 9))
{var state_15182__$1 = state_15182;var statearr_15194_15213 = state_15182__$1;(statearr_15194_15213[2] = null);
(statearr_15194_15213[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15183 === 10))
{var inst_15174 = (state_15182[2]);var state_15182__$1 = state_15182;var statearr_15195_15214 = state_15182__$1;(statearr_15195_15214[2] = inst_15174);
(statearr_15195_15214[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15183 === 11))
{var inst_15159 = (state_15182[7]);var inst_15169 = (state_15182[2]);var inst_15170 = (inst_15159 + 1);var inst_15159__$1 = inst_15170;var state_15182__$1 = (function (){var statearr_15196 = state_15182;(statearr_15196[10] = inst_15169);
(statearr_15196[7] = inst_15159__$1);
return statearr_15196;
})();var statearr_15197_15215 = state_15182__$1;(statearr_15197_15215[2] = null);
(statearr_15197_15215[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15201 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15201[0] = state_machine__5507__auto__);
(statearr_15201[1] = 1);
return statearr_15201;
});
var state_machine__5507__auto____1 = (function (state_15182){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15182);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15202){if((e15202 instanceof Object))
{var ex__5510__auto__ = e15202;var statearr_15203_15216 = state_15182;(statearr_15203_15216[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15217 = state_15182;
state_15182 = G__15217;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15182){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15204 = f__5522__auto__.call(null);(statearr_15204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15205);
return statearr_15204;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15314 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15289){var state_val_15290 = (state_15289[1]);if((state_val_15290 === 1))
{var inst_15266 = null;var state_15289__$1 = (function (){var statearr_15291 = state_15289;(statearr_15291[7] = inst_15266);
return statearr_15291;
})();var statearr_15292_15315 = state_15289__$1;(statearr_15292_15315[2] = null);
(statearr_15292_15315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15290 === 2))
{var state_15289__$1 = state_15289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15289__$1,4,ch);
} else
{if((state_val_15290 === 3))
{var inst_15286 = (state_15289[2]);var inst_15287 = cljs.core.async.close_BANG_.call(null,out);var state_15289__$1 = (function (){var statearr_15293 = state_15289;(statearr_15293[8] = inst_15286);
return statearr_15293;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15289__$1,inst_15287);
} else
{if((state_val_15290 === 4))
{var inst_15269 = (state_15289[9]);var inst_15269__$1 = (state_15289[2]);var inst_15270 = (inst_15269__$1 == null);var inst_15271 = cljs.core.not.call(null,inst_15270);var state_15289__$1 = (function (){var statearr_15294 = state_15289;(statearr_15294[9] = inst_15269__$1);
return statearr_15294;
})();if(inst_15271)
{var statearr_15295_15316 = state_15289__$1;(statearr_15295_15316[1] = 5);
} else
{var statearr_15296_15317 = state_15289__$1;(statearr_15296_15317[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15290 === 5))
{var inst_15269 = (state_15289[9]);var inst_15266 = (state_15289[7]);var inst_15273 = cljs.core._EQ_.call(null,inst_15269,inst_15266);var state_15289__$1 = state_15289;if(inst_15273)
{var statearr_15297_15318 = state_15289__$1;(statearr_15297_15318[1] = 8);
} else
{var statearr_15298_15319 = state_15289__$1;(statearr_15298_15319[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15290 === 6))
{var state_15289__$1 = state_15289;var statearr_15300_15320 = state_15289__$1;(statearr_15300_15320[2] = null);
(statearr_15300_15320[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15290 === 7))
{var inst_15284 = (state_15289[2]);var state_15289__$1 = state_15289;var statearr_15301_15321 = state_15289__$1;(statearr_15301_15321[2] = inst_15284);
(statearr_15301_15321[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15290 === 8))
{var inst_15266 = (state_15289[7]);var tmp15299 = inst_15266;var inst_15266__$1 = tmp15299;var state_15289__$1 = (function (){var statearr_15302 = state_15289;(statearr_15302[7] = inst_15266__$1);
return statearr_15302;
})();var statearr_15303_15322 = state_15289__$1;(statearr_15303_15322[2] = null);
(statearr_15303_15322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15290 === 9))
{var inst_15269 = (state_15289[9]);var state_15289__$1 = state_15289;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15289__$1,11,out,inst_15269);
} else
{if((state_val_15290 === 10))
{var inst_15281 = (state_15289[2]);var state_15289__$1 = state_15289;var statearr_15304_15323 = state_15289__$1;(statearr_15304_15323[2] = inst_15281);
(statearr_15304_15323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15290 === 11))
{var inst_15269 = (state_15289[9]);var inst_15278 = (state_15289[2]);var inst_15266 = inst_15269;var state_15289__$1 = (function (){var statearr_15305 = state_15289;(statearr_15305[7] = inst_15266);
(statearr_15305[10] = inst_15278);
return statearr_15305;
})();var statearr_15306_15324 = state_15289__$1;(statearr_15306_15324[2] = null);
(statearr_15306_15324[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15310 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15310[0] = state_machine__5507__auto__);
(statearr_15310[1] = 1);
return statearr_15310;
});
var state_machine__5507__auto____1 = (function (state_15289){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15289);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15311){if((e15311 instanceof Object))
{var ex__5510__auto__ = e15311;var statearr_15312_15325 = state_15289;(statearr_15312_15325[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15289);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15326 = state_15289;
state_15289 = G__15326;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15289){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15313 = f__5522__auto__.call(null);(statearr_15313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15314);
return statearr_15313;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15461 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15431){var state_val_15432 = (state_15431[1]);if((state_val_15432 === 1))
{var inst_15394 = (new Array(n));var inst_15395 = inst_15394;var inst_15396 = 0;var state_15431__$1 = (function (){var statearr_15433 = state_15431;(statearr_15433[7] = inst_15396);
(statearr_15433[8] = inst_15395);
return statearr_15433;
})();var statearr_15434_15462 = state_15431__$1;(statearr_15434_15462[2] = null);
(statearr_15434_15462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 2))
{var state_15431__$1 = state_15431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15431__$1,4,ch);
} else
{if((state_val_15432 === 3))
{var inst_15429 = (state_15431[2]);var state_15431__$1 = state_15431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15431__$1,inst_15429);
} else
{if((state_val_15432 === 4))
{var inst_15399 = (state_15431[9]);var inst_15399__$1 = (state_15431[2]);var inst_15400 = (inst_15399__$1 == null);var inst_15401 = cljs.core.not.call(null,inst_15400);var state_15431__$1 = (function (){var statearr_15435 = state_15431;(statearr_15435[9] = inst_15399__$1);
return statearr_15435;
})();if(inst_15401)
{var statearr_15436_15463 = state_15431__$1;(statearr_15436_15463[1] = 5);
} else
{var statearr_15437_15464 = state_15431__$1;(statearr_15437_15464[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 5))
{var inst_15399 = (state_15431[9]);var inst_15404 = (state_15431[10]);var inst_15396 = (state_15431[7]);var inst_15395 = (state_15431[8]);var inst_15403 = (inst_15395[inst_15396] = inst_15399);var inst_15404__$1 = (inst_15396 + 1);var inst_15405 = (inst_15404__$1 < n);var state_15431__$1 = (function (){var statearr_15438 = state_15431;(statearr_15438[10] = inst_15404__$1);
(statearr_15438[11] = inst_15403);
return statearr_15438;
})();if(cljs.core.truth_(inst_15405))
{var statearr_15439_15465 = state_15431__$1;(statearr_15439_15465[1] = 8);
} else
{var statearr_15440_15466 = state_15431__$1;(statearr_15440_15466[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 6))
{var inst_15396 = (state_15431[7]);var inst_15417 = (inst_15396 > 0);var state_15431__$1 = state_15431;if(cljs.core.truth_(inst_15417))
{var statearr_15442_15467 = state_15431__$1;(statearr_15442_15467[1] = 12);
} else
{var statearr_15443_15468 = state_15431__$1;(statearr_15443_15468[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 7))
{var inst_15427 = (state_15431[2]);var state_15431__$1 = state_15431;var statearr_15444_15469 = state_15431__$1;(statearr_15444_15469[2] = inst_15427);
(statearr_15444_15469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 8))
{var inst_15404 = (state_15431[10]);var inst_15395 = (state_15431[8]);var tmp15441 = inst_15395;var inst_15395__$1 = tmp15441;var inst_15396 = inst_15404;var state_15431__$1 = (function (){var statearr_15445 = state_15431;(statearr_15445[7] = inst_15396);
(statearr_15445[8] = inst_15395__$1);
return statearr_15445;
})();var statearr_15446_15470 = state_15431__$1;(statearr_15446_15470[2] = null);
(statearr_15446_15470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 9))
{var inst_15395 = (state_15431[8]);var inst_15409 = cljs.core.vec.call(null,inst_15395);var state_15431__$1 = state_15431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15431__$1,11,out,inst_15409);
} else
{if((state_val_15432 === 10))
{var inst_15415 = (state_15431[2]);var state_15431__$1 = state_15431;var statearr_15447_15471 = state_15431__$1;(statearr_15447_15471[2] = inst_15415);
(statearr_15447_15471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 11))
{var inst_15411 = (state_15431[2]);var inst_15412 = (new Array(n));var inst_15395 = inst_15412;var inst_15396 = 0;var state_15431__$1 = (function (){var statearr_15448 = state_15431;(statearr_15448[12] = inst_15411);
(statearr_15448[7] = inst_15396);
(statearr_15448[8] = inst_15395);
return statearr_15448;
})();var statearr_15449_15472 = state_15431__$1;(statearr_15449_15472[2] = null);
(statearr_15449_15472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 12))
{var inst_15395 = (state_15431[8]);var inst_15419 = cljs.core.vec.call(null,inst_15395);var state_15431__$1 = state_15431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15431__$1,15,out,inst_15419);
} else
{if((state_val_15432 === 13))
{var state_15431__$1 = state_15431;var statearr_15450_15473 = state_15431__$1;(statearr_15450_15473[2] = null);
(statearr_15450_15473[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 14))
{var inst_15424 = (state_15431[2]);var inst_15425 = cljs.core.async.close_BANG_.call(null,out);var state_15431__$1 = (function (){var statearr_15451 = state_15431;(statearr_15451[13] = inst_15424);
return statearr_15451;
})();var statearr_15452_15474 = state_15431__$1;(statearr_15452_15474[2] = inst_15425);
(statearr_15452_15474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15432 === 15))
{var inst_15421 = (state_15431[2]);var state_15431__$1 = state_15431;var statearr_15453_15475 = state_15431__$1;(statearr_15453_15475[2] = inst_15421);
(statearr_15453_15475[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15457[0] = state_machine__5507__auto__);
(statearr_15457[1] = 1);
return statearr_15457;
});
var state_machine__5507__auto____1 = (function (state_15431){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15431);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15458){if((e15458 instanceof Object))
{var ex__5510__auto__ = e15458;var statearr_15459_15476 = state_15431;(statearr_15459_15476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15477 = state_15431;
state_15431 = G__15477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15431){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15460 = f__5522__auto__.call(null);(statearr_15460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15461);
return statearr_15460;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15590){var state_val_15591 = (state_15590[1]);if((state_val_15591 === 1))
{var inst_15549 = [];var inst_15550 = inst_15549;var inst_15551 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15590__$1 = (function (){var statearr_15592 = state_15590;(statearr_15592[7] = inst_15551);
(statearr_15592[8] = inst_15550);
return statearr_15592;
})();var statearr_15593_15621 = state_15590__$1;(statearr_15593_15621[2] = null);
(statearr_15593_15621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 2))
{var state_15590__$1 = state_15590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15590__$1,4,ch);
} else
{if((state_val_15591 === 3))
{var inst_15588 = (state_15590[2]);var state_15590__$1 = state_15590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15590__$1,inst_15588);
} else
{if((state_val_15591 === 4))
{var inst_15554 = (state_15590[9]);var inst_15554__$1 = (state_15590[2]);var inst_15555 = (inst_15554__$1 == null);var inst_15556 = cljs.core.not.call(null,inst_15555);var state_15590__$1 = (function (){var statearr_15594 = state_15590;(statearr_15594[9] = inst_15554__$1);
return statearr_15594;
})();if(inst_15556)
{var statearr_15595_15622 = state_15590__$1;(statearr_15595_15622[1] = 5);
} else
{var statearr_15596_15623 = state_15590__$1;(statearr_15596_15623[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 5))
{var inst_15554 = (state_15590[9]);var inst_15551 = (state_15590[7]);var inst_15558 = (state_15590[10]);var inst_15558__$1 = f.call(null,inst_15554);var inst_15559 = cljs.core._EQ_.call(null,inst_15558__$1,inst_15551);var inst_15560 = cljs.core.keyword_identical_QMARK_.call(null,inst_15551,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15561 = (inst_15559) || (inst_15560);var state_15590__$1 = (function (){var statearr_15597 = state_15590;(statearr_15597[10] = inst_15558__$1);
return statearr_15597;
})();if(cljs.core.truth_(inst_15561))
{var statearr_15598_15624 = state_15590__$1;(statearr_15598_15624[1] = 8);
} else
{var statearr_15599_15625 = state_15590__$1;(statearr_15599_15625[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 6))
{var inst_15550 = (state_15590[8]);var inst_15575 = inst_15550.length;var inst_15576 = (inst_15575 > 0);var state_15590__$1 = state_15590;if(cljs.core.truth_(inst_15576))
{var statearr_15601_15626 = state_15590__$1;(statearr_15601_15626[1] = 12);
} else
{var statearr_15602_15627 = state_15590__$1;(statearr_15602_15627[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 7))
{var inst_15586 = (state_15590[2]);var state_15590__$1 = state_15590;var statearr_15603_15628 = state_15590__$1;(statearr_15603_15628[2] = inst_15586);
(statearr_15603_15628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 8))
{var inst_15554 = (state_15590[9]);var inst_15550 = (state_15590[8]);var inst_15558 = (state_15590[10]);var inst_15563 = inst_15550.push(inst_15554);var tmp15600 = inst_15550;var inst_15550__$1 = tmp15600;var inst_15551 = inst_15558;var state_15590__$1 = (function (){var statearr_15604 = state_15590;(statearr_15604[7] = inst_15551);
(statearr_15604[8] = inst_15550__$1);
(statearr_15604[11] = inst_15563);
return statearr_15604;
})();var statearr_15605_15629 = state_15590__$1;(statearr_15605_15629[2] = null);
(statearr_15605_15629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 9))
{var inst_15550 = (state_15590[8]);var inst_15566 = cljs.core.vec.call(null,inst_15550);var state_15590__$1 = state_15590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15590__$1,11,out,inst_15566);
} else
{if((state_val_15591 === 10))
{var inst_15573 = (state_15590[2]);var state_15590__$1 = state_15590;var statearr_15606_15630 = state_15590__$1;(statearr_15606_15630[2] = inst_15573);
(statearr_15606_15630[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 11))
{var inst_15554 = (state_15590[9]);var inst_15558 = (state_15590[10]);var inst_15568 = (state_15590[2]);var inst_15569 = [];var inst_15570 = inst_15569.push(inst_15554);var inst_15550 = inst_15569;var inst_15551 = inst_15558;var state_15590__$1 = (function (){var statearr_15607 = state_15590;(statearr_15607[12] = inst_15570);
(statearr_15607[7] = inst_15551);
(statearr_15607[13] = inst_15568);
(statearr_15607[8] = inst_15550);
return statearr_15607;
})();var statearr_15608_15631 = state_15590__$1;(statearr_15608_15631[2] = null);
(statearr_15608_15631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 12))
{var inst_15550 = (state_15590[8]);var inst_15578 = cljs.core.vec.call(null,inst_15550);var state_15590__$1 = state_15590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15590__$1,15,out,inst_15578);
} else
{if((state_val_15591 === 13))
{var state_15590__$1 = state_15590;var statearr_15609_15632 = state_15590__$1;(statearr_15609_15632[2] = null);
(statearr_15609_15632[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 14))
{var inst_15583 = (state_15590[2]);var inst_15584 = cljs.core.async.close_BANG_.call(null,out);var state_15590__$1 = (function (){var statearr_15610 = state_15590;(statearr_15610[14] = inst_15583);
return statearr_15610;
})();var statearr_15611_15633 = state_15590__$1;(statearr_15611_15633[2] = inst_15584);
(statearr_15611_15633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15591 === 15))
{var inst_15580 = (state_15590[2]);var state_15590__$1 = state_15590;var statearr_15612_15634 = state_15590__$1;(statearr_15612_15634[2] = inst_15580);
(statearr_15612_15634[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15616[0] = state_machine__5507__auto__);
(statearr_15616[1] = 1);
return statearr_15616;
});
var state_machine__5507__auto____1 = (function (state_15590){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15617){if((e15617 instanceof Object))
{var ex__5510__auto__ = e15617;var statearr_15618_15635 = state_15590;(statearr_15618_15635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15636 = state_15590;
state_15590 = G__15636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15590){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15619 = f__5522__auto__.call(null);(statearr_15619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15620);
return statearr_15619;
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