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
var opt_wrapper_28546 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28547 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28547,table_section_wrapper_28547,opt_wrapper_28546,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28548,table_section_wrapper_28547,cell_wrapper_28548,opt_wrapper_28546,table_section_wrapper_28547,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28547]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28553 = cljs.core.seq.call(null,tbody);var chunk__28554 = null;var count__28555 = 0;var i__28556 = 0;while(true){
if((i__28556 < count__28555))
{var child = cljs.core._nth.call(null,chunk__28554,i__28556);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28557 = seq__28553;
var G__28558 = chunk__28554;
var G__28559 = count__28555;
var G__28560 = (i__28556 + 1);
seq__28553 = G__28557;
chunk__28554 = G__28558;
count__28555 = G__28559;
i__28556 = G__28560;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28553);if(temp__4092__auto__)
{var seq__28553__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28553__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28553__$1);{
var G__28561 = cljs.core.chunk_rest.call(null,seq__28553__$1);
var G__28562 = c__4189__auto__;
var G__28563 = cljs.core.count.call(null,c__4189__auto__);
var G__28564 = 0;
seq__28553 = G__28561;
chunk__28554 = G__28562;
count__28555 = G__28563;
i__28556 = G__28564;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28553__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28565 = cljs.core.next.call(null,seq__28553__$1);
var G__28566 = null;
var G__28567 = 0;
var G__28568 = 0;
seq__28553 = G__28565;
chunk__28554 = G__28566;
count__28555 = G__28567;
i__28556 = G__28568;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28570 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28570,0,null);var start_wrap = cljs.core.nth.call(null,vec__28570,1,null);var end_wrap = cljs.core.nth.call(null,vec__28570,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28571 = wrapper.lastChild;
var G__28572 = (level - 1);
wrapper = G__28571;
level = G__28572;
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
domina.DomContent = (function (){var obj28574 = {};return obj28574;
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
log_debug.cljs$lang$applyTo = (function (arglist__28575){
var mesg = cljs.core.seq(arglist__28575);
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
log.cljs$lang$applyTo = (function (arglist__28576){
var mesg = cljs.core.seq(arglist__28576);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28577){
var contents = cljs.core.seq(arglist__28577);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28578_SHARP_){return p1__28578_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28579_SHARP_,p2__28580_SHARP_){return goog.dom.insertChildAt(p1__28579_SHARP_,p2__28580_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28582_SHARP_,p2__28581_SHARP_){return goog.dom.insertSiblingBefore(p2__28581_SHARP_,p1__28582_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28584_SHARP_,p2__28583_SHARP_){return goog.dom.insertSiblingAfter(p2__28583_SHARP_,p1__28584_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28586_SHARP_,p2__28585_SHARP_){return goog.dom.replaceNode(p2__28585_SHARP_,p1__28586_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28591_28595 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28592_28596 = null;var count__28593_28597 = 0;var i__28594_28598 = 0;while(true){
if((i__28594_28598 < count__28593_28597))
{var n_28599 = cljs.core._nth.call(null,chunk__28592_28596,i__28594_28598);goog.style.setStyle(n_28599,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28600 = seq__28591_28595;
var G__28601 = chunk__28592_28596;
var G__28602 = count__28593_28597;
var G__28603 = (i__28594_28598 + 1);
seq__28591_28595 = G__28600;
chunk__28592_28596 = G__28601;
count__28593_28597 = G__28602;
i__28594_28598 = G__28603;
continue;
}
} else
{var temp__4092__auto___28604 = cljs.core.seq.call(null,seq__28591_28595);if(temp__4092__auto___28604)
{var seq__28591_28605__$1 = temp__4092__auto___28604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28591_28605__$1))
{var c__4189__auto___28606 = cljs.core.chunk_first.call(null,seq__28591_28605__$1);{
var G__28607 = cljs.core.chunk_rest.call(null,seq__28591_28605__$1);
var G__28608 = c__4189__auto___28606;
var G__28609 = cljs.core.count.call(null,c__4189__auto___28606);
var G__28610 = 0;
seq__28591_28595 = G__28607;
chunk__28592_28596 = G__28608;
count__28593_28597 = G__28609;
i__28594_28598 = G__28610;
continue;
}
} else
{var n_28611 = cljs.core.first.call(null,seq__28591_28605__$1);goog.style.setStyle(n_28611,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28612 = cljs.core.next.call(null,seq__28591_28605__$1);
var G__28613 = null;
var G__28614 = 0;
var G__28615 = 0;
seq__28591_28595 = G__28612;
chunk__28592_28596 = G__28613;
count__28593_28597 = G__28614;
i__28594_28598 = G__28615;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28616){
var content = cljs.core.first(arglist__28616);
arglist__28616 = cljs.core.next(arglist__28616);
var name = cljs.core.first(arglist__28616);
var value = cljs.core.rest(arglist__28616);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28621_28625 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28622_28626 = null;var count__28623_28627 = 0;var i__28624_28628 = 0;while(true){
if((i__28624_28628 < count__28623_28627))
{var n_28629 = cljs.core._nth.call(null,chunk__28622_28626,i__28624_28628);n_28629.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28630 = seq__28621_28625;
var G__28631 = chunk__28622_28626;
var G__28632 = count__28623_28627;
var G__28633 = (i__28624_28628 + 1);
seq__28621_28625 = G__28630;
chunk__28622_28626 = G__28631;
count__28623_28627 = G__28632;
i__28624_28628 = G__28633;
continue;
}
} else
{var temp__4092__auto___28634 = cljs.core.seq.call(null,seq__28621_28625);if(temp__4092__auto___28634)
{var seq__28621_28635__$1 = temp__4092__auto___28634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28621_28635__$1))
{var c__4189__auto___28636 = cljs.core.chunk_first.call(null,seq__28621_28635__$1);{
var G__28637 = cljs.core.chunk_rest.call(null,seq__28621_28635__$1);
var G__28638 = c__4189__auto___28636;
var G__28639 = cljs.core.count.call(null,c__4189__auto___28636);
var G__28640 = 0;
seq__28621_28625 = G__28637;
chunk__28622_28626 = G__28638;
count__28623_28627 = G__28639;
i__28624_28628 = G__28640;
continue;
}
} else
{var n_28641 = cljs.core.first.call(null,seq__28621_28635__$1);n_28641.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28642 = cljs.core.next.call(null,seq__28621_28635__$1);
var G__28643 = null;
var G__28644 = 0;
var G__28645 = 0;
seq__28621_28625 = G__28642;
chunk__28622_28626 = G__28643;
count__28623_28627 = G__28644;
i__28624_28628 = G__28645;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28646){
var content = cljs.core.first(arglist__28646);
arglist__28646 = cljs.core.next(arglist__28646);
var name = cljs.core.first(arglist__28646);
var value = cljs.core.rest(arglist__28646);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28651_28655 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28652_28656 = null;var count__28653_28657 = 0;var i__28654_28658 = 0;while(true){
if((i__28654_28658 < count__28653_28657))
{var n_28659 = cljs.core._nth.call(null,chunk__28652_28656,i__28654_28658);n_28659.removeAttribute(cljs.core.name.call(null,name));
{
var G__28660 = seq__28651_28655;
var G__28661 = chunk__28652_28656;
var G__28662 = count__28653_28657;
var G__28663 = (i__28654_28658 + 1);
seq__28651_28655 = G__28660;
chunk__28652_28656 = G__28661;
count__28653_28657 = G__28662;
i__28654_28658 = G__28663;
continue;
}
} else
{var temp__4092__auto___28664 = cljs.core.seq.call(null,seq__28651_28655);if(temp__4092__auto___28664)
{var seq__28651_28665__$1 = temp__4092__auto___28664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28651_28665__$1))
{var c__4189__auto___28666 = cljs.core.chunk_first.call(null,seq__28651_28665__$1);{
var G__28667 = cljs.core.chunk_rest.call(null,seq__28651_28665__$1);
var G__28668 = c__4189__auto___28666;
var G__28669 = cljs.core.count.call(null,c__4189__auto___28666);
var G__28670 = 0;
seq__28651_28655 = G__28667;
chunk__28652_28656 = G__28668;
count__28653_28657 = G__28669;
i__28654_28658 = G__28670;
continue;
}
} else
{var n_28671 = cljs.core.first.call(null,seq__28651_28665__$1);n_28671.removeAttribute(cljs.core.name.call(null,name));
{
var G__28672 = cljs.core.next.call(null,seq__28651_28665__$1);
var G__28673 = null;
var G__28674 = 0;
var G__28675 = 0;
seq__28651_28655 = G__28672;
chunk__28652_28656 = G__28673;
count__28653_28657 = G__28674;
i__28654_28658 = G__28675;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28677 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28677,0,null);var v = cljs.core.nth.call(null,vec__28677,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28678_SHARP_){var attr = attrs__$1.item(p1__28678_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28685_28691 = cljs.core.seq.call(null,styles);var chunk__28686_28692 = null;var count__28687_28693 = 0;var i__28688_28694 = 0;while(true){
if((i__28688_28694 < count__28687_28693))
{var vec__28689_28695 = cljs.core._nth.call(null,chunk__28686_28692,i__28688_28694);var name_28696 = cljs.core.nth.call(null,vec__28689_28695,0,null);var value_28697 = cljs.core.nth.call(null,vec__28689_28695,1,null);domina.set_style_BANG_.call(null,content,name_28696,value_28697);
{
var G__28698 = seq__28685_28691;
var G__28699 = chunk__28686_28692;
var G__28700 = count__28687_28693;
var G__28701 = (i__28688_28694 + 1);
seq__28685_28691 = G__28698;
chunk__28686_28692 = G__28699;
count__28687_28693 = G__28700;
i__28688_28694 = G__28701;
continue;
}
} else
{var temp__4092__auto___28702 = cljs.core.seq.call(null,seq__28685_28691);if(temp__4092__auto___28702)
{var seq__28685_28703__$1 = temp__4092__auto___28702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28685_28703__$1))
{var c__4189__auto___28704 = cljs.core.chunk_first.call(null,seq__28685_28703__$1);{
var G__28705 = cljs.core.chunk_rest.call(null,seq__28685_28703__$1);
var G__28706 = c__4189__auto___28704;
var G__28707 = cljs.core.count.call(null,c__4189__auto___28704);
var G__28708 = 0;
seq__28685_28691 = G__28705;
chunk__28686_28692 = G__28706;
count__28687_28693 = G__28707;
i__28688_28694 = G__28708;
continue;
}
} else
{var vec__28690_28709 = cljs.core.first.call(null,seq__28685_28703__$1);var name_28710 = cljs.core.nth.call(null,vec__28690_28709,0,null);var value_28711 = cljs.core.nth.call(null,vec__28690_28709,1,null);domina.set_style_BANG_.call(null,content,name_28710,value_28711);
{
var G__28712 = cljs.core.next.call(null,seq__28685_28703__$1);
var G__28713 = null;
var G__28714 = 0;
var G__28715 = 0;
seq__28685_28691 = G__28712;
chunk__28686_28692 = G__28713;
count__28687_28693 = G__28714;
i__28688_28694 = G__28715;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28722_28728 = cljs.core.seq.call(null,attrs);var chunk__28723_28729 = null;var count__28724_28730 = 0;var i__28725_28731 = 0;while(true){
if((i__28725_28731 < count__28724_28730))
{var vec__28726_28732 = cljs.core._nth.call(null,chunk__28723_28729,i__28725_28731);var name_28733 = cljs.core.nth.call(null,vec__28726_28732,0,null);var value_28734 = cljs.core.nth.call(null,vec__28726_28732,1,null);domina.set_attr_BANG_.call(null,content,name_28733,value_28734);
{
var G__28735 = seq__28722_28728;
var G__28736 = chunk__28723_28729;
var G__28737 = count__28724_28730;
var G__28738 = (i__28725_28731 + 1);
seq__28722_28728 = G__28735;
chunk__28723_28729 = G__28736;
count__28724_28730 = G__28737;
i__28725_28731 = G__28738;
continue;
}
} else
{var temp__4092__auto___28739 = cljs.core.seq.call(null,seq__28722_28728);if(temp__4092__auto___28739)
{var seq__28722_28740__$1 = temp__4092__auto___28739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28722_28740__$1))
{var c__4189__auto___28741 = cljs.core.chunk_first.call(null,seq__28722_28740__$1);{
var G__28742 = cljs.core.chunk_rest.call(null,seq__28722_28740__$1);
var G__28743 = c__4189__auto___28741;
var G__28744 = cljs.core.count.call(null,c__4189__auto___28741);
var G__28745 = 0;
seq__28722_28728 = G__28742;
chunk__28723_28729 = G__28743;
count__28724_28730 = G__28744;
i__28725_28731 = G__28745;
continue;
}
} else
{var vec__28727_28746 = cljs.core.first.call(null,seq__28722_28740__$1);var name_28747 = cljs.core.nth.call(null,vec__28727_28746,0,null);var value_28748 = cljs.core.nth.call(null,vec__28727_28746,1,null);domina.set_attr_BANG_.call(null,content,name_28747,value_28748);
{
var G__28749 = cljs.core.next.call(null,seq__28722_28740__$1);
var G__28750 = null;
var G__28751 = 0;
var G__28752 = 0;
seq__28722_28728 = G__28749;
chunk__28723_28729 = G__28750;
count__28724_28730 = G__28751;
i__28725_28731 = G__28752;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28757_28761 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28758_28762 = null;var count__28759_28763 = 0;var i__28760_28764 = 0;while(true){
if((i__28760_28764 < count__28759_28763))
{var node_28765 = cljs.core._nth.call(null,chunk__28758_28762,i__28760_28764);goog.dom.classes.add(node_28765,class$);
{
var G__28766 = seq__28757_28761;
var G__28767 = chunk__28758_28762;
var G__28768 = count__28759_28763;
var G__28769 = (i__28760_28764 + 1);
seq__28757_28761 = G__28766;
chunk__28758_28762 = G__28767;
count__28759_28763 = G__28768;
i__28760_28764 = G__28769;
continue;
}
} else
{var temp__4092__auto___28770 = cljs.core.seq.call(null,seq__28757_28761);if(temp__4092__auto___28770)
{var seq__28757_28771__$1 = temp__4092__auto___28770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28757_28771__$1))
{var c__4189__auto___28772 = cljs.core.chunk_first.call(null,seq__28757_28771__$1);{
var G__28773 = cljs.core.chunk_rest.call(null,seq__28757_28771__$1);
var G__28774 = c__4189__auto___28772;
var G__28775 = cljs.core.count.call(null,c__4189__auto___28772);
var G__28776 = 0;
seq__28757_28761 = G__28773;
chunk__28758_28762 = G__28774;
count__28759_28763 = G__28775;
i__28760_28764 = G__28776;
continue;
}
} else
{var node_28777 = cljs.core.first.call(null,seq__28757_28771__$1);goog.dom.classes.add(node_28777,class$);
{
var G__28778 = cljs.core.next.call(null,seq__28757_28771__$1);
var G__28779 = null;
var G__28780 = 0;
var G__28781 = 0;
seq__28757_28761 = G__28778;
chunk__28758_28762 = G__28779;
count__28759_28763 = G__28780;
i__28760_28764 = G__28781;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28786_28790 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28787_28791 = null;var count__28788_28792 = 0;var i__28789_28793 = 0;while(true){
if((i__28789_28793 < count__28788_28792))
{var node_28794 = cljs.core._nth.call(null,chunk__28787_28791,i__28789_28793);goog.dom.classes.remove(node_28794,class$);
{
var G__28795 = seq__28786_28790;
var G__28796 = chunk__28787_28791;
var G__28797 = count__28788_28792;
var G__28798 = (i__28789_28793 + 1);
seq__28786_28790 = G__28795;
chunk__28787_28791 = G__28796;
count__28788_28792 = G__28797;
i__28789_28793 = G__28798;
continue;
}
} else
{var temp__4092__auto___28799 = cljs.core.seq.call(null,seq__28786_28790);if(temp__4092__auto___28799)
{var seq__28786_28800__$1 = temp__4092__auto___28799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28786_28800__$1))
{var c__4189__auto___28801 = cljs.core.chunk_first.call(null,seq__28786_28800__$1);{
var G__28802 = cljs.core.chunk_rest.call(null,seq__28786_28800__$1);
var G__28803 = c__4189__auto___28801;
var G__28804 = cljs.core.count.call(null,c__4189__auto___28801);
var G__28805 = 0;
seq__28786_28790 = G__28802;
chunk__28787_28791 = G__28803;
count__28788_28792 = G__28804;
i__28789_28793 = G__28805;
continue;
}
} else
{var node_28806 = cljs.core.first.call(null,seq__28786_28800__$1);goog.dom.classes.remove(node_28806,class$);
{
var G__28807 = cljs.core.next.call(null,seq__28786_28800__$1);
var G__28808 = null;
var G__28809 = 0;
var G__28810 = 0;
seq__28786_28790 = G__28807;
chunk__28787_28791 = G__28808;
count__28788_28792 = G__28809;
i__28789_28793 = G__28810;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28815_28819 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28816_28820 = null;var count__28817_28821 = 0;var i__28818_28822 = 0;while(true){
if((i__28818_28822 < count__28817_28821))
{var node_28823 = cljs.core._nth.call(null,chunk__28816_28820,i__28818_28822);goog.dom.classes.toggle(node_28823,class$);
{
var G__28824 = seq__28815_28819;
var G__28825 = chunk__28816_28820;
var G__28826 = count__28817_28821;
var G__28827 = (i__28818_28822 + 1);
seq__28815_28819 = G__28824;
chunk__28816_28820 = G__28825;
count__28817_28821 = G__28826;
i__28818_28822 = G__28827;
continue;
}
} else
{var temp__4092__auto___28828 = cljs.core.seq.call(null,seq__28815_28819);if(temp__4092__auto___28828)
{var seq__28815_28829__$1 = temp__4092__auto___28828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28815_28829__$1))
{var c__4189__auto___28830 = cljs.core.chunk_first.call(null,seq__28815_28829__$1);{
var G__28831 = cljs.core.chunk_rest.call(null,seq__28815_28829__$1);
var G__28832 = c__4189__auto___28830;
var G__28833 = cljs.core.count.call(null,c__4189__auto___28830);
var G__28834 = 0;
seq__28815_28819 = G__28831;
chunk__28816_28820 = G__28832;
count__28817_28821 = G__28833;
i__28818_28822 = G__28834;
continue;
}
} else
{var node_28835 = cljs.core.first.call(null,seq__28815_28829__$1);goog.dom.classes.toggle(node_28835,class$);
{
var G__28836 = cljs.core.next.call(null,seq__28815_28829__$1);
var G__28837 = null;
var G__28838 = 0;
var G__28839 = 0;
seq__28815_28819 = G__28836;
chunk__28816_28820 = G__28837;
count__28817_28821 = G__28838;
i__28818_28822 = G__28839;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28848__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28844_28849 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28845_28850 = null;var count__28846_28851 = 0;var i__28847_28852 = 0;while(true){
if((i__28847_28852 < count__28846_28851))
{var node_28853 = cljs.core._nth.call(null,chunk__28845_28850,i__28847_28852);goog.dom.classes.set(node_28853,classes_28848__$1);
{
var G__28854 = seq__28844_28849;
var G__28855 = chunk__28845_28850;
var G__28856 = count__28846_28851;
var G__28857 = (i__28847_28852 + 1);
seq__28844_28849 = G__28854;
chunk__28845_28850 = G__28855;
count__28846_28851 = G__28856;
i__28847_28852 = G__28857;
continue;
}
} else
{var temp__4092__auto___28858 = cljs.core.seq.call(null,seq__28844_28849);if(temp__4092__auto___28858)
{var seq__28844_28859__$1 = temp__4092__auto___28858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28844_28859__$1))
{var c__4189__auto___28860 = cljs.core.chunk_first.call(null,seq__28844_28859__$1);{
var G__28861 = cljs.core.chunk_rest.call(null,seq__28844_28859__$1);
var G__28862 = c__4189__auto___28860;
var G__28863 = cljs.core.count.call(null,c__4189__auto___28860);
var G__28864 = 0;
seq__28844_28849 = G__28861;
chunk__28845_28850 = G__28862;
count__28846_28851 = G__28863;
i__28847_28852 = G__28864;
continue;
}
} else
{var node_28865 = cljs.core.first.call(null,seq__28844_28859__$1);goog.dom.classes.set(node_28865,classes_28848__$1);
{
var G__28866 = cljs.core.next.call(null,seq__28844_28859__$1);
var G__28867 = null;
var G__28868 = 0;
var G__28869 = 0;
seq__28844_28849 = G__28866;
chunk__28845_28850 = G__28867;
count__28846_28851 = G__28868;
i__28847_28852 = G__28869;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28874_28878 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28875_28879 = null;var count__28876_28880 = 0;var i__28877_28881 = 0;while(true){
if((i__28877_28881 < count__28876_28880))
{var node_28882 = cljs.core._nth.call(null,chunk__28875_28879,i__28877_28881);goog.dom.setTextContent(node_28882,value);
{
var G__28883 = seq__28874_28878;
var G__28884 = chunk__28875_28879;
var G__28885 = count__28876_28880;
var G__28886 = (i__28877_28881 + 1);
seq__28874_28878 = G__28883;
chunk__28875_28879 = G__28884;
count__28876_28880 = G__28885;
i__28877_28881 = G__28886;
continue;
}
} else
{var temp__4092__auto___28887 = cljs.core.seq.call(null,seq__28874_28878);if(temp__4092__auto___28887)
{var seq__28874_28888__$1 = temp__4092__auto___28887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28874_28888__$1))
{var c__4189__auto___28889 = cljs.core.chunk_first.call(null,seq__28874_28888__$1);{
var G__28890 = cljs.core.chunk_rest.call(null,seq__28874_28888__$1);
var G__28891 = c__4189__auto___28889;
var G__28892 = cljs.core.count.call(null,c__4189__auto___28889);
var G__28893 = 0;
seq__28874_28878 = G__28890;
chunk__28875_28879 = G__28891;
count__28876_28880 = G__28892;
i__28877_28881 = G__28893;
continue;
}
} else
{var node_28894 = cljs.core.first.call(null,seq__28874_28888__$1);goog.dom.setTextContent(node_28894,value);
{
var G__28895 = cljs.core.next.call(null,seq__28874_28888__$1);
var G__28896 = null;
var G__28897 = 0;
var G__28898 = 0;
seq__28874_28878 = G__28895;
chunk__28875_28879 = G__28896;
count__28876_28880 = G__28897;
i__28877_28881 = G__28898;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28903_28907 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28904_28908 = null;var count__28905_28909 = 0;var i__28906_28910 = 0;while(true){
if((i__28906_28910 < count__28905_28909))
{var node_28911 = cljs.core._nth.call(null,chunk__28904_28908,i__28906_28910);goog.dom.forms.setValue(node_28911,value);
{
var G__28912 = seq__28903_28907;
var G__28913 = chunk__28904_28908;
var G__28914 = count__28905_28909;
var G__28915 = (i__28906_28910 + 1);
seq__28903_28907 = G__28912;
chunk__28904_28908 = G__28913;
count__28905_28909 = G__28914;
i__28906_28910 = G__28915;
continue;
}
} else
{var temp__4092__auto___28916 = cljs.core.seq.call(null,seq__28903_28907);if(temp__4092__auto___28916)
{var seq__28903_28917__$1 = temp__4092__auto___28916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28903_28917__$1))
{var c__4189__auto___28918 = cljs.core.chunk_first.call(null,seq__28903_28917__$1);{
var G__28919 = cljs.core.chunk_rest.call(null,seq__28903_28917__$1);
var G__28920 = c__4189__auto___28918;
var G__28921 = cljs.core.count.call(null,c__4189__auto___28918);
var G__28922 = 0;
seq__28903_28907 = G__28919;
chunk__28904_28908 = G__28920;
count__28905_28909 = G__28921;
i__28906_28910 = G__28922;
continue;
}
} else
{var node_28923 = cljs.core.first.call(null,seq__28903_28917__$1);goog.dom.forms.setValue(node_28923,value);
{
var G__28924 = cljs.core.next.call(null,seq__28903_28917__$1);
var G__28925 = null;
var G__28926 = 0;
var G__28927 = 0;
seq__28903_28907 = G__28924;
chunk__28904_28908 = G__28925;
count__28905_28909 = G__28926;
i__28906_28910 = G__28927;
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
{var value_28938 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28934_28939 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28935_28940 = null;var count__28936_28941 = 0;var i__28937_28942 = 0;while(true){
if((i__28937_28942 < count__28936_28941))
{var node_28943 = cljs.core._nth.call(null,chunk__28935_28940,i__28937_28942);node_28943.innerHTML = value_28938;
{
var G__28944 = seq__28934_28939;
var G__28945 = chunk__28935_28940;
var G__28946 = count__28936_28941;
var G__28947 = (i__28937_28942 + 1);
seq__28934_28939 = G__28944;
chunk__28935_28940 = G__28945;
count__28936_28941 = G__28946;
i__28937_28942 = G__28947;
continue;
}
} else
{var temp__4092__auto___28948 = cljs.core.seq.call(null,seq__28934_28939);if(temp__4092__auto___28948)
{var seq__28934_28949__$1 = temp__4092__auto___28948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28934_28949__$1))
{var c__4189__auto___28950 = cljs.core.chunk_first.call(null,seq__28934_28949__$1);{
var G__28951 = cljs.core.chunk_rest.call(null,seq__28934_28949__$1);
var G__28952 = c__4189__auto___28950;
var G__28953 = cljs.core.count.call(null,c__4189__auto___28950);
var G__28954 = 0;
seq__28934_28939 = G__28951;
chunk__28935_28940 = G__28952;
count__28936_28941 = G__28953;
i__28937_28942 = G__28954;
continue;
}
} else
{var node_28955 = cljs.core.first.call(null,seq__28934_28949__$1);node_28955.innerHTML = value_28938;
{
var G__28956 = cljs.core.next.call(null,seq__28934_28949__$1);
var G__28957 = null;
var G__28958 = 0;
var G__28959 = 0;
seq__28934_28939 = G__28956;
chunk__28935_28940 = G__28957;
count__28936_28941 = G__28958;
i__28937_28942 = G__28959;
continue;
}
}
} else
{}
}
break;
}
}catch (e28933){if((e28933 instanceof Error))
{var e_28960 = e28933;domina.replace_children_BANG_.call(null,content,value_28938);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28933;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28967_28971 = cljs.core.seq.call(null,children);var chunk__28968_28972 = null;var count__28969_28973 = 0;var i__28970_28974 = 0;while(true){
if((i__28970_28974 < count__28969_28973))
{var child_28975 = cljs.core._nth.call(null,chunk__28968_28972,i__28970_28974);frag.appendChild(child_28975);
{
var G__28976 = seq__28967_28971;
var G__28977 = chunk__28968_28972;
var G__28978 = count__28969_28973;
var G__28979 = (i__28970_28974 + 1);
seq__28967_28971 = G__28976;
chunk__28968_28972 = G__28977;
count__28969_28973 = G__28978;
i__28970_28974 = G__28979;
continue;
}
} else
{var temp__4092__auto___28980 = cljs.core.seq.call(null,seq__28967_28971);if(temp__4092__auto___28980)
{var seq__28967_28981__$1 = temp__4092__auto___28980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28967_28981__$1))
{var c__4189__auto___28982 = cljs.core.chunk_first.call(null,seq__28967_28981__$1);{
var G__28983 = cljs.core.chunk_rest.call(null,seq__28967_28981__$1);
var G__28984 = c__4189__auto___28982;
var G__28985 = cljs.core.count.call(null,c__4189__auto___28982);
var G__28986 = 0;
seq__28967_28971 = G__28983;
chunk__28968_28972 = G__28984;
count__28969_28973 = G__28985;
i__28970_28974 = G__28986;
continue;
}
} else
{var child_28987 = cljs.core.first.call(null,seq__28967_28981__$1);frag.appendChild(child_28987);
{
var G__28988 = cljs.core.next.call(null,seq__28967_28981__$1);
var G__28989 = null;
var G__28990 = 0;
var G__28991 = 0;
seq__28967_28971 = G__28988;
chunk__28968_28972 = G__28989;
count__28969_28973 = G__28990;
i__28970_28974 = G__28991;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28961_SHARP_,p2__28962_SHARP_){return f.call(null,p1__28961_SHARP_,p2__28962_SHARP_);
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
{if((function (){var G__28993 = list_thing;if(G__28993)
{var bit__4091__auto__ = (G__28993.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28993.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28993.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28993);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28993);
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
{if((function (){var G__28994 = content;if(G__28994)
{var bit__4091__auto__ = (G__28994.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28994.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28994.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28994);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28994);
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
{if((function (){var G__28995 = content;if(G__28995)
{var bit__4091__auto__ = (G__28995.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28995.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28995.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28995);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28995);
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