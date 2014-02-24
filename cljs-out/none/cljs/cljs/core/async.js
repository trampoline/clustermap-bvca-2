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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13698 = (function (f,fn_handler,meta13699){
this.f = f;
this.fn_handler = fn_handler;
this.meta13699 = meta13699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13698.cljs$lang$type = true;
cljs.core.async.t13698.cljs$lang$ctorStr = "cljs.core.async/t13698";
cljs.core.async.t13698.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13698");
});
cljs.core.async.t13698.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13700){var self__ = this;
var _13700__$1 = this;return self__.meta13699;
});
cljs.core.async.t13698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13700,meta13699__$1){var self__ = this;
var _13700__$1 = this;return (new cljs.core.async.t13698(self__.f,self__.fn_handler,meta13699__$1));
});
cljs.core.async.__GT_t13698 = (function __GT_t13698(f__$1,fn_handler__$1,meta13699){return (new cljs.core.async.t13698(f__$1,fn_handler__$1,meta13699));
});
}
return (new cljs.core.async.t13698(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13702 = buff;if(G__13702)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13702.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13702.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13702);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13702);
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
{var val_13703 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13703);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13703);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13704 = n;var x_13705 = 0;while(true){
if((x_13705 < n__4248__auto___13704))
{(a[x_13705] = 0);
{
var G__13706 = (x_13705 + 1);
x_13705 = G__13706;
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
var G__13707 = (i + 1);
i = G__13707;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13711 = (function (flag,alt_flag,meta13712){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13712 = meta13712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13711.cljs$lang$type = true;
cljs.core.async.t13711.cljs$lang$ctorStr = "cljs.core.async/t13711";
cljs.core.async.t13711.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13711");
});
cljs.core.async.t13711.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13713){var self__ = this;
var _13713__$1 = this;return self__.meta13712;
});
cljs.core.async.t13711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13713,meta13712__$1){var self__ = this;
var _13713__$1 = this;return (new cljs.core.async.t13711(self__.flag,self__.alt_flag,meta13712__$1));
});
cljs.core.async.__GT_t13711 = (function __GT_t13711(flag__$1,alt_flag__$1,meta13712){return (new cljs.core.async.t13711(flag__$1,alt_flag__$1,meta13712));
});
}
return (new cljs.core.async.t13711(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13717 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13717 = (function (cb,flag,alt_handler,meta13718){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13718 = meta13718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13717.cljs$lang$type = true;
cljs.core.async.t13717.cljs$lang$ctorStr = "cljs.core.async/t13717";
cljs.core.async.t13717.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13717");
});
cljs.core.async.t13717.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13719){var self__ = this;
var _13719__$1 = this;return self__.meta13718;
});
cljs.core.async.t13717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13719,meta13718__$1){var self__ = this;
var _13719__$1 = this;return (new cljs.core.async.t13717(self__.cb,self__.flag,self__.alt_handler,meta13718__$1));
});
cljs.core.async.__GT_t13717 = (function __GT_t13717(cb__$1,flag__$1,alt_handler__$1,meta13718){return (new cljs.core.async.t13717(cb__$1,flag__$1,alt_handler__$1,meta13718));
});
}
return (new cljs.core.async.t13717(cb,flag,alt_handler,null));
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
return (function (p1__13720_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13720_SHARP_,port], null));
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
var G__13721 = (i + 1);
i = G__13721;
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
var alts_BANG___delegate = function (ports,p__13722){var map__13724 = p__13722;var map__13724__$1 = ((cljs.core.seq_QMARK_.call(null,map__13724))?cljs.core.apply.call(null,cljs.core.hash_map,map__13724):map__13724);var opts = map__13724__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13722 = null;if (arguments.length > 1) {
  p__13722 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13722);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13725){
var ports = cljs.core.first(arglist__13725);
var p__13722 = cljs.core.rest(arglist__13725);
return alts_BANG___delegate(ports,p__13722);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13733 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13733 = (function (ch,f,map_LT_,meta13734){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13734 = meta13734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13733.cljs$lang$type = true;
cljs.core.async.t13733.cljs$lang$ctorStr = "cljs.core.async/t13733";
cljs.core.async.t13733.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13733");
});
cljs.core.async.t13733.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13733.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13736 = (function (fn1,_,meta13734,ch,f,map_LT_,meta13737){
this.fn1 = fn1;
this._ = _;
this.meta13734 = meta13734;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13737 = meta13737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13736.cljs$lang$type = true;
cljs.core.async.t13736.cljs$lang$ctorStr = "cljs.core.async/t13736";
cljs.core.async.t13736.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13736");
});
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13726_SHARP_){return f1.call(null,(((p1__13726_SHARP_ == null))?null:self__.f.call(null,p1__13726_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13738){var self__ = this;
var _13738__$1 = this;return self__.meta13737;
});
cljs.core.async.t13736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13738,meta13737__$1){var self__ = this;
var _13738__$1 = this;return (new cljs.core.async.t13736(self__.fn1,self__._,self__.meta13734,self__.ch,self__.f,self__.map_LT_,meta13737__$1));
});
cljs.core.async.__GT_t13736 = (function __GT_t13736(fn1__$1,___$2,meta13734__$1,ch__$2,f__$2,map_LT___$2,meta13737){return (new cljs.core.async.t13736(fn1__$1,___$2,meta13734__$1,ch__$2,f__$2,map_LT___$2,meta13737));
});
}
return (new cljs.core.async.t13736(fn1,___$1,self__.meta13734,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13733.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13735){var self__ = this;
var _13735__$1 = this;return self__.meta13734;
});
cljs.core.async.t13733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13735,meta13734__$1){var self__ = this;
var _13735__$1 = this;return (new cljs.core.async.t13733(self__.ch,self__.f,self__.map_LT_,meta13734__$1));
});
cljs.core.async.__GT_t13733 = (function __GT_t13733(ch__$1,f__$1,map_LT___$1,meta13734){return (new cljs.core.async.t13733(ch__$1,f__$1,map_LT___$1,meta13734));
});
}
return (new cljs.core.async.t13733(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13742 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13742 = (function (ch,f,map_GT_,meta13743){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13743 = meta13743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13742.cljs$lang$type = true;
cljs.core.async.t13742.cljs$lang$ctorStr = "cljs.core.async/t13742";
cljs.core.async.t13742.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13742");
});
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13744){var self__ = this;
var _13744__$1 = this;return self__.meta13743;
});
cljs.core.async.t13742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13744,meta13743__$1){var self__ = this;
var _13744__$1 = this;return (new cljs.core.async.t13742(self__.ch,self__.f,self__.map_GT_,meta13743__$1));
});
cljs.core.async.__GT_t13742 = (function __GT_t13742(ch__$1,f__$1,map_GT___$1,meta13743){return (new cljs.core.async.t13742(ch__$1,f__$1,map_GT___$1,meta13743));
});
}
return (new cljs.core.async.t13742(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13748 = (function (ch,p,filter_GT_,meta13749){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13749 = meta13749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13748.cljs$lang$type = true;
cljs.core.async.t13748.cljs$lang$ctorStr = "cljs.core.async/t13748";
cljs.core.async.t13748.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13748");
});
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13750){var self__ = this;
var _13750__$1 = this;return self__.meta13749;
});
cljs.core.async.t13748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13750,meta13749__$1){var self__ = this;
var _13750__$1 = this;return (new cljs.core.async.t13748(self__.ch,self__.p,self__.filter_GT_,meta13749__$1));
});
cljs.core.async.__GT_t13748 = (function __GT_t13748(ch__$1,p__$1,filter_GT___$1,meta13749){return (new cljs.core.async.t13748(ch__$1,p__$1,filter_GT___$1,meta13749));
});
}
return (new cljs.core.async.t13748(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13812){var state_val_13813 = (state_13812[1]);if((state_val_13813 === 1))
{var state_13812__$1 = state_13812;var statearr_13814_13834 = state_13812__$1;(statearr_13814_13834[2] = null);
(statearr_13814_13834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13813 === 2))
{var state_13812__$1 = state_13812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13812__$1,4,ch);
} else
{if((state_val_13813 === 3))
{var inst_13810 = (state_13812[2]);var state_13812__$1 = state_13812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13812__$1,inst_13810);
} else
{if((state_val_13813 === 4))
{var inst_13794 = (state_13812[7]);var inst_13794__$1 = (state_13812[2]);var inst_13795 = (inst_13794__$1 == null);var state_13812__$1 = (function (){var statearr_13815 = state_13812;(statearr_13815[7] = inst_13794__$1);
return statearr_13815;
})();if(cljs.core.truth_(inst_13795))
{var statearr_13816_13835 = state_13812__$1;(statearr_13816_13835[1] = 5);
} else
{var statearr_13817_13836 = state_13812__$1;(statearr_13817_13836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13813 === 5))
{var inst_13797 = cljs.core.async.close_BANG_.call(null,out);var state_13812__$1 = state_13812;var statearr_13818_13837 = state_13812__$1;(statearr_13818_13837[2] = inst_13797);
(statearr_13818_13837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13813 === 6))
{var inst_13794 = (state_13812[7]);var inst_13799 = p.call(null,inst_13794);var state_13812__$1 = state_13812;if(cljs.core.truth_(inst_13799))
{var statearr_13819_13838 = state_13812__$1;(statearr_13819_13838[1] = 8);
} else
{var statearr_13820_13839 = state_13812__$1;(statearr_13820_13839[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13813 === 7))
{var inst_13808 = (state_13812[2]);var state_13812__$1 = state_13812;var statearr_13821_13840 = state_13812__$1;(statearr_13821_13840[2] = inst_13808);
(statearr_13821_13840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13813 === 8))
{var inst_13794 = (state_13812[7]);var state_13812__$1 = state_13812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13812__$1,11,out,inst_13794);
} else
{if((state_val_13813 === 9))
{var state_13812__$1 = state_13812;var statearr_13822_13841 = state_13812__$1;(statearr_13822_13841[2] = null);
(statearr_13822_13841[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13813 === 10))
{var inst_13805 = (state_13812[2]);var state_13812__$1 = (function (){var statearr_13823 = state_13812;(statearr_13823[8] = inst_13805);
return statearr_13823;
})();var statearr_13824_13842 = state_13812__$1;(statearr_13824_13842[2] = null);
(statearr_13824_13842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13813 === 11))
{var inst_13802 = (state_13812[2]);var state_13812__$1 = state_13812;var statearr_13825_13843 = state_13812__$1;(statearr_13825_13843[2] = inst_13802);
(statearr_13825_13843[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13829 = [null,null,null,null,null,null,null,null,null];(statearr_13829[0] = state_machine__5507__auto__);
(statearr_13829[1] = 1);
return statearr_13829;
});
var state_machine__5507__auto____1 = (function (state_13812){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13812);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13830){if((e13830 instanceof Object))
{var ex__5510__auto__ = e13830;var statearr_13831_13844 = state_13812;(statearr_13831_13844[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13845 = state_13812;
state_13812 = G__13845;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13812){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13832 = f__5522__auto__.call(null);(statearr_13832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13833);
return statearr_13832;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13997){var state_val_13998 = (state_13997[1]);if((state_val_13998 === 1))
{var state_13997__$1 = state_13997;var statearr_13999_14036 = state_13997__$1;(statearr_13999_14036[2] = null);
(statearr_13999_14036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 2))
{var state_13997__$1 = state_13997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13997__$1,4,in$);
} else
{if((state_val_13998 === 3))
{var inst_13995 = (state_13997[2]);var state_13997__$1 = state_13997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13997__$1,inst_13995);
} else
{if((state_val_13998 === 4))
{var inst_13943 = (state_13997[7]);var inst_13943__$1 = (state_13997[2]);var inst_13944 = (inst_13943__$1 == null);var state_13997__$1 = (function (){var statearr_14000 = state_13997;(statearr_14000[7] = inst_13943__$1);
return statearr_14000;
})();if(cljs.core.truth_(inst_13944))
{var statearr_14001_14037 = state_13997__$1;(statearr_14001_14037[1] = 5);
} else
{var statearr_14002_14038 = state_13997__$1;(statearr_14002_14038[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 5))
{var inst_13946 = cljs.core.async.close_BANG_.call(null,out);var state_13997__$1 = state_13997;var statearr_14003_14039 = state_13997__$1;(statearr_14003_14039[2] = inst_13946);
(statearr_14003_14039[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 6))
{var inst_13943 = (state_13997[7]);var inst_13948 = f.call(null,inst_13943);var inst_13953 = cljs.core.seq.call(null,inst_13948);var inst_13954 = inst_13953;var inst_13955 = null;var inst_13956 = 0;var inst_13957 = 0;var state_13997__$1 = (function (){var statearr_14004 = state_13997;(statearr_14004[8] = inst_13954);
(statearr_14004[9] = inst_13955);
(statearr_14004[10] = inst_13956);
(statearr_14004[11] = inst_13957);
return statearr_14004;
})();var statearr_14005_14040 = state_13997__$1;(statearr_14005_14040[2] = null);
(statearr_14005_14040[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 7))
{var inst_13993 = (state_13997[2]);var state_13997__$1 = state_13997;var statearr_14006_14041 = state_13997__$1;(statearr_14006_14041[2] = inst_13993);
(statearr_14006_14041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 8))
{var inst_13956 = (state_13997[10]);var inst_13957 = (state_13997[11]);var inst_13959 = (inst_13957 < inst_13956);var inst_13960 = inst_13959;var state_13997__$1 = state_13997;if(cljs.core.truth_(inst_13960))
{var statearr_14007_14042 = state_13997__$1;(statearr_14007_14042[1] = 10);
} else
{var statearr_14008_14043 = state_13997__$1;(statearr_14008_14043[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 9))
{var inst_13990 = (state_13997[2]);var state_13997__$1 = (function (){var statearr_14009 = state_13997;(statearr_14009[12] = inst_13990);
return statearr_14009;
})();var statearr_14010_14044 = state_13997__$1;(statearr_14010_14044[2] = null);
(statearr_14010_14044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 10))
{var inst_13955 = (state_13997[9]);var inst_13957 = (state_13997[11]);var inst_13962 = cljs.core._nth.call(null,inst_13955,inst_13957);var state_13997__$1 = state_13997;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13997__$1,13,out,inst_13962);
} else
{if((state_val_13998 === 11))
{var inst_13968 = (state_13997[13]);var inst_13954 = (state_13997[8]);var inst_13968__$1 = cljs.core.seq.call(null,inst_13954);var state_13997__$1 = (function (){var statearr_14014 = state_13997;(statearr_14014[13] = inst_13968__$1);
return statearr_14014;
})();if(inst_13968__$1)
{var statearr_14015_14045 = state_13997__$1;(statearr_14015_14045[1] = 14);
} else
{var statearr_14016_14046 = state_13997__$1;(statearr_14016_14046[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 12))
{var inst_13988 = (state_13997[2]);var state_13997__$1 = state_13997;var statearr_14017_14047 = state_13997__$1;(statearr_14017_14047[2] = inst_13988);
(statearr_14017_14047[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 13))
{var inst_13954 = (state_13997[8]);var inst_13955 = (state_13997[9]);var inst_13956 = (state_13997[10]);var inst_13957 = (state_13997[11]);var inst_13964 = (state_13997[2]);var inst_13965 = (inst_13957 + 1);var tmp14011 = inst_13954;var tmp14012 = inst_13955;var tmp14013 = inst_13956;var inst_13954__$1 = tmp14011;var inst_13955__$1 = tmp14012;var inst_13956__$1 = tmp14013;var inst_13957__$1 = inst_13965;var state_13997__$1 = (function (){var statearr_14018 = state_13997;(statearr_14018[8] = inst_13954__$1);
(statearr_14018[9] = inst_13955__$1);
(statearr_14018[10] = inst_13956__$1);
(statearr_14018[11] = inst_13957__$1);
(statearr_14018[14] = inst_13964);
return statearr_14018;
})();var statearr_14019_14048 = state_13997__$1;(statearr_14019_14048[2] = null);
(statearr_14019_14048[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 14))
{var inst_13968 = (state_13997[13]);var inst_13970 = cljs.core.chunked_seq_QMARK_.call(null,inst_13968);var state_13997__$1 = state_13997;if(inst_13970)
{var statearr_14020_14049 = state_13997__$1;(statearr_14020_14049[1] = 17);
} else
{var statearr_14021_14050 = state_13997__$1;(statearr_14021_14050[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 15))
{var state_13997__$1 = state_13997;var statearr_14022_14051 = state_13997__$1;(statearr_14022_14051[2] = null);
(statearr_14022_14051[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 16))
{var inst_13986 = (state_13997[2]);var state_13997__$1 = state_13997;var statearr_14023_14052 = state_13997__$1;(statearr_14023_14052[2] = inst_13986);
(statearr_14023_14052[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 17))
{var inst_13968 = (state_13997[13]);var inst_13972 = cljs.core.chunk_first.call(null,inst_13968);var inst_13973 = cljs.core.chunk_rest.call(null,inst_13968);var inst_13974 = cljs.core.count.call(null,inst_13972);var inst_13954 = inst_13973;var inst_13955 = inst_13972;var inst_13956 = inst_13974;var inst_13957 = 0;var state_13997__$1 = (function (){var statearr_14024 = state_13997;(statearr_14024[8] = inst_13954);
(statearr_14024[9] = inst_13955);
(statearr_14024[10] = inst_13956);
(statearr_14024[11] = inst_13957);
return statearr_14024;
})();var statearr_14025_14053 = state_13997__$1;(statearr_14025_14053[2] = null);
(statearr_14025_14053[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 18))
{var inst_13968 = (state_13997[13]);var inst_13977 = cljs.core.first.call(null,inst_13968);var state_13997__$1 = state_13997;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13997__$1,20,out,inst_13977);
} else
{if((state_val_13998 === 19))
{var inst_13983 = (state_13997[2]);var state_13997__$1 = state_13997;var statearr_14026_14054 = state_13997__$1;(statearr_14026_14054[2] = inst_13983);
(statearr_14026_14054[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13998 === 20))
{var inst_13968 = (state_13997[13]);var inst_13979 = (state_13997[2]);var inst_13980 = cljs.core.next.call(null,inst_13968);var inst_13954 = inst_13980;var inst_13955 = null;var inst_13956 = 0;var inst_13957 = 0;var state_13997__$1 = (function (){var statearr_14027 = state_13997;(statearr_14027[8] = inst_13954);
(statearr_14027[9] = inst_13955);
(statearr_14027[10] = inst_13956);
(statearr_14027[15] = inst_13979);
(statearr_14027[11] = inst_13957);
return statearr_14027;
})();var statearr_14028_14055 = state_13997__$1;(statearr_14028_14055[2] = null);
(statearr_14028_14055[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14032[0] = state_machine__5507__auto__);
(statearr_14032[1] = 1);
return statearr_14032;
});
var state_machine__5507__auto____1 = (function (state_13997){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13997);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14033){if((e14033 instanceof Object))
{var ex__5510__auto__ = e14033;var statearr_14034_14056 = state_13997;(statearr_14034_14056[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14057 = state_13997;
state_13997 = G__14057;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13997){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14035 = f__5522__auto__.call(null);(statearr_14035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14035;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14138 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14117){var state_val_14118 = (state_14117[1]);if((state_val_14118 === 1))
{var state_14117__$1 = state_14117;var statearr_14119_14139 = state_14117__$1;(statearr_14119_14139[2] = null);
(statearr_14119_14139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14118 === 2))
{var state_14117__$1 = state_14117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,4,from);
} else
{if((state_val_14118 === 3))
{var inst_14115 = (state_14117[2]);var state_14117__$1 = state_14117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14117__$1,inst_14115);
} else
{if((state_val_14118 === 4))
{var inst_14100 = (state_14117[7]);var inst_14100__$1 = (state_14117[2]);var inst_14101 = (inst_14100__$1 == null);var state_14117__$1 = (function (){var statearr_14120 = state_14117;(statearr_14120[7] = inst_14100__$1);
return statearr_14120;
})();if(cljs.core.truth_(inst_14101))
{var statearr_14121_14140 = state_14117__$1;(statearr_14121_14140[1] = 5);
} else
{var statearr_14122_14141 = state_14117__$1;(statearr_14122_14141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14118 === 5))
{var state_14117__$1 = state_14117;if(cljs.core.truth_(close_QMARK_))
{var statearr_14123_14142 = state_14117__$1;(statearr_14123_14142[1] = 8);
} else
{var statearr_14124_14143 = state_14117__$1;(statearr_14124_14143[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14118 === 6))
{var inst_14100 = (state_14117[7]);var state_14117__$1 = state_14117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14117__$1,11,to,inst_14100);
} else
{if((state_val_14118 === 7))
{var inst_14113 = (state_14117[2]);var state_14117__$1 = state_14117;var statearr_14125_14144 = state_14117__$1;(statearr_14125_14144[2] = inst_14113);
(statearr_14125_14144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14118 === 8))
{var inst_14104 = cljs.core.async.close_BANG_.call(null,to);var state_14117__$1 = state_14117;var statearr_14126_14145 = state_14117__$1;(statearr_14126_14145[2] = inst_14104);
(statearr_14126_14145[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14118 === 9))
{var state_14117__$1 = state_14117;var statearr_14127_14146 = state_14117__$1;(statearr_14127_14146[2] = null);
(statearr_14127_14146[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14118 === 10))
{var inst_14107 = (state_14117[2]);var state_14117__$1 = state_14117;var statearr_14128_14147 = state_14117__$1;(statearr_14128_14147[2] = inst_14107);
(statearr_14128_14147[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14118 === 11))
{var inst_14110 = (state_14117[2]);var state_14117__$1 = (function (){var statearr_14129 = state_14117;(statearr_14129[8] = inst_14110);
return statearr_14129;
})();var statearr_14130_14148 = state_14117__$1;(statearr_14130_14148[2] = null);
(statearr_14130_14148[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14134 = [null,null,null,null,null,null,null,null,null];(statearr_14134[0] = state_machine__5507__auto__);
(statearr_14134[1] = 1);
return statearr_14134;
});
var state_machine__5507__auto____1 = (function (state_14117){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14117);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14135){if((e14135 instanceof Object))
{var ex__5510__auto__ = e14135;var statearr_14136_14149 = state_14117;(statearr_14136_14149[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14150 = state_14117;
state_14117 = G__14150;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14117){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14137 = f__5522__auto__.call(null);(statearr_14137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14138);
return statearr_14137;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14237 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14215){var state_val_14216 = (state_14215[1]);if((state_val_14216 === 1))
{var state_14215__$1 = state_14215;var statearr_14217_14238 = state_14215__$1;(statearr_14217_14238[2] = null);
(statearr_14217_14238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 2))
{var state_14215__$1 = state_14215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14215__$1,4,ch);
} else
{if((state_val_14216 === 3))
{var inst_14213 = (state_14215[2]);var state_14215__$1 = state_14215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14215__$1,inst_14213);
} else
{if((state_val_14216 === 4))
{var inst_14196 = (state_14215[7]);var inst_14196__$1 = (state_14215[2]);var inst_14197 = (inst_14196__$1 == null);var state_14215__$1 = (function (){var statearr_14218 = state_14215;(statearr_14218[7] = inst_14196__$1);
return statearr_14218;
})();if(cljs.core.truth_(inst_14197))
{var statearr_14219_14239 = state_14215__$1;(statearr_14219_14239[1] = 5);
} else
{var statearr_14220_14240 = state_14215__$1;(statearr_14220_14240[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 5))
{var inst_14199 = cljs.core.async.close_BANG_.call(null,tc);var inst_14200 = cljs.core.async.close_BANG_.call(null,fc);var state_14215__$1 = (function (){var statearr_14221 = state_14215;(statearr_14221[8] = inst_14199);
return statearr_14221;
})();var statearr_14222_14241 = state_14215__$1;(statearr_14222_14241[2] = inst_14200);
(statearr_14222_14241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 6))
{var inst_14196 = (state_14215[7]);var inst_14202 = p.call(null,inst_14196);var state_14215__$1 = state_14215;if(cljs.core.truth_(inst_14202))
{var statearr_14223_14242 = state_14215__$1;(statearr_14223_14242[1] = 9);
} else
{var statearr_14224_14243 = state_14215__$1;(statearr_14224_14243[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 7))
{var inst_14211 = (state_14215[2]);var state_14215__$1 = state_14215;var statearr_14225_14244 = state_14215__$1;(statearr_14225_14244[2] = inst_14211);
(statearr_14225_14244[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 8))
{var inst_14208 = (state_14215[2]);var state_14215__$1 = (function (){var statearr_14226 = state_14215;(statearr_14226[9] = inst_14208);
return statearr_14226;
})();var statearr_14227_14245 = state_14215__$1;(statearr_14227_14245[2] = null);
(statearr_14227_14245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 9))
{var state_14215__$1 = state_14215;var statearr_14228_14246 = state_14215__$1;(statearr_14228_14246[2] = tc);
(statearr_14228_14246[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 10))
{var state_14215__$1 = state_14215;var statearr_14229_14247 = state_14215__$1;(statearr_14229_14247[2] = fc);
(statearr_14229_14247[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14216 === 11))
{var inst_14196 = (state_14215[7]);var inst_14206 = (state_14215[2]);var state_14215__$1 = state_14215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14215__$1,8,inst_14206,inst_14196);
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
var state_machine__5507__auto____0 = (function (){var statearr_14233 = [null,null,null,null,null,null,null,null,null,null];(statearr_14233[0] = state_machine__5507__auto__);
(statearr_14233[1] = 1);
return statearr_14233;
});
var state_machine__5507__auto____1 = (function (state_14215){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14215);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14234){if((e14234 instanceof Object))
{var ex__5510__auto__ = e14234;var statearr_14235_14248 = state_14215;(statearr_14235_14248[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14249 = state_14215;
state_14215 = G__14249;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14215){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14236 = f__5522__auto__.call(null);(statearr_14236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14237);
return statearr_14236;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14296){var state_val_14297 = (state_14296[1]);if((state_val_14297 === 7))
{var inst_14292 = (state_14296[2]);var state_14296__$1 = state_14296;var statearr_14298_14314 = state_14296__$1;(statearr_14298_14314[2] = inst_14292);
(statearr_14298_14314[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 6))
{var inst_14282 = (state_14296[7]);var inst_14285 = (state_14296[8]);var inst_14289 = f.call(null,inst_14282,inst_14285);var inst_14282__$1 = inst_14289;var state_14296__$1 = (function (){var statearr_14299 = state_14296;(statearr_14299[7] = inst_14282__$1);
return statearr_14299;
})();var statearr_14300_14315 = state_14296__$1;(statearr_14300_14315[2] = null);
(statearr_14300_14315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 5))
{var inst_14282 = (state_14296[7]);var state_14296__$1 = state_14296;var statearr_14301_14316 = state_14296__$1;(statearr_14301_14316[2] = inst_14282);
(statearr_14301_14316[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 4))
{var inst_14285 = (state_14296[8]);var inst_14285__$1 = (state_14296[2]);var inst_14286 = (inst_14285__$1 == null);var state_14296__$1 = (function (){var statearr_14302 = state_14296;(statearr_14302[8] = inst_14285__$1);
return statearr_14302;
})();if(cljs.core.truth_(inst_14286))
{var statearr_14303_14317 = state_14296__$1;(statearr_14303_14317[1] = 5);
} else
{var statearr_14304_14318 = state_14296__$1;(statearr_14304_14318[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 3))
{var inst_14294 = (state_14296[2]);var state_14296__$1 = state_14296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14296__$1,inst_14294);
} else
{if((state_val_14297 === 2))
{var state_14296__$1 = state_14296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14296__$1,4,ch);
} else
{if((state_val_14297 === 1))
{var inst_14282 = init;var state_14296__$1 = (function (){var statearr_14305 = state_14296;(statearr_14305[7] = inst_14282);
return statearr_14305;
})();var statearr_14306_14319 = state_14296__$1;(statearr_14306_14319[2] = null);
(statearr_14306_14319[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14310 = [null,null,null,null,null,null,null,null,null];(statearr_14310[0] = state_machine__5507__auto__);
(statearr_14310[1] = 1);
return statearr_14310;
});
var state_machine__5507__auto____1 = (function (state_14296){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14296);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14311){if((e14311 instanceof Object))
{var ex__5510__auto__ = e14311;var statearr_14312_14320 = state_14296;(statearr_14312_14320[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14321 = state_14296;
state_14296 = G__14321;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14296){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14313 = f__5522__auto__.call(null);(statearr_14313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14313;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14383){var state_val_14384 = (state_14383[1]);if((state_val_14384 === 1))
{var inst_14363 = cljs.core.seq.call(null,coll);var inst_14364 = inst_14363;var state_14383__$1 = (function (){var statearr_14385 = state_14383;(statearr_14385[7] = inst_14364);
return statearr_14385;
})();var statearr_14386_14404 = state_14383__$1;(statearr_14386_14404[2] = null);
(statearr_14386_14404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 2))
{var inst_14364 = (state_14383[7]);var state_14383__$1 = state_14383;if(cljs.core.truth_(inst_14364))
{var statearr_14387_14405 = state_14383__$1;(statearr_14387_14405[1] = 4);
} else
{var statearr_14388_14406 = state_14383__$1;(statearr_14388_14406[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 3))
{var inst_14381 = (state_14383[2]);var state_14383__$1 = state_14383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14383__$1,inst_14381);
} else
{if((state_val_14384 === 4))
{var inst_14364 = (state_14383[7]);var inst_14367 = cljs.core.first.call(null,inst_14364);var state_14383__$1 = state_14383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14383__$1,7,ch,inst_14367);
} else
{if((state_val_14384 === 5))
{var state_14383__$1 = state_14383;if(cljs.core.truth_(close_QMARK_))
{var statearr_14389_14407 = state_14383__$1;(statearr_14389_14407[1] = 8);
} else
{var statearr_14390_14408 = state_14383__$1;(statearr_14390_14408[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 6))
{var inst_14379 = (state_14383[2]);var state_14383__$1 = state_14383;var statearr_14391_14409 = state_14383__$1;(statearr_14391_14409[2] = inst_14379);
(statearr_14391_14409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 7))
{var inst_14364 = (state_14383[7]);var inst_14369 = (state_14383[2]);var inst_14370 = cljs.core.next.call(null,inst_14364);var inst_14364__$1 = inst_14370;var state_14383__$1 = (function (){var statearr_14392 = state_14383;(statearr_14392[7] = inst_14364__$1);
(statearr_14392[8] = inst_14369);
return statearr_14392;
})();var statearr_14393_14410 = state_14383__$1;(statearr_14393_14410[2] = null);
(statearr_14393_14410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 8))
{var inst_14374 = cljs.core.async.close_BANG_.call(null,ch);var state_14383__$1 = state_14383;var statearr_14394_14411 = state_14383__$1;(statearr_14394_14411[2] = inst_14374);
(statearr_14394_14411[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 9))
{var state_14383__$1 = state_14383;var statearr_14395_14412 = state_14383__$1;(statearr_14395_14412[2] = null);
(statearr_14395_14412[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14384 === 10))
{var inst_14377 = (state_14383[2]);var state_14383__$1 = state_14383;var statearr_14396_14413 = state_14383__$1;(statearr_14396_14413[2] = inst_14377);
(statearr_14396_14413[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14400 = [null,null,null,null,null,null,null,null,null];(statearr_14400[0] = state_machine__5507__auto__);
(statearr_14400[1] = 1);
return statearr_14400;
});
var state_machine__5507__auto____1 = (function (state_14383){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14383);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14401){if((e14401 instanceof Object))
{var ex__5510__auto__ = e14401;var statearr_14402_14414 = state_14383;(statearr_14402_14414[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14415 = state_14383;
state_14383 = G__14415;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14383){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14403 = f__5522__auto__.call(null);(statearr_14403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14403;
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
cljs.core.async.Mux = (function (){var obj14417 = {};return obj14417;
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
cljs.core.async.Mult = (function (){var obj14419 = {};return obj14419;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14643 = (function (cs,ch,mult,meta14644){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14644 = meta14644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14643.cljs$lang$type = true;
cljs.core.async.t14643.cljs$lang$ctorStr = "cljs.core.async/t14643";
cljs.core.async.t14643.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14643");
});})(cs))
;
cljs.core.async.t14643.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14643.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14643.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14643.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14643.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14645){var self__ = this;
var _14645__$1 = this;return self__.meta14644;
});})(cs))
;
cljs.core.async.t14643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14645,meta14644__$1){var self__ = this;
var _14645__$1 = this;return (new cljs.core.async.t14643(self__.cs,self__.ch,self__.mult,meta14644__$1));
});})(cs))
;
cljs.core.async.__GT_t14643 = ((function (cs){
return (function __GT_t14643(cs__$1,ch__$1,mult__$1,meta14644){return (new cljs.core.async.t14643(cs__$1,ch__$1,mult__$1,meta14644));
});})(cs))
;
}
return (new cljs.core.async.t14643(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14866 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14780){var state_val_14781 = (state_14780[1]);if((state_val_14781 === 32))
{var inst_14724 = (state_14780[7]);var inst_14648 = (state_14780[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14780,31,Object,null,30);var inst_14731 = cljs.core.async.put_BANG_.call(null,inst_14724,inst_14648,done);var state_14780__$1 = state_14780;var statearr_14782_14867 = state_14780__$1;(statearr_14782_14867[2] = inst_14731);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 1))
{var state_14780__$1 = state_14780;var statearr_14783_14868 = state_14780__$1;(statearr_14783_14868[2] = null);
(statearr_14783_14868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 33))
{var inst_14737 = (state_14780[9]);var inst_14739 = cljs.core.chunked_seq_QMARK_.call(null,inst_14737);var state_14780__$1 = state_14780;if(inst_14739)
{var statearr_14784_14869 = state_14780__$1;(statearr_14784_14869[1] = 36);
} else
{var statearr_14785_14870 = state_14780__$1;(statearr_14785_14870[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 2))
{var state_14780__$1 = state_14780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14780__$1,4,ch);
} else
{if((state_val_14781 === 34))
{var state_14780__$1 = state_14780;var statearr_14786_14871 = state_14780__$1;(statearr_14786_14871[2] = null);
(statearr_14786_14871[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 3))
{var inst_14778 = (state_14780[2]);var state_14780__$1 = state_14780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14780__$1,inst_14778);
} else
{if((state_val_14781 === 35))
{var inst_14762 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14787_14872 = state_14780__$1;(statearr_14787_14872[2] = inst_14762);
(statearr_14787_14872[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 4))
{var inst_14648 = (state_14780[8]);var inst_14648__$1 = (state_14780[2]);var inst_14649 = (inst_14648__$1 == null);var state_14780__$1 = (function (){var statearr_14788 = state_14780;(statearr_14788[8] = inst_14648__$1);
return statearr_14788;
})();if(cljs.core.truth_(inst_14649))
{var statearr_14789_14873 = state_14780__$1;(statearr_14789_14873[1] = 5);
} else
{var statearr_14790_14874 = state_14780__$1;(statearr_14790_14874[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 36))
{var inst_14737 = (state_14780[9]);var inst_14741 = cljs.core.chunk_first.call(null,inst_14737);var inst_14742 = cljs.core.chunk_rest.call(null,inst_14737);var inst_14743 = cljs.core.count.call(null,inst_14741);var inst_14716 = inst_14742;var inst_14717 = inst_14741;var inst_14718 = inst_14743;var inst_14719 = 0;var state_14780__$1 = (function (){var statearr_14791 = state_14780;(statearr_14791[10] = inst_14717);
(statearr_14791[11] = inst_14716);
(statearr_14791[12] = inst_14719);
(statearr_14791[13] = inst_14718);
return statearr_14791;
})();var statearr_14792_14875 = state_14780__$1;(statearr_14792_14875[2] = null);
(statearr_14792_14875[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 5))
{var inst_14655 = cljs.core.deref.call(null,cs);var inst_14656 = cljs.core.seq.call(null,inst_14655);var inst_14657 = inst_14656;var inst_14658 = null;var inst_14659 = 0;var inst_14660 = 0;var state_14780__$1 = (function (){var statearr_14793 = state_14780;(statearr_14793[14] = inst_14660);
(statearr_14793[15] = inst_14657);
(statearr_14793[16] = inst_14658);
(statearr_14793[17] = inst_14659);
return statearr_14793;
})();var statearr_14794_14876 = state_14780__$1;(statearr_14794_14876[2] = null);
(statearr_14794_14876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 37))
{var inst_14737 = (state_14780[9]);var inst_14746 = cljs.core.first.call(null,inst_14737);var state_14780__$1 = (function (){var statearr_14795 = state_14780;(statearr_14795[18] = inst_14746);
return statearr_14795;
})();var statearr_14796_14877 = state_14780__$1;(statearr_14796_14877[2] = null);
(statearr_14796_14877[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 6))
{var inst_14708 = (state_14780[19]);var inst_14707 = cljs.core.deref.call(null,cs);var inst_14708__$1 = cljs.core.keys.call(null,inst_14707);var inst_14709 = cljs.core.count.call(null,inst_14708__$1);var inst_14710 = cljs.core.reset_BANG_.call(null,dctr,inst_14709);var inst_14715 = cljs.core.seq.call(null,inst_14708__$1);var inst_14716 = inst_14715;var inst_14717 = null;var inst_14718 = 0;var inst_14719 = 0;var state_14780__$1 = (function (){var statearr_14797 = state_14780;(statearr_14797[19] = inst_14708__$1);
(statearr_14797[10] = inst_14717);
(statearr_14797[11] = inst_14716);
(statearr_14797[12] = inst_14719);
(statearr_14797[13] = inst_14718);
(statearr_14797[20] = inst_14710);
return statearr_14797;
})();var statearr_14798_14878 = state_14780__$1;(statearr_14798_14878[2] = null);
(statearr_14798_14878[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 38))
{var inst_14759 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14799_14879 = state_14780__$1;(statearr_14799_14879[2] = inst_14759);
(statearr_14799_14879[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 7))
{var inst_14776 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14800_14880 = state_14780__$1;(statearr_14800_14880[2] = inst_14776);
(statearr_14800_14880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 39))
{var inst_14737 = (state_14780[9]);var inst_14755 = (state_14780[2]);var inst_14756 = cljs.core.next.call(null,inst_14737);var inst_14716 = inst_14756;var inst_14717 = null;var inst_14718 = 0;var inst_14719 = 0;var state_14780__$1 = (function (){var statearr_14801 = state_14780;(statearr_14801[10] = inst_14717);
(statearr_14801[11] = inst_14716);
(statearr_14801[12] = inst_14719);
(statearr_14801[13] = inst_14718);
(statearr_14801[21] = inst_14755);
return statearr_14801;
})();var statearr_14802_14881 = state_14780__$1;(statearr_14802_14881[2] = null);
(statearr_14802_14881[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 8))
{var inst_14660 = (state_14780[14]);var inst_14659 = (state_14780[17]);var inst_14662 = (inst_14660 < inst_14659);var inst_14663 = inst_14662;var state_14780__$1 = state_14780;if(cljs.core.truth_(inst_14663))
{var statearr_14803_14882 = state_14780__$1;(statearr_14803_14882[1] = 10);
} else
{var statearr_14804_14883 = state_14780__$1;(statearr_14804_14883[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 40))
{var inst_14746 = (state_14780[18]);var inst_14747 = (state_14780[2]);var inst_14748 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14749 = cljs.core.async.untap_STAR_.call(null,m,inst_14746);var state_14780__$1 = (function (){var statearr_14805 = state_14780;(statearr_14805[22] = inst_14747);
(statearr_14805[23] = inst_14748);
return statearr_14805;
})();var statearr_14806_14884 = state_14780__$1;(statearr_14806_14884[2] = inst_14749);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 9))
{var inst_14705 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14807_14885 = state_14780__$1;(statearr_14807_14885[2] = inst_14705);
(statearr_14807_14885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 41))
{var inst_14648 = (state_14780[8]);var inst_14746 = (state_14780[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14780,40,Object,null,39);var inst_14753 = cljs.core.async.put_BANG_.call(null,inst_14746,inst_14648,done);var state_14780__$1 = state_14780;var statearr_14808_14886 = state_14780__$1;(statearr_14808_14886[2] = inst_14753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 10))
{var inst_14660 = (state_14780[14]);var inst_14658 = (state_14780[16]);var inst_14666 = cljs.core._nth.call(null,inst_14658,inst_14660);var inst_14667 = cljs.core.nth.call(null,inst_14666,0,null);var inst_14668 = cljs.core.nth.call(null,inst_14666,1,null);var state_14780__$1 = (function (){var statearr_14809 = state_14780;(statearr_14809[24] = inst_14667);
return statearr_14809;
})();if(cljs.core.truth_(inst_14668))
{var statearr_14810_14887 = state_14780__$1;(statearr_14810_14887[1] = 13);
} else
{var statearr_14811_14888 = state_14780__$1;(statearr_14811_14888[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 42))
{var state_14780__$1 = state_14780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14780__$1,45,dchan);
} else
{if((state_val_14781 === 11))
{var inst_14677 = (state_14780[25]);var inst_14657 = (state_14780[15]);var inst_14677__$1 = cljs.core.seq.call(null,inst_14657);var state_14780__$1 = (function (){var statearr_14812 = state_14780;(statearr_14812[25] = inst_14677__$1);
return statearr_14812;
})();if(inst_14677__$1)
{var statearr_14813_14889 = state_14780__$1;(statearr_14813_14889[1] = 16);
} else
{var statearr_14814_14890 = state_14780__$1;(statearr_14814_14890[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 43))
{var state_14780__$1 = state_14780;var statearr_14815_14891 = state_14780__$1;(statearr_14815_14891[2] = null);
(statearr_14815_14891[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 12))
{var inst_14703 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14816_14892 = state_14780__$1;(statearr_14816_14892[2] = inst_14703);
(statearr_14816_14892[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 44))
{var inst_14773 = (state_14780[2]);var state_14780__$1 = (function (){var statearr_14817 = state_14780;(statearr_14817[26] = inst_14773);
return statearr_14817;
})();var statearr_14818_14893 = state_14780__$1;(statearr_14818_14893[2] = null);
(statearr_14818_14893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 13))
{var inst_14667 = (state_14780[24]);var inst_14670 = cljs.core.async.close_BANG_.call(null,inst_14667);var state_14780__$1 = state_14780;var statearr_14819_14894 = state_14780__$1;(statearr_14819_14894[2] = inst_14670);
(statearr_14819_14894[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 45))
{var inst_14770 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14823_14895 = state_14780__$1;(statearr_14823_14895[2] = inst_14770);
(statearr_14823_14895[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 14))
{var state_14780__$1 = state_14780;var statearr_14824_14896 = state_14780__$1;(statearr_14824_14896[2] = null);
(statearr_14824_14896[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 15))
{var inst_14660 = (state_14780[14]);var inst_14657 = (state_14780[15]);var inst_14658 = (state_14780[16]);var inst_14659 = (state_14780[17]);var inst_14673 = (state_14780[2]);var inst_14674 = (inst_14660 + 1);var tmp14820 = inst_14657;var tmp14821 = inst_14658;var tmp14822 = inst_14659;var inst_14657__$1 = tmp14820;var inst_14658__$1 = tmp14821;var inst_14659__$1 = tmp14822;var inst_14660__$1 = inst_14674;var state_14780__$1 = (function (){var statearr_14825 = state_14780;(statearr_14825[14] = inst_14660__$1);
(statearr_14825[27] = inst_14673);
(statearr_14825[15] = inst_14657__$1);
(statearr_14825[16] = inst_14658__$1);
(statearr_14825[17] = inst_14659__$1);
return statearr_14825;
})();var statearr_14826_14897 = state_14780__$1;(statearr_14826_14897[2] = null);
(statearr_14826_14897[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 16))
{var inst_14677 = (state_14780[25]);var inst_14679 = cljs.core.chunked_seq_QMARK_.call(null,inst_14677);var state_14780__$1 = state_14780;if(inst_14679)
{var statearr_14827_14898 = state_14780__$1;(statearr_14827_14898[1] = 19);
} else
{var statearr_14828_14899 = state_14780__$1;(statearr_14828_14899[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 17))
{var state_14780__$1 = state_14780;var statearr_14829_14900 = state_14780__$1;(statearr_14829_14900[2] = null);
(statearr_14829_14900[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 18))
{var inst_14701 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14830_14901 = state_14780__$1;(statearr_14830_14901[2] = inst_14701);
(statearr_14830_14901[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 19))
{var inst_14677 = (state_14780[25]);var inst_14681 = cljs.core.chunk_first.call(null,inst_14677);var inst_14682 = cljs.core.chunk_rest.call(null,inst_14677);var inst_14683 = cljs.core.count.call(null,inst_14681);var inst_14657 = inst_14682;var inst_14658 = inst_14681;var inst_14659 = inst_14683;var inst_14660 = 0;var state_14780__$1 = (function (){var statearr_14831 = state_14780;(statearr_14831[14] = inst_14660);
(statearr_14831[15] = inst_14657);
(statearr_14831[16] = inst_14658);
(statearr_14831[17] = inst_14659);
return statearr_14831;
})();var statearr_14832_14902 = state_14780__$1;(statearr_14832_14902[2] = null);
(statearr_14832_14902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 20))
{var inst_14677 = (state_14780[25]);var inst_14687 = cljs.core.first.call(null,inst_14677);var inst_14688 = cljs.core.nth.call(null,inst_14687,0,null);var inst_14689 = cljs.core.nth.call(null,inst_14687,1,null);var state_14780__$1 = (function (){var statearr_14833 = state_14780;(statearr_14833[28] = inst_14688);
return statearr_14833;
})();if(cljs.core.truth_(inst_14689))
{var statearr_14834_14903 = state_14780__$1;(statearr_14834_14903[1] = 22);
} else
{var statearr_14835_14904 = state_14780__$1;(statearr_14835_14904[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 21))
{var inst_14698 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14836_14905 = state_14780__$1;(statearr_14836_14905[2] = inst_14698);
(statearr_14836_14905[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 22))
{var inst_14688 = (state_14780[28]);var inst_14691 = cljs.core.async.close_BANG_.call(null,inst_14688);var state_14780__$1 = state_14780;var statearr_14837_14906 = state_14780__$1;(statearr_14837_14906[2] = inst_14691);
(statearr_14837_14906[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 23))
{var state_14780__$1 = state_14780;var statearr_14838_14907 = state_14780__$1;(statearr_14838_14907[2] = null);
(statearr_14838_14907[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 24))
{var inst_14677 = (state_14780[25]);var inst_14694 = (state_14780[2]);var inst_14695 = cljs.core.next.call(null,inst_14677);var inst_14657 = inst_14695;var inst_14658 = null;var inst_14659 = 0;var inst_14660 = 0;var state_14780__$1 = (function (){var statearr_14839 = state_14780;(statearr_14839[29] = inst_14694);
(statearr_14839[14] = inst_14660);
(statearr_14839[15] = inst_14657);
(statearr_14839[16] = inst_14658);
(statearr_14839[17] = inst_14659);
return statearr_14839;
})();var statearr_14840_14908 = state_14780__$1;(statearr_14840_14908[2] = null);
(statearr_14840_14908[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 25))
{var inst_14719 = (state_14780[12]);var inst_14718 = (state_14780[13]);var inst_14721 = (inst_14719 < inst_14718);var inst_14722 = inst_14721;var state_14780__$1 = state_14780;if(cljs.core.truth_(inst_14722))
{var statearr_14841_14909 = state_14780__$1;(statearr_14841_14909[1] = 27);
} else
{var statearr_14842_14910 = state_14780__$1;(statearr_14842_14910[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 26))
{var inst_14708 = (state_14780[19]);var inst_14766 = (state_14780[2]);var inst_14767 = cljs.core.seq.call(null,inst_14708);var state_14780__$1 = (function (){var statearr_14843 = state_14780;(statearr_14843[30] = inst_14766);
return statearr_14843;
})();if(inst_14767)
{var statearr_14844_14911 = state_14780__$1;(statearr_14844_14911[1] = 42);
} else
{var statearr_14845_14912 = state_14780__$1;(statearr_14845_14912[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 27))
{var inst_14717 = (state_14780[10]);var inst_14719 = (state_14780[12]);var inst_14724 = cljs.core._nth.call(null,inst_14717,inst_14719);var state_14780__$1 = (function (){var statearr_14846 = state_14780;(statearr_14846[7] = inst_14724);
return statearr_14846;
})();var statearr_14847_14913 = state_14780__$1;(statearr_14847_14913[2] = null);
(statearr_14847_14913[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 28))
{var inst_14716 = (state_14780[11]);var inst_14737 = (state_14780[9]);var inst_14737__$1 = cljs.core.seq.call(null,inst_14716);var state_14780__$1 = (function (){var statearr_14851 = state_14780;(statearr_14851[9] = inst_14737__$1);
return statearr_14851;
})();if(inst_14737__$1)
{var statearr_14852_14914 = state_14780__$1;(statearr_14852_14914[1] = 33);
} else
{var statearr_14853_14915 = state_14780__$1;(statearr_14853_14915[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 29))
{var inst_14764 = (state_14780[2]);var state_14780__$1 = state_14780;var statearr_14854_14916 = state_14780__$1;(statearr_14854_14916[2] = inst_14764);
(statearr_14854_14916[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 30))
{var inst_14717 = (state_14780[10]);var inst_14716 = (state_14780[11]);var inst_14719 = (state_14780[12]);var inst_14718 = (state_14780[13]);var inst_14733 = (state_14780[2]);var inst_14734 = (inst_14719 + 1);var tmp14848 = inst_14717;var tmp14849 = inst_14716;var tmp14850 = inst_14718;var inst_14716__$1 = tmp14849;var inst_14717__$1 = tmp14848;var inst_14718__$1 = tmp14850;var inst_14719__$1 = inst_14734;var state_14780__$1 = (function (){var statearr_14855 = state_14780;(statearr_14855[31] = inst_14733);
(statearr_14855[10] = inst_14717__$1);
(statearr_14855[11] = inst_14716__$1);
(statearr_14855[12] = inst_14719__$1);
(statearr_14855[13] = inst_14718__$1);
return statearr_14855;
})();var statearr_14856_14917 = state_14780__$1;(statearr_14856_14917[2] = null);
(statearr_14856_14917[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14781 === 31))
{var inst_14724 = (state_14780[7]);var inst_14725 = (state_14780[2]);var inst_14726 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14727 = cljs.core.async.untap_STAR_.call(null,m,inst_14724);var state_14780__$1 = (function (){var statearr_14857 = state_14780;(statearr_14857[32] = inst_14725);
(statearr_14857[33] = inst_14726);
return statearr_14857;
})();var statearr_14858_14918 = state_14780__$1;(statearr_14858_14918[2] = inst_14727);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14862[0] = state_machine__5507__auto__);
(statearr_14862[1] = 1);
return statearr_14862;
});
var state_machine__5507__auto____1 = (function (state_14780){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14780);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14863){if((e14863 instanceof Object))
{var ex__5510__auto__ = e14863;var statearr_14864_14919 = state_14780;(statearr_14864_14919[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14863;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14920 = state_14780;
state_14780 = G__14920;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14780){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14865 = f__5522__auto__.call(null);(statearr_14865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14866);
return statearr_14865;
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
cljs.core.async.Mix = (function (){var obj14922 = {};return obj14922;
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
;var m = (function (){if(typeof cljs.core.async.t15032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15032 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15033){
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
this.meta15033 = meta15033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15032.cljs$lang$type = true;
cljs.core.async.t15032.cljs$lang$ctorStr = "cljs.core.async/t15032";
cljs.core.async.t15032.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15032");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15032.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15034){var self__ = this;
var _15034__$1 = this;return self__.meta15033;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15034,meta15033__$1){var self__ = this;
var _15034__$1 = this;return (new cljs.core.async.t15032(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15033__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15032 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15032(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15033){return (new cljs.core.async.t15032(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15033));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15032(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15141 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15099){var state_val_15100 = (state_15099[1]);if((state_val_15100 === 1))
{var inst_15038 = (state_15099[7]);var inst_15038__$1 = calc_state.call(null);var inst_15039 = cljs.core.seq_QMARK_.call(null,inst_15038__$1);var state_15099__$1 = (function (){var statearr_15101 = state_15099;(statearr_15101[7] = inst_15038__$1);
return statearr_15101;
})();if(inst_15039)
{var statearr_15102_15142 = state_15099__$1;(statearr_15102_15142[1] = 2);
} else
{var statearr_15103_15143 = state_15099__$1;(statearr_15103_15143[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 2))
{var inst_15038 = (state_15099[7]);var inst_15041 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15038);var state_15099__$1 = state_15099;var statearr_15104_15144 = state_15099__$1;(statearr_15104_15144[2] = inst_15041);
(statearr_15104_15144[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 3))
{var inst_15038 = (state_15099[7]);var state_15099__$1 = state_15099;var statearr_15105_15145 = state_15099__$1;(statearr_15105_15145[2] = inst_15038);
(statearr_15105_15145[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 4))
{var inst_15038 = (state_15099[7]);var inst_15044 = (state_15099[2]);var inst_15045 = cljs.core.get.call(null,inst_15044,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15046 = cljs.core.get.call(null,inst_15044,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15047 = cljs.core.get.call(null,inst_15044,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15048 = inst_15038;var state_15099__$1 = (function (){var statearr_15106 = state_15099;(statearr_15106[8] = inst_15047);
(statearr_15106[9] = inst_15048);
(statearr_15106[10] = inst_15045);
(statearr_15106[11] = inst_15046);
return statearr_15106;
})();var statearr_15107_15146 = state_15099__$1;(statearr_15107_15146[2] = null);
(statearr_15107_15146[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 5))
{var inst_15048 = (state_15099[9]);var inst_15051 = cljs.core.seq_QMARK_.call(null,inst_15048);var state_15099__$1 = state_15099;if(inst_15051)
{var statearr_15108_15147 = state_15099__$1;(statearr_15108_15147[1] = 7);
} else
{var statearr_15109_15148 = state_15099__$1;(statearr_15109_15148[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 6))
{var inst_15097 = (state_15099[2]);var state_15099__$1 = state_15099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15099__$1,inst_15097);
} else
{if((state_val_15100 === 7))
{var inst_15048 = (state_15099[9]);var inst_15053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15048);var state_15099__$1 = state_15099;var statearr_15110_15149 = state_15099__$1;(statearr_15110_15149[2] = inst_15053);
(statearr_15110_15149[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 8))
{var inst_15048 = (state_15099[9]);var state_15099__$1 = state_15099;var statearr_15111_15150 = state_15099__$1;(statearr_15111_15150[2] = inst_15048);
(statearr_15111_15150[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 9))
{var inst_15056 = (state_15099[12]);var inst_15056__$1 = (state_15099[2]);var inst_15057 = cljs.core.get.call(null,inst_15056__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15058 = cljs.core.get.call(null,inst_15056__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15059 = cljs.core.get.call(null,inst_15056__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15099__$1 = (function (){var statearr_15112 = state_15099;(statearr_15112[13] = inst_15058);
(statearr_15112[14] = inst_15059);
(statearr_15112[12] = inst_15056__$1);
return statearr_15112;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15099__$1,10,inst_15057);
} else
{if((state_val_15100 === 10))
{var inst_15064 = (state_15099[15]);var inst_15063 = (state_15099[16]);var inst_15062 = (state_15099[2]);var inst_15063__$1 = cljs.core.nth.call(null,inst_15062,0,null);var inst_15064__$1 = cljs.core.nth.call(null,inst_15062,1,null);var inst_15065 = (inst_15063__$1 == null);var inst_15066 = cljs.core._EQ_.call(null,inst_15064__$1,change);var inst_15067 = (inst_15065) || (inst_15066);var state_15099__$1 = (function (){var statearr_15113 = state_15099;(statearr_15113[15] = inst_15064__$1);
(statearr_15113[16] = inst_15063__$1);
return statearr_15113;
})();if(cljs.core.truth_(inst_15067))
{var statearr_15114_15151 = state_15099__$1;(statearr_15114_15151[1] = 11);
} else
{var statearr_15115_15152 = state_15099__$1;(statearr_15115_15152[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 11))
{var inst_15063 = (state_15099[16]);var inst_15069 = (inst_15063 == null);var state_15099__$1 = state_15099;if(cljs.core.truth_(inst_15069))
{var statearr_15116_15153 = state_15099__$1;(statearr_15116_15153[1] = 14);
} else
{var statearr_15117_15154 = state_15099__$1;(statearr_15117_15154[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 12))
{var inst_15059 = (state_15099[14]);var inst_15064 = (state_15099[15]);var inst_15078 = (state_15099[17]);var inst_15078__$1 = inst_15059.call(null,inst_15064);var state_15099__$1 = (function (){var statearr_15118 = state_15099;(statearr_15118[17] = inst_15078__$1);
return statearr_15118;
})();if(cljs.core.truth_(inst_15078__$1))
{var statearr_15119_15155 = state_15099__$1;(statearr_15119_15155[1] = 17);
} else
{var statearr_15120_15156 = state_15099__$1;(statearr_15120_15156[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 13))
{var inst_15095 = (state_15099[2]);var state_15099__$1 = state_15099;var statearr_15121_15157 = state_15099__$1;(statearr_15121_15157[2] = inst_15095);
(statearr_15121_15157[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 14))
{var inst_15064 = (state_15099[15]);var inst_15071 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15064);var state_15099__$1 = state_15099;var statearr_15122_15158 = state_15099__$1;(statearr_15122_15158[2] = inst_15071);
(statearr_15122_15158[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 15))
{var state_15099__$1 = state_15099;var statearr_15123_15159 = state_15099__$1;(statearr_15123_15159[2] = null);
(statearr_15123_15159[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 16))
{var inst_15074 = (state_15099[2]);var inst_15075 = calc_state.call(null);var inst_15048 = inst_15075;var state_15099__$1 = (function (){var statearr_15124 = state_15099;(statearr_15124[18] = inst_15074);
(statearr_15124[9] = inst_15048);
return statearr_15124;
})();var statearr_15125_15160 = state_15099__$1;(statearr_15125_15160[2] = null);
(statearr_15125_15160[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 17))
{var inst_15078 = (state_15099[17]);var state_15099__$1 = state_15099;var statearr_15126_15161 = state_15099__$1;(statearr_15126_15161[2] = inst_15078);
(statearr_15126_15161[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 18))
{var inst_15058 = (state_15099[13]);var inst_15059 = (state_15099[14]);var inst_15064 = (state_15099[15]);var inst_15081 = cljs.core.empty_QMARK_.call(null,inst_15059);var inst_15082 = inst_15058.call(null,inst_15064);var inst_15083 = cljs.core.not.call(null,inst_15082);var inst_15084 = (inst_15081) && (inst_15083);var state_15099__$1 = state_15099;var statearr_15127_15162 = state_15099__$1;(statearr_15127_15162[2] = inst_15084);
(statearr_15127_15162[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 19))
{var inst_15086 = (state_15099[2]);var state_15099__$1 = state_15099;if(cljs.core.truth_(inst_15086))
{var statearr_15128_15163 = state_15099__$1;(statearr_15128_15163[1] = 20);
} else
{var statearr_15129_15164 = state_15099__$1;(statearr_15129_15164[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 20))
{var inst_15063 = (state_15099[16]);var state_15099__$1 = state_15099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15099__$1,23,out,inst_15063);
} else
{if((state_val_15100 === 21))
{var state_15099__$1 = state_15099;var statearr_15130_15165 = state_15099__$1;(statearr_15130_15165[2] = null);
(statearr_15130_15165[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 22))
{var inst_15056 = (state_15099[12]);var inst_15092 = (state_15099[2]);var inst_15048 = inst_15056;var state_15099__$1 = (function (){var statearr_15131 = state_15099;(statearr_15131[19] = inst_15092);
(statearr_15131[9] = inst_15048);
return statearr_15131;
})();var statearr_15132_15166 = state_15099__$1;(statearr_15132_15166[2] = null);
(statearr_15132_15166[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15100 === 23))
{var inst_15089 = (state_15099[2]);var state_15099__$1 = state_15099;var statearr_15133_15167 = state_15099__$1;(statearr_15133_15167[2] = inst_15089);
(statearr_15133_15167[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15137[0] = state_machine__5507__auto__);
(statearr_15137[1] = 1);
return statearr_15137;
});
var state_machine__5507__auto____1 = (function (state_15099){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15099);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15138){if((e15138 instanceof Object))
{var ex__5510__auto__ = e15138;var statearr_15139_15168 = state_15099;(statearr_15139_15168[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15099);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15169 = state_15099;
state_15099 = G__15169;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15099){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15140 = f__5522__auto__.call(null);(statearr_15140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15141);
return statearr_15140;
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
cljs.core.async.Pub = (function (){var obj15171 = {};return obj15171;
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
return (function (p1__15172_SHARP_){if(cljs.core.truth_(p1__15172_SHARP_.call(null,topic)))
{return p1__15172_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15172_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15297 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15298){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15298 = meta15298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15297.cljs$lang$type = true;
cljs.core.async.t15297.cljs$lang$ctorStr = "cljs.core.async/t15297";
cljs.core.async.t15297.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15297");
});})(mults,ensure_mult))
;
cljs.core.async.t15297.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15297.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15297.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15297.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15299){var self__ = this;
var _15299__$1 = this;return self__.meta15298;
});})(mults,ensure_mult))
;
cljs.core.async.t15297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15299,meta15298__$1){var self__ = this;
var _15299__$1 = this;return (new cljs.core.async.t15297(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15298__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15297 = ((function (mults,ensure_mult){
return (function __GT_t15297(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15298){return (new cljs.core.async.t15297(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15298));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15297(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15421 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15373){var state_val_15374 = (state_15373[1]);if((state_val_15374 === 1))
{var state_15373__$1 = state_15373;var statearr_15375_15422 = state_15373__$1;(statearr_15375_15422[2] = null);
(statearr_15375_15422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 2))
{var state_15373__$1 = state_15373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15373__$1,4,ch);
} else
{if((state_val_15374 === 3))
{var inst_15371 = (state_15373[2]);var state_15373__$1 = state_15373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15373__$1,inst_15371);
} else
{if((state_val_15374 === 4))
{var inst_15302 = (state_15373[7]);var inst_15302__$1 = (state_15373[2]);var inst_15303 = (inst_15302__$1 == null);var state_15373__$1 = (function (){var statearr_15376 = state_15373;(statearr_15376[7] = inst_15302__$1);
return statearr_15376;
})();if(cljs.core.truth_(inst_15303))
{var statearr_15377_15423 = state_15373__$1;(statearr_15377_15423[1] = 5);
} else
{var statearr_15378_15424 = state_15373__$1;(statearr_15378_15424[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 5))
{var inst_15309 = cljs.core.deref.call(null,mults);var inst_15310 = cljs.core.vals.call(null,inst_15309);var inst_15311 = cljs.core.seq.call(null,inst_15310);var inst_15312 = inst_15311;var inst_15313 = null;var inst_15314 = 0;var inst_15315 = 0;var state_15373__$1 = (function (){var statearr_15379 = state_15373;(statearr_15379[8] = inst_15312);
(statearr_15379[9] = inst_15315);
(statearr_15379[10] = inst_15314);
(statearr_15379[11] = inst_15313);
return statearr_15379;
})();var statearr_15380_15425 = state_15373__$1;(statearr_15380_15425[2] = null);
(statearr_15380_15425[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 6))
{var inst_15302 = (state_15373[7]);var inst_15350 = (state_15373[12]);var inst_15352 = (state_15373[13]);var inst_15350__$1 = topic_fn.call(null,inst_15302);var inst_15351 = cljs.core.deref.call(null,mults);var inst_15352__$1 = cljs.core.get.call(null,inst_15351,inst_15350__$1);var state_15373__$1 = (function (){var statearr_15381 = state_15373;(statearr_15381[12] = inst_15350__$1);
(statearr_15381[13] = inst_15352__$1);
return statearr_15381;
})();if(cljs.core.truth_(inst_15352__$1))
{var statearr_15382_15426 = state_15373__$1;(statearr_15382_15426[1] = 19);
} else
{var statearr_15383_15427 = state_15373__$1;(statearr_15383_15427[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 7))
{var inst_15369 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15384_15428 = state_15373__$1;(statearr_15384_15428[2] = inst_15369);
(statearr_15384_15428[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 8))
{var inst_15315 = (state_15373[9]);var inst_15314 = (state_15373[10]);var inst_15317 = (inst_15315 < inst_15314);var inst_15318 = inst_15317;var state_15373__$1 = state_15373;if(cljs.core.truth_(inst_15318))
{var statearr_15388_15429 = state_15373__$1;(statearr_15388_15429[1] = 10);
} else
{var statearr_15389_15430 = state_15373__$1;(statearr_15389_15430[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 9))
{var inst_15348 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15390_15431 = state_15373__$1;(statearr_15390_15431[2] = inst_15348);
(statearr_15390_15431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 10))
{var inst_15312 = (state_15373[8]);var inst_15315 = (state_15373[9]);var inst_15314 = (state_15373[10]);var inst_15313 = (state_15373[11]);var inst_15320 = cljs.core._nth.call(null,inst_15313,inst_15315);var inst_15321 = cljs.core.async.muxch_STAR_.call(null,inst_15320);var inst_15322 = cljs.core.async.close_BANG_.call(null,inst_15321);var inst_15323 = (inst_15315 + 1);var tmp15385 = inst_15312;var tmp15386 = inst_15314;var tmp15387 = inst_15313;var inst_15312__$1 = tmp15385;var inst_15313__$1 = tmp15387;var inst_15314__$1 = tmp15386;var inst_15315__$1 = inst_15323;var state_15373__$1 = (function (){var statearr_15391 = state_15373;(statearr_15391[8] = inst_15312__$1);
(statearr_15391[14] = inst_15322);
(statearr_15391[9] = inst_15315__$1);
(statearr_15391[10] = inst_15314__$1);
(statearr_15391[11] = inst_15313__$1);
return statearr_15391;
})();var statearr_15392_15432 = state_15373__$1;(statearr_15392_15432[2] = null);
(statearr_15392_15432[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 11))
{var inst_15312 = (state_15373[8]);var inst_15326 = (state_15373[15]);var inst_15326__$1 = cljs.core.seq.call(null,inst_15312);var state_15373__$1 = (function (){var statearr_15393 = state_15373;(statearr_15393[15] = inst_15326__$1);
return statearr_15393;
})();if(inst_15326__$1)
{var statearr_15394_15433 = state_15373__$1;(statearr_15394_15433[1] = 13);
} else
{var statearr_15395_15434 = state_15373__$1;(statearr_15395_15434[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 12))
{var inst_15346 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15396_15435 = state_15373__$1;(statearr_15396_15435[2] = inst_15346);
(statearr_15396_15435[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 13))
{var inst_15326 = (state_15373[15]);var inst_15328 = cljs.core.chunked_seq_QMARK_.call(null,inst_15326);var state_15373__$1 = state_15373;if(inst_15328)
{var statearr_15397_15436 = state_15373__$1;(statearr_15397_15436[1] = 16);
} else
{var statearr_15398_15437 = state_15373__$1;(statearr_15398_15437[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 14))
{var state_15373__$1 = state_15373;var statearr_15399_15438 = state_15373__$1;(statearr_15399_15438[2] = null);
(statearr_15399_15438[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 15))
{var inst_15344 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15400_15439 = state_15373__$1;(statearr_15400_15439[2] = inst_15344);
(statearr_15400_15439[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 16))
{var inst_15326 = (state_15373[15]);var inst_15330 = cljs.core.chunk_first.call(null,inst_15326);var inst_15331 = cljs.core.chunk_rest.call(null,inst_15326);var inst_15332 = cljs.core.count.call(null,inst_15330);var inst_15312 = inst_15331;var inst_15313 = inst_15330;var inst_15314 = inst_15332;var inst_15315 = 0;var state_15373__$1 = (function (){var statearr_15401 = state_15373;(statearr_15401[8] = inst_15312);
(statearr_15401[9] = inst_15315);
(statearr_15401[10] = inst_15314);
(statearr_15401[11] = inst_15313);
return statearr_15401;
})();var statearr_15402_15440 = state_15373__$1;(statearr_15402_15440[2] = null);
(statearr_15402_15440[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 17))
{var inst_15326 = (state_15373[15]);var inst_15335 = cljs.core.first.call(null,inst_15326);var inst_15336 = cljs.core.async.muxch_STAR_.call(null,inst_15335);var inst_15337 = cljs.core.async.close_BANG_.call(null,inst_15336);var inst_15338 = cljs.core.next.call(null,inst_15326);var inst_15312 = inst_15338;var inst_15313 = null;var inst_15314 = 0;var inst_15315 = 0;var state_15373__$1 = (function (){var statearr_15403 = state_15373;(statearr_15403[16] = inst_15337);
(statearr_15403[8] = inst_15312);
(statearr_15403[9] = inst_15315);
(statearr_15403[10] = inst_15314);
(statearr_15403[11] = inst_15313);
return statearr_15403;
})();var statearr_15404_15441 = state_15373__$1;(statearr_15404_15441[2] = null);
(statearr_15404_15441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 18))
{var inst_15341 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15405_15442 = state_15373__$1;(statearr_15405_15442[2] = inst_15341);
(statearr_15405_15442[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 19))
{var state_15373__$1 = state_15373;var statearr_15406_15443 = state_15373__$1;(statearr_15406_15443[2] = null);
(statearr_15406_15443[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 20))
{var state_15373__$1 = state_15373;var statearr_15407_15444 = state_15373__$1;(statearr_15407_15444[2] = null);
(statearr_15407_15444[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 21))
{var inst_15366 = (state_15373[2]);var state_15373__$1 = (function (){var statearr_15408 = state_15373;(statearr_15408[17] = inst_15366);
return statearr_15408;
})();var statearr_15409_15445 = state_15373__$1;(statearr_15409_15445[2] = null);
(statearr_15409_15445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 22))
{var inst_15363 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15410_15446 = state_15373__$1;(statearr_15410_15446[2] = inst_15363);
(statearr_15410_15446[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 23))
{var inst_15350 = (state_15373[12]);var inst_15354 = (state_15373[2]);var inst_15355 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15350);var state_15373__$1 = (function (){var statearr_15411 = state_15373;(statearr_15411[18] = inst_15354);
return statearr_15411;
})();var statearr_15412_15447 = state_15373__$1;(statearr_15412_15447[2] = inst_15355);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15373__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 24))
{var inst_15302 = (state_15373[7]);var inst_15352 = (state_15373[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15373,23,Object,null,22);var inst_15359 = cljs.core.async.muxch_STAR_.call(null,inst_15352);var state_15373__$1 = state_15373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15373__$1,25,inst_15359,inst_15302);
} else
{if((state_val_15374 === 25))
{var inst_15361 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15413_15448 = state_15373__$1;(statearr_15413_15448[2] = inst_15361);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15373__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15417[0] = state_machine__5507__auto__);
(statearr_15417[1] = 1);
return statearr_15417;
});
var state_machine__5507__auto____1 = (function (state_15373){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15373);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15418){if((e15418 instanceof Object))
{var ex__5510__auto__ = e15418;var statearr_15419_15449 = state_15373;(statearr_15419_15449[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15450 = state_15373;
state_15373 = G__15450;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15373){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15420 = f__5522__auto__.call(null);(statearr_15420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15421);
return statearr_15420;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15587 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15557){var state_val_15558 = (state_15557[1]);if((state_val_15558 === 1))
{var state_15557__$1 = state_15557;var statearr_15559_15588 = state_15557__$1;(statearr_15559_15588[2] = null);
(statearr_15559_15588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 2))
{var inst_15520 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15521 = 0;var state_15557__$1 = (function (){var statearr_15560 = state_15557;(statearr_15560[7] = inst_15520);
(statearr_15560[8] = inst_15521);
return statearr_15560;
})();var statearr_15561_15589 = state_15557__$1;(statearr_15561_15589[2] = null);
(statearr_15561_15589[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 3))
{var inst_15555 = (state_15557[2]);var state_15557__$1 = state_15557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15557__$1,inst_15555);
} else
{if((state_val_15558 === 4))
{var inst_15521 = (state_15557[8]);var inst_15523 = (inst_15521 < cnt);var state_15557__$1 = state_15557;if(cljs.core.truth_(inst_15523))
{var statearr_15562_15590 = state_15557__$1;(statearr_15562_15590[1] = 6);
} else
{var statearr_15563_15591 = state_15557__$1;(statearr_15563_15591[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 5))
{var inst_15541 = (state_15557[2]);var state_15557__$1 = (function (){var statearr_15564 = state_15557;(statearr_15564[9] = inst_15541);
return statearr_15564;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15557__$1,12,dchan);
} else
{if((state_val_15558 === 6))
{var state_15557__$1 = state_15557;var statearr_15565_15592 = state_15557__$1;(statearr_15565_15592[2] = null);
(statearr_15565_15592[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 7))
{var state_15557__$1 = state_15557;var statearr_15566_15593 = state_15557__$1;(statearr_15566_15593[2] = null);
(statearr_15566_15593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 8))
{var inst_15539 = (state_15557[2]);var state_15557__$1 = state_15557;var statearr_15567_15594 = state_15557__$1;(statearr_15567_15594[2] = inst_15539);
(statearr_15567_15594[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 9))
{var inst_15521 = (state_15557[8]);var inst_15534 = (state_15557[2]);var inst_15535 = (inst_15521 + 1);var inst_15521__$1 = inst_15535;var state_15557__$1 = (function (){var statearr_15568 = state_15557;(statearr_15568[10] = inst_15534);
(statearr_15568[8] = inst_15521__$1);
return statearr_15568;
})();var statearr_15569_15595 = state_15557__$1;(statearr_15569_15595[2] = null);
(statearr_15569_15595[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 10))
{var inst_15525 = (state_15557[2]);var inst_15526 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15557__$1 = (function (){var statearr_15570 = state_15557;(statearr_15570[11] = inst_15525);
return statearr_15570;
})();var statearr_15571_15596 = state_15557__$1;(statearr_15571_15596[2] = inst_15526);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15557__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 11))
{var inst_15521 = (state_15557[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15557,10,Object,null,9);var inst_15530 = chs__$1.call(null,inst_15521);var inst_15531 = done.call(null,inst_15521);var inst_15532 = cljs.core.async.take_BANG_.call(null,inst_15530,inst_15531);var state_15557__$1 = state_15557;var statearr_15572_15597 = state_15557__$1;(statearr_15572_15597[2] = inst_15532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15557__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 12))
{var inst_15543 = (state_15557[12]);var inst_15543__$1 = (state_15557[2]);var inst_15544 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15543__$1);var state_15557__$1 = (function (){var statearr_15573 = state_15557;(statearr_15573[12] = inst_15543__$1);
return statearr_15573;
})();if(cljs.core.truth_(inst_15544))
{var statearr_15574_15598 = state_15557__$1;(statearr_15574_15598[1] = 13);
} else
{var statearr_15575_15599 = state_15557__$1;(statearr_15575_15599[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 13))
{var inst_15546 = cljs.core.async.close_BANG_.call(null,out);var state_15557__$1 = state_15557;var statearr_15576_15600 = state_15557__$1;(statearr_15576_15600[2] = inst_15546);
(statearr_15576_15600[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 14))
{var inst_15543 = (state_15557[12]);var inst_15548 = cljs.core.apply.call(null,f,inst_15543);var state_15557__$1 = state_15557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15557__$1,16,out,inst_15548);
} else
{if((state_val_15558 === 15))
{var inst_15553 = (state_15557[2]);var state_15557__$1 = state_15557;var statearr_15577_15601 = state_15557__$1;(statearr_15577_15601[2] = inst_15553);
(statearr_15577_15601[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15558 === 16))
{var inst_15550 = (state_15557[2]);var state_15557__$1 = (function (){var statearr_15578 = state_15557;(statearr_15578[13] = inst_15550);
return statearr_15578;
})();var statearr_15579_15602 = state_15557__$1;(statearr_15579_15602[2] = null);
(statearr_15579_15602[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15583[0] = state_machine__5507__auto__);
(statearr_15583[1] = 1);
return statearr_15583;
});
var state_machine__5507__auto____1 = (function (state_15557){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15557);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15584){if((e15584 instanceof Object))
{var ex__5510__auto__ = e15584;var statearr_15585_15603 = state_15557;(statearr_15585_15603[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15557);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15604 = state_15557;
state_15557 = G__15604;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15557){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15586 = f__5522__auto__.call(null);(statearr_15586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15587);
return statearr_15586;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15712 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15688){var state_val_15689 = (state_15688[1]);if((state_val_15689 === 1))
{var inst_15659 = cljs.core.vec.call(null,chs);var inst_15660 = inst_15659;var state_15688__$1 = (function (){var statearr_15690 = state_15688;(statearr_15690[7] = inst_15660);
return statearr_15690;
})();var statearr_15691_15713 = state_15688__$1;(statearr_15691_15713[2] = null);
(statearr_15691_15713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 2))
{var inst_15660 = (state_15688[7]);var inst_15662 = cljs.core.count.call(null,inst_15660);var inst_15663 = (inst_15662 > 0);var state_15688__$1 = state_15688;if(cljs.core.truth_(inst_15663))
{var statearr_15692_15714 = state_15688__$1;(statearr_15692_15714[1] = 4);
} else
{var statearr_15693_15715 = state_15688__$1;(statearr_15693_15715[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 3))
{var inst_15686 = (state_15688[2]);var state_15688__$1 = state_15688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15688__$1,inst_15686);
} else
{if((state_val_15689 === 4))
{var inst_15660 = (state_15688[7]);var state_15688__$1 = state_15688;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15688__$1,7,inst_15660);
} else
{if((state_val_15689 === 5))
{var inst_15682 = cljs.core.async.close_BANG_.call(null,out);var state_15688__$1 = state_15688;var statearr_15694_15716 = state_15688__$1;(statearr_15694_15716[2] = inst_15682);
(statearr_15694_15716[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 6))
{var inst_15684 = (state_15688[2]);var state_15688__$1 = state_15688;var statearr_15695_15717 = state_15688__$1;(statearr_15695_15717[2] = inst_15684);
(statearr_15695_15717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 7))
{var inst_15668 = (state_15688[8]);var inst_15667 = (state_15688[9]);var inst_15667__$1 = (state_15688[2]);var inst_15668__$1 = cljs.core.nth.call(null,inst_15667__$1,0,null);var inst_15669 = cljs.core.nth.call(null,inst_15667__$1,1,null);var inst_15670 = (inst_15668__$1 == null);var state_15688__$1 = (function (){var statearr_15696 = state_15688;(statearr_15696[8] = inst_15668__$1);
(statearr_15696[9] = inst_15667__$1);
(statearr_15696[10] = inst_15669);
return statearr_15696;
})();if(cljs.core.truth_(inst_15670))
{var statearr_15697_15718 = state_15688__$1;(statearr_15697_15718[1] = 8);
} else
{var statearr_15698_15719 = state_15688__$1;(statearr_15698_15719[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 8))
{var inst_15668 = (state_15688[8]);var inst_15667 = (state_15688[9]);var inst_15660 = (state_15688[7]);var inst_15669 = (state_15688[10]);var inst_15672 = (function (){var c = inst_15669;var v = inst_15668;var vec__15665 = inst_15667;var cs = inst_15660;return ((function (c,v,vec__15665,cs,inst_15668,inst_15667,inst_15660,inst_15669,state_val_15689){
return (function (p1__15605_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15605_SHARP_);
});
;})(c,v,vec__15665,cs,inst_15668,inst_15667,inst_15660,inst_15669,state_val_15689))
})();var inst_15673 = cljs.core.filterv.call(null,inst_15672,inst_15660);var inst_15660__$1 = inst_15673;var state_15688__$1 = (function (){var statearr_15699 = state_15688;(statearr_15699[7] = inst_15660__$1);
return statearr_15699;
})();var statearr_15700_15720 = state_15688__$1;(statearr_15700_15720[2] = null);
(statearr_15700_15720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 9))
{var inst_15668 = (state_15688[8]);var state_15688__$1 = state_15688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15688__$1,11,out,inst_15668);
} else
{if((state_val_15689 === 10))
{var inst_15680 = (state_15688[2]);var state_15688__$1 = state_15688;var statearr_15702_15721 = state_15688__$1;(statearr_15702_15721[2] = inst_15680);
(statearr_15702_15721[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 11))
{var inst_15660 = (state_15688[7]);var inst_15677 = (state_15688[2]);var tmp15701 = inst_15660;var inst_15660__$1 = tmp15701;var state_15688__$1 = (function (){var statearr_15703 = state_15688;(statearr_15703[7] = inst_15660__$1);
(statearr_15703[11] = inst_15677);
return statearr_15703;
})();var statearr_15704_15722 = state_15688__$1;(statearr_15704_15722[2] = null);
(statearr_15704_15722[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15708 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15708[0] = state_machine__5507__auto__);
(statearr_15708[1] = 1);
return statearr_15708;
});
var state_machine__5507__auto____1 = (function (state_15688){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15688);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15709){if((e15709 instanceof Object))
{var ex__5510__auto__ = e15709;var statearr_15710_15723 = state_15688;(statearr_15710_15723[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15724 = state_15688;
state_15688 = G__15724;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15688){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15711 = f__5522__auto__.call(null);(statearr_15711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15712);
return statearr_15711;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15817 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15794){var state_val_15795 = (state_15794[1]);if((state_val_15795 === 1))
{var inst_15771 = 0;var state_15794__$1 = (function (){var statearr_15796 = state_15794;(statearr_15796[7] = inst_15771);
return statearr_15796;
})();var statearr_15797_15818 = state_15794__$1;(statearr_15797_15818[2] = null);
(statearr_15797_15818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 2))
{var inst_15771 = (state_15794[7]);var inst_15773 = (inst_15771 < n);var state_15794__$1 = state_15794;if(cljs.core.truth_(inst_15773))
{var statearr_15798_15819 = state_15794__$1;(statearr_15798_15819[1] = 4);
} else
{var statearr_15799_15820 = state_15794__$1;(statearr_15799_15820[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 3))
{var inst_15791 = (state_15794[2]);var inst_15792 = cljs.core.async.close_BANG_.call(null,out);var state_15794__$1 = (function (){var statearr_15800 = state_15794;(statearr_15800[8] = inst_15791);
return statearr_15800;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15794__$1,inst_15792);
} else
{if((state_val_15795 === 4))
{var state_15794__$1 = state_15794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15794__$1,7,ch);
} else
{if((state_val_15795 === 5))
{var state_15794__$1 = state_15794;var statearr_15801_15821 = state_15794__$1;(statearr_15801_15821[2] = null);
(statearr_15801_15821[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 6))
{var inst_15789 = (state_15794[2]);var state_15794__$1 = state_15794;var statearr_15802_15822 = state_15794__$1;(statearr_15802_15822[2] = inst_15789);
(statearr_15802_15822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 7))
{var inst_15776 = (state_15794[9]);var inst_15776__$1 = (state_15794[2]);var inst_15777 = (inst_15776__$1 == null);var inst_15778 = cljs.core.not.call(null,inst_15777);var state_15794__$1 = (function (){var statearr_15803 = state_15794;(statearr_15803[9] = inst_15776__$1);
return statearr_15803;
})();if(inst_15778)
{var statearr_15804_15823 = state_15794__$1;(statearr_15804_15823[1] = 8);
} else
{var statearr_15805_15824 = state_15794__$1;(statearr_15805_15824[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 8))
{var inst_15776 = (state_15794[9]);var state_15794__$1 = state_15794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15794__$1,11,out,inst_15776);
} else
{if((state_val_15795 === 9))
{var state_15794__$1 = state_15794;var statearr_15806_15825 = state_15794__$1;(statearr_15806_15825[2] = null);
(statearr_15806_15825[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 10))
{var inst_15786 = (state_15794[2]);var state_15794__$1 = state_15794;var statearr_15807_15826 = state_15794__$1;(statearr_15807_15826[2] = inst_15786);
(statearr_15807_15826[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 11))
{var inst_15771 = (state_15794[7]);var inst_15781 = (state_15794[2]);var inst_15782 = (inst_15771 + 1);var inst_15771__$1 = inst_15782;var state_15794__$1 = (function (){var statearr_15808 = state_15794;(statearr_15808[7] = inst_15771__$1);
(statearr_15808[10] = inst_15781);
return statearr_15808;
})();var statearr_15809_15827 = state_15794__$1;(statearr_15809_15827[2] = null);
(statearr_15809_15827[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15813 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15813[0] = state_machine__5507__auto__);
(statearr_15813[1] = 1);
return statearr_15813;
});
var state_machine__5507__auto____1 = (function (state_15794){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15794);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15814){if((e15814 instanceof Object))
{var ex__5510__auto__ = e15814;var statearr_15815_15828 = state_15794;(statearr_15815_15828[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15794);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15829 = state_15794;
state_15794 = G__15829;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15794){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15816 = f__5522__auto__.call(null);(statearr_15816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15817);
return statearr_15816;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15926 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15901){var state_val_15902 = (state_15901[1]);if((state_val_15902 === 1))
{var inst_15878 = null;var state_15901__$1 = (function (){var statearr_15903 = state_15901;(statearr_15903[7] = inst_15878);
return statearr_15903;
})();var statearr_15904_15927 = state_15901__$1;(statearr_15904_15927[2] = null);
(statearr_15904_15927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 2))
{var state_15901__$1 = state_15901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15901__$1,4,ch);
} else
{if((state_val_15902 === 3))
{var inst_15898 = (state_15901[2]);var inst_15899 = cljs.core.async.close_BANG_.call(null,out);var state_15901__$1 = (function (){var statearr_15905 = state_15901;(statearr_15905[8] = inst_15898);
return statearr_15905;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15901__$1,inst_15899);
} else
{if((state_val_15902 === 4))
{var inst_15881 = (state_15901[9]);var inst_15881__$1 = (state_15901[2]);var inst_15882 = (inst_15881__$1 == null);var inst_15883 = cljs.core.not.call(null,inst_15882);var state_15901__$1 = (function (){var statearr_15906 = state_15901;(statearr_15906[9] = inst_15881__$1);
return statearr_15906;
})();if(inst_15883)
{var statearr_15907_15928 = state_15901__$1;(statearr_15907_15928[1] = 5);
} else
{var statearr_15908_15929 = state_15901__$1;(statearr_15908_15929[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 5))
{var inst_15878 = (state_15901[7]);var inst_15881 = (state_15901[9]);var inst_15885 = cljs.core._EQ_.call(null,inst_15881,inst_15878);var state_15901__$1 = state_15901;if(inst_15885)
{var statearr_15909_15930 = state_15901__$1;(statearr_15909_15930[1] = 8);
} else
{var statearr_15910_15931 = state_15901__$1;(statearr_15910_15931[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 6))
{var state_15901__$1 = state_15901;var statearr_15912_15932 = state_15901__$1;(statearr_15912_15932[2] = null);
(statearr_15912_15932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 7))
{var inst_15896 = (state_15901[2]);var state_15901__$1 = state_15901;var statearr_15913_15933 = state_15901__$1;(statearr_15913_15933[2] = inst_15896);
(statearr_15913_15933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 8))
{var inst_15878 = (state_15901[7]);var tmp15911 = inst_15878;var inst_15878__$1 = tmp15911;var state_15901__$1 = (function (){var statearr_15914 = state_15901;(statearr_15914[7] = inst_15878__$1);
return statearr_15914;
})();var statearr_15915_15934 = state_15901__$1;(statearr_15915_15934[2] = null);
(statearr_15915_15934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 9))
{var inst_15881 = (state_15901[9]);var state_15901__$1 = state_15901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15901__$1,11,out,inst_15881);
} else
{if((state_val_15902 === 10))
{var inst_15893 = (state_15901[2]);var state_15901__$1 = state_15901;var statearr_15916_15935 = state_15901__$1;(statearr_15916_15935[2] = inst_15893);
(statearr_15916_15935[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 11))
{var inst_15881 = (state_15901[9]);var inst_15890 = (state_15901[2]);var inst_15878 = inst_15881;var state_15901__$1 = (function (){var statearr_15917 = state_15901;(statearr_15917[10] = inst_15890);
(statearr_15917[7] = inst_15878);
return statearr_15917;
})();var statearr_15918_15936 = state_15901__$1;(statearr_15918_15936[2] = null);
(statearr_15918_15936[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15922 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15922[0] = state_machine__5507__auto__);
(statearr_15922[1] = 1);
return statearr_15922;
});
var state_machine__5507__auto____1 = (function (state_15901){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15923){if((e15923 instanceof Object))
{var ex__5510__auto__ = e15923;var statearr_15924_15937 = state_15901;(statearr_15924_15937[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15938 = state_15901;
state_15901 = G__15938;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15901){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15925 = f__5522__auto__.call(null);(statearr_15925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15926);
return statearr_15925;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16073 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16043){var state_val_16044 = (state_16043[1]);if((state_val_16044 === 1))
{var inst_16006 = (new Array(n));var inst_16007 = inst_16006;var inst_16008 = 0;var state_16043__$1 = (function (){var statearr_16045 = state_16043;(statearr_16045[7] = inst_16008);
(statearr_16045[8] = inst_16007);
return statearr_16045;
})();var statearr_16046_16074 = state_16043__$1;(statearr_16046_16074[2] = null);
(statearr_16046_16074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 2))
{var state_16043__$1 = state_16043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16043__$1,4,ch);
} else
{if((state_val_16044 === 3))
{var inst_16041 = (state_16043[2]);var state_16043__$1 = state_16043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16043__$1,inst_16041);
} else
{if((state_val_16044 === 4))
{var inst_16011 = (state_16043[9]);var inst_16011__$1 = (state_16043[2]);var inst_16012 = (inst_16011__$1 == null);var inst_16013 = cljs.core.not.call(null,inst_16012);var state_16043__$1 = (function (){var statearr_16047 = state_16043;(statearr_16047[9] = inst_16011__$1);
return statearr_16047;
})();if(inst_16013)
{var statearr_16048_16075 = state_16043__$1;(statearr_16048_16075[1] = 5);
} else
{var statearr_16049_16076 = state_16043__$1;(statearr_16049_16076[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 5))
{var inst_16016 = (state_16043[10]);var inst_16008 = (state_16043[7]);var inst_16007 = (state_16043[8]);var inst_16011 = (state_16043[9]);var inst_16015 = (inst_16007[inst_16008] = inst_16011);var inst_16016__$1 = (inst_16008 + 1);var inst_16017 = (inst_16016__$1 < n);var state_16043__$1 = (function (){var statearr_16050 = state_16043;(statearr_16050[11] = inst_16015);
(statearr_16050[10] = inst_16016__$1);
return statearr_16050;
})();if(cljs.core.truth_(inst_16017))
{var statearr_16051_16077 = state_16043__$1;(statearr_16051_16077[1] = 8);
} else
{var statearr_16052_16078 = state_16043__$1;(statearr_16052_16078[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 6))
{var inst_16008 = (state_16043[7]);var inst_16029 = (inst_16008 > 0);var state_16043__$1 = state_16043;if(cljs.core.truth_(inst_16029))
{var statearr_16054_16079 = state_16043__$1;(statearr_16054_16079[1] = 12);
} else
{var statearr_16055_16080 = state_16043__$1;(statearr_16055_16080[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 7))
{var inst_16039 = (state_16043[2]);var state_16043__$1 = state_16043;var statearr_16056_16081 = state_16043__$1;(statearr_16056_16081[2] = inst_16039);
(statearr_16056_16081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 8))
{var inst_16016 = (state_16043[10]);var inst_16007 = (state_16043[8]);var tmp16053 = inst_16007;var inst_16007__$1 = tmp16053;var inst_16008 = inst_16016;var state_16043__$1 = (function (){var statearr_16057 = state_16043;(statearr_16057[7] = inst_16008);
(statearr_16057[8] = inst_16007__$1);
return statearr_16057;
})();var statearr_16058_16082 = state_16043__$1;(statearr_16058_16082[2] = null);
(statearr_16058_16082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 9))
{var inst_16007 = (state_16043[8]);var inst_16021 = cljs.core.vec.call(null,inst_16007);var state_16043__$1 = state_16043;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16043__$1,11,out,inst_16021);
} else
{if((state_val_16044 === 10))
{var inst_16027 = (state_16043[2]);var state_16043__$1 = state_16043;var statearr_16059_16083 = state_16043__$1;(statearr_16059_16083[2] = inst_16027);
(statearr_16059_16083[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 11))
{var inst_16023 = (state_16043[2]);var inst_16024 = (new Array(n));var inst_16007 = inst_16024;var inst_16008 = 0;var state_16043__$1 = (function (){var statearr_16060 = state_16043;(statearr_16060[12] = inst_16023);
(statearr_16060[7] = inst_16008);
(statearr_16060[8] = inst_16007);
return statearr_16060;
})();var statearr_16061_16084 = state_16043__$1;(statearr_16061_16084[2] = null);
(statearr_16061_16084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 12))
{var inst_16007 = (state_16043[8]);var inst_16031 = cljs.core.vec.call(null,inst_16007);var state_16043__$1 = state_16043;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16043__$1,15,out,inst_16031);
} else
{if((state_val_16044 === 13))
{var state_16043__$1 = state_16043;var statearr_16062_16085 = state_16043__$1;(statearr_16062_16085[2] = null);
(statearr_16062_16085[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 14))
{var inst_16036 = (state_16043[2]);var inst_16037 = cljs.core.async.close_BANG_.call(null,out);var state_16043__$1 = (function (){var statearr_16063 = state_16043;(statearr_16063[13] = inst_16036);
return statearr_16063;
})();var statearr_16064_16086 = state_16043__$1;(statearr_16064_16086[2] = inst_16037);
(statearr_16064_16086[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16044 === 15))
{var inst_16033 = (state_16043[2]);var state_16043__$1 = state_16043;var statearr_16065_16087 = state_16043__$1;(statearr_16065_16087[2] = inst_16033);
(statearr_16065_16087[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16069[0] = state_machine__5507__auto__);
(statearr_16069[1] = 1);
return statearr_16069;
});
var state_machine__5507__auto____1 = (function (state_16043){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16043);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16070){if((e16070 instanceof Object))
{var ex__5510__auto__ = e16070;var statearr_16071_16088 = state_16043;(statearr_16071_16088[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16043);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16089 = state_16043;
state_16043 = G__16089;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16043){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16072 = f__5522__auto__.call(null);(statearr_16072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16073);
return statearr_16072;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16202){var state_val_16203 = (state_16202[1]);if((state_val_16203 === 1))
{var inst_16161 = [];var inst_16162 = inst_16161;var inst_16163 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16202__$1 = (function (){var statearr_16204 = state_16202;(statearr_16204[7] = inst_16162);
(statearr_16204[8] = inst_16163);
return statearr_16204;
})();var statearr_16205_16233 = state_16202__$1;(statearr_16205_16233[2] = null);
(statearr_16205_16233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 2))
{var state_16202__$1 = state_16202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16202__$1,4,ch);
} else
{if((state_val_16203 === 3))
{var inst_16200 = (state_16202[2]);var state_16202__$1 = state_16202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16202__$1,inst_16200);
} else
{if((state_val_16203 === 4))
{var inst_16166 = (state_16202[9]);var inst_16166__$1 = (state_16202[2]);var inst_16167 = (inst_16166__$1 == null);var inst_16168 = cljs.core.not.call(null,inst_16167);var state_16202__$1 = (function (){var statearr_16206 = state_16202;(statearr_16206[9] = inst_16166__$1);
return statearr_16206;
})();if(inst_16168)
{var statearr_16207_16234 = state_16202__$1;(statearr_16207_16234[1] = 5);
} else
{var statearr_16208_16235 = state_16202__$1;(statearr_16208_16235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 5))
{var inst_16170 = (state_16202[10]);var inst_16163 = (state_16202[8]);var inst_16166 = (state_16202[9]);var inst_16170__$1 = f.call(null,inst_16166);var inst_16171 = cljs.core._EQ_.call(null,inst_16170__$1,inst_16163);var inst_16172 = cljs.core.keyword_identical_QMARK_.call(null,inst_16163,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16173 = (inst_16171) || (inst_16172);var state_16202__$1 = (function (){var statearr_16209 = state_16202;(statearr_16209[10] = inst_16170__$1);
return statearr_16209;
})();if(cljs.core.truth_(inst_16173))
{var statearr_16210_16236 = state_16202__$1;(statearr_16210_16236[1] = 8);
} else
{var statearr_16211_16237 = state_16202__$1;(statearr_16211_16237[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 6))
{var inst_16162 = (state_16202[7]);var inst_16187 = inst_16162.length;var inst_16188 = (inst_16187 > 0);var state_16202__$1 = state_16202;if(cljs.core.truth_(inst_16188))
{var statearr_16213_16238 = state_16202__$1;(statearr_16213_16238[1] = 12);
} else
{var statearr_16214_16239 = state_16202__$1;(statearr_16214_16239[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 7))
{var inst_16198 = (state_16202[2]);var state_16202__$1 = state_16202;var statearr_16215_16240 = state_16202__$1;(statearr_16215_16240[2] = inst_16198);
(statearr_16215_16240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 8))
{var inst_16170 = (state_16202[10]);var inst_16162 = (state_16202[7]);var inst_16166 = (state_16202[9]);var inst_16175 = inst_16162.push(inst_16166);var tmp16212 = inst_16162;var inst_16162__$1 = tmp16212;var inst_16163 = inst_16170;var state_16202__$1 = (function (){var statearr_16216 = state_16202;(statearr_16216[7] = inst_16162__$1);
(statearr_16216[8] = inst_16163);
(statearr_16216[11] = inst_16175);
return statearr_16216;
})();var statearr_16217_16241 = state_16202__$1;(statearr_16217_16241[2] = null);
(statearr_16217_16241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 9))
{var inst_16162 = (state_16202[7]);var inst_16178 = cljs.core.vec.call(null,inst_16162);var state_16202__$1 = state_16202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16202__$1,11,out,inst_16178);
} else
{if((state_val_16203 === 10))
{var inst_16185 = (state_16202[2]);var state_16202__$1 = state_16202;var statearr_16218_16242 = state_16202__$1;(statearr_16218_16242[2] = inst_16185);
(statearr_16218_16242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 11))
{var inst_16170 = (state_16202[10]);var inst_16166 = (state_16202[9]);var inst_16180 = (state_16202[2]);var inst_16181 = [];var inst_16182 = inst_16181.push(inst_16166);var inst_16162 = inst_16181;var inst_16163 = inst_16170;var state_16202__$1 = (function (){var statearr_16219 = state_16202;(statearr_16219[7] = inst_16162);
(statearr_16219[8] = inst_16163);
(statearr_16219[12] = inst_16180);
(statearr_16219[13] = inst_16182);
return statearr_16219;
})();var statearr_16220_16243 = state_16202__$1;(statearr_16220_16243[2] = null);
(statearr_16220_16243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 12))
{var inst_16162 = (state_16202[7]);var inst_16190 = cljs.core.vec.call(null,inst_16162);var state_16202__$1 = state_16202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16202__$1,15,out,inst_16190);
} else
{if((state_val_16203 === 13))
{var state_16202__$1 = state_16202;var statearr_16221_16244 = state_16202__$1;(statearr_16221_16244[2] = null);
(statearr_16221_16244[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 14))
{var inst_16195 = (state_16202[2]);var inst_16196 = cljs.core.async.close_BANG_.call(null,out);var state_16202__$1 = (function (){var statearr_16222 = state_16202;(statearr_16222[14] = inst_16195);
return statearr_16222;
})();var statearr_16223_16245 = state_16202__$1;(statearr_16223_16245[2] = inst_16196);
(statearr_16223_16245[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16203 === 15))
{var inst_16192 = (state_16202[2]);var state_16202__$1 = state_16202;var statearr_16224_16246 = state_16202__$1;(statearr_16224_16246[2] = inst_16192);
(statearr_16224_16246[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16228[0] = state_machine__5507__auto__);
(statearr_16228[1] = 1);
return statearr_16228;
});
var state_machine__5507__auto____1 = (function (state_16202){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16202);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16229){if((e16229 instanceof Object))
{var ex__5510__auto__ = e16229;var statearr_16230_16247 = state_16202;(statearr_16230_16247[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16248 = state_16202;
state_16202 = G__16248;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16202){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16231 = f__5522__auto__.call(null);(statearr_16231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16232);
return statearr_16231;
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