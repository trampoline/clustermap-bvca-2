// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_65700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_65701 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_65702 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_65702,opt_wrapper_65700,table_section_wrapper_65701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_65700,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_65701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_65701,cell_wrapper_65702,table_section_wrapper_65701,table_section_wrapper_65701]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__65707 = cljs.core.seq.call(null,tbody);var chunk__65708 = null;var count__65709 = (0);var i__65710 = (0);while(true){
if((i__65710 < count__65709))
{var child = cljs.core._nth.call(null,chunk__65708,i__65710);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__65711 = seq__65707;
var G__65712 = chunk__65708;
var G__65713 = count__65709;
var G__65714 = (i__65710 + (1));
seq__65707 = G__65711;
chunk__65708 = G__65712;
count__65709 = G__65713;
i__65710 = G__65714;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__65707);if(temp__4126__auto__)
{var seq__65707__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65707__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__65707__$1);{
var G__65715 = cljs.core.chunk_rest.call(null,seq__65707__$1);
var G__65716 = c__4314__auto__;
var G__65717 = cljs.core.count.call(null,c__4314__auto__);
var G__65718 = (0);
seq__65707 = G__65715;
chunk__65708 = G__65716;
count__65709 = G__65717;
i__65710 = G__65718;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__65707__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__65719 = cljs.core.next.call(null,seq__65707__$1);
var G__65720 = null;
var G__65721 = (0);
var G__65722 = (0);
seq__65707 = G__65719;
chunk__65708 = G__65720;
count__65709 = G__65721;
i__65710 = G__65722;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__65724 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__65724,(0),null);var start_wrap = cljs.core.nth.call(null,vec__65724,(1),null);var end_wrap = cljs.core.nth.call(null,vec__65724,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__65725 = wrapper.lastChild;
var G__65726 = (level - (1));
wrapper = G__65725;
level = G__65726;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj65728 = {};return obj65728;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__65729){
var mesg = cljs.core.seq(arglist__65729);
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
log.cljs$lang$applyTo = (function (arglist__65730){
var mesg = cljs.core.seq(arglist__65730);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__65731){
var contents = cljs.core.seq(arglist__65731);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__65732_SHARP_){return p1__65732_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__65733_SHARP_,p2__65734_SHARP_){return goog.dom.insertChildAt(p1__65733_SHARP_,p2__65734_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__65736_SHARP_,p2__65735_SHARP_){return goog.dom.insertSiblingBefore(p2__65735_SHARP_,p1__65736_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__65738_SHARP_,p2__65737_SHARP_){return goog.dom.insertSiblingAfter(p2__65737_SHARP_,p1__65738_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__65740_SHARP_,p2__65739_SHARP_){return goog.dom.replaceNode(p2__65739_SHARP_,p1__65740_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__65745_65749 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__65746_65750 = null;var count__65747_65751 = (0);var i__65748_65752 = (0);while(true){
if((i__65748_65752 < count__65747_65751))
{var n_65753 = cljs.core._nth.call(null,chunk__65746_65750,i__65748_65752);goog.style.setStyle(n_65753,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__65754 = seq__65745_65749;
var G__65755 = chunk__65746_65750;
var G__65756 = count__65747_65751;
var G__65757 = (i__65748_65752 + (1));
seq__65745_65749 = G__65754;
chunk__65746_65750 = G__65755;
count__65747_65751 = G__65756;
i__65748_65752 = G__65757;
continue;
}
} else
{var temp__4126__auto___65758 = cljs.core.seq.call(null,seq__65745_65749);if(temp__4126__auto___65758)
{var seq__65745_65759__$1 = temp__4126__auto___65758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65745_65759__$1))
{var c__4314__auto___65760 = cljs.core.chunk_first.call(null,seq__65745_65759__$1);{
var G__65761 = cljs.core.chunk_rest.call(null,seq__65745_65759__$1);
var G__65762 = c__4314__auto___65760;
var G__65763 = cljs.core.count.call(null,c__4314__auto___65760);
var G__65764 = (0);
seq__65745_65749 = G__65761;
chunk__65746_65750 = G__65762;
count__65747_65751 = G__65763;
i__65748_65752 = G__65764;
continue;
}
} else
{var n_65765 = cljs.core.first.call(null,seq__65745_65759__$1);goog.style.setStyle(n_65765,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__65766 = cljs.core.next.call(null,seq__65745_65759__$1);
var G__65767 = null;
var G__65768 = (0);
var G__65769 = (0);
seq__65745_65749 = G__65766;
chunk__65746_65750 = G__65767;
count__65747_65751 = G__65768;
i__65748_65752 = G__65769;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__65770){
var content = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var name = cljs.core.first(arglist__65770);
var value = cljs.core.rest(arglist__65770);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__65775_65779 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__65776_65780 = null;var count__65777_65781 = (0);var i__65778_65782 = (0);while(true){
if((i__65778_65782 < count__65777_65781))
{var n_65783 = cljs.core._nth.call(null,chunk__65776_65780,i__65778_65782);n_65783.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__65784 = seq__65775_65779;
var G__65785 = chunk__65776_65780;
var G__65786 = count__65777_65781;
var G__65787 = (i__65778_65782 + (1));
seq__65775_65779 = G__65784;
chunk__65776_65780 = G__65785;
count__65777_65781 = G__65786;
i__65778_65782 = G__65787;
continue;
}
} else
{var temp__4126__auto___65788 = cljs.core.seq.call(null,seq__65775_65779);if(temp__4126__auto___65788)
{var seq__65775_65789__$1 = temp__4126__auto___65788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65775_65789__$1))
{var c__4314__auto___65790 = cljs.core.chunk_first.call(null,seq__65775_65789__$1);{
var G__65791 = cljs.core.chunk_rest.call(null,seq__65775_65789__$1);
var G__65792 = c__4314__auto___65790;
var G__65793 = cljs.core.count.call(null,c__4314__auto___65790);
var G__65794 = (0);
seq__65775_65779 = G__65791;
chunk__65776_65780 = G__65792;
count__65777_65781 = G__65793;
i__65778_65782 = G__65794;
continue;
}
} else
{var n_65795 = cljs.core.first.call(null,seq__65775_65789__$1);n_65795.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__65796 = cljs.core.next.call(null,seq__65775_65789__$1);
var G__65797 = null;
var G__65798 = (0);
var G__65799 = (0);
seq__65775_65779 = G__65796;
chunk__65776_65780 = G__65797;
count__65777_65781 = G__65798;
i__65778_65782 = G__65799;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__65800){
var content = cljs.core.first(arglist__65800);
arglist__65800 = cljs.core.next(arglist__65800);
var name = cljs.core.first(arglist__65800);
var value = cljs.core.rest(arglist__65800);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__65805_65809 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__65806_65810 = null;var count__65807_65811 = (0);var i__65808_65812 = (0);while(true){
if((i__65808_65812 < count__65807_65811))
{var n_65813 = cljs.core._nth.call(null,chunk__65806_65810,i__65808_65812);n_65813.removeAttribute(cljs.core.name.call(null,name));
{
var G__65814 = seq__65805_65809;
var G__65815 = chunk__65806_65810;
var G__65816 = count__65807_65811;
var G__65817 = (i__65808_65812 + (1));
seq__65805_65809 = G__65814;
chunk__65806_65810 = G__65815;
count__65807_65811 = G__65816;
i__65808_65812 = G__65817;
continue;
}
} else
{var temp__4126__auto___65818 = cljs.core.seq.call(null,seq__65805_65809);if(temp__4126__auto___65818)
{var seq__65805_65819__$1 = temp__4126__auto___65818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65805_65819__$1))
{var c__4314__auto___65820 = cljs.core.chunk_first.call(null,seq__65805_65819__$1);{
var G__65821 = cljs.core.chunk_rest.call(null,seq__65805_65819__$1);
var G__65822 = c__4314__auto___65820;
var G__65823 = cljs.core.count.call(null,c__4314__auto___65820);
var G__65824 = (0);
seq__65805_65809 = G__65821;
chunk__65806_65810 = G__65822;
count__65807_65811 = G__65823;
i__65808_65812 = G__65824;
continue;
}
} else
{var n_65825 = cljs.core.first.call(null,seq__65805_65819__$1);n_65825.removeAttribute(cljs.core.name.call(null,name));
{
var G__65826 = cljs.core.next.call(null,seq__65805_65819__$1);
var G__65827 = null;
var G__65828 = (0);
var G__65829 = (0);
seq__65805_65809 = G__65826;
chunk__65806_65810 = G__65827;
count__65807_65811 = G__65828;
i__65808_65812 = G__65829;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__65831 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__65831,(0),null);var v = cljs.core.nth.call(null,vec__65831,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__65832_SHARP_){var attr = attrs__$1.item(p1__65832_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__65839_65845 = cljs.core.seq.call(null,styles);var chunk__65840_65846 = null;var count__65841_65847 = (0);var i__65842_65848 = (0);while(true){
if((i__65842_65848 < count__65841_65847))
{var vec__65843_65849 = cljs.core._nth.call(null,chunk__65840_65846,i__65842_65848);var name_65850 = cljs.core.nth.call(null,vec__65843_65849,(0),null);var value_65851 = cljs.core.nth.call(null,vec__65843_65849,(1),null);domina.set_style_BANG_.call(null,content,name_65850,value_65851);
{
var G__65852 = seq__65839_65845;
var G__65853 = chunk__65840_65846;
var G__65854 = count__65841_65847;
var G__65855 = (i__65842_65848 + (1));
seq__65839_65845 = G__65852;
chunk__65840_65846 = G__65853;
count__65841_65847 = G__65854;
i__65842_65848 = G__65855;
continue;
}
} else
{var temp__4126__auto___65856 = cljs.core.seq.call(null,seq__65839_65845);if(temp__4126__auto___65856)
{var seq__65839_65857__$1 = temp__4126__auto___65856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65839_65857__$1))
{var c__4314__auto___65858 = cljs.core.chunk_first.call(null,seq__65839_65857__$1);{
var G__65859 = cljs.core.chunk_rest.call(null,seq__65839_65857__$1);
var G__65860 = c__4314__auto___65858;
var G__65861 = cljs.core.count.call(null,c__4314__auto___65858);
var G__65862 = (0);
seq__65839_65845 = G__65859;
chunk__65840_65846 = G__65860;
count__65841_65847 = G__65861;
i__65842_65848 = G__65862;
continue;
}
} else
{var vec__65844_65863 = cljs.core.first.call(null,seq__65839_65857__$1);var name_65864 = cljs.core.nth.call(null,vec__65844_65863,(0),null);var value_65865 = cljs.core.nth.call(null,vec__65844_65863,(1),null);domina.set_style_BANG_.call(null,content,name_65864,value_65865);
{
var G__65866 = cljs.core.next.call(null,seq__65839_65857__$1);
var G__65867 = null;
var G__65868 = (0);
var G__65869 = (0);
seq__65839_65845 = G__65866;
chunk__65840_65846 = G__65867;
count__65841_65847 = G__65868;
i__65842_65848 = G__65869;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__65876_65882 = cljs.core.seq.call(null,attrs);var chunk__65877_65883 = null;var count__65878_65884 = (0);var i__65879_65885 = (0);while(true){
if((i__65879_65885 < count__65878_65884))
{var vec__65880_65886 = cljs.core._nth.call(null,chunk__65877_65883,i__65879_65885);var name_65887 = cljs.core.nth.call(null,vec__65880_65886,(0),null);var value_65888 = cljs.core.nth.call(null,vec__65880_65886,(1),null);domina.set_attr_BANG_.call(null,content,name_65887,value_65888);
{
var G__65889 = seq__65876_65882;
var G__65890 = chunk__65877_65883;
var G__65891 = count__65878_65884;
var G__65892 = (i__65879_65885 + (1));
seq__65876_65882 = G__65889;
chunk__65877_65883 = G__65890;
count__65878_65884 = G__65891;
i__65879_65885 = G__65892;
continue;
}
} else
{var temp__4126__auto___65893 = cljs.core.seq.call(null,seq__65876_65882);if(temp__4126__auto___65893)
{var seq__65876_65894__$1 = temp__4126__auto___65893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65876_65894__$1))
{var c__4314__auto___65895 = cljs.core.chunk_first.call(null,seq__65876_65894__$1);{
var G__65896 = cljs.core.chunk_rest.call(null,seq__65876_65894__$1);
var G__65897 = c__4314__auto___65895;
var G__65898 = cljs.core.count.call(null,c__4314__auto___65895);
var G__65899 = (0);
seq__65876_65882 = G__65896;
chunk__65877_65883 = G__65897;
count__65878_65884 = G__65898;
i__65879_65885 = G__65899;
continue;
}
} else
{var vec__65881_65900 = cljs.core.first.call(null,seq__65876_65894__$1);var name_65901 = cljs.core.nth.call(null,vec__65881_65900,(0),null);var value_65902 = cljs.core.nth.call(null,vec__65881_65900,(1),null);domina.set_attr_BANG_.call(null,content,name_65901,value_65902);
{
var G__65903 = cljs.core.next.call(null,seq__65876_65894__$1);
var G__65904 = null;
var G__65905 = (0);
var G__65906 = (0);
seq__65876_65882 = G__65903;
chunk__65877_65883 = G__65904;
count__65878_65884 = G__65905;
i__65879_65885 = G__65906;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__65911_65915 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__65912_65916 = null;var count__65913_65917 = (0);var i__65914_65918 = (0);while(true){
if((i__65914_65918 < count__65913_65917))
{var node_65919 = cljs.core._nth.call(null,chunk__65912_65916,i__65914_65918);goog.dom.classes.add(node_65919,class$);
{
var G__65920 = seq__65911_65915;
var G__65921 = chunk__65912_65916;
var G__65922 = count__65913_65917;
var G__65923 = (i__65914_65918 + (1));
seq__65911_65915 = G__65920;
chunk__65912_65916 = G__65921;
count__65913_65917 = G__65922;
i__65914_65918 = G__65923;
continue;
}
} else
{var temp__4126__auto___65924 = cljs.core.seq.call(null,seq__65911_65915);if(temp__4126__auto___65924)
{var seq__65911_65925__$1 = temp__4126__auto___65924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65911_65925__$1))
{var c__4314__auto___65926 = cljs.core.chunk_first.call(null,seq__65911_65925__$1);{
var G__65927 = cljs.core.chunk_rest.call(null,seq__65911_65925__$1);
var G__65928 = c__4314__auto___65926;
var G__65929 = cljs.core.count.call(null,c__4314__auto___65926);
var G__65930 = (0);
seq__65911_65915 = G__65927;
chunk__65912_65916 = G__65928;
count__65913_65917 = G__65929;
i__65914_65918 = G__65930;
continue;
}
} else
{var node_65931 = cljs.core.first.call(null,seq__65911_65925__$1);goog.dom.classes.add(node_65931,class$);
{
var G__65932 = cljs.core.next.call(null,seq__65911_65925__$1);
var G__65933 = null;
var G__65934 = (0);
var G__65935 = (0);
seq__65911_65915 = G__65932;
chunk__65912_65916 = G__65933;
count__65913_65917 = G__65934;
i__65914_65918 = G__65935;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__65940_65944 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__65941_65945 = null;var count__65942_65946 = (0);var i__65943_65947 = (0);while(true){
if((i__65943_65947 < count__65942_65946))
{var node_65948 = cljs.core._nth.call(null,chunk__65941_65945,i__65943_65947);goog.dom.classes.remove(node_65948,class$);
{
var G__65949 = seq__65940_65944;
var G__65950 = chunk__65941_65945;
var G__65951 = count__65942_65946;
var G__65952 = (i__65943_65947 + (1));
seq__65940_65944 = G__65949;
chunk__65941_65945 = G__65950;
count__65942_65946 = G__65951;
i__65943_65947 = G__65952;
continue;
}
} else
{var temp__4126__auto___65953 = cljs.core.seq.call(null,seq__65940_65944);if(temp__4126__auto___65953)
{var seq__65940_65954__$1 = temp__4126__auto___65953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65940_65954__$1))
{var c__4314__auto___65955 = cljs.core.chunk_first.call(null,seq__65940_65954__$1);{
var G__65956 = cljs.core.chunk_rest.call(null,seq__65940_65954__$1);
var G__65957 = c__4314__auto___65955;
var G__65958 = cljs.core.count.call(null,c__4314__auto___65955);
var G__65959 = (0);
seq__65940_65944 = G__65956;
chunk__65941_65945 = G__65957;
count__65942_65946 = G__65958;
i__65943_65947 = G__65959;
continue;
}
} else
{var node_65960 = cljs.core.first.call(null,seq__65940_65954__$1);goog.dom.classes.remove(node_65960,class$);
{
var G__65961 = cljs.core.next.call(null,seq__65940_65954__$1);
var G__65962 = null;
var G__65963 = (0);
var G__65964 = (0);
seq__65940_65944 = G__65961;
chunk__65941_65945 = G__65962;
count__65942_65946 = G__65963;
i__65943_65947 = G__65964;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__65969_65973 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__65970_65974 = null;var count__65971_65975 = (0);var i__65972_65976 = (0);while(true){
if((i__65972_65976 < count__65971_65975))
{var node_65977 = cljs.core._nth.call(null,chunk__65970_65974,i__65972_65976);goog.dom.classes.toggle(node_65977,class$);
{
var G__65978 = seq__65969_65973;
var G__65979 = chunk__65970_65974;
var G__65980 = count__65971_65975;
var G__65981 = (i__65972_65976 + (1));
seq__65969_65973 = G__65978;
chunk__65970_65974 = G__65979;
count__65971_65975 = G__65980;
i__65972_65976 = G__65981;
continue;
}
} else
{var temp__4126__auto___65982 = cljs.core.seq.call(null,seq__65969_65973);if(temp__4126__auto___65982)
{var seq__65969_65983__$1 = temp__4126__auto___65982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65969_65983__$1))
{var c__4314__auto___65984 = cljs.core.chunk_first.call(null,seq__65969_65983__$1);{
var G__65985 = cljs.core.chunk_rest.call(null,seq__65969_65983__$1);
var G__65986 = c__4314__auto___65984;
var G__65987 = cljs.core.count.call(null,c__4314__auto___65984);
var G__65988 = (0);
seq__65969_65973 = G__65985;
chunk__65970_65974 = G__65986;
count__65971_65975 = G__65987;
i__65972_65976 = G__65988;
continue;
}
} else
{var node_65989 = cljs.core.first.call(null,seq__65969_65983__$1);goog.dom.classes.toggle(node_65989,class$);
{
var G__65990 = cljs.core.next.call(null,seq__65969_65983__$1);
var G__65991 = null;
var G__65992 = (0);
var G__65993 = (0);
seq__65969_65973 = G__65990;
chunk__65970_65974 = G__65991;
count__65971_65975 = G__65992;
i__65972_65976 = G__65993;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_66002__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__65998_66003 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__65999_66004 = null;var count__66000_66005 = (0);var i__66001_66006 = (0);while(true){
if((i__66001_66006 < count__66000_66005))
{var node_66007 = cljs.core._nth.call(null,chunk__65999_66004,i__66001_66006);goog.dom.classes.set(node_66007,classes_66002__$1);
{
var G__66008 = seq__65998_66003;
var G__66009 = chunk__65999_66004;
var G__66010 = count__66000_66005;
var G__66011 = (i__66001_66006 + (1));
seq__65998_66003 = G__66008;
chunk__65999_66004 = G__66009;
count__66000_66005 = G__66010;
i__66001_66006 = G__66011;
continue;
}
} else
{var temp__4126__auto___66012 = cljs.core.seq.call(null,seq__65998_66003);if(temp__4126__auto___66012)
{var seq__65998_66013__$1 = temp__4126__auto___66012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65998_66013__$1))
{var c__4314__auto___66014 = cljs.core.chunk_first.call(null,seq__65998_66013__$1);{
var G__66015 = cljs.core.chunk_rest.call(null,seq__65998_66013__$1);
var G__66016 = c__4314__auto___66014;
var G__66017 = cljs.core.count.call(null,c__4314__auto___66014);
var G__66018 = (0);
seq__65998_66003 = G__66015;
chunk__65999_66004 = G__66016;
count__66000_66005 = G__66017;
i__66001_66006 = G__66018;
continue;
}
} else
{var node_66019 = cljs.core.first.call(null,seq__65998_66013__$1);goog.dom.classes.set(node_66019,classes_66002__$1);
{
var G__66020 = cljs.core.next.call(null,seq__65998_66013__$1);
var G__66021 = null;
var G__66022 = (0);
var G__66023 = (0);
seq__65998_66003 = G__66020;
chunk__65999_66004 = G__66021;
count__66000_66005 = G__66022;
i__66001_66006 = G__66023;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__66028_66032 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__66029_66033 = null;var count__66030_66034 = (0);var i__66031_66035 = (0);while(true){
if((i__66031_66035 < count__66030_66034))
{var node_66036 = cljs.core._nth.call(null,chunk__66029_66033,i__66031_66035);goog.dom.setTextContent(node_66036,value);
{
var G__66037 = seq__66028_66032;
var G__66038 = chunk__66029_66033;
var G__66039 = count__66030_66034;
var G__66040 = (i__66031_66035 + (1));
seq__66028_66032 = G__66037;
chunk__66029_66033 = G__66038;
count__66030_66034 = G__66039;
i__66031_66035 = G__66040;
continue;
}
} else
{var temp__4126__auto___66041 = cljs.core.seq.call(null,seq__66028_66032);if(temp__4126__auto___66041)
{var seq__66028_66042__$1 = temp__4126__auto___66041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66028_66042__$1))
{var c__4314__auto___66043 = cljs.core.chunk_first.call(null,seq__66028_66042__$1);{
var G__66044 = cljs.core.chunk_rest.call(null,seq__66028_66042__$1);
var G__66045 = c__4314__auto___66043;
var G__66046 = cljs.core.count.call(null,c__4314__auto___66043);
var G__66047 = (0);
seq__66028_66032 = G__66044;
chunk__66029_66033 = G__66045;
count__66030_66034 = G__66046;
i__66031_66035 = G__66047;
continue;
}
} else
{var node_66048 = cljs.core.first.call(null,seq__66028_66042__$1);goog.dom.setTextContent(node_66048,value);
{
var G__66049 = cljs.core.next.call(null,seq__66028_66042__$1);
var G__66050 = null;
var G__66051 = (0);
var G__66052 = (0);
seq__66028_66032 = G__66049;
chunk__66029_66033 = G__66050;
count__66030_66034 = G__66051;
i__66031_66035 = G__66052;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__66057_66061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__66058_66062 = null;var count__66059_66063 = (0);var i__66060_66064 = (0);while(true){
if((i__66060_66064 < count__66059_66063))
{var node_66065 = cljs.core._nth.call(null,chunk__66058_66062,i__66060_66064);goog.dom.forms.setValue(node_66065,value);
{
var G__66066 = seq__66057_66061;
var G__66067 = chunk__66058_66062;
var G__66068 = count__66059_66063;
var G__66069 = (i__66060_66064 + (1));
seq__66057_66061 = G__66066;
chunk__66058_66062 = G__66067;
count__66059_66063 = G__66068;
i__66060_66064 = G__66069;
continue;
}
} else
{var temp__4126__auto___66070 = cljs.core.seq.call(null,seq__66057_66061);if(temp__4126__auto___66070)
{var seq__66057_66071__$1 = temp__4126__auto___66070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66057_66071__$1))
{var c__4314__auto___66072 = cljs.core.chunk_first.call(null,seq__66057_66071__$1);{
var G__66073 = cljs.core.chunk_rest.call(null,seq__66057_66071__$1);
var G__66074 = c__4314__auto___66072;
var G__66075 = cljs.core.count.call(null,c__4314__auto___66072);
var G__66076 = (0);
seq__66057_66061 = G__66073;
chunk__66058_66062 = G__66074;
count__66059_66063 = G__66075;
i__66060_66064 = G__66076;
continue;
}
} else
{var node_66077 = cljs.core.first.call(null,seq__66057_66071__$1);goog.dom.forms.setValue(node_66077,value);
{
var G__66078 = cljs.core.next.call(null,seq__66057_66071__$1);
var G__66079 = null;
var G__66080 = (0);
var G__66081 = (0);
seq__66057_66061 = G__66078;
chunk__66058_66062 = G__66079;
count__66059_66063 = G__66080;
i__66060_66064 = G__66081;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_66092 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__66088_66093 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__66089_66094 = null;var count__66090_66095 = (0);var i__66091_66096 = (0);while(true){
if((i__66091_66096 < count__66090_66095))
{var node_66097 = cljs.core._nth.call(null,chunk__66089_66094,i__66091_66096);node_66097.innerHTML = value_66092;
{
var G__66098 = seq__66088_66093;
var G__66099 = chunk__66089_66094;
var G__66100 = count__66090_66095;
var G__66101 = (i__66091_66096 + (1));
seq__66088_66093 = G__66098;
chunk__66089_66094 = G__66099;
count__66090_66095 = G__66100;
i__66091_66096 = G__66101;
continue;
}
} else
{var temp__4126__auto___66102 = cljs.core.seq.call(null,seq__66088_66093);if(temp__4126__auto___66102)
{var seq__66088_66103__$1 = temp__4126__auto___66102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66088_66103__$1))
{var c__4314__auto___66104 = cljs.core.chunk_first.call(null,seq__66088_66103__$1);{
var G__66105 = cljs.core.chunk_rest.call(null,seq__66088_66103__$1);
var G__66106 = c__4314__auto___66104;
var G__66107 = cljs.core.count.call(null,c__4314__auto___66104);
var G__66108 = (0);
seq__66088_66093 = G__66105;
chunk__66089_66094 = G__66106;
count__66090_66095 = G__66107;
i__66091_66096 = G__66108;
continue;
}
} else
{var node_66109 = cljs.core.first.call(null,seq__66088_66103__$1);node_66109.innerHTML = value_66092;
{
var G__66110 = cljs.core.next.call(null,seq__66088_66103__$1);
var G__66111 = null;
var G__66112 = (0);
var G__66113 = (0);
seq__66088_66093 = G__66110;
chunk__66089_66094 = G__66111;
count__66090_66095 = G__66112;
i__66091_66096 = G__66113;
continue;
}
}
} else
{}
}
break;
}
}catch (e66087){if((e66087 instanceof Error))
{var e_66114 = e66087;domina.replace_children_BANG_.call(null,content,value_66092);
} else
{throw e66087;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__66121_66125 = cljs.core.seq.call(null,children);var chunk__66122_66126 = null;var count__66123_66127 = (0);var i__66124_66128 = (0);while(true){
if((i__66124_66128 < count__66123_66127))
{var child_66129 = cljs.core._nth.call(null,chunk__66122_66126,i__66124_66128);frag.appendChild(child_66129);
{
var G__66130 = seq__66121_66125;
var G__66131 = chunk__66122_66126;
var G__66132 = count__66123_66127;
var G__66133 = (i__66124_66128 + (1));
seq__66121_66125 = G__66130;
chunk__66122_66126 = G__66131;
count__66123_66127 = G__66132;
i__66124_66128 = G__66133;
continue;
}
} else
{var temp__4126__auto___66134 = cljs.core.seq.call(null,seq__66121_66125);if(temp__4126__auto___66134)
{var seq__66121_66135__$1 = temp__4126__auto___66134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66121_66135__$1))
{var c__4314__auto___66136 = cljs.core.chunk_first.call(null,seq__66121_66135__$1);{
var G__66137 = cljs.core.chunk_rest.call(null,seq__66121_66135__$1);
var G__66138 = c__4314__auto___66136;
var G__66139 = cljs.core.count.call(null,c__4314__auto___66136);
var G__66140 = (0);
seq__66121_66125 = G__66137;
chunk__66122_66126 = G__66138;
count__66123_66127 = G__66139;
i__66124_66128 = G__66140;
continue;
}
} else
{var child_66141 = cljs.core.first.call(null,seq__66121_66135__$1);frag.appendChild(child_66141);
{
var G__66142 = cljs.core.next.call(null,seq__66121_66135__$1);
var G__66143 = null;
var G__66144 = (0);
var G__66145 = (0);
seq__66121_66125 = G__66142;
chunk__66122_66126 = G__66143;
count__66123_66127 = G__66144;
i__66124_66128 = G__66145;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__66115_SHARP_,p2__66116_SHARP_){return f.call(null,p1__66115_SHARP_,p2__66116_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__66147 = list_thing;if(G__66147)
{var bit__4208__auto__ = (G__66147.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__66147.cljs$core$ISeqable$))
{return true;
} else
{if((!G__66147.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__66147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__66147);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__66148 = content;if(G__66148)
{var bit__4208__auto__ = (G__66148.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__66148.cljs$core$ISeqable$))
{return true;
} else
{if((!G__66148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__66148);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__66148);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__66149 = content;if(G__66149)
{var bit__4208__auto__ = (G__66149.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__66149.cljs$core$ISeqable$))
{return true;
} else
{if((!G__66149.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__66149);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__66149);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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