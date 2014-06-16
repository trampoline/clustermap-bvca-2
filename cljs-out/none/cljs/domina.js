// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_28378 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28379 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28380 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28379,table_section_wrapper_28379,opt_wrapper_28378,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28380,table_section_wrapper_28379,cell_wrapper_28380,opt_wrapper_28378,table_section_wrapper_28379,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28379]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28385 = cljs.core.seq.call(null,tbody);var chunk__28386 = null;var count__28387 = 0;var i__28388 = 0;while(true){
if((i__28388 < count__28387))
{var child = cljs.core._nth.call(null,chunk__28386,i__28388);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28389 = seq__28385;
var G__28390 = chunk__28386;
var G__28391 = count__28387;
var G__28392 = (i__28388 + 1);
seq__28385 = G__28389;
chunk__28386 = G__28390;
count__28387 = G__28391;
i__28388 = G__28392;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28385);if(temp__4092__auto__)
{var seq__28385__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28385__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28385__$1);{
var G__28393 = cljs.core.chunk_rest.call(null,seq__28385__$1);
var G__28394 = c__4189__auto__;
var G__28395 = cljs.core.count.call(null,c__4189__auto__);
var G__28396 = 0;
seq__28385 = G__28393;
chunk__28386 = G__28394;
count__28387 = G__28395;
i__28388 = G__28396;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28385__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28397 = cljs.core.next.call(null,seq__28385__$1);
var G__28398 = null;
var G__28399 = 0;
var G__28400 = 0;
seq__28385 = G__28397;
chunk__28386 = G__28398;
count__28387 = G__28399;
i__28388 = G__28400;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28402 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28402,0,null);var start_wrap = cljs.core.nth.call(null,vec__28402,1,null);var end_wrap = cljs.core.nth.call(null,vec__28402,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28403 = wrapper.lastChild;
var G__28404 = (level - 1);
wrapper = G__28403;
level = G__28404;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj28406 = {};return obj28406;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__28407){
var mesg = cljs.core.seq(arglist__28407);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__28408){
var mesg = cljs.core.seq(arglist__28408);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__28409){
var contents = cljs.core.seq(arglist__28409);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28410_SHARP_){return p1__28410_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28411_SHARP_,p2__28412_SHARP_){return goog.dom.insertChildAt(p1__28411_SHARP_,p2__28412_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28414_SHARP_,p2__28413_SHARP_){return goog.dom.insertSiblingBefore(p2__28413_SHARP_,p1__28414_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28416_SHARP_,p2__28415_SHARP_){return goog.dom.insertSiblingAfter(p2__28415_SHARP_,p1__28416_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28418_SHARP_,p2__28417_SHARP_){return goog.dom.replaceNode(p2__28417_SHARP_,p1__28418_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__28423_28427 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28424_28428 = null;var count__28425_28429 = 0;var i__28426_28430 = 0;while(true){
if((i__28426_28430 < count__28425_28429))
{var n_28431 = cljs.core._nth.call(null,chunk__28424_28428,i__28426_28430);goog.style.setStyle(n_28431,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28432 = seq__28423_28427;
var G__28433 = chunk__28424_28428;
var G__28434 = count__28425_28429;
var G__28435 = (i__28426_28430 + 1);
seq__28423_28427 = G__28432;
chunk__28424_28428 = G__28433;
count__28425_28429 = G__28434;
i__28426_28430 = G__28435;
continue;
}
} else
{var temp__4092__auto___28436 = cljs.core.seq.call(null,seq__28423_28427);if(temp__4092__auto___28436)
{var seq__28423_28437__$1 = temp__4092__auto___28436;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28423_28437__$1))
{var c__4189__auto___28438 = cljs.core.chunk_first.call(null,seq__28423_28437__$1);{
var G__28439 = cljs.core.chunk_rest.call(null,seq__28423_28437__$1);
var G__28440 = c__4189__auto___28438;
var G__28441 = cljs.core.count.call(null,c__4189__auto___28438);
var G__28442 = 0;
seq__28423_28427 = G__28439;
chunk__28424_28428 = G__28440;
count__28425_28429 = G__28441;
i__28426_28430 = G__28442;
continue;
}
} else
{var n_28443 = cljs.core.first.call(null,seq__28423_28437__$1);goog.style.setStyle(n_28443,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28444 = cljs.core.next.call(null,seq__28423_28437__$1);
var G__28445 = null;
var G__28446 = 0;
var G__28447 = 0;
seq__28423_28427 = G__28444;
chunk__28424_28428 = G__28445;
count__28425_28429 = G__28446;
i__28426_28430 = G__28447;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28448){
var content = cljs.core.first(arglist__28448);
arglist__28448 = cljs.core.next(arglist__28448);
var name = cljs.core.first(arglist__28448);
var value = cljs.core.rest(arglist__28448);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__28453_28457 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28454_28458 = null;var count__28455_28459 = 0;var i__28456_28460 = 0;while(true){
if((i__28456_28460 < count__28455_28459))
{var n_28461 = cljs.core._nth.call(null,chunk__28454_28458,i__28456_28460);n_28461.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28462 = seq__28453_28457;
var G__28463 = chunk__28454_28458;
var G__28464 = count__28455_28459;
var G__28465 = (i__28456_28460 + 1);
seq__28453_28457 = G__28462;
chunk__28454_28458 = G__28463;
count__28455_28459 = G__28464;
i__28456_28460 = G__28465;
continue;
}
} else
{var temp__4092__auto___28466 = cljs.core.seq.call(null,seq__28453_28457);if(temp__4092__auto___28466)
{var seq__28453_28467__$1 = temp__4092__auto___28466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28453_28467__$1))
{var c__4189__auto___28468 = cljs.core.chunk_first.call(null,seq__28453_28467__$1);{
var G__28469 = cljs.core.chunk_rest.call(null,seq__28453_28467__$1);
var G__28470 = c__4189__auto___28468;
var G__28471 = cljs.core.count.call(null,c__4189__auto___28468);
var G__28472 = 0;
seq__28453_28457 = G__28469;
chunk__28454_28458 = G__28470;
count__28455_28459 = G__28471;
i__28456_28460 = G__28472;
continue;
}
} else
{var n_28473 = cljs.core.first.call(null,seq__28453_28467__$1);n_28473.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28474 = cljs.core.next.call(null,seq__28453_28467__$1);
var G__28475 = null;
var G__28476 = 0;
var G__28477 = 0;
seq__28453_28457 = G__28474;
chunk__28454_28458 = G__28475;
count__28455_28459 = G__28476;
i__28456_28460 = G__28477;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28478){
var content = cljs.core.first(arglist__28478);
arglist__28478 = cljs.core.next(arglist__28478);
var name = cljs.core.first(arglist__28478);
var value = cljs.core.rest(arglist__28478);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28483_28487 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28484_28488 = null;var count__28485_28489 = 0;var i__28486_28490 = 0;while(true){
if((i__28486_28490 < count__28485_28489))
{var n_28491 = cljs.core._nth.call(null,chunk__28484_28488,i__28486_28490);n_28491.removeAttribute(cljs.core.name.call(null,name));
{
var G__28492 = seq__28483_28487;
var G__28493 = chunk__28484_28488;
var G__28494 = count__28485_28489;
var G__28495 = (i__28486_28490 + 1);
seq__28483_28487 = G__28492;
chunk__28484_28488 = G__28493;
count__28485_28489 = G__28494;
i__28486_28490 = G__28495;
continue;
}
} else
{var temp__4092__auto___28496 = cljs.core.seq.call(null,seq__28483_28487);if(temp__4092__auto___28496)
{var seq__28483_28497__$1 = temp__4092__auto___28496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28483_28497__$1))
{var c__4189__auto___28498 = cljs.core.chunk_first.call(null,seq__28483_28497__$1);{
var G__28499 = cljs.core.chunk_rest.call(null,seq__28483_28497__$1);
var G__28500 = c__4189__auto___28498;
var G__28501 = cljs.core.count.call(null,c__4189__auto___28498);
var G__28502 = 0;
seq__28483_28487 = G__28499;
chunk__28484_28488 = G__28500;
count__28485_28489 = G__28501;
i__28486_28490 = G__28502;
continue;
}
} else
{var n_28503 = cljs.core.first.call(null,seq__28483_28497__$1);n_28503.removeAttribute(cljs.core.name.call(null,name));
{
var G__28504 = cljs.core.next.call(null,seq__28483_28497__$1);
var G__28505 = null;
var G__28506 = 0;
var G__28507 = 0;
seq__28483_28487 = G__28504;
chunk__28484_28488 = G__28505;
count__28485_28489 = G__28506;
i__28486_28490 = G__28507;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28509 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28509,0,null);var v = cljs.core.nth.call(null,vec__28509,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28510_SHARP_){var attr = attrs__$1.item(p1__28510_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28517_28523 = cljs.core.seq.call(null,styles);var chunk__28518_28524 = null;var count__28519_28525 = 0;var i__28520_28526 = 0;while(true){
if((i__28520_28526 < count__28519_28525))
{var vec__28521_28527 = cljs.core._nth.call(null,chunk__28518_28524,i__28520_28526);var name_28528 = cljs.core.nth.call(null,vec__28521_28527,0,null);var value_28529 = cljs.core.nth.call(null,vec__28521_28527,1,null);domina.set_style_BANG_.call(null,content,name_28528,value_28529);
{
var G__28530 = seq__28517_28523;
var G__28531 = chunk__28518_28524;
var G__28532 = count__28519_28525;
var G__28533 = (i__28520_28526 + 1);
seq__28517_28523 = G__28530;
chunk__28518_28524 = G__28531;
count__28519_28525 = G__28532;
i__28520_28526 = G__28533;
continue;
}
} else
{var temp__4092__auto___28534 = cljs.core.seq.call(null,seq__28517_28523);if(temp__4092__auto___28534)
{var seq__28517_28535__$1 = temp__4092__auto___28534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28517_28535__$1))
{var c__4189__auto___28536 = cljs.core.chunk_first.call(null,seq__28517_28535__$1);{
var G__28537 = cljs.core.chunk_rest.call(null,seq__28517_28535__$1);
var G__28538 = c__4189__auto___28536;
var G__28539 = cljs.core.count.call(null,c__4189__auto___28536);
var G__28540 = 0;
seq__28517_28523 = G__28537;
chunk__28518_28524 = G__28538;
count__28519_28525 = G__28539;
i__28520_28526 = G__28540;
continue;
}
} else
{var vec__28522_28541 = cljs.core.first.call(null,seq__28517_28535__$1);var name_28542 = cljs.core.nth.call(null,vec__28522_28541,0,null);var value_28543 = cljs.core.nth.call(null,vec__28522_28541,1,null);domina.set_style_BANG_.call(null,content,name_28542,value_28543);
{
var G__28544 = cljs.core.next.call(null,seq__28517_28535__$1);
var G__28545 = null;
var G__28546 = 0;
var G__28547 = 0;
seq__28517_28523 = G__28544;
chunk__28518_28524 = G__28545;
count__28519_28525 = G__28546;
i__28520_28526 = G__28547;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28554_28560 = cljs.core.seq.call(null,attrs);var chunk__28555_28561 = null;var count__28556_28562 = 0;var i__28557_28563 = 0;while(true){
if((i__28557_28563 < count__28556_28562))
{var vec__28558_28564 = cljs.core._nth.call(null,chunk__28555_28561,i__28557_28563);var name_28565 = cljs.core.nth.call(null,vec__28558_28564,0,null);var value_28566 = cljs.core.nth.call(null,vec__28558_28564,1,null);domina.set_attr_BANG_.call(null,content,name_28565,value_28566);
{
var G__28567 = seq__28554_28560;
var G__28568 = chunk__28555_28561;
var G__28569 = count__28556_28562;
var G__28570 = (i__28557_28563 + 1);
seq__28554_28560 = G__28567;
chunk__28555_28561 = G__28568;
count__28556_28562 = G__28569;
i__28557_28563 = G__28570;
continue;
}
} else
{var temp__4092__auto___28571 = cljs.core.seq.call(null,seq__28554_28560);if(temp__4092__auto___28571)
{var seq__28554_28572__$1 = temp__4092__auto___28571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28554_28572__$1))
{var c__4189__auto___28573 = cljs.core.chunk_first.call(null,seq__28554_28572__$1);{
var G__28574 = cljs.core.chunk_rest.call(null,seq__28554_28572__$1);
var G__28575 = c__4189__auto___28573;
var G__28576 = cljs.core.count.call(null,c__4189__auto___28573);
var G__28577 = 0;
seq__28554_28560 = G__28574;
chunk__28555_28561 = G__28575;
count__28556_28562 = G__28576;
i__28557_28563 = G__28577;
continue;
}
} else
{var vec__28559_28578 = cljs.core.first.call(null,seq__28554_28572__$1);var name_28579 = cljs.core.nth.call(null,vec__28559_28578,0,null);var value_28580 = cljs.core.nth.call(null,vec__28559_28578,1,null);domina.set_attr_BANG_.call(null,content,name_28579,value_28580);
{
var G__28581 = cljs.core.next.call(null,seq__28554_28572__$1);
var G__28582 = null;
var G__28583 = 0;
var G__28584 = 0;
seq__28554_28560 = G__28581;
chunk__28555_28561 = G__28582;
count__28556_28562 = G__28583;
i__28557_28563 = G__28584;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28589_28593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28590_28594 = null;var count__28591_28595 = 0;var i__28592_28596 = 0;while(true){
if((i__28592_28596 < count__28591_28595))
{var node_28597 = cljs.core._nth.call(null,chunk__28590_28594,i__28592_28596);goog.dom.classes.add(node_28597,class$);
{
var G__28598 = seq__28589_28593;
var G__28599 = chunk__28590_28594;
var G__28600 = count__28591_28595;
var G__28601 = (i__28592_28596 + 1);
seq__28589_28593 = G__28598;
chunk__28590_28594 = G__28599;
count__28591_28595 = G__28600;
i__28592_28596 = G__28601;
continue;
}
} else
{var temp__4092__auto___28602 = cljs.core.seq.call(null,seq__28589_28593);if(temp__4092__auto___28602)
{var seq__28589_28603__$1 = temp__4092__auto___28602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28589_28603__$1))
{var c__4189__auto___28604 = cljs.core.chunk_first.call(null,seq__28589_28603__$1);{
var G__28605 = cljs.core.chunk_rest.call(null,seq__28589_28603__$1);
var G__28606 = c__4189__auto___28604;
var G__28607 = cljs.core.count.call(null,c__4189__auto___28604);
var G__28608 = 0;
seq__28589_28593 = G__28605;
chunk__28590_28594 = G__28606;
count__28591_28595 = G__28607;
i__28592_28596 = G__28608;
continue;
}
} else
{var node_28609 = cljs.core.first.call(null,seq__28589_28603__$1);goog.dom.classes.add(node_28609,class$);
{
var G__28610 = cljs.core.next.call(null,seq__28589_28603__$1);
var G__28611 = null;
var G__28612 = 0;
var G__28613 = 0;
seq__28589_28593 = G__28610;
chunk__28590_28594 = G__28611;
count__28591_28595 = G__28612;
i__28592_28596 = G__28613;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28618_28622 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28619_28623 = null;var count__28620_28624 = 0;var i__28621_28625 = 0;while(true){
if((i__28621_28625 < count__28620_28624))
{var node_28626 = cljs.core._nth.call(null,chunk__28619_28623,i__28621_28625);goog.dom.classes.remove(node_28626,class$);
{
var G__28627 = seq__28618_28622;
var G__28628 = chunk__28619_28623;
var G__28629 = count__28620_28624;
var G__28630 = (i__28621_28625 + 1);
seq__28618_28622 = G__28627;
chunk__28619_28623 = G__28628;
count__28620_28624 = G__28629;
i__28621_28625 = G__28630;
continue;
}
} else
{var temp__4092__auto___28631 = cljs.core.seq.call(null,seq__28618_28622);if(temp__4092__auto___28631)
{var seq__28618_28632__$1 = temp__4092__auto___28631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28618_28632__$1))
{var c__4189__auto___28633 = cljs.core.chunk_first.call(null,seq__28618_28632__$1);{
var G__28634 = cljs.core.chunk_rest.call(null,seq__28618_28632__$1);
var G__28635 = c__4189__auto___28633;
var G__28636 = cljs.core.count.call(null,c__4189__auto___28633);
var G__28637 = 0;
seq__28618_28622 = G__28634;
chunk__28619_28623 = G__28635;
count__28620_28624 = G__28636;
i__28621_28625 = G__28637;
continue;
}
} else
{var node_28638 = cljs.core.first.call(null,seq__28618_28632__$1);goog.dom.classes.remove(node_28638,class$);
{
var G__28639 = cljs.core.next.call(null,seq__28618_28632__$1);
var G__28640 = null;
var G__28641 = 0;
var G__28642 = 0;
seq__28618_28622 = G__28639;
chunk__28619_28623 = G__28640;
count__28620_28624 = G__28641;
i__28621_28625 = G__28642;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28647_28651 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28648_28652 = null;var count__28649_28653 = 0;var i__28650_28654 = 0;while(true){
if((i__28650_28654 < count__28649_28653))
{var node_28655 = cljs.core._nth.call(null,chunk__28648_28652,i__28650_28654);goog.dom.classes.toggle(node_28655,class$);
{
var G__28656 = seq__28647_28651;
var G__28657 = chunk__28648_28652;
var G__28658 = count__28649_28653;
var G__28659 = (i__28650_28654 + 1);
seq__28647_28651 = G__28656;
chunk__28648_28652 = G__28657;
count__28649_28653 = G__28658;
i__28650_28654 = G__28659;
continue;
}
} else
{var temp__4092__auto___28660 = cljs.core.seq.call(null,seq__28647_28651);if(temp__4092__auto___28660)
{var seq__28647_28661__$1 = temp__4092__auto___28660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28647_28661__$1))
{var c__4189__auto___28662 = cljs.core.chunk_first.call(null,seq__28647_28661__$1);{
var G__28663 = cljs.core.chunk_rest.call(null,seq__28647_28661__$1);
var G__28664 = c__4189__auto___28662;
var G__28665 = cljs.core.count.call(null,c__4189__auto___28662);
var G__28666 = 0;
seq__28647_28651 = G__28663;
chunk__28648_28652 = G__28664;
count__28649_28653 = G__28665;
i__28650_28654 = G__28666;
continue;
}
} else
{var node_28667 = cljs.core.first.call(null,seq__28647_28661__$1);goog.dom.classes.toggle(node_28667,class$);
{
var G__28668 = cljs.core.next.call(null,seq__28647_28661__$1);
var G__28669 = null;
var G__28670 = 0;
var G__28671 = 0;
seq__28647_28651 = G__28668;
chunk__28648_28652 = G__28669;
count__28649_28653 = G__28670;
i__28650_28654 = G__28671;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28680__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28676_28681 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28677_28682 = null;var count__28678_28683 = 0;var i__28679_28684 = 0;while(true){
if((i__28679_28684 < count__28678_28683))
{var node_28685 = cljs.core._nth.call(null,chunk__28677_28682,i__28679_28684);goog.dom.classes.set(node_28685,classes_28680__$1);
{
var G__28686 = seq__28676_28681;
var G__28687 = chunk__28677_28682;
var G__28688 = count__28678_28683;
var G__28689 = (i__28679_28684 + 1);
seq__28676_28681 = G__28686;
chunk__28677_28682 = G__28687;
count__28678_28683 = G__28688;
i__28679_28684 = G__28689;
continue;
}
} else
{var temp__4092__auto___28690 = cljs.core.seq.call(null,seq__28676_28681);if(temp__4092__auto___28690)
{var seq__28676_28691__$1 = temp__4092__auto___28690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28676_28691__$1))
{var c__4189__auto___28692 = cljs.core.chunk_first.call(null,seq__28676_28691__$1);{
var G__28693 = cljs.core.chunk_rest.call(null,seq__28676_28691__$1);
var G__28694 = c__4189__auto___28692;
var G__28695 = cljs.core.count.call(null,c__4189__auto___28692);
var G__28696 = 0;
seq__28676_28681 = G__28693;
chunk__28677_28682 = G__28694;
count__28678_28683 = G__28695;
i__28679_28684 = G__28696;
continue;
}
} else
{var node_28697 = cljs.core.first.call(null,seq__28676_28691__$1);goog.dom.classes.set(node_28697,classes_28680__$1);
{
var G__28698 = cljs.core.next.call(null,seq__28676_28691__$1);
var G__28699 = null;
var G__28700 = 0;
var G__28701 = 0;
seq__28676_28681 = G__28698;
chunk__28677_28682 = G__28699;
count__28678_28683 = G__28700;
i__28679_28684 = G__28701;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28706_28710 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28707_28711 = null;var count__28708_28712 = 0;var i__28709_28713 = 0;while(true){
if((i__28709_28713 < count__28708_28712))
{var node_28714 = cljs.core._nth.call(null,chunk__28707_28711,i__28709_28713);goog.dom.setTextContent(node_28714,value);
{
var G__28715 = seq__28706_28710;
var G__28716 = chunk__28707_28711;
var G__28717 = count__28708_28712;
var G__28718 = (i__28709_28713 + 1);
seq__28706_28710 = G__28715;
chunk__28707_28711 = G__28716;
count__28708_28712 = G__28717;
i__28709_28713 = G__28718;
continue;
}
} else
{var temp__4092__auto___28719 = cljs.core.seq.call(null,seq__28706_28710);if(temp__4092__auto___28719)
{var seq__28706_28720__$1 = temp__4092__auto___28719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28706_28720__$1))
{var c__4189__auto___28721 = cljs.core.chunk_first.call(null,seq__28706_28720__$1);{
var G__28722 = cljs.core.chunk_rest.call(null,seq__28706_28720__$1);
var G__28723 = c__4189__auto___28721;
var G__28724 = cljs.core.count.call(null,c__4189__auto___28721);
var G__28725 = 0;
seq__28706_28710 = G__28722;
chunk__28707_28711 = G__28723;
count__28708_28712 = G__28724;
i__28709_28713 = G__28725;
continue;
}
} else
{var node_28726 = cljs.core.first.call(null,seq__28706_28720__$1);goog.dom.setTextContent(node_28726,value);
{
var G__28727 = cljs.core.next.call(null,seq__28706_28720__$1);
var G__28728 = null;
var G__28729 = 0;
var G__28730 = 0;
seq__28706_28710 = G__28727;
chunk__28707_28711 = G__28728;
count__28708_28712 = G__28729;
i__28709_28713 = G__28730;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28735_28739 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28736_28740 = null;var count__28737_28741 = 0;var i__28738_28742 = 0;while(true){
if((i__28738_28742 < count__28737_28741))
{var node_28743 = cljs.core._nth.call(null,chunk__28736_28740,i__28738_28742);goog.dom.forms.setValue(node_28743,value);
{
var G__28744 = seq__28735_28739;
var G__28745 = chunk__28736_28740;
var G__28746 = count__28737_28741;
var G__28747 = (i__28738_28742 + 1);
seq__28735_28739 = G__28744;
chunk__28736_28740 = G__28745;
count__28737_28741 = G__28746;
i__28738_28742 = G__28747;
continue;
}
} else
{var temp__4092__auto___28748 = cljs.core.seq.call(null,seq__28735_28739);if(temp__4092__auto___28748)
{var seq__28735_28749__$1 = temp__4092__auto___28748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28735_28749__$1))
{var c__4189__auto___28750 = cljs.core.chunk_first.call(null,seq__28735_28749__$1);{
var G__28751 = cljs.core.chunk_rest.call(null,seq__28735_28749__$1);
var G__28752 = c__4189__auto___28750;
var G__28753 = cljs.core.count.call(null,c__4189__auto___28750);
var G__28754 = 0;
seq__28735_28739 = G__28751;
chunk__28736_28740 = G__28752;
count__28737_28741 = G__28753;
i__28738_28742 = G__28754;
continue;
}
} else
{var node_28755 = cljs.core.first.call(null,seq__28735_28749__$1);goog.dom.forms.setValue(node_28755,value);
{
var G__28756 = cljs.core.next.call(null,seq__28735_28749__$1);
var G__28757 = null;
var G__28758 = 0;
var G__28759 = 0;
seq__28735_28739 = G__28756;
chunk__28736_28740 = G__28757;
count__28737_28741 = G__28758;
i__28738_28742 = G__28759;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_28770 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28766_28771 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28767_28772 = null;var count__28768_28773 = 0;var i__28769_28774 = 0;while(true){
if((i__28769_28774 < count__28768_28773))
{var node_28775 = cljs.core._nth.call(null,chunk__28767_28772,i__28769_28774);node_28775.innerHTML = value_28770;
{
var G__28776 = seq__28766_28771;
var G__28777 = chunk__28767_28772;
var G__28778 = count__28768_28773;
var G__28779 = (i__28769_28774 + 1);
seq__28766_28771 = G__28776;
chunk__28767_28772 = G__28777;
count__28768_28773 = G__28778;
i__28769_28774 = G__28779;
continue;
}
} else
{var temp__4092__auto___28780 = cljs.core.seq.call(null,seq__28766_28771);if(temp__4092__auto___28780)
{var seq__28766_28781__$1 = temp__4092__auto___28780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28766_28781__$1))
{var c__4189__auto___28782 = cljs.core.chunk_first.call(null,seq__28766_28781__$1);{
var G__28783 = cljs.core.chunk_rest.call(null,seq__28766_28781__$1);
var G__28784 = c__4189__auto___28782;
var G__28785 = cljs.core.count.call(null,c__4189__auto___28782);
var G__28786 = 0;
seq__28766_28771 = G__28783;
chunk__28767_28772 = G__28784;
count__28768_28773 = G__28785;
i__28769_28774 = G__28786;
continue;
}
} else
{var node_28787 = cljs.core.first.call(null,seq__28766_28781__$1);node_28787.innerHTML = value_28770;
{
var G__28788 = cljs.core.next.call(null,seq__28766_28781__$1);
var G__28789 = null;
var G__28790 = 0;
var G__28791 = 0;
seq__28766_28771 = G__28788;
chunk__28767_28772 = G__28789;
count__28768_28773 = G__28790;
i__28769_28774 = G__28791;
continue;
}
}
} else
{}
}
break;
}
}catch (e28765){if((e28765 instanceof Error))
{var e_28792 = e28765;domina.replace_children_BANG_.call(null,content,value_28770);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28765;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28799_28803 = cljs.core.seq.call(null,children);var chunk__28800_28804 = null;var count__28801_28805 = 0;var i__28802_28806 = 0;while(true){
if((i__28802_28806 < count__28801_28805))
{var child_28807 = cljs.core._nth.call(null,chunk__28800_28804,i__28802_28806);frag.appendChild(child_28807);
{
var G__28808 = seq__28799_28803;
var G__28809 = chunk__28800_28804;
var G__28810 = count__28801_28805;
var G__28811 = (i__28802_28806 + 1);
seq__28799_28803 = G__28808;
chunk__28800_28804 = G__28809;
count__28801_28805 = G__28810;
i__28802_28806 = G__28811;
continue;
}
} else
{var temp__4092__auto___28812 = cljs.core.seq.call(null,seq__28799_28803);if(temp__4092__auto___28812)
{var seq__28799_28813__$1 = temp__4092__auto___28812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28799_28813__$1))
{var c__4189__auto___28814 = cljs.core.chunk_first.call(null,seq__28799_28813__$1);{
var G__28815 = cljs.core.chunk_rest.call(null,seq__28799_28813__$1);
var G__28816 = c__4189__auto___28814;
var G__28817 = cljs.core.count.call(null,c__4189__auto___28814);
var G__28818 = 0;
seq__28799_28803 = G__28815;
chunk__28800_28804 = G__28816;
count__28801_28805 = G__28817;
i__28802_28806 = G__28818;
continue;
}
} else
{var child_28819 = cljs.core.first.call(null,seq__28799_28813__$1);frag.appendChild(child_28819);
{
var G__28820 = cljs.core.next.call(null,seq__28799_28813__$1);
var G__28821 = null;
var G__28822 = 0;
var G__28823 = 0;
seq__28799_28803 = G__28820;
chunk__28800_28804 = G__28821;
count__28801_28805 = G__28822;
i__28802_28806 = G__28823;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28793_SHARP_,p2__28794_SHARP_){return f.call(null,p1__28793_SHARP_,p2__28794_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__28825 = list_thing;if(G__28825)
{var bit__4091__auto__ = (G__28825.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28825.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28825.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28825);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28825);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__28826 = content;if(G__28826)
{var bit__4091__auto__ = (G__28826.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28826.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28826.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28826);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28826);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__28827 = content;if(G__28827)
{var bit__4091__auto__ = (G__28827.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28827.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28827.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28827);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28827);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map