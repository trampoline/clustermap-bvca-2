// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_36447 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36448 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36449 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36448,table_section_wrapper_36448,opt_wrapper_36447,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36449,table_section_wrapper_36448,cell_wrapper_36449,opt_wrapper_36447,table_section_wrapper_36448,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36448]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36454 = cljs.core.seq.call(null,tbody);var chunk__36455 = null;var count__36456 = 0;var i__36457 = 0;while(true){
if((i__36457 < count__36456))
{var child = cljs.core._nth.call(null,chunk__36455,i__36457);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36458 = seq__36454;
var G__36459 = chunk__36455;
var G__36460 = count__36456;
var G__36461 = (i__36457 + 1);
seq__36454 = G__36458;
chunk__36455 = G__36459;
count__36456 = G__36460;
i__36457 = G__36461;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36454);if(temp__4092__auto__)
{var seq__36454__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36454__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36454__$1);{
var G__36462 = cljs.core.chunk_rest.call(null,seq__36454__$1);
var G__36463 = c__4148__auto__;
var G__36464 = cljs.core.count.call(null,c__4148__auto__);
var G__36465 = 0;
seq__36454 = G__36462;
chunk__36455 = G__36463;
count__36456 = G__36464;
i__36457 = G__36465;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36454__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36466 = cljs.core.next.call(null,seq__36454__$1);
var G__36467 = null;
var G__36468 = 0;
var G__36469 = 0;
seq__36454 = G__36466;
chunk__36455 = G__36467;
count__36456 = G__36468;
i__36457 = G__36469;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36471 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36471,0,null);var start_wrap = cljs.core.nth.call(null,vec__36471,1,null);var end_wrap = cljs.core.nth.call(null,vec__36471,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36472 = wrapper.lastChild;
var G__36473 = (level - 1);
wrapper = G__36472;
level = G__36473;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj36475 = {};return obj36475;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__36476){
var mesg = cljs.core.seq(arglist__36476);
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
log.cljs$lang$applyTo = (function (arglist__36477){
var mesg = cljs.core.seq(arglist__36477);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36478){
var contents = cljs.core.seq(arglist__36478);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36479_SHARP_){return p1__36479_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36480_SHARP_,p2__36481_SHARP_){return goog.dom.insertChildAt(p1__36480_SHARP_,p2__36481_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36483_SHARP_,p2__36482_SHARP_){return goog.dom.insertSiblingBefore(p2__36482_SHARP_,p1__36483_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36485_SHARP_,p2__36484_SHARP_){return goog.dom.insertSiblingAfter(p2__36484_SHARP_,p1__36485_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36487_SHARP_,p2__36486_SHARP_){return goog.dom.replaceNode(p2__36486_SHARP_,p1__36487_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36492_36496 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36493_36497 = null;var count__36494_36498 = 0;var i__36495_36499 = 0;while(true){
if((i__36495_36499 < count__36494_36498))
{var n_36500 = cljs.core._nth.call(null,chunk__36493_36497,i__36495_36499);goog.style.setStyle(n_36500,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36501 = seq__36492_36496;
var G__36502 = chunk__36493_36497;
var G__36503 = count__36494_36498;
var G__36504 = (i__36495_36499 + 1);
seq__36492_36496 = G__36501;
chunk__36493_36497 = G__36502;
count__36494_36498 = G__36503;
i__36495_36499 = G__36504;
continue;
}
} else
{var temp__4092__auto___36505 = cljs.core.seq.call(null,seq__36492_36496);if(temp__4092__auto___36505)
{var seq__36492_36506__$1 = temp__4092__auto___36505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36492_36506__$1))
{var c__4148__auto___36507 = cljs.core.chunk_first.call(null,seq__36492_36506__$1);{
var G__36508 = cljs.core.chunk_rest.call(null,seq__36492_36506__$1);
var G__36509 = c__4148__auto___36507;
var G__36510 = cljs.core.count.call(null,c__4148__auto___36507);
var G__36511 = 0;
seq__36492_36496 = G__36508;
chunk__36493_36497 = G__36509;
count__36494_36498 = G__36510;
i__36495_36499 = G__36511;
continue;
}
} else
{var n_36512 = cljs.core.first.call(null,seq__36492_36506__$1);goog.style.setStyle(n_36512,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36513 = cljs.core.next.call(null,seq__36492_36506__$1);
var G__36514 = null;
var G__36515 = 0;
var G__36516 = 0;
seq__36492_36496 = G__36513;
chunk__36493_36497 = G__36514;
count__36494_36498 = G__36515;
i__36495_36499 = G__36516;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36517){
var content = cljs.core.first(arglist__36517);
arglist__36517 = cljs.core.next(arglist__36517);
var name = cljs.core.first(arglist__36517);
var value = cljs.core.rest(arglist__36517);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36522_36526 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36523_36527 = null;var count__36524_36528 = 0;var i__36525_36529 = 0;while(true){
if((i__36525_36529 < count__36524_36528))
{var n_36530 = cljs.core._nth.call(null,chunk__36523_36527,i__36525_36529);n_36530.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36531 = seq__36522_36526;
var G__36532 = chunk__36523_36527;
var G__36533 = count__36524_36528;
var G__36534 = (i__36525_36529 + 1);
seq__36522_36526 = G__36531;
chunk__36523_36527 = G__36532;
count__36524_36528 = G__36533;
i__36525_36529 = G__36534;
continue;
}
} else
{var temp__4092__auto___36535 = cljs.core.seq.call(null,seq__36522_36526);if(temp__4092__auto___36535)
{var seq__36522_36536__$1 = temp__4092__auto___36535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36522_36536__$1))
{var c__4148__auto___36537 = cljs.core.chunk_first.call(null,seq__36522_36536__$1);{
var G__36538 = cljs.core.chunk_rest.call(null,seq__36522_36536__$1);
var G__36539 = c__4148__auto___36537;
var G__36540 = cljs.core.count.call(null,c__4148__auto___36537);
var G__36541 = 0;
seq__36522_36526 = G__36538;
chunk__36523_36527 = G__36539;
count__36524_36528 = G__36540;
i__36525_36529 = G__36541;
continue;
}
} else
{var n_36542 = cljs.core.first.call(null,seq__36522_36536__$1);n_36542.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36543 = cljs.core.next.call(null,seq__36522_36536__$1);
var G__36544 = null;
var G__36545 = 0;
var G__36546 = 0;
seq__36522_36526 = G__36543;
chunk__36523_36527 = G__36544;
count__36524_36528 = G__36545;
i__36525_36529 = G__36546;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36547){
var content = cljs.core.first(arglist__36547);
arglist__36547 = cljs.core.next(arglist__36547);
var name = cljs.core.first(arglist__36547);
var value = cljs.core.rest(arglist__36547);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36552_36556 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36553_36557 = null;var count__36554_36558 = 0;var i__36555_36559 = 0;while(true){
if((i__36555_36559 < count__36554_36558))
{var n_36560 = cljs.core._nth.call(null,chunk__36553_36557,i__36555_36559);n_36560.removeAttribute(cljs.core.name.call(null,name));
{
var G__36561 = seq__36552_36556;
var G__36562 = chunk__36553_36557;
var G__36563 = count__36554_36558;
var G__36564 = (i__36555_36559 + 1);
seq__36552_36556 = G__36561;
chunk__36553_36557 = G__36562;
count__36554_36558 = G__36563;
i__36555_36559 = G__36564;
continue;
}
} else
{var temp__4092__auto___36565 = cljs.core.seq.call(null,seq__36552_36556);if(temp__4092__auto___36565)
{var seq__36552_36566__$1 = temp__4092__auto___36565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36552_36566__$1))
{var c__4148__auto___36567 = cljs.core.chunk_first.call(null,seq__36552_36566__$1);{
var G__36568 = cljs.core.chunk_rest.call(null,seq__36552_36566__$1);
var G__36569 = c__4148__auto___36567;
var G__36570 = cljs.core.count.call(null,c__4148__auto___36567);
var G__36571 = 0;
seq__36552_36556 = G__36568;
chunk__36553_36557 = G__36569;
count__36554_36558 = G__36570;
i__36555_36559 = G__36571;
continue;
}
} else
{var n_36572 = cljs.core.first.call(null,seq__36552_36566__$1);n_36572.removeAttribute(cljs.core.name.call(null,name));
{
var G__36573 = cljs.core.next.call(null,seq__36552_36566__$1);
var G__36574 = null;
var G__36575 = 0;
var G__36576 = 0;
seq__36552_36556 = G__36573;
chunk__36553_36557 = G__36574;
count__36554_36558 = G__36575;
i__36555_36559 = G__36576;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36578 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36578,0,null);var v = cljs.core.nth.call(null,vec__36578,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36579_SHARP_){var attr = attrs__$1.item(p1__36579_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36586_36592 = cljs.core.seq.call(null,styles);var chunk__36587_36593 = null;var count__36588_36594 = 0;var i__36589_36595 = 0;while(true){
if((i__36589_36595 < count__36588_36594))
{var vec__36590_36596 = cljs.core._nth.call(null,chunk__36587_36593,i__36589_36595);var name_36597 = cljs.core.nth.call(null,vec__36590_36596,0,null);var value_36598 = cljs.core.nth.call(null,vec__36590_36596,1,null);domina.set_style_BANG_.call(null,content,name_36597,value_36598);
{
var G__36599 = seq__36586_36592;
var G__36600 = chunk__36587_36593;
var G__36601 = count__36588_36594;
var G__36602 = (i__36589_36595 + 1);
seq__36586_36592 = G__36599;
chunk__36587_36593 = G__36600;
count__36588_36594 = G__36601;
i__36589_36595 = G__36602;
continue;
}
} else
{var temp__4092__auto___36603 = cljs.core.seq.call(null,seq__36586_36592);if(temp__4092__auto___36603)
{var seq__36586_36604__$1 = temp__4092__auto___36603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36586_36604__$1))
{var c__4148__auto___36605 = cljs.core.chunk_first.call(null,seq__36586_36604__$1);{
var G__36606 = cljs.core.chunk_rest.call(null,seq__36586_36604__$1);
var G__36607 = c__4148__auto___36605;
var G__36608 = cljs.core.count.call(null,c__4148__auto___36605);
var G__36609 = 0;
seq__36586_36592 = G__36606;
chunk__36587_36593 = G__36607;
count__36588_36594 = G__36608;
i__36589_36595 = G__36609;
continue;
}
} else
{var vec__36591_36610 = cljs.core.first.call(null,seq__36586_36604__$1);var name_36611 = cljs.core.nth.call(null,vec__36591_36610,0,null);var value_36612 = cljs.core.nth.call(null,vec__36591_36610,1,null);domina.set_style_BANG_.call(null,content,name_36611,value_36612);
{
var G__36613 = cljs.core.next.call(null,seq__36586_36604__$1);
var G__36614 = null;
var G__36615 = 0;
var G__36616 = 0;
seq__36586_36592 = G__36613;
chunk__36587_36593 = G__36614;
count__36588_36594 = G__36615;
i__36589_36595 = G__36616;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36623_36629 = cljs.core.seq.call(null,attrs);var chunk__36624_36630 = null;var count__36625_36631 = 0;var i__36626_36632 = 0;while(true){
if((i__36626_36632 < count__36625_36631))
{var vec__36627_36633 = cljs.core._nth.call(null,chunk__36624_36630,i__36626_36632);var name_36634 = cljs.core.nth.call(null,vec__36627_36633,0,null);var value_36635 = cljs.core.nth.call(null,vec__36627_36633,1,null);domina.set_attr_BANG_.call(null,content,name_36634,value_36635);
{
var G__36636 = seq__36623_36629;
var G__36637 = chunk__36624_36630;
var G__36638 = count__36625_36631;
var G__36639 = (i__36626_36632 + 1);
seq__36623_36629 = G__36636;
chunk__36624_36630 = G__36637;
count__36625_36631 = G__36638;
i__36626_36632 = G__36639;
continue;
}
} else
{var temp__4092__auto___36640 = cljs.core.seq.call(null,seq__36623_36629);if(temp__4092__auto___36640)
{var seq__36623_36641__$1 = temp__4092__auto___36640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36623_36641__$1))
{var c__4148__auto___36642 = cljs.core.chunk_first.call(null,seq__36623_36641__$1);{
var G__36643 = cljs.core.chunk_rest.call(null,seq__36623_36641__$1);
var G__36644 = c__4148__auto___36642;
var G__36645 = cljs.core.count.call(null,c__4148__auto___36642);
var G__36646 = 0;
seq__36623_36629 = G__36643;
chunk__36624_36630 = G__36644;
count__36625_36631 = G__36645;
i__36626_36632 = G__36646;
continue;
}
} else
{var vec__36628_36647 = cljs.core.first.call(null,seq__36623_36641__$1);var name_36648 = cljs.core.nth.call(null,vec__36628_36647,0,null);var value_36649 = cljs.core.nth.call(null,vec__36628_36647,1,null);domina.set_attr_BANG_.call(null,content,name_36648,value_36649);
{
var G__36650 = cljs.core.next.call(null,seq__36623_36641__$1);
var G__36651 = null;
var G__36652 = 0;
var G__36653 = 0;
seq__36623_36629 = G__36650;
chunk__36624_36630 = G__36651;
count__36625_36631 = G__36652;
i__36626_36632 = G__36653;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36658_36662 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36659_36663 = null;var count__36660_36664 = 0;var i__36661_36665 = 0;while(true){
if((i__36661_36665 < count__36660_36664))
{var node_36666 = cljs.core._nth.call(null,chunk__36659_36663,i__36661_36665);goog.dom.classes.add(node_36666,class$);
{
var G__36667 = seq__36658_36662;
var G__36668 = chunk__36659_36663;
var G__36669 = count__36660_36664;
var G__36670 = (i__36661_36665 + 1);
seq__36658_36662 = G__36667;
chunk__36659_36663 = G__36668;
count__36660_36664 = G__36669;
i__36661_36665 = G__36670;
continue;
}
} else
{var temp__4092__auto___36671 = cljs.core.seq.call(null,seq__36658_36662);if(temp__4092__auto___36671)
{var seq__36658_36672__$1 = temp__4092__auto___36671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36658_36672__$1))
{var c__4148__auto___36673 = cljs.core.chunk_first.call(null,seq__36658_36672__$1);{
var G__36674 = cljs.core.chunk_rest.call(null,seq__36658_36672__$1);
var G__36675 = c__4148__auto___36673;
var G__36676 = cljs.core.count.call(null,c__4148__auto___36673);
var G__36677 = 0;
seq__36658_36662 = G__36674;
chunk__36659_36663 = G__36675;
count__36660_36664 = G__36676;
i__36661_36665 = G__36677;
continue;
}
} else
{var node_36678 = cljs.core.first.call(null,seq__36658_36672__$1);goog.dom.classes.add(node_36678,class$);
{
var G__36679 = cljs.core.next.call(null,seq__36658_36672__$1);
var G__36680 = null;
var G__36681 = 0;
var G__36682 = 0;
seq__36658_36662 = G__36679;
chunk__36659_36663 = G__36680;
count__36660_36664 = G__36681;
i__36661_36665 = G__36682;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36687_36691 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36688_36692 = null;var count__36689_36693 = 0;var i__36690_36694 = 0;while(true){
if((i__36690_36694 < count__36689_36693))
{var node_36695 = cljs.core._nth.call(null,chunk__36688_36692,i__36690_36694);goog.dom.classes.remove(node_36695,class$);
{
var G__36696 = seq__36687_36691;
var G__36697 = chunk__36688_36692;
var G__36698 = count__36689_36693;
var G__36699 = (i__36690_36694 + 1);
seq__36687_36691 = G__36696;
chunk__36688_36692 = G__36697;
count__36689_36693 = G__36698;
i__36690_36694 = G__36699;
continue;
}
} else
{var temp__4092__auto___36700 = cljs.core.seq.call(null,seq__36687_36691);if(temp__4092__auto___36700)
{var seq__36687_36701__$1 = temp__4092__auto___36700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36687_36701__$1))
{var c__4148__auto___36702 = cljs.core.chunk_first.call(null,seq__36687_36701__$1);{
var G__36703 = cljs.core.chunk_rest.call(null,seq__36687_36701__$1);
var G__36704 = c__4148__auto___36702;
var G__36705 = cljs.core.count.call(null,c__4148__auto___36702);
var G__36706 = 0;
seq__36687_36691 = G__36703;
chunk__36688_36692 = G__36704;
count__36689_36693 = G__36705;
i__36690_36694 = G__36706;
continue;
}
} else
{var node_36707 = cljs.core.first.call(null,seq__36687_36701__$1);goog.dom.classes.remove(node_36707,class$);
{
var G__36708 = cljs.core.next.call(null,seq__36687_36701__$1);
var G__36709 = null;
var G__36710 = 0;
var G__36711 = 0;
seq__36687_36691 = G__36708;
chunk__36688_36692 = G__36709;
count__36689_36693 = G__36710;
i__36690_36694 = G__36711;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36716_36720 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36717_36721 = null;var count__36718_36722 = 0;var i__36719_36723 = 0;while(true){
if((i__36719_36723 < count__36718_36722))
{var node_36724 = cljs.core._nth.call(null,chunk__36717_36721,i__36719_36723);goog.dom.classes.toggle(node_36724,class$);
{
var G__36725 = seq__36716_36720;
var G__36726 = chunk__36717_36721;
var G__36727 = count__36718_36722;
var G__36728 = (i__36719_36723 + 1);
seq__36716_36720 = G__36725;
chunk__36717_36721 = G__36726;
count__36718_36722 = G__36727;
i__36719_36723 = G__36728;
continue;
}
} else
{var temp__4092__auto___36729 = cljs.core.seq.call(null,seq__36716_36720);if(temp__4092__auto___36729)
{var seq__36716_36730__$1 = temp__4092__auto___36729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36716_36730__$1))
{var c__4148__auto___36731 = cljs.core.chunk_first.call(null,seq__36716_36730__$1);{
var G__36732 = cljs.core.chunk_rest.call(null,seq__36716_36730__$1);
var G__36733 = c__4148__auto___36731;
var G__36734 = cljs.core.count.call(null,c__4148__auto___36731);
var G__36735 = 0;
seq__36716_36720 = G__36732;
chunk__36717_36721 = G__36733;
count__36718_36722 = G__36734;
i__36719_36723 = G__36735;
continue;
}
} else
{var node_36736 = cljs.core.first.call(null,seq__36716_36730__$1);goog.dom.classes.toggle(node_36736,class$);
{
var G__36737 = cljs.core.next.call(null,seq__36716_36730__$1);
var G__36738 = null;
var G__36739 = 0;
var G__36740 = 0;
seq__36716_36720 = G__36737;
chunk__36717_36721 = G__36738;
count__36718_36722 = G__36739;
i__36719_36723 = G__36740;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36749__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36745_36750 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36746_36751 = null;var count__36747_36752 = 0;var i__36748_36753 = 0;while(true){
if((i__36748_36753 < count__36747_36752))
{var node_36754 = cljs.core._nth.call(null,chunk__36746_36751,i__36748_36753);goog.dom.classes.set(node_36754,classes_36749__$1);
{
var G__36755 = seq__36745_36750;
var G__36756 = chunk__36746_36751;
var G__36757 = count__36747_36752;
var G__36758 = (i__36748_36753 + 1);
seq__36745_36750 = G__36755;
chunk__36746_36751 = G__36756;
count__36747_36752 = G__36757;
i__36748_36753 = G__36758;
continue;
}
} else
{var temp__4092__auto___36759 = cljs.core.seq.call(null,seq__36745_36750);if(temp__4092__auto___36759)
{var seq__36745_36760__$1 = temp__4092__auto___36759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36745_36760__$1))
{var c__4148__auto___36761 = cljs.core.chunk_first.call(null,seq__36745_36760__$1);{
var G__36762 = cljs.core.chunk_rest.call(null,seq__36745_36760__$1);
var G__36763 = c__4148__auto___36761;
var G__36764 = cljs.core.count.call(null,c__4148__auto___36761);
var G__36765 = 0;
seq__36745_36750 = G__36762;
chunk__36746_36751 = G__36763;
count__36747_36752 = G__36764;
i__36748_36753 = G__36765;
continue;
}
} else
{var node_36766 = cljs.core.first.call(null,seq__36745_36760__$1);goog.dom.classes.set(node_36766,classes_36749__$1);
{
var G__36767 = cljs.core.next.call(null,seq__36745_36760__$1);
var G__36768 = null;
var G__36769 = 0;
var G__36770 = 0;
seq__36745_36750 = G__36767;
chunk__36746_36751 = G__36768;
count__36747_36752 = G__36769;
i__36748_36753 = G__36770;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36775_36779 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36776_36780 = null;var count__36777_36781 = 0;var i__36778_36782 = 0;while(true){
if((i__36778_36782 < count__36777_36781))
{var node_36783 = cljs.core._nth.call(null,chunk__36776_36780,i__36778_36782);goog.dom.setTextContent(node_36783,value);
{
var G__36784 = seq__36775_36779;
var G__36785 = chunk__36776_36780;
var G__36786 = count__36777_36781;
var G__36787 = (i__36778_36782 + 1);
seq__36775_36779 = G__36784;
chunk__36776_36780 = G__36785;
count__36777_36781 = G__36786;
i__36778_36782 = G__36787;
continue;
}
} else
{var temp__4092__auto___36788 = cljs.core.seq.call(null,seq__36775_36779);if(temp__4092__auto___36788)
{var seq__36775_36789__$1 = temp__4092__auto___36788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36775_36789__$1))
{var c__4148__auto___36790 = cljs.core.chunk_first.call(null,seq__36775_36789__$1);{
var G__36791 = cljs.core.chunk_rest.call(null,seq__36775_36789__$1);
var G__36792 = c__4148__auto___36790;
var G__36793 = cljs.core.count.call(null,c__4148__auto___36790);
var G__36794 = 0;
seq__36775_36779 = G__36791;
chunk__36776_36780 = G__36792;
count__36777_36781 = G__36793;
i__36778_36782 = G__36794;
continue;
}
} else
{var node_36795 = cljs.core.first.call(null,seq__36775_36789__$1);goog.dom.setTextContent(node_36795,value);
{
var G__36796 = cljs.core.next.call(null,seq__36775_36789__$1);
var G__36797 = null;
var G__36798 = 0;
var G__36799 = 0;
seq__36775_36779 = G__36796;
chunk__36776_36780 = G__36797;
count__36777_36781 = G__36798;
i__36778_36782 = G__36799;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36804_36808 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36805_36809 = null;var count__36806_36810 = 0;var i__36807_36811 = 0;while(true){
if((i__36807_36811 < count__36806_36810))
{var node_36812 = cljs.core._nth.call(null,chunk__36805_36809,i__36807_36811);goog.dom.forms.setValue(node_36812,value);
{
var G__36813 = seq__36804_36808;
var G__36814 = chunk__36805_36809;
var G__36815 = count__36806_36810;
var G__36816 = (i__36807_36811 + 1);
seq__36804_36808 = G__36813;
chunk__36805_36809 = G__36814;
count__36806_36810 = G__36815;
i__36807_36811 = G__36816;
continue;
}
} else
{var temp__4092__auto___36817 = cljs.core.seq.call(null,seq__36804_36808);if(temp__4092__auto___36817)
{var seq__36804_36818__$1 = temp__4092__auto___36817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36804_36818__$1))
{var c__4148__auto___36819 = cljs.core.chunk_first.call(null,seq__36804_36818__$1);{
var G__36820 = cljs.core.chunk_rest.call(null,seq__36804_36818__$1);
var G__36821 = c__4148__auto___36819;
var G__36822 = cljs.core.count.call(null,c__4148__auto___36819);
var G__36823 = 0;
seq__36804_36808 = G__36820;
chunk__36805_36809 = G__36821;
count__36806_36810 = G__36822;
i__36807_36811 = G__36823;
continue;
}
} else
{var node_36824 = cljs.core.first.call(null,seq__36804_36818__$1);goog.dom.forms.setValue(node_36824,value);
{
var G__36825 = cljs.core.next.call(null,seq__36804_36818__$1);
var G__36826 = null;
var G__36827 = 0;
var G__36828 = 0;
seq__36804_36808 = G__36825;
chunk__36805_36809 = G__36826;
count__36806_36810 = G__36827;
i__36807_36811 = G__36828;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_36839 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36835_36840 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36836_36841 = null;var count__36837_36842 = 0;var i__36838_36843 = 0;while(true){
if((i__36838_36843 < count__36837_36842))
{var node_36844 = cljs.core._nth.call(null,chunk__36836_36841,i__36838_36843);node_36844.innerHTML = value_36839;
{
var G__36845 = seq__36835_36840;
var G__36846 = chunk__36836_36841;
var G__36847 = count__36837_36842;
var G__36848 = (i__36838_36843 + 1);
seq__36835_36840 = G__36845;
chunk__36836_36841 = G__36846;
count__36837_36842 = G__36847;
i__36838_36843 = G__36848;
continue;
}
} else
{var temp__4092__auto___36849 = cljs.core.seq.call(null,seq__36835_36840);if(temp__4092__auto___36849)
{var seq__36835_36850__$1 = temp__4092__auto___36849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36835_36850__$1))
{var c__4148__auto___36851 = cljs.core.chunk_first.call(null,seq__36835_36850__$1);{
var G__36852 = cljs.core.chunk_rest.call(null,seq__36835_36850__$1);
var G__36853 = c__4148__auto___36851;
var G__36854 = cljs.core.count.call(null,c__4148__auto___36851);
var G__36855 = 0;
seq__36835_36840 = G__36852;
chunk__36836_36841 = G__36853;
count__36837_36842 = G__36854;
i__36838_36843 = G__36855;
continue;
}
} else
{var node_36856 = cljs.core.first.call(null,seq__36835_36850__$1);node_36856.innerHTML = value_36839;
{
var G__36857 = cljs.core.next.call(null,seq__36835_36850__$1);
var G__36858 = null;
var G__36859 = 0;
var G__36860 = 0;
seq__36835_36840 = G__36857;
chunk__36836_36841 = G__36858;
count__36837_36842 = G__36859;
i__36838_36843 = G__36860;
continue;
}
}
} else
{}
}
break;
}
}catch (e36834){if((e36834 instanceof Error))
{var e_36861 = e36834;domina.replace_children_BANG_.call(null,content,value_36839);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36834;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36868_36872 = cljs.core.seq.call(null,children);var chunk__36869_36873 = null;var count__36870_36874 = 0;var i__36871_36875 = 0;while(true){
if((i__36871_36875 < count__36870_36874))
{var child_36876 = cljs.core._nth.call(null,chunk__36869_36873,i__36871_36875);frag.appendChild(child_36876);
{
var G__36877 = seq__36868_36872;
var G__36878 = chunk__36869_36873;
var G__36879 = count__36870_36874;
var G__36880 = (i__36871_36875 + 1);
seq__36868_36872 = G__36877;
chunk__36869_36873 = G__36878;
count__36870_36874 = G__36879;
i__36871_36875 = G__36880;
continue;
}
} else
{var temp__4092__auto___36881 = cljs.core.seq.call(null,seq__36868_36872);if(temp__4092__auto___36881)
{var seq__36868_36882__$1 = temp__4092__auto___36881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36868_36882__$1))
{var c__4148__auto___36883 = cljs.core.chunk_first.call(null,seq__36868_36882__$1);{
var G__36884 = cljs.core.chunk_rest.call(null,seq__36868_36882__$1);
var G__36885 = c__4148__auto___36883;
var G__36886 = cljs.core.count.call(null,c__4148__auto___36883);
var G__36887 = 0;
seq__36868_36872 = G__36884;
chunk__36869_36873 = G__36885;
count__36870_36874 = G__36886;
i__36871_36875 = G__36887;
continue;
}
} else
{var child_36888 = cljs.core.first.call(null,seq__36868_36882__$1);frag.appendChild(child_36888);
{
var G__36889 = cljs.core.next.call(null,seq__36868_36882__$1);
var G__36890 = null;
var G__36891 = 0;
var G__36892 = 0;
seq__36868_36872 = G__36889;
chunk__36869_36873 = G__36890;
count__36870_36874 = G__36891;
i__36871_36875 = G__36892;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36862_SHARP_,p2__36863_SHARP_){return f.call(null,p1__36862_SHARP_,p2__36863_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__36894 = list_thing;if(G__36894)
{var bit__4050__auto__ = (G__36894.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36894.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36894.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36894);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36894);
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
{if((function (){var G__36895 = content;if(G__36895)
{var bit__4050__auto__ = (G__36895.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36895.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36895.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36895);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36895);
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
{if((function (){var G__36896 = content;if(G__36896)
{var bit__4050__auto__ = (G__36896.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36896.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36896.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36896);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36896);
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
