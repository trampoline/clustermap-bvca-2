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
var opt_wrapper_37768 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37769 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37770 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37769,table_section_wrapper_37769,opt_wrapper_37768,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37770,table_section_wrapper_37769,cell_wrapper_37770,opt_wrapper_37768,table_section_wrapper_37769,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37769]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37775 = cljs.core.seq.call(null,tbody);var chunk__37776 = null;var count__37777 = 0;var i__37778 = 0;while(true){
if((i__37778 < count__37777))
{var child = cljs.core._nth.call(null,chunk__37776,i__37778);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37779 = seq__37775;
var G__37780 = chunk__37776;
var G__37781 = count__37777;
var G__37782 = (i__37778 + 1);
seq__37775 = G__37779;
chunk__37776 = G__37780;
count__37777 = G__37781;
i__37778 = G__37782;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37775);if(temp__4092__auto__)
{var seq__37775__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37775__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37775__$1);{
var G__37783 = cljs.core.chunk_rest.call(null,seq__37775__$1);
var G__37784 = c__4148__auto__;
var G__37785 = cljs.core.count.call(null,c__4148__auto__);
var G__37786 = 0;
seq__37775 = G__37783;
chunk__37776 = G__37784;
count__37777 = G__37785;
i__37778 = G__37786;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37775__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37787 = cljs.core.next.call(null,seq__37775__$1);
var G__37788 = null;
var G__37789 = 0;
var G__37790 = 0;
seq__37775 = G__37787;
chunk__37776 = G__37788;
count__37777 = G__37789;
i__37778 = G__37790;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37792 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37792,0,null);var start_wrap = cljs.core.nth.call(null,vec__37792,1,null);var end_wrap = cljs.core.nth.call(null,vec__37792,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37793 = wrapper.lastChild;
var G__37794 = (level - 1);
wrapper = G__37793;
level = G__37794;
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
domina.DomContent = (function (){var obj37796 = {};return obj37796;
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
log_debug.cljs$lang$applyTo = (function (arglist__37797){
var mesg = cljs.core.seq(arglist__37797);
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
log.cljs$lang$applyTo = (function (arglist__37798){
var mesg = cljs.core.seq(arglist__37798);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37799){
var contents = cljs.core.seq(arglist__37799);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37800_SHARP_){return p1__37800_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37801_SHARP_,p2__37802_SHARP_){return goog.dom.insertChildAt(p1__37801_SHARP_,p2__37802_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37804_SHARP_,p2__37803_SHARP_){return goog.dom.insertSiblingBefore(p2__37803_SHARP_,p1__37804_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37806_SHARP_,p2__37805_SHARP_){return goog.dom.insertSiblingAfter(p2__37805_SHARP_,p1__37806_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37808_SHARP_,p2__37807_SHARP_){return goog.dom.replaceNode(p2__37807_SHARP_,p1__37808_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37813_37817 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37814_37818 = null;var count__37815_37819 = 0;var i__37816_37820 = 0;while(true){
if((i__37816_37820 < count__37815_37819))
{var n_37821 = cljs.core._nth.call(null,chunk__37814_37818,i__37816_37820);goog.style.setStyle(n_37821,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37822 = seq__37813_37817;
var G__37823 = chunk__37814_37818;
var G__37824 = count__37815_37819;
var G__37825 = (i__37816_37820 + 1);
seq__37813_37817 = G__37822;
chunk__37814_37818 = G__37823;
count__37815_37819 = G__37824;
i__37816_37820 = G__37825;
continue;
}
} else
{var temp__4092__auto___37826 = cljs.core.seq.call(null,seq__37813_37817);if(temp__4092__auto___37826)
{var seq__37813_37827__$1 = temp__4092__auto___37826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37813_37827__$1))
{var c__4148__auto___37828 = cljs.core.chunk_first.call(null,seq__37813_37827__$1);{
var G__37829 = cljs.core.chunk_rest.call(null,seq__37813_37827__$1);
var G__37830 = c__4148__auto___37828;
var G__37831 = cljs.core.count.call(null,c__4148__auto___37828);
var G__37832 = 0;
seq__37813_37817 = G__37829;
chunk__37814_37818 = G__37830;
count__37815_37819 = G__37831;
i__37816_37820 = G__37832;
continue;
}
} else
{var n_37833 = cljs.core.first.call(null,seq__37813_37827__$1);goog.style.setStyle(n_37833,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37834 = cljs.core.next.call(null,seq__37813_37827__$1);
var G__37835 = null;
var G__37836 = 0;
var G__37837 = 0;
seq__37813_37817 = G__37834;
chunk__37814_37818 = G__37835;
count__37815_37819 = G__37836;
i__37816_37820 = G__37837;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37838){
var content = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var name = cljs.core.first(arglist__37838);
var value = cljs.core.rest(arglist__37838);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37843_37847 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37844_37848 = null;var count__37845_37849 = 0;var i__37846_37850 = 0;while(true){
if((i__37846_37850 < count__37845_37849))
{var n_37851 = cljs.core._nth.call(null,chunk__37844_37848,i__37846_37850);n_37851.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37852 = seq__37843_37847;
var G__37853 = chunk__37844_37848;
var G__37854 = count__37845_37849;
var G__37855 = (i__37846_37850 + 1);
seq__37843_37847 = G__37852;
chunk__37844_37848 = G__37853;
count__37845_37849 = G__37854;
i__37846_37850 = G__37855;
continue;
}
} else
{var temp__4092__auto___37856 = cljs.core.seq.call(null,seq__37843_37847);if(temp__4092__auto___37856)
{var seq__37843_37857__$1 = temp__4092__auto___37856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37843_37857__$1))
{var c__4148__auto___37858 = cljs.core.chunk_first.call(null,seq__37843_37857__$1);{
var G__37859 = cljs.core.chunk_rest.call(null,seq__37843_37857__$1);
var G__37860 = c__4148__auto___37858;
var G__37861 = cljs.core.count.call(null,c__4148__auto___37858);
var G__37862 = 0;
seq__37843_37847 = G__37859;
chunk__37844_37848 = G__37860;
count__37845_37849 = G__37861;
i__37846_37850 = G__37862;
continue;
}
} else
{var n_37863 = cljs.core.first.call(null,seq__37843_37857__$1);n_37863.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37864 = cljs.core.next.call(null,seq__37843_37857__$1);
var G__37865 = null;
var G__37866 = 0;
var G__37867 = 0;
seq__37843_37847 = G__37864;
chunk__37844_37848 = G__37865;
count__37845_37849 = G__37866;
i__37846_37850 = G__37867;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37868){
var content = cljs.core.first(arglist__37868);
arglist__37868 = cljs.core.next(arglist__37868);
var name = cljs.core.first(arglist__37868);
var value = cljs.core.rest(arglist__37868);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37873_37877 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37874_37878 = null;var count__37875_37879 = 0;var i__37876_37880 = 0;while(true){
if((i__37876_37880 < count__37875_37879))
{var n_37881 = cljs.core._nth.call(null,chunk__37874_37878,i__37876_37880);n_37881.removeAttribute(cljs.core.name.call(null,name));
{
var G__37882 = seq__37873_37877;
var G__37883 = chunk__37874_37878;
var G__37884 = count__37875_37879;
var G__37885 = (i__37876_37880 + 1);
seq__37873_37877 = G__37882;
chunk__37874_37878 = G__37883;
count__37875_37879 = G__37884;
i__37876_37880 = G__37885;
continue;
}
} else
{var temp__4092__auto___37886 = cljs.core.seq.call(null,seq__37873_37877);if(temp__4092__auto___37886)
{var seq__37873_37887__$1 = temp__4092__auto___37886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37873_37887__$1))
{var c__4148__auto___37888 = cljs.core.chunk_first.call(null,seq__37873_37887__$1);{
var G__37889 = cljs.core.chunk_rest.call(null,seq__37873_37887__$1);
var G__37890 = c__4148__auto___37888;
var G__37891 = cljs.core.count.call(null,c__4148__auto___37888);
var G__37892 = 0;
seq__37873_37877 = G__37889;
chunk__37874_37878 = G__37890;
count__37875_37879 = G__37891;
i__37876_37880 = G__37892;
continue;
}
} else
{var n_37893 = cljs.core.first.call(null,seq__37873_37887__$1);n_37893.removeAttribute(cljs.core.name.call(null,name));
{
var G__37894 = cljs.core.next.call(null,seq__37873_37887__$1);
var G__37895 = null;
var G__37896 = 0;
var G__37897 = 0;
seq__37873_37877 = G__37894;
chunk__37874_37878 = G__37895;
count__37875_37879 = G__37896;
i__37876_37880 = G__37897;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37899 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37899,0,null);var v = cljs.core.nth.call(null,vec__37899,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__37900_SHARP_){var attr = attrs__$1.item(p1__37900_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37907_37913 = cljs.core.seq.call(null,styles);var chunk__37908_37914 = null;var count__37909_37915 = 0;var i__37910_37916 = 0;while(true){
if((i__37910_37916 < count__37909_37915))
{var vec__37911_37917 = cljs.core._nth.call(null,chunk__37908_37914,i__37910_37916);var name_37918 = cljs.core.nth.call(null,vec__37911_37917,0,null);var value_37919 = cljs.core.nth.call(null,vec__37911_37917,1,null);domina.set_style_BANG_.call(null,content,name_37918,value_37919);
{
var G__37920 = seq__37907_37913;
var G__37921 = chunk__37908_37914;
var G__37922 = count__37909_37915;
var G__37923 = (i__37910_37916 + 1);
seq__37907_37913 = G__37920;
chunk__37908_37914 = G__37921;
count__37909_37915 = G__37922;
i__37910_37916 = G__37923;
continue;
}
} else
{var temp__4092__auto___37924 = cljs.core.seq.call(null,seq__37907_37913);if(temp__4092__auto___37924)
{var seq__37907_37925__$1 = temp__4092__auto___37924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37907_37925__$1))
{var c__4148__auto___37926 = cljs.core.chunk_first.call(null,seq__37907_37925__$1);{
var G__37927 = cljs.core.chunk_rest.call(null,seq__37907_37925__$1);
var G__37928 = c__4148__auto___37926;
var G__37929 = cljs.core.count.call(null,c__4148__auto___37926);
var G__37930 = 0;
seq__37907_37913 = G__37927;
chunk__37908_37914 = G__37928;
count__37909_37915 = G__37929;
i__37910_37916 = G__37930;
continue;
}
} else
{var vec__37912_37931 = cljs.core.first.call(null,seq__37907_37925__$1);var name_37932 = cljs.core.nth.call(null,vec__37912_37931,0,null);var value_37933 = cljs.core.nth.call(null,vec__37912_37931,1,null);domina.set_style_BANG_.call(null,content,name_37932,value_37933);
{
var G__37934 = cljs.core.next.call(null,seq__37907_37925__$1);
var G__37935 = null;
var G__37936 = 0;
var G__37937 = 0;
seq__37907_37913 = G__37934;
chunk__37908_37914 = G__37935;
count__37909_37915 = G__37936;
i__37910_37916 = G__37937;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37944_37950 = cljs.core.seq.call(null,attrs);var chunk__37945_37951 = null;var count__37946_37952 = 0;var i__37947_37953 = 0;while(true){
if((i__37947_37953 < count__37946_37952))
{var vec__37948_37954 = cljs.core._nth.call(null,chunk__37945_37951,i__37947_37953);var name_37955 = cljs.core.nth.call(null,vec__37948_37954,0,null);var value_37956 = cljs.core.nth.call(null,vec__37948_37954,1,null);domina.set_attr_BANG_.call(null,content,name_37955,value_37956);
{
var G__37957 = seq__37944_37950;
var G__37958 = chunk__37945_37951;
var G__37959 = count__37946_37952;
var G__37960 = (i__37947_37953 + 1);
seq__37944_37950 = G__37957;
chunk__37945_37951 = G__37958;
count__37946_37952 = G__37959;
i__37947_37953 = G__37960;
continue;
}
} else
{var temp__4092__auto___37961 = cljs.core.seq.call(null,seq__37944_37950);if(temp__4092__auto___37961)
{var seq__37944_37962__$1 = temp__4092__auto___37961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37944_37962__$1))
{var c__4148__auto___37963 = cljs.core.chunk_first.call(null,seq__37944_37962__$1);{
var G__37964 = cljs.core.chunk_rest.call(null,seq__37944_37962__$1);
var G__37965 = c__4148__auto___37963;
var G__37966 = cljs.core.count.call(null,c__4148__auto___37963);
var G__37967 = 0;
seq__37944_37950 = G__37964;
chunk__37945_37951 = G__37965;
count__37946_37952 = G__37966;
i__37947_37953 = G__37967;
continue;
}
} else
{var vec__37949_37968 = cljs.core.first.call(null,seq__37944_37962__$1);var name_37969 = cljs.core.nth.call(null,vec__37949_37968,0,null);var value_37970 = cljs.core.nth.call(null,vec__37949_37968,1,null);domina.set_attr_BANG_.call(null,content,name_37969,value_37970);
{
var G__37971 = cljs.core.next.call(null,seq__37944_37962__$1);
var G__37972 = null;
var G__37973 = 0;
var G__37974 = 0;
seq__37944_37950 = G__37971;
chunk__37945_37951 = G__37972;
count__37946_37952 = G__37973;
i__37947_37953 = G__37974;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37979_37983 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37980_37984 = null;var count__37981_37985 = 0;var i__37982_37986 = 0;while(true){
if((i__37982_37986 < count__37981_37985))
{var node_37987 = cljs.core._nth.call(null,chunk__37980_37984,i__37982_37986);goog.dom.classes.add(node_37987,class$);
{
var G__37988 = seq__37979_37983;
var G__37989 = chunk__37980_37984;
var G__37990 = count__37981_37985;
var G__37991 = (i__37982_37986 + 1);
seq__37979_37983 = G__37988;
chunk__37980_37984 = G__37989;
count__37981_37985 = G__37990;
i__37982_37986 = G__37991;
continue;
}
} else
{var temp__4092__auto___37992 = cljs.core.seq.call(null,seq__37979_37983);if(temp__4092__auto___37992)
{var seq__37979_37993__$1 = temp__4092__auto___37992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37979_37993__$1))
{var c__4148__auto___37994 = cljs.core.chunk_first.call(null,seq__37979_37993__$1);{
var G__37995 = cljs.core.chunk_rest.call(null,seq__37979_37993__$1);
var G__37996 = c__4148__auto___37994;
var G__37997 = cljs.core.count.call(null,c__4148__auto___37994);
var G__37998 = 0;
seq__37979_37983 = G__37995;
chunk__37980_37984 = G__37996;
count__37981_37985 = G__37997;
i__37982_37986 = G__37998;
continue;
}
} else
{var node_37999 = cljs.core.first.call(null,seq__37979_37993__$1);goog.dom.classes.add(node_37999,class$);
{
var G__38000 = cljs.core.next.call(null,seq__37979_37993__$1);
var G__38001 = null;
var G__38002 = 0;
var G__38003 = 0;
seq__37979_37983 = G__38000;
chunk__37980_37984 = G__38001;
count__37981_37985 = G__38002;
i__37982_37986 = G__38003;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38008_38012 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38009_38013 = null;var count__38010_38014 = 0;var i__38011_38015 = 0;while(true){
if((i__38011_38015 < count__38010_38014))
{var node_38016 = cljs.core._nth.call(null,chunk__38009_38013,i__38011_38015);goog.dom.classes.remove(node_38016,class$);
{
var G__38017 = seq__38008_38012;
var G__38018 = chunk__38009_38013;
var G__38019 = count__38010_38014;
var G__38020 = (i__38011_38015 + 1);
seq__38008_38012 = G__38017;
chunk__38009_38013 = G__38018;
count__38010_38014 = G__38019;
i__38011_38015 = G__38020;
continue;
}
} else
{var temp__4092__auto___38021 = cljs.core.seq.call(null,seq__38008_38012);if(temp__4092__auto___38021)
{var seq__38008_38022__$1 = temp__4092__auto___38021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38008_38022__$1))
{var c__4148__auto___38023 = cljs.core.chunk_first.call(null,seq__38008_38022__$1);{
var G__38024 = cljs.core.chunk_rest.call(null,seq__38008_38022__$1);
var G__38025 = c__4148__auto___38023;
var G__38026 = cljs.core.count.call(null,c__4148__auto___38023);
var G__38027 = 0;
seq__38008_38012 = G__38024;
chunk__38009_38013 = G__38025;
count__38010_38014 = G__38026;
i__38011_38015 = G__38027;
continue;
}
} else
{var node_38028 = cljs.core.first.call(null,seq__38008_38022__$1);goog.dom.classes.remove(node_38028,class$);
{
var G__38029 = cljs.core.next.call(null,seq__38008_38022__$1);
var G__38030 = null;
var G__38031 = 0;
var G__38032 = 0;
seq__38008_38012 = G__38029;
chunk__38009_38013 = G__38030;
count__38010_38014 = G__38031;
i__38011_38015 = G__38032;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38037_38041 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38038_38042 = null;var count__38039_38043 = 0;var i__38040_38044 = 0;while(true){
if((i__38040_38044 < count__38039_38043))
{var node_38045 = cljs.core._nth.call(null,chunk__38038_38042,i__38040_38044);goog.dom.classes.toggle(node_38045,class$);
{
var G__38046 = seq__38037_38041;
var G__38047 = chunk__38038_38042;
var G__38048 = count__38039_38043;
var G__38049 = (i__38040_38044 + 1);
seq__38037_38041 = G__38046;
chunk__38038_38042 = G__38047;
count__38039_38043 = G__38048;
i__38040_38044 = G__38049;
continue;
}
} else
{var temp__4092__auto___38050 = cljs.core.seq.call(null,seq__38037_38041);if(temp__4092__auto___38050)
{var seq__38037_38051__$1 = temp__4092__auto___38050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38037_38051__$1))
{var c__4148__auto___38052 = cljs.core.chunk_first.call(null,seq__38037_38051__$1);{
var G__38053 = cljs.core.chunk_rest.call(null,seq__38037_38051__$1);
var G__38054 = c__4148__auto___38052;
var G__38055 = cljs.core.count.call(null,c__4148__auto___38052);
var G__38056 = 0;
seq__38037_38041 = G__38053;
chunk__38038_38042 = G__38054;
count__38039_38043 = G__38055;
i__38040_38044 = G__38056;
continue;
}
} else
{var node_38057 = cljs.core.first.call(null,seq__38037_38051__$1);goog.dom.classes.toggle(node_38057,class$);
{
var G__38058 = cljs.core.next.call(null,seq__38037_38051__$1);
var G__38059 = null;
var G__38060 = 0;
var G__38061 = 0;
seq__38037_38041 = G__38058;
chunk__38038_38042 = G__38059;
count__38039_38043 = G__38060;
i__38040_38044 = G__38061;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38070__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38066_38071 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38067_38072 = null;var count__38068_38073 = 0;var i__38069_38074 = 0;while(true){
if((i__38069_38074 < count__38068_38073))
{var node_38075 = cljs.core._nth.call(null,chunk__38067_38072,i__38069_38074);goog.dom.classes.set(node_38075,classes_38070__$1);
{
var G__38076 = seq__38066_38071;
var G__38077 = chunk__38067_38072;
var G__38078 = count__38068_38073;
var G__38079 = (i__38069_38074 + 1);
seq__38066_38071 = G__38076;
chunk__38067_38072 = G__38077;
count__38068_38073 = G__38078;
i__38069_38074 = G__38079;
continue;
}
} else
{var temp__4092__auto___38080 = cljs.core.seq.call(null,seq__38066_38071);if(temp__4092__auto___38080)
{var seq__38066_38081__$1 = temp__4092__auto___38080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38066_38081__$1))
{var c__4148__auto___38082 = cljs.core.chunk_first.call(null,seq__38066_38081__$1);{
var G__38083 = cljs.core.chunk_rest.call(null,seq__38066_38081__$1);
var G__38084 = c__4148__auto___38082;
var G__38085 = cljs.core.count.call(null,c__4148__auto___38082);
var G__38086 = 0;
seq__38066_38071 = G__38083;
chunk__38067_38072 = G__38084;
count__38068_38073 = G__38085;
i__38069_38074 = G__38086;
continue;
}
} else
{var node_38087 = cljs.core.first.call(null,seq__38066_38081__$1);goog.dom.classes.set(node_38087,classes_38070__$1);
{
var G__38088 = cljs.core.next.call(null,seq__38066_38081__$1);
var G__38089 = null;
var G__38090 = 0;
var G__38091 = 0;
seq__38066_38071 = G__38088;
chunk__38067_38072 = G__38089;
count__38068_38073 = G__38090;
i__38069_38074 = G__38091;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38096_38100 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38097_38101 = null;var count__38098_38102 = 0;var i__38099_38103 = 0;while(true){
if((i__38099_38103 < count__38098_38102))
{var node_38104 = cljs.core._nth.call(null,chunk__38097_38101,i__38099_38103);goog.dom.setTextContent(node_38104,value);
{
var G__38105 = seq__38096_38100;
var G__38106 = chunk__38097_38101;
var G__38107 = count__38098_38102;
var G__38108 = (i__38099_38103 + 1);
seq__38096_38100 = G__38105;
chunk__38097_38101 = G__38106;
count__38098_38102 = G__38107;
i__38099_38103 = G__38108;
continue;
}
} else
{var temp__4092__auto___38109 = cljs.core.seq.call(null,seq__38096_38100);if(temp__4092__auto___38109)
{var seq__38096_38110__$1 = temp__4092__auto___38109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38096_38110__$1))
{var c__4148__auto___38111 = cljs.core.chunk_first.call(null,seq__38096_38110__$1);{
var G__38112 = cljs.core.chunk_rest.call(null,seq__38096_38110__$1);
var G__38113 = c__4148__auto___38111;
var G__38114 = cljs.core.count.call(null,c__4148__auto___38111);
var G__38115 = 0;
seq__38096_38100 = G__38112;
chunk__38097_38101 = G__38113;
count__38098_38102 = G__38114;
i__38099_38103 = G__38115;
continue;
}
} else
{var node_38116 = cljs.core.first.call(null,seq__38096_38110__$1);goog.dom.setTextContent(node_38116,value);
{
var G__38117 = cljs.core.next.call(null,seq__38096_38110__$1);
var G__38118 = null;
var G__38119 = 0;
var G__38120 = 0;
seq__38096_38100 = G__38117;
chunk__38097_38101 = G__38118;
count__38098_38102 = G__38119;
i__38099_38103 = G__38120;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38125_38129 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38126_38130 = null;var count__38127_38131 = 0;var i__38128_38132 = 0;while(true){
if((i__38128_38132 < count__38127_38131))
{var node_38133 = cljs.core._nth.call(null,chunk__38126_38130,i__38128_38132);goog.dom.forms.setValue(node_38133,value);
{
var G__38134 = seq__38125_38129;
var G__38135 = chunk__38126_38130;
var G__38136 = count__38127_38131;
var G__38137 = (i__38128_38132 + 1);
seq__38125_38129 = G__38134;
chunk__38126_38130 = G__38135;
count__38127_38131 = G__38136;
i__38128_38132 = G__38137;
continue;
}
} else
{var temp__4092__auto___38138 = cljs.core.seq.call(null,seq__38125_38129);if(temp__4092__auto___38138)
{var seq__38125_38139__$1 = temp__4092__auto___38138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38125_38139__$1))
{var c__4148__auto___38140 = cljs.core.chunk_first.call(null,seq__38125_38139__$1);{
var G__38141 = cljs.core.chunk_rest.call(null,seq__38125_38139__$1);
var G__38142 = c__4148__auto___38140;
var G__38143 = cljs.core.count.call(null,c__4148__auto___38140);
var G__38144 = 0;
seq__38125_38129 = G__38141;
chunk__38126_38130 = G__38142;
count__38127_38131 = G__38143;
i__38128_38132 = G__38144;
continue;
}
} else
{var node_38145 = cljs.core.first.call(null,seq__38125_38139__$1);goog.dom.forms.setValue(node_38145,value);
{
var G__38146 = cljs.core.next.call(null,seq__38125_38139__$1);
var G__38147 = null;
var G__38148 = 0;
var G__38149 = 0;
seq__38125_38129 = G__38146;
chunk__38126_38130 = G__38147;
count__38127_38131 = G__38148;
i__38128_38132 = G__38149;
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
{var value_38160 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38156_38161 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38157_38162 = null;var count__38158_38163 = 0;var i__38159_38164 = 0;while(true){
if((i__38159_38164 < count__38158_38163))
{var node_38165 = cljs.core._nth.call(null,chunk__38157_38162,i__38159_38164);node_38165.innerHTML = value_38160;
{
var G__38166 = seq__38156_38161;
var G__38167 = chunk__38157_38162;
var G__38168 = count__38158_38163;
var G__38169 = (i__38159_38164 + 1);
seq__38156_38161 = G__38166;
chunk__38157_38162 = G__38167;
count__38158_38163 = G__38168;
i__38159_38164 = G__38169;
continue;
}
} else
{var temp__4092__auto___38170 = cljs.core.seq.call(null,seq__38156_38161);if(temp__4092__auto___38170)
{var seq__38156_38171__$1 = temp__4092__auto___38170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38156_38171__$1))
{var c__4148__auto___38172 = cljs.core.chunk_first.call(null,seq__38156_38171__$1);{
var G__38173 = cljs.core.chunk_rest.call(null,seq__38156_38171__$1);
var G__38174 = c__4148__auto___38172;
var G__38175 = cljs.core.count.call(null,c__4148__auto___38172);
var G__38176 = 0;
seq__38156_38161 = G__38173;
chunk__38157_38162 = G__38174;
count__38158_38163 = G__38175;
i__38159_38164 = G__38176;
continue;
}
} else
{var node_38177 = cljs.core.first.call(null,seq__38156_38171__$1);node_38177.innerHTML = value_38160;
{
var G__38178 = cljs.core.next.call(null,seq__38156_38171__$1);
var G__38179 = null;
var G__38180 = 0;
var G__38181 = 0;
seq__38156_38161 = G__38178;
chunk__38157_38162 = G__38179;
count__38158_38163 = G__38180;
i__38159_38164 = G__38181;
continue;
}
}
} else
{}
}
break;
}
}catch (e38155){if((e38155 instanceof Error))
{var e_38182 = e38155;domina.replace_children_BANG_.call(null,content,value_38160);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38155;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38189_38193 = cljs.core.seq.call(null,children);var chunk__38190_38194 = null;var count__38191_38195 = 0;var i__38192_38196 = 0;while(true){
if((i__38192_38196 < count__38191_38195))
{var child_38197 = cljs.core._nth.call(null,chunk__38190_38194,i__38192_38196);frag.appendChild(child_38197);
{
var G__38198 = seq__38189_38193;
var G__38199 = chunk__38190_38194;
var G__38200 = count__38191_38195;
var G__38201 = (i__38192_38196 + 1);
seq__38189_38193 = G__38198;
chunk__38190_38194 = G__38199;
count__38191_38195 = G__38200;
i__38192_38196 = G__38201;
continue;
}
} else
{var temp__4092__auto___38202 = cljs.core.seq.call(null,seq__38189_38193);if(temp__4092__auto___38202)
{var seq__38189_38203__$1 = temp__4092__auto___38202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38189_38203__$1))
{var c__4148__auto___38204 = cljs.core.chunk_first.call(null,seq__38189_38203__$1);{
var G__38205 = cljs.core.chunk_rest.call(null,seq__38189_38203__$1);
var G__38206 = c__4148__auto___38204;
var G__38207 = cljs.core.count.call(null,c__4148__auto___38204);
var G__38208 = 0;
seq__38189_38193 = G__38205;
chunk__38190_38194 = G__38206;
count__38191_38195 = G__38207;
i__38192_38196 = G__38208;
continue;
}
} else
{var child_38209 = cljs.core.first.call(null,seq__38189_38203__$1);frag.appendChild(child_38209);
{
var G__38210 = cljs.core.next.call(null,seq__38189_38203__$1);
var G__38211 = null;
var G__38212 = 0;
var G__38213 = 0;
seq__38189_38193 = G__38210;
chunk__38190_38194 = G__38211;
count__38191_38195 = G__38212;
i__38192_38196 = G__38213;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38183_SHARP_,p2__38184_SHARP_){return f.call(null,p1__38183_SHARP_,p2__38184_SHARP_);
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
{if((function (){var G__38215 = list_thing;if(G__38215)
{var bit__4050__auto__ = (G__38215.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38215.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38215.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38215);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38215);
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
{if((function (){var G__38216 = content;if(G__38216)
{var bit__4050__auto__ = (G__38216.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38216.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38216.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38216);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38216);
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
{if((function (){var G__38217 = content;if(G__38217)
{var bit__4050__auto__ = (G__38217.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38217.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38217.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38217);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38217);
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
