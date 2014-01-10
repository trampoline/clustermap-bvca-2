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
var opt_wrapper_32860 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_32861 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_32862 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_32861,table_section_wrapper_32861,opt_wrapper_32860,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_32862,table_section_wrapper_32861,cell_wrapper_32862,opt_wrapper_32860,table_section_wrapper_32861,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_32861]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__32867 = cljs.core.seq.call(null,tbody);var chunk__32868 = null;var count__32869 = 0;var i__32870 = 0;while(true){
if((i__32870 < count__32869))
{var child = cljs.core._nth.call(null,chunk__32868,i__32870);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32871 = seq__32867;
var G__32872 = chunk__32868;
var G__32873 = count__32869;
var G__32874 = (i__32870 + 1);
seq__32867 = G__32871;
chunk__32868 = G__32872;
count__32869 = G__32873;
i__32870 = G__32874;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32867);if(temp__4092__auto__)
{var seq__32867__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32867__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32867__$1);{
var G__32875 = cljs.core.chunk_rest.call(null,seq__32867__$1);
var G__32876 = c__4148__auto__;
var G__32877 = cljs.core.count.call(null,c__4148__auto__);
var G__32878 = 0;
seq__32867 = G__32875;
chunk__32868 = G__32876;
count__32869 = G__32877;
i__32870 = G__32878;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__32867__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32879 = cljs.core.next.call(null,seq__32867__$1);
var G__32880 = null;
var G__32881 = 0;
var G__32882 = 0;
seq__32867 = G__32879;
chunk__32868 = G__32880;
count__32869 = G__32881;
i__32870 = G__32882;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__32884 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__32884,0,null);var start_wrap = cljs.core.nth.call(null,vec__32884,1,null);var end_wrap = cljs.core.nth.call(null,vec__32884,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__32885 = wrapper.lastChild;
var G__32886 = (level - 1);
wrapper = G__32885;
level = G__32886;
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
domina.DomContent = (function (){var obj32888 = {};return obj32888;
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
log_debug.cljs$lang$applyTo = (function (arglist__32889){
var mesg = cljs.core.seq(arglist__32889);
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
log.cljs$lang$applyTo = (function (arglist__32890){
var mesg = cljs.core.seq(arglist__32890);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32891){
var contents = cljs.core.seq(arglist__32891);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__32892_SHARP_){return p1__32892_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__32893_SHARP_,p2__32894_SHARP_){return goog.dom.insertChildAt(p1__32893_SHARP_,p2__32894_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32896_SHARP_,p2__32895_SHARP_){return goog.dom.insertSiblingBefore(p2__32895_SHARP_,p1__32896_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32898_SHARP_,p2__32897_SHARP_){return goog.dom.insertSiblingAfter(p2__32897_SHARP_,p1__32898_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__32900_SHARP_,p2__32899_SHARP_){return goog.dom.replaceNode(p2__32899_SHARP_,p1__32900_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32905_32909 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32906_32910 = null;var count__32907_32911 = 0;var i__32908_32912 = 0;while(true){
if((i__32908_32912 < count__32907_32911))
{var n_32913 = cljs.core._nth.call(null,chunk__32906_32910,i__32908_32912);goog.style.setStyle(n_32913,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32914 = seq__32905_32909;
var G__32915 = chunk__32906_32910;
var G__32916 = count__32907_32911;
var G__32917 = (i__32908_32912 + 1);
seq__32905_32909 = G__32914;
chunk__32906_32910 = G__32915;
count__32907_32911 = G__32916;
i__32908_32912 = G__32917;
continue;
}
} else
{var temp__4092__auto___32918 = cljs.core.seq.call(null,seq__32905_32909);if(temp__4092__auto___32918)
{var seq__32905_32919__$1 = temp__4092__auto___32918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32905_32919__$1))
{var c__4148__auto___32920 = cljs.core.chunk_first.call(null,seq__32905_32919__$1);{
var G__32921 = cljs.core.chunk_rest.call(null,seq__32905_32919__$1);
var G__32922 = c__4148__auto___32920;
var G__32923 = cljs.core.count.call(null,c__4148__auto___32920);
var G__32924 = 0;
seq__32905_32909 = G__32921;
chunk__32906_32910 = G__32922;
count__32907_32911 = G__32923;
i__32908_32912 = G__32924;
continue;
}
} else
{var n_32925 = cljs.core.first.call(null,seq__32905_32919__$1);goog.style.setStyle(n_32925,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32926 = cljs.core.next.call(null,seq__32905_32919__$1);
var G__32927 = null;
var G__32928 = 0;
var G__32929 = 0;
seq__32905_32909 = G__32926;
chunk__32906_32910 = G__32927;
count__32907_32911 = G__32928;
i__32908_32912 = G__32929;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32930){
var content = cljs.core.first(arglist__32930);
arglist__32930 = cljs.core.next(arglist__32930);
var name = cljs.core.first(arglist__32930);
var value = cljs.core.rest(arglist__32930);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32935_32939 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32936_32940 = null;var count__32937_32941 = 0;var i__32938_32942 = 0;while(true){
if((i__32938_32942 < count__32937_32941))
{var n_32943 = cljs.core._nth.call(null,chunk__32936_32940,i__32938_32942);n_32943.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32944 = seq__32935_32939;
var G__32945 = chunk__32936_32940;
var G__32946 = count__32937_32941;
var G__32947 = (i__32938_32942 + 1);
seq__32935_32939 = G__32944;
chunk__32936_32940 = G__32945;
count__32937_32941 = G__32946;
i__32938_32942 = G__32947;
continue;
}
} else
{var temp__4092__auto___32948 = cljs.core.seq.call(null,seq__32935_32939);if(temp__4092__auto___32948)
{var seq__32935_32949__$1 = temp__4092__auto___32948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32935_32949__$1))
{var c__4148__auto___32950 = cljs.core.chunk_first.call(null,seq__32935_32949__$1);{
var G__32951 = cljs.core.chunk_rest.call(null,seq__32935_32949__$1);
var G__32952 = c__4148__auto___32950;
var G__32953 = cljs.core.count.call(null,c__4148__auto___32950);
var G__32954 = 0;
seq__32935_32939 = G__32951;
chunk__32936_32940 = G__32952;
count__32937_32941 = G__32953;
i__32938_32942 = G__32954;
continue;
}
} else
{var n_32955 = cljs.core.first.call(null,seq__32935_32949__$1);n_32955.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32956 = cljs.core.next.call(null,seq__32935_32949__$1);
var G__32957 = null;
var G__32958 = 0;
var G__32959 = 0;
seq__32935_32939 = G__32956;
chunk__32936_32940 = G__32957;
count__32937_32941 = G__32958;
i__32938_32942 = G__32959;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32960){
var content = cljs.core.first(arglist__32960);
arglist__32960 = cljs.core.next(arglist__32960);
var name = cljs.core.first(arglist__32960);
var value = cljs.core.rest(arglist__32960);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32965_32969 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32966_32970 = null;var count__32967_32971 = 0;var i__32968_32972 = 0;while(true){
if((i__32968_32972 < count__32967_32971))
{var n_32973 = cljs.core._nth.call(null,chunk__32966_32970,i__32968_32972);n_32973.removeAttribute(cljs.core.name.call(null,name));
{
var G__32974 = seq__32965_32969;
var G__32975 = chunk__32966_32970;
var G__32976 = count__32967_32971;
var G__32977 = (i__32968_32972 + 1);
seq__32965_32969 = G__32974;
chunk__32966_32970 = G__32975;
count__32967_32971 = G__32976;
i__32968_32972 = G__32977;
continue;
}
} else
{var temp__4092__auto___32978 = cljs.core.seq.call(null,seq__32965_32969);if(temp__4092__auto___32978)
{var seq__32965_32979__$1 = temp__4092__auto___32978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32965_32979__$1))
{var c__4148__auto___32980 = cljs.core.chunk_first.call(null,seq__32965_32979__$1);{
var G__32981 = cljs.core.chunk_rest.call(null,seq__32965_32979__$1);
var G__32982 = c__4148__auto___32980;
var G__32983 = cljs.core.count.call(null,c__4148__auto___32980);
var G__32984 = 0;
seq__32965_32969 = G__32981;
chunk__32966_32970 = G__32982;
count__32967_32971 = G__32983;
i__32968_32972 = G__32984;
continue;
}
} else
{var n_32985 = cljs.core.first.call(null,seq__32965_32979__$1);n_32985.removeAttribute(cljs.core.name.call(null,name));
{
var G__32986 = cljs.core.next.call(null,seq__32965_32979__$1);
var G__32987 = null;
var G__32988 = 0;
var G__32989 = 0;
seq__32965_32969 = G__32986;
chunk__32966_32970 = G__32987;
count__32967_32971 = G__32988;
i__32968_32972 = G__32989;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32991 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32991,0,null);var v = cljs.core.nth.call(null,vec__32991,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__32992_SHARP_){var attr = attrs__$1.item(p1__32992_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32999_33005 = cljs.core.seq.call(null,styles);var chunk__33000_33006 = null;var count__33001_33007 = 0;var i__33002_33008 = 0;while(true){
if((i__33002_33008 < count__33001_33007))
{var vec__33003_33009 = cljs.core._nth.call(null,chunk__33000_33006,i__33002_33008);var name_33010 = cljs.core.nth.call(null,vec__33003_33009,0,null);var value_33011 = cljs.core.nth.call(null,vec__33003_33009,1,null);domina.set_style_BANG_.call(null,content,name_33010,value_33011);
{
var G__33012 = seq__32999_33005;
var G__33013 = chunk__33000_33006;
var G__33014 = count__33001_33007;
var G__33015 = (i__33002_33008 + 1);
seq__32999_33005 = G__33012;
chunk__33000_33006 = G__33013;
count__33001_33007 = G__33014;
i__33002_33008 = G__33015;
continue;
}
} else
{var temp__4092__auto___33016 = cljs.core.seq.call(null,seq__32999_33005);if(temp__4092__auto___33016)
{var seq__32999_33017__$1 = temp__4092__auto___33016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32999_33017__$1))
{var c__4148__auto___33018 = cljs.core.chunk_first.call(null,seq__32999_33017__$1);{
var G__33019 = cljs.core.chunk_rest.call(null,seq__32999_33017__$1);
var G__33020 = c__4148__auto___33018;
var G__33021 = cljs.core.count.call(null,c__4148__auto___33018);
var G__33022 = 0;
seq__32999_33005 = G__33019;
chunk__33000_33006 = G__33020;
count__33001_33007 = G__33021;
i__33002_33008 = G__33022;
continue;
}
} else
{var vec__33004_33023 = cljs.core.first.call(null,seq__32999_33017__$1);var name_33024 = cljs.core.nth.call(null,vec__33004_33023,0,null);var value_33025 = cljs.core.nth.call(null,vec__33004_33023,1,null);domina.set_style_BANG_.call(null,content,name_33024,value_33025);
{
var G__33026 = cljs.core.next.call(null,seq__32999_33017__$1);
var G__33027 = null;
var G__33028 = 0;
var G__33029 = 0;
seq__32999_33005 = G__33026;
chunk__33000_33006 = G__33027;
count__33001_33007 = G__33028;
i__33002_33008 = G__33029;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33036_33042 = cljs.core.seq.call(null,attrs);var chunk__33037_33043 = null;var count__33038_33044 = 0;var i__33039_33045 = 0;while(true){
if((i__33039_33045 < count__33038_33044))
{var vec__33040_33046 = cljs.core._nth.call(null,chunk__33037_33043,i__33039_33045);var name_33047 = cljs.core.nth.call(null,vec__33040_33046,0,null);var value_33048 = cljs.core.nth.call(null,vec__33040_33046,1,null);domina.set_attr_BANG_.call(null,content,name_33047,value_33048);
{
var G__33049 = seq__33036_33042;
var G__33050 = chunk__33037_33043;
var G__33051 = count__33038_33044;
var G__33052 = (i__33039_33045 + 1);
seq__33036_33042 = G__33049;
chunk__33037_33043 = G__33050;
count__33038_33044 = G__33051;
i__33039_33045 = G__33052;
continue;
}
} else
{var temp__4092__auto___33053 = cljs.core.seq.call(null,seq__33036_33042);if(temp__4092__auto___33053)
{var seq__33036_33054__$1 = temp__4092__auto___33053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33036_33054__$1))
{var c__4148__auto___33055 = cljs.core.chunk_first.call(null,seq__33036_33054__$1);{
var G__33056 = cljs.core.chunk_rest.call(null,seq__33036_33054__$1);
var G__33057 = c__4148__auto___33055;
var G__33058 = cljs.core.count.call(null,c__4148__auto___33055);
var G__33059 = 0;
seq__33036_33042 = G__33056;
chunk__33037_33043 = G__33057;
count__33038_33044 = G__33058;
i__33039_33045 = G__33059;
continue;
}
} else
{var vec__33041_33060 = cljs.core.first.call(null,seq__33036_33054__$1);var name_33061 = cljs.core.nth.call(null,vec__33041_33060,0,null);var value_33062 = cljs.core.nth.call(null,vec__33041_33060,1,null);domina.set_attr_BANG_.call(null,content,name_33061,value_33062);
{
var G__33063 = cljs.core.next.call(null,seq__33036_33054__$1);
var G__33064 = null;
var G__33065 = 0;
var G__33066 = 0;
seq__33036_33042 = G__33063;
chunk__33037_33043 = G__33064;
count__33038_33044 = G__33065;
i__33039_33045 = G__33066;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33071_33075 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33072_33076 = null;var count__33073_33077 = 0;var i__33074_33078 = 0;while(true){
if((i__33074_33078 < count__33073_33077))
{var node_33079 = cljs.core._nth.call(null,chunk__33072_33076,i__33074_33078);goog.dom.classes.add(node_33079,class$);
{
var G__33080 = seq__33071_33075;
var G__33081 = chunk__33072_33076;
var G__33082 = count__33073_33077;
var G__33083 = (i__33074_33078 + 1);
seq__33071_33075 = G__33080;
chunk__33072_33076 = G__33081;
count__33073_33077 = G__33082;
i__33074_33078 = G__33083;
continue;
}
} else
{var temp__4092__auto___33084 = cljs.core.seq.call(null,seq__33071_33075);if(temp__4092__auto___33084)
{var seq__33071_33085__$1 = temp__4092__auto___33084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33071_33085__$1))
{var c__4148__auto___33086 = cljs.core.chunk_first.call(null,seq__33071_33085__$1);{
var G__33087 = cljs.core.chunk_rest.call(null,seq__33071_33085__$1);
var G__33088 = c__4148__auto___33086;
var G__33089 = cljs.core.count.call(null,c__4148__auto___33086);
var G__33090 = 0;
seq__33071_33075 = G__33087;
chunk__33072_33076 = G__33088;
count__33073_33077 = G__33089;
i__33074_33078 = G__33090;
continue;
}
} else
{var node_33091 = cljs.core.first.call(null,seq__33071_33085__$1);goog.dom.classes.add(node_33091,class$);
{
var G__33092 = cljs.core.next.call(null,seq__33071_33085__$1);
var G__33093 = null;
var G__33094 = 0;
var G__33095 = 0;
seq__33071_33075 = G__33092;
chunk__33072_33076 = G__33093;
count__33073_33077 = G__33094;
i__33074_33078 = G__33095;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33100_33104 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33101_33105 = null;var count__33102_33106 = 0;var i__33103_33107 = 0;while(true){
if((i__33103_33107 < count__33102_33106))
{var node_33108 = cljs.core._nth.call(null,chunk__33101_33105,i__33103_33107);goog.dom.classes.remove(node_33108,class$);
{
var G__33109 = seq__33100_33104;
var G__33110 = chunk__33101_33105;
var G__33111 = count__33102_33106;
var G__33112 = (i__33103_33107 + 1);
seq__33100_33104 = G__33109;
chunk__33101_33105 = G__33110;
count__33102_33106 = G__33111;
i__33103_33107 = G__33112;
continue;
}
} else
{var temp__4092__auto___33113 = cljs.core.seq.call(null,seq__33100_33104);if(temp__4092__auto___33113)
{var seq__33100_33114__$1 = temp__4092__auto___33113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33100_33114__$1))
{var c__4148__auto___33115 = cljs.core.chunk_first.call(null,seq__33100_33114__$1);{
var G__33116 = cljs.core.chunk_rest.call(null,seq__33100_33114__$1);
var G__33117 = c__4148__auto___33115;
var G__33118 = cljs.core.count.call(null,c__4148__auto___33115);
var G__33119 = 0;
seq__33100_33104 = G__33116;
chunk__33101_33105 = G__33117;
count__33102_33106 = G__33118;
i__33103_33107 = G__33119;
continue;
}
} else
{var node_33120 = cljs.core.first.call(null,seq__33100_33114__$1);goog.dom.classes.remove(node_33120,class$);
{
var G__33121 = cljs.core.next.call(null,seq__33100_33114__$1);
var G__33122 = null;
var G__33123 = 0;
var G__33124 = 0;
seq__33100_33104 = G__33121;
chunk__33101_33105 = G__33122;
count__33102_33106 = G__33123;
i__33103_33107 = G__33124;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33129_33133 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33130_33134 = null;var count__33131_33135 = 0;var i__33132_33136 = 0;while(true){
if((i__33132_33136 < count__33131_33135))
{var node_33137 = cljs.core._nth.call(null,chunk__33130_33134,i__33132_33136);goog.dom.classes.toggle(node_33137,class$);
{
var G__33138 = seq__33129_33133;
var G__33139 = chunk__33130_33134;
var G__33140 = count__33131_33135;
var G__33141 = (i__33132_33136 + 1);
seq__33129_33133 = G__33138;
chunk__33130_33134 = G__33139;
count__33131_33135 = G__33140;
i__33132_33136 = G__33141;
continue;
}
} else
{var temp__4092__auto___33142 = cljs.core.seq.call(null,seq__33129_33133);if(temp__4092__auto___33142)
{var seq__33129_33143__$1 = temp__4092__auto___33142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33129_33143__$1))
{var c__4148__auto___33144 = cljs.core.chunk_first.call(null,seq__33129_33143__$1);{
var G__33145 = cljs.core.chunk_rest.call(null,seq__33129_33143__$1);
var G__33146 = c__4148__auto___33144;
var G__33147 = cljs.core.count.call(null,c__4148__auto___33144);
var G__33148 = 0;
seq__33129_33133 = G__33145;
chunk__33130_33134 = G__33146;
count__33131_33135 = G__33147;
i__33132_33136 = G__33148;
continue;
}
} else
{var node_33149 = cljs.core.first.call(null,seq__33129_33143__$1);goog.dom.classes.toggle(node_33149,class$);
{
var G__33150 = cljs.core.next.call(null,seq__33129_33143__$1);
var G__33151 = null;
var G__33152 = 0;
var G__33153 = 0;
seq__33129_33133 = G__33150;
chunk__33130_33134 = G__33151;
count__33131_33135 = G__33152;
i__33132_33136 = G__33153;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33162__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33158_33163 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33159_33164 = null;var count__33160_33165 = 0;var i__33161_33166 = 0;while(true){
if((i__33161_33166 < count__33160_33165))
{var node_33167 = cljs.core._nth.call(null,chunk__33159_33164,i__33161_33166);goog.dom.classes.set(node_33167,classes_33162__$1);
{
var G__33168 = seq__33158_33163;
var G__33169 = chunk__33159_33164;
var G__33170 = count__33160_33165;
var G__33171 = (i__33161_33166 + 1);
seq__33158_33163 = G__33168;
chunk__33159_33164 = G__33169;
count__33160_33165 = G__33170;
i__33161_33166 = G__33171;
continue;
}
} else
{var temp__4092__auto___33172 = cljs.core.seq.call(null,seq__33158_33163);if(temp__4092__auto___33172)
{var seq__33158_33173__$1 = temp__4092__auto___33172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33158_33173__$1))
{var c__4148__auto___33174 = cljs.core.chunk_first.call(null,seq__33158_33173__$1);{
var G__33175 = cljs.core.chunk_rest.call(null,seq__33158_33173__$1);
var G__33176 = c__4148__auto___33174;
var G__33177 = cljs.core.count.call(null,c__4148__auto___33174);
var G__33178 = 0;
seq__33158_33163 = G__33175;
chunk__33159_33164 = G__33176;
count__33160_33165 = G__33177;
i__33161_33166 = G__33178;
continue;
}
} else
{var node_33179 = cljs.core.first.call(null,seq__33158_33173__$1);goog.dom.classes.set(node_33179,classes_33162__$1);
{
var G__33180 = cljs.core.next.call(null,seq__33158_33173__$1);
var G__33181 = null;
var G__33182 = 0;
var G__33183 = 0;
seq__33158_33163 = G__33180;
chunk__33159_33164 = G__33181;
count__33160_33165 = G__33182;
i__33161_33166 = G__33183;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33188_33192 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33189_33193 = null;var count__33190_33194 = 0;var i__33191_33195 = 0;while(true){
if((i__33191_33195 < count__33190_33194))
{var node_33196 = cljs.core._nth.call(null,chunk__33189_33193,i__33191_33195);goog.dom.setTextContent(node_33196,value);
{
var G__33197 = seq__33188_33192;
var G__33198 = chunk__33189_33193;
var G__33199 = count__33190_33194;
var G__33200 = (i__33191_33195 + 1);
seq__33188_33192 = G__33197;
chunk__33189_33193 = G__33198;
count__33190_33194 = G__33199;
i__33191_33195 = G__33200;
continue;
}
} else
{var temp__4092__auto___33201 = cljs.core.seq.call(null,seq__33188_33192);if(temp__4092__auto___33201)
{var seq__33188_33202__$1 = temp__4092__auto___33201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33188_33202__$1))
{var c__4148__auto___33203 = cljs.core.chunk_first.call(null,seq__33188_33202__$1);{
var G__33204 = cljs.core.chunk_rest.call(null,seq__33188_33202__$1);
var G__33205 = c__4148__auto___33203;
var G__33206 = cljs.core.count.call(null,c__4148__auto___33203);
var G__33207 = 0;
seq__33188_33192 = G__33204;
chunk__33189_33193 = G__33205;
count__33190_33194 = G__33206;
i__33191_33195 = G__33207;
continue;
}
} else
{var node_33208 = cljs.core.first.call(null,seq__33188_33202__$1);goog.dom.setTextContent(node_33208,value);
{
var G__33209 = cljs.core.next.call(null,seq__33188_33202__$1);
var G__33210 = null;
var G__33211 = 0;
var G__33212 = 0;
seq__33188_33192 = G__33209;
chunk__33189_33193 = G__33210;
count__33190_33194 = G__33211;
i__33191_33195 = G__33212;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33217_33221 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33218_33222 = null;var count__33219_33223 = 0;var i__33220_33224 = 0;while(true){
if((i__33220_33224 < count__33219_33223))
{var node_33225 = cljs.core._nth.call(null,chunk__33218_33222,i__33220_33224);goog.dom.forms.setValue(node_33225,value);
{
var G__33226 = seq__33217_33221;
var G__33227 = chunk__33218_33222;
var G__33228 = count__33219_33223;
var G__33229 = (i__33220_33224 + 1);
seq__33217_33221 = G__33226;
chunk__33218_33222 = G__33227;
count__33219_33223 = G__33228;
i__33220_33224 = G__33229;
continue;
}
} else
{var temp__4092__auto___33230 = cljs.core.seq.call(null,seq__33217_33221);if(temp__4092__auto___33230)
{var seq__33217_33231__$1 = temp__4092__auto___33230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33217_33231__$1))
{var c__4148__auto___33232 = cljs.core.chunk_first.call(null,seq__33217_33231__$1);{
var G__33233 = cljs.core.chunk_rest.call(null,seq__33217_33231__$1);
var G__33234 = c__4148__auto___33232;
var G__33235 = cljs.core.count.call(null,c__4148__auto___33232);
var G__33236 = 0;
seq__33217_33221 = G__33233;
chunk__33218_33222 = G__33234;
count__33219_33223 = G__33235;
i__33220_33224 = G__33236;
continue;
}
} else
{var node_33237 = cljs.core.first.call(null,seq__33217_33231__$1);goog.dom.forms.setValue(node_33237,value);
{
var G__33238 = cljs.core.next.call(null,seq__33217_33231__$1);
var G__33239 = null;
var G__33240 = 0;
var G__33241 = 0;
seq__33217_33221 = G__33238;
chunk__33218_33222 = G__33239;
count__33219_33223 = G__33240;
i__33220_33224 = G__33241;
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
{var value_33252 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33248_33253 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33249_33254 = null;var count__33250_33255 = 0;var i__33251_33256 = 0;while(true){
if((i__33251_33256 < count__33250_33255))
{var node_33257 = cljs.core._nth.call(null,chunk__33249_33254,i__33251_33256);node_33257.innerHTML = value_33252;
{
var G__33258 = seq__33248_33253;
var G__33259 = chunk__33249_33254;
var G__33260 = count__33250_33255;
var G__33261 = (i__33251_33256 + 1);
seq__33248_33253 = G__33258;
chunk__33249_33254 = G__33259;
count__33250_33255 = G__33260;
i__33251_33256 = G__33261;
continue;
}
} else
{var temp__4092__auto___33262 = cljs.core.seq.call(null,seq__33248_33253);if(temp__4092__auto___33262)
{var seq__33248_33263__$1 = temp__4092__auto___33262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33248_33263__$1))
{var c__4148__auto___33264 = cljs.core.chunk_first.call(null,seq__33248_33263__$1);{
var G__33265 = cljs.core.chunk_rest.call(null,seq__33248_33263__$1);
var G__33266 = c__4148__auto___33264;
var G__33267 = cljs.core.count.call(null,c__4148__auto___33264);
var G__33268 = 0;
seq__33248_33253 = G__33265;
chunk__33249_33254 = G__33266;
count__33250_33255 = G__33267;
i__33251_33256 = G__33268;
continue;
}
} else
{var node_33269 = cljs.core.first.call(null,seq__33248_33263__$1);node_33269.innerHTML = value_33252;
{
var G__33270 = cljs.core.next.call(null,seq__33248_33263__$1);
var G__33271 = null;
var G__33272 = 0;
var G__33273 = 0;
seq__33248_33253 = G__33270;
chunk__33249_33254 = G__33271;
count__33250_33255 = G__33272;
i__33251_33256 = G__33273;
continue;
}
}
} else
{}
}
break;
}
}catch (e33247){if((e33247 instanceof Error))
{var e_33274 = e33247;domina.replace_children_BANG_.call(null,content,value_33252);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33247;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33281_33285 = cljs.core.seq.call(null,children);var chunk__33282_33286 = null;var count__33283_33287 = 0;var i__33284_33288 = 0;while(true){
if((i__33284_33288 < count__33283_33287))
{var child_33289 = cljs.core._nth.call(null,chunk__33282_33286,i__33284_33288);frag.appendChild(child_33289);
{
var G__33290 = seq__33281_33285;
var G__33291 = chunk__33282_33286;
var G__33292 = count__33283_33287;
var G__33293 = (i__33284_33288 + 1);
seq__33281_33285 = G__33290;
chunk__33282_33286 = G__33291;
count__33283_33287 = G__33292;
i__33284_33288 = G__33293;
continue;
}
} else
{var temp__4092__auto___33294 = cljs.core.seq.call(null,seq__33281_33285);if(temp__4092__auto___33294)
{var seq__33281_33295__$1 = temp__4092__auto___33294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33281_33295__$1))
{var c__4148__auto___33296 = cljs.core.chunk_first.call(null,seq__33281_33295__$1);{
var G__33297 = cljs.core.chunk_rest.call(null,seq__33281_33295__$1);
var G__33298 = c__4148__auto___33296;
var G__33299 = cljs.core.count.call(null,c__4148__auto___33296);
var G__33300 = 0;
seq__33281_33285 = G__33297;
chunk__33282_33286 = G__33298;
count__33283_33287 = G__33299;
i__33284_33288 = G__33300;
continue;
}
} else
{var child_33301 = cljs.core.first.call(null,seq__33281_33295__$1);frag.appendChild(child_33301);
{
var G__33302 = cljs.core.next.call(null,seq__33281_33295__$1);
var G__33303 = null;
var G__33304 = 0;
var G__33305 = 0;
seq__33281_33285 = G__33302;
chunk__33282_33286 = G__33303;
count__33283_33287 = G__33304;
i__33284_33288 = G__33305;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__33275_SHARP_,p2__33276_SHARP_){return f.call(null,p1__33275_SHARP_,p2__33276_SHARP_);
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
{if((function (){var G__33307 = list_thing;if(G__33307)
{var bit__4050__auto__ = (G__33307.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33307.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33307.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33307);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33307);
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
{if((function (){var G__33308 = content;if(G__33308)
{var bit__4050__auto__ = (G__33308.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33308.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33308.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33308);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33308);
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
{if((function (){var G__33309 = content;if(G__33309)
{var bit__4050__auto__ = (G__33309.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33309.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33309.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33309);
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
